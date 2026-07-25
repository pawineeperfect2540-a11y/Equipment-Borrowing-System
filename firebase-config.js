// ==============================================================
// วางค่า Firebase config ของโปรเจกต์ "perfectads-deposit" ตรงนี้
// (ค่าเดียวกับที่ใช้ใน deposit-form-app / cod-recon)
// เข้าไปคัดลอกได้จาก Firebase Console > Project settings > General
// หรือคัดลอกจากไฟล์ firebase-config.js ของ repo เดิมที่เคยตั้งค่าไว้แล้ว
// ==============================================================
const firebaseConfig = {
  apiKey: "PASTE_YOUR_API_KEY",
  authDomain: "perfectads-deposit.firebaseapp.com",
  projectId: "perfectads-deposit",
  storageBucket: "perfectads-deposit.appspot.com",
  messagingSenderId: "PASTE_YOUR_SENDER_ID",
  appId: "PASTE_YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
