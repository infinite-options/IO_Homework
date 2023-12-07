// Working Print Statement
// import 'package:flutter/material.dart';
// void main() {
//   // runApp(const MainApp());
//   print("Test1");
// }


import 'package:flutter/material.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'models/auth_model.dart';
import 'models/test_algo_model.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();


  // originally resided in google_services.json
  // From Firebase Project Settings

  await Firebase.initializeApp(
    options: const FirebaseOptions(apiKey: "AIzaSyCGFXb1p2XyjE-o7N6eUBcnW5WqAVPhWMY", authDomain: "meetmeup-69349.firebaseapp.com",
  projectId: "meetmeup-69349",
  storageBucket: "meetmeup-69349.appspot.com",
  messagingSenderId: "466541803518",
  appId: "1:466541803518:web:a52a46ffc2d25f7a4632af")
  );
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Firebase Auth and Firestore',
      home: FirebaseDataDisplay(),
    );
  }
}

class FirebaseDataDisplay extends StatefulWidget {
  @override
  _FirebaseDataDisplayState createState() => _FirebaseDataDisplayState();
}

class _FirebaseDataDisplayState extends State<FirebaseDataDisplay> {
  //Intiate instance
  final auth_model = new AuthModel();
  final test_algo_model = new functionTest();
  String? userDataDisplay;

  @override
  void initState() {
    super.initState();
    auth_model.signInAndFetchData(); 
    functionTest().testprint();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('AuthModel algorithm testing'),
      ),
      body: Center(
        child: userDataDisplay == null? CircularProgressIndicator() : Text(userDataDisplay!),
      ),
    );
  }
}
