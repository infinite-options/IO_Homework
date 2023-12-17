import 'package:cloud_firestore/cloud_firestore.dart';

class UsersRecord {
  final String uid;  
  final int age;  
  final int prefer_age_min;
  final int prefer_age_max;
  final List<String> interests;  
  //final List<String> openTo;  
  final GeoPoint location;  
  final int prefer_distance;
  final String height;  
  final int prefer_height_min;
  final String kids; 
  final int prefer_kids; 
  final String sexuality;
  //final List<String> openTo;

  UsersRecord({
    required this.uid,
    required this.age,
    required this.prefer_age_min,
    required this.prefer_age_max,
    required this.interests,
    //required this.openTo,
    required this.location,
    required this.prefer_distance,
    required this.height,
    required this.prefer_height_min,
    required this.kids,
    required this.prefer_kids,
    required this.sexuality,
    //required this.openTo,
  });

  factory UsersRecord.fromSnapshot(DocumentSnapshot doc) {
    Map<String, dynamic> data = doc.data() as Map<String, dynamic>;
    return UsersRecord(
      uid: data['uid'] ?? '',
      age: data['age'] ?? 0,
      prefer_age_min: data['prefer_age_min'] ?? 0,
      prefer_age_max: data['prefer_age_max'] ?? 0,
      interests: List<String>.from(data['user_interests'] ?? []),
      //openTo: List<String>.from(data['openTo'] ?? []),
      location: data['location'] ?? GeoPoint(0, 0),
      prefer_distance: data['prefer_distance'] ?? 0,
      height: data['height'] ?? [],
      prefer_height_min: data['prefer_height_min'] ?? 0,
      kids: data['kids'] ?? [],
      prefer_kids: data['prefer_kids'] ?? 0,
      sexuality: data['sexuality'] ?? '',
      //openTo: List<String>.from(data['openTo'] ?? []),
    );
  }
  
  static Future<UsersRecord> getDocumentOnce(DocumentReference docRef) async {
  DocumentSnapshot docSnapshot = await docRef.get();    
  return UsersRecord.fromSnapshot(docSnapshot);
  }
}