// Automatic FlutterFlow imports
//import '/backend/backend.dart';
//import '/backend/schema/structs/index.dart';
//import '/flutter_flow/flutter_flow_theme.dart';
//import '/flutter_flow/flutter_flow_util.dart';
//import '/custom_code/actions/index.dart'; // Imports other custom actions
//import '/flutter_flow/custom_functions.dart'; // Imports custom functions
//import 'package:flutter/material.dart';
import '/models/UsersRecord.dart';
import 'package:cloud_firestore/cloud_firestore.dart';

// Begin custom action code
// DO NOT REMOVE OR MODIFY THE CODE ABOVE!

// Import for math
import 'dart:math';

//Name of Custom Action and Variable declaration
Future<List<UsersRecord>> finalMatchingAlgo(
    String authUid,
    int preferMinAge,
    int preferMaxAge,
    int preferHeight,
    List<String> authUserInterests,
    GeoPoint authUserLocation,
    int searchRadius,
    int authKids,
    String sexuality,
    List<String> openTo
    ) async {
  // This is where we are getting all the data of the users that we will match
  // Get a reference to the Firestore database
  final firestore = FirebaseFirestore.instance;
  final collectionRef = firestore.collection('users');
  Query query = collectionRef;

  final querySnapshot = await query.get();

  // Use Future.wait() to await all the Future<UsersRecord> in the list.  Basically Maps the users to the recordlist
  final recordsList = await Future.wait(
    querySnapshot.docs.map((doc) => UsersRecord.getDocumentOnce(doc.reference)),
  );
  // Convert QuerySnapshot to List of UserRecords using map function
  List<UsersRecord> docs = recordsList.where((usersRecord) => usersRecord.uid != authUid).toList();
  // Now recordsList contains all the user references excluding the authenticated user
// Print each UsersRecord to the terminal
  // Apply the matching algorithm to filter the list
  return getUsersThatMatch(
      docs,
      authUid,
      preferMinAge,
      preferMaxAge,
      preferHeight,
      authUserInterests,
      authUserLocation,
      searchRadius,
      authKids, //prefered number of kids
      sexuality,
      openTo
      );
}

// declaration of all variables:  Return type followed by function inputs
List<UsersRecord> getUsersThatMatch(
    List<UsersRecord> userData,
    String authUid,
    int prefer_min_age,
    int prefer_max_age,
    int prefer_height,
    List<String> authUserInterests,
    GeoPoint authUserLocation,
    int searchRadius,
    int authKids, //prefered number of kids
    String sexuality,
    List<String> openTo
    )

// code starts here


{
  if (userData.isEmpty) {
    return userData;
  }

  // create a backup  type - variable = data
  List<UsersRecord> backUpData = List.from(userData);
  bool matched = false;

  //-------------------------------------------------------------------------------------------------------------------
  //matches by sexual preference

  // remove documents that satisfy the condition ie where it is false (it = if sexual preference is in the openTo list)
  // if it is in the list then TRUE => Change to FALSE to keep in the list
  // if it is NOT in the list then FALSE => Change to True to remove it
  // If the Auth User has not set openToList then the function removes all users and userData gets reset to backUpData
  // doc represents every user in the userData

  userData.removeWhere((doc) =>
      !(checkSexualPreference(openTo, doc.sexuality)) ||
      openTo.isEmpty);

  if (userData.isEmpty) {
    userData = List.from(backUpData);
  } else {
    backUpData = List.from(userData);
    print('After SP user count: ${userData.length}');
  }

  //-------------------------------------------------------------------------------------------------------------------
  // distance
  while (!matched) {
    userData.removeWhere((doc) =>
        // checkDistance is a function with two inputs and calculateDistance is called within the function
        !(checkDistance(
            searchRadius,
            calculateDistance(authUserLocation, doc.location)
                .round()
                .toInt())));

    if (userData.isEmpty) {
      matched = false;
      userData = List.from(backUpData);
      searchRadius = searchRadius * 2;
    } else {
      matched = true;
      print('After searchRadius user count: ${userData.length}');
    }
  }

  matched = false;
  backUpData = List.from(userData);
  // print('Intial user count: ${userData.length}');

//----------------------------------------------------------------------------------------------------------------
  //height
  while (!matched) {
    userData.removeWhere((doc) =>
        !(checkHeight(prefer_height, convertHeightToInches(doc.height))));

    if (userData.isEmpty) {
      matched = false;
      userData = List.from(backUpData);
      prefer_height = prefer_height - 2;
    } else {
      matched = true;
    }
  }

  matched = false;
  backUpData = List.from(userData);
  print('After height user count: ${userData.length}');

//---------------------------------------------------------------------------------------------------
  //Age
  while (!matched) {
    userData.removeWhere(
        (doc) => !(checkAge(prefer_min_age, prefer_max_age, doc.age)));

    if (userData.isEmpty) {
      matched = false;
      userData = List.from(backUpData);
      prefer_min_age = prefer_min_age - 2;
      prefer_max_age = prefer_max_age + 2;
    } else {
      matched = true;
    }
  }

  matched = false;
  backUpData = List.from(userData);
  print('After Age user count: ${userData.length}');



//------------------------------------------------------------------------------------------------------------
//   //Interests //Not checking for empty
  userData.removeWhere(
      (doc) => !(checkInterests(authUserInterests, doc.interests)));

  if (userData.isEmpty) {
    userData = List.from(backUpData);
    print('After Interests user count: ${userData.length}');
  }

// //--------------------------------------------------------------------------------------------------------------------
//   //Kids
  while (!matched) {
    userData.removeWhere((doc) => !(checkKids(authKids, parseKids(doc.kids))));

    if (userData.isEmpty) {
      matched = false;
      userData = List.from(backUpData);
      authKids = authKids + 1;
    } else {
      matched = true;
      print('After Kids user count: ${userData.length}');
    }
  }

  //-------------------------------------------------------------------------------------------------------------

  for (var user in userData) {
  print('Matched User: ${user.uid}, Age: ${user.age}, Height: ${user.height}, Interests: ${user.interests}, SP: ${user.sexuality}, Kids: ${user.kids}, Lattitude: ${user.location.latitude}, Longitude:  ${user.location.longitude}');
}
  return userData;
}

// Start of Functions

double calculateDistance(GeoPoint point1, GeoPoint point2) {
  const double earthRadius = 3959; // Radius of the Earth in miles

  double lat1 = _degreesToRadians(point1!.latitude);
  double lon1 = _degreesToRadians(point1!.longitude);
  double lat2 = _degreesToRadians(point2!.latitude);
  double lon2 = _degreesToRadians(point2!.longitude);

  double dLat = lat2 - lat1;
  double dLon = lon2 - lon1;

  double a = sin(dLat / 2) * sin(dLat / 2) +
      cos(lat1) * cos(lat2) * sin(dLon / 2) * sin(dLon / 2);
  double c = 2 * atan2(sqrt(a), sqrt(1 - a));

  double distance = earthRadius * c;
  print("Distance $distance");
  return distance;
}

bool checkDistance(int r, int d) {
  if (d <= r) {
    return true;
  } else {
    return false;
  }
}

double _degreesToRadians(double degrees) {
  return degrees * pi / 180;
}

bool checkAge(int start, int end, int userAge) {
  if (start < 18) {
    start = 18;
  }
  if (start < userAge && userAge < end) {
    return true;
  } else {
    return false;
  }
}

bool checkHeight(int height1, int height2) {
  if (height1 <= height2) {
    return true;
  } else {
    return false;
  }
}

int convertHeightToInches(String height) {
  if (height == "Not Entered") {
    return 0;
  } else if (height == "< 5 ft") {
    return 60;
  } else if (height == "> 6ft 6in") {
    height = "6ft 7in";

    List<String> parts = height.split(' ');

    int feet = int.parse(parts[0].replaceAll('ft', ''));
    int inches = int.parse(parts[1].replaceAll('in', ''));

    int totalInches = feet * 12 + inches;

    return totalInches;
  } else {
    List<String> parts = height.split(' ');

    int feet = int.parse(parts[0].replaceAll('ft', ''));
    int inches = int.parse(parts[1].replaceAll('in', ''));

    int totalInches = feet * 12 + inches;

    return totalInches;
  }
}

// Change this please List1 = User , List 2 = Matching to other users
bool checkInterests(List<String> list1, List<String> list2) {
  if (list2.isEmpty){
    return true;
  }
  //print(list1);
  for (String element in list1) {
    if (list2.contains(element)) {
      return true;
    }
  }
  //print("HEREEEEE-------");
  //print(list2);
  return false;
}

bool checkKids(int kids1, int kids2) {
  if (kids1 >= kids2) {
    return true;
  } else {
    return false;
  }
}

int parseKids(String kids) {
  if (kids == "Not Entered") {
    return 0;
  } else if (kids == "10+") {
    return 10;
  } else {
    return int.parse(kids);
  }
}

bool checkSexualPreference(List<String> openTo, String sexuality) {
  if (openTo.contains(sexuality)) {
    return true;
  } else {
    return false;
  }
}