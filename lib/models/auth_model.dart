import 'package:firebase_auth/firebase_auth.dart';
import 'package:cloud_firestore/cloud_firestore.dart';

class AuthModel {
  final FirebaseAuth _auth = FirebaseAuth.instance;

  Future<void> signInAndFetchData() async {
    try {
      UserCredential userCredential = await _auth.signInWithEmailAndPassword(
        email: "test-ab@gmail.com", password: "12345678");
      User? user = userCredential.user;

      if (user!=null) {
        print("Signed in as ${user.uid}");

        DocumentSnapshot userData = await FirebaseFirestore.instance.collection('users').doc(user.uid).get();
        if (userData.exists) {
          print("User data: ${user.uid}"); //Add the rest of the details required
        }

        else {
          print("Error no additional user data found for user");
        }
      }
    } catch(e) {
      print("Error signing in or Fetching user data");
    }
  }
}