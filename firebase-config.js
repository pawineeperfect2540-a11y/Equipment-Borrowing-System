// ==============================================================
// วางค่า Firebase config ของโปรเจกต์ "perfectads-deposit" ตรงนี้
// (ค่าเดียวกับที่ใช้ใน deposit-form-app / cod-recon)
// เข้าไปคัดลอกได้จาก Firebase Console > Project settings > General
// หรือคัดลอกจากไฟล์ firebase-config.js ของ repo เดิมที่เคยตั้งค่าไว้แล้ว
// ==============================================================
const firebaseConfig = {
  apiKey: "AIzaSyD3xP2lbqerKjzXeAaOCbKUJ8ospHCRSlw",
  authDomain: "perfectads-deposit.firebaseapp.com",
  projectId: "perfectads-deposit",
  storageBucket: "perfectads-deposit.firebasestorage.app",
  messagingSenderId: "825880055779",
  appId: "1:825880055779:web:9c1d3dd57533bacbd69ad6"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
