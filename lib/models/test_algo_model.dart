
//Create a class
// class functionTest{

//   Future<void> testprint() async{
//     try{
//     print('Test1');
//   }
//   catch(e) {
//     print('test2');
//   }
//   }
// }

import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';

class UserService {
  final FirebaseFirestore _firestore = FirebaseFirestore.instance;

  Future<Map<String, dynamic>?> fetchUserData(User user) async {
    try {
      DocumentSnapshot userData = await _firestore.collection('users').doc(user.uid).get();
      if (userData.exists) {
        return userData.data() as Map<String, dynamic>;
      } else {
        print("No additional user data found for user");
        return null;
      }
    } catch (e) {
      print("Error fetching user data: $e");
      return null;
    }
  }
}