import 'package:cloud_firestore/cloud_firestore.dart';

class UsersRecord {
  final String uid;  
  final int age;  
  final List<String> interests;  
  final GeoPoint location;  
  final String height;  
  final String kids;  
  final String sexuality;

  UsersRecord({
    required this.uid,
    required this.age,
    required this.interests,
    required this.location,
    required this.height,
    required this.kids,
    required this.sexuality,
  });

  factory UsersRecord.fromSnapshot(DocumentSnapshot doc) {
    Map<String, dynamic> data = doc.data() as Map<String, dynamic>;
    return UsersRecord(
      uid: data['uid'] ?? '',
      age: data['age'] ?? 0,
      interests: List<String>.from(data['user_interests'] ?? []),
      location: data['location'] ?? GeoPoint(0, 0),
      height: data['height'] ?? [],
      kids: data['kids'] ?? [],
      sexuality: data['sexuality'] ?? '',
    );
  }
  
  static Future<UsersRecord> getDocumentOnce(DocumentReference docRef) async {
  DocumentSnapshot docSnapshot = await docRef.get();    
  return UsersRecord.fromSnapshot(docSnapshot);
  }
}
