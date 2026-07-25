// ==============================================================
// ระบบยืม-คืนอุปกรณ์ — Perfect Group Intertrading
// ==============================================================

const DEFAULT_EMPLOYEES = [
  {
    "name": "ภานพ อธิกโญธิน",
    "nick": "เกม",
    "dept": "เจ้าของ",
    "position": "เจ้าของ"
  },
  {
    "name": "ดณยา อธิกโญธิน",
    "nick": "ออม",
    "dept": "เจ้าของ",
    "position": "เจ้าของ"
  },
  {
    "name": "อำไพ กุระจินดา",
    "nick": "เกต",
    "dept": "แผนก QC",
    "position": "QC"
  },
  {
    "name": "สุนิสา นุ่นสังข์",
    "nick": "โคล่า",
    "dept": "แผนก QC",
    "position": "QC"
  },
  {
    "name": "นาดิยา รอบคอบ",
    "nick": "ไมลา",
    "dept": "แผนกคอนเทนต์",
    "position": "คอนเท็นต์"
  },
  {
    "name": "นิชาภา ศรีวิชัย",
    "nick": "น้ำค้าง",
    "dept": "แผนกคอนเทนต์",
    "position": "คอนเท็นต์"
  },
  {
    "name": "สุนาณี มะเซ็ง",
    "nick": "นานี",
    "dept": "แผนกคอนเทนต์",
    "position": "คอนเท็นต์"
  },
  {
    "name": "ปิ่นประภา ศรีสุรัตน์",
    "nick": "มะปราง",
    "dept": "แผนกคอนเทนต์",
    "position": "คอนเทนต์"
  },
  {
    "name": "ชลธิชา ฉุยฉาย",
    "nick": "น้ำชา",
    "dept": "แผนกคอนเทนต์",
    "position": "คอนเทนต์"
  },
  {
    "name": "ปัทมา ผิวไทย",
    "nick": "ปัท",
    "dept": "แผนกคอนเทนต์",
    "position": "คอนเท็นต์"
  },
  {
    "name": "สุภาวรรณ พรหมทอง",
    "nick": "แอน",
    "dept": "แผนกจัดซื้อ",
    "position": "เจ้าหน้าที่จัดซื้อ"
  },
  {
    "name": "จิระศักดิ์ ชูเกื้อ",
    "nick": "บอล",
    "dept": "แผนกช่างตัดผ้า",
    "position": "ช่างตัดผ้า"
  },
  {
    "name": "ขวัญฤดี ไมตรีจร",
    "nick": "น้ำ",
    "dept": "แผนกช่างตัดผ้า",
    "position": "ช่างตัดผ้า"
  },
  {
    "name": "กฤติยา เกี้ยวสันเทียะ",
    "nick": "กี้",
    "dept": "แผนกช่างตัดผ้า",
    "position": "ช่างตัดผ้า"
  },
  {
    "name": "จิรวัฒน์ ชูเกื้อ",
    "nick": "บอม",
    "dept": "แผนกช่างตัดผ้า",
    "position": "ช่างตัดผ้า"
  },
  {
    "name": "เหมภัทร สุขมาก",
    "nick": "เขม",
    "dept": "แผนกช่างตัดผ้า",
    "position": "ช่างตัด"
  },
  {
    "name": "เลอลักษณ์ จันทรทิพย์",
    "nick": "แก้ม",
    "dept": "แผนกช่างตัดผ้า",
    "position": "ช่างตัดผ้า"
  },
  {
    "name": "นายจิรพงษ์ ล่ำนวล",
    "nick": "ซิน",
    "dept": "แผนกช่างตัดผ้า",
    "position": "ช่างตัดผ้า"
  },
  {
    "name": "พิมวดี เกาะกลาง",
    "nick": "มุก",
    "dept": "แผนกช่างตัดผ้า",
    "position": "ช่างตัดผ้า"
  },
  {
    "name": "ประสิทธิ ศิริวารินทร์",
    "nick": "สิทธิ์",
    "dept": "แผนกช่างเชื่อม",
    "position": "ช่างเชื่อม"
  },
  {
    "name": "ชรินทร์ธร บิลยะลา",
    "nick": "เอ",
    "dept": "แผนกช่างเย็บผ้า",
    "position": "ช่างเย็บผ้า"
  },
  {
    "name": "สุชาภัสร์ กรมศิลป",
    "nick": "นาเดียร์",
    "dept": "แผนกช่างเย็บผ้า",
    "position": "ช่างเย็บผ้า"
  },
  {
    "name": "กัลยานี ช่วยพัฒน์",
    "nick": "แหวน",
    "dept": "แผนกช่างเย็บผ้า",
    "position": "ช่างเย็บผ้า"
  },
  {
    "name": "แก้วทิพย์ บุญยก",
    "nick": "แป๋ว",
    "dept": "แผนกช่างเย็บผ้า",
    "position": "ช่างเย็บผ้า"
  },
  {
    "name": "มาเรียม โกบแม็ง",
    "nick": "เรียม",
    "dept": "แผนกช่างเย็บผ้า",
    "position": "ช่างเย็บผ้า"
  },
  {
    "name": "ปาริฉัตร สุขมาก",
    "nick": "เอียด",
    "dept": "แผนกช่างเย็บผ้า",
    "position": "ช่างเย็บผ้า"
  },
  {
    "name": "พันทิพา นารอด",
    "nick": "ภา",
    "dept": "แผนกช่างเย็บผ้า",
    "position": "ช่างเย็บผ้า"
  },
  {
    "name": "นฤมล ชูอ่อน",
    "nick": "แม็ค",
    "dept": "แผนกช่างเย็บผ้า",
    "position": "ช่างเย็บผ้า"
  },
  {
    "name": "ฮายาตี หามะ",
    "nick": "ฮายา",
    "dept": "แผนกช่างเย็บผ้า",
    "position": "ช่างเย็บผ้า"
  },
  {
    "name": "วรรณา ไชยงาม",
    "nick": "วรรณ",
    "dept": "แผนกช่างเย็บผ้า",
    "position": "ช่างเย็บผ้า"
  },
  {
    "name": "สุนิสา ชาปาน",
    "nick": "หมิง",
    "dept": "แผนกช่างเย็บผ้า",
    "position": "ช่างเย็บผ้า"
  },
  {
    "name": "อามีนะ ทิพย์ร่วง",
    "nick": "อาร์",
    "dept": "แผนกช่างเย็บผ้า",
    "position": "ช่างเย็บผ้า"
  },
  {
    "name": "อัชลี วงศ์สุวรรณ",
    "nick": "มายด์",
    "dept": "แผนกธุรการโรงงาน",
    "position": "เจ้าหน้าที่ธุรการโรงงาน"
  },
  {
    "name": "อรรถกร ดวงสุวรรณ",
    "nick": "ปอ",
    "dept": "แผนกธุรการโรงงาน",
    "position": "เจ้าหน้าที่ธุรการโรงงาน"
  },
  {
    "name": "วิภาดา เส็นอาลามีน",
    "nick": "รุสนี",
    "dept": "แผนกฝ่ายขาย",
    "position": "Sale Admin"
  },
  {
    "name": "ประวิทย์ เศวตสุทธิสิริกุล",
    "nick": "พีช",
    "dept": "แผนกฝ่ายขาย",
    "position": "เซลล์แอดมิน"
  },
  {
    "name": "ปัณฑิตา แซ่หลี",
    "nick": "ดรีม",
    "dept": "แผนกฝ่ายขาย",
    "position": "Sale Admin"
  },
  {
    "name": "โสภา วิบูลอรรถ",
    "nick": "กุ๊กกิ๊ก",
    "dept": "แผนกฝ่ายขาย",
    "position": "Sale Admin"
  },
  {
    "name": "จุฬาลักษณ์ แซ่ภู่",
    "nick": "ใบหม่อน",
    "dept": "แผนกฝ่ายขาย",
    "position": "Sale Admin"
  },
  {
    "name": "ภัคจิรา คงเคว็จ",
    "nick": "ฟ้า",
    "dept": "แผนกฝ่ายขาย",
    "position": "Sale Admin"
  },
  {
    "name": "มานิตา รัตนบัณฑิตย์",
    "nick": "กุ๊บกิ๊บ",
    "dept": "แผนกฝ่ายขาย",
    "position": "Sale Admin"
  },
  {
    "name": "สุนทราภรณ์ ลดาวรรษ์",
    "nick": "อิ๊บ",
    "dept": "แผนกสำนักงาน",
    "position": "เลขานุการผู้บริหาร"
  },
  {
    "name": "ภาวิณี คำแก้ว",
    "nick": "เนส",
    "dept": "แผนกสำนักงาน",
    "position": "เจ้าหน้าที่ดูแลและจัดการโฆษณาออนไลน์"
  },
  {
    "name": "กนกพร หนูชุม",
    "nick": "วีม",
    "dept": "แผนกสำนักงาน",
    "position": "หัวหน้าวิจัยและพัฒนาผลิตภัณฑ์"
  },
  {
    "name": "เพ็ชรณภาวรรณ ดีมาก",
    "nick": "เพ็ญ",
    "dept": "แผนกสำนักงาน",
    "position": "ผู้ช่วยผู้บริหาร"
  },
  {
    "name": "นพรุจ จินาวงศ์",
    "nick": "แบงค์",
    "dept": "แผนกสำนักงาน",
    "position": "ขับรถ"
  },
  {
    "name": "ณญาดา หล๊ะหมัน",
    "nick": "ฟิล์ม",
    "dept": "แผนกเจ้าหน้าที่ดูแลแพลตฟอร์ม",
    "position": "เจ้าหน้าดูแลแพลตฟอร์ม"
  },
  {
    "name": "ภัทรวดี ศิริ",
    "nick": "อีฟ",
    "dept": "แผนกเทเลเซลล์",
    "position": "Telesale"
  },
  {
    "name": "อูซานา เหย็บหนุด",
    "nick": "หนูนา",
    "dept": "แผนกเทเลเซลล์",
    "position": "Telesale"
  },
  {
    "name": "นันท์นภัส สุจิตภัทร",
    "nick": "เอิง",
    "dept": "แผนกแพ็คสินค้า",
    "position": "แพ็คสินค้า"
  }
];

let EMPLOYEES = []; // โหลดจาก Firestore ตอนเปิดเว็บ (seed ครั้งแรกจาก DEFAULT_EMPLOYEES)

const LOGO_B64 = "data:image/png;base64,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";


let itemCounter = 0;
let records = [];
let currentFilter = "all";
let currentSearch = "";
let selectedDocType = "asset"; // "asset" | "pc"
let currentUser = null; // Firebase Auth user (HR) — null = ยังไม่ login

// -------------------- INIT --------------------
document.addEventListener("DOMContentLoaded", () => {
  initEmployeeAutocomplete();
  initPositionAutocomplete();
  loadEmployees();
  document.getElementById("addEmpBtn").addEventListener("click", addEmployeeRecord);
  document.getElementById("empManageSearch").addEventListener("input", renderEmployeeManageList);
  document.getElementById("dateOut").value = todayStr();
  addItemRow();
  document.getElementById("addItemBtn").addEventListener("click", addItemRow);
  document.getElementById("submitNewBtn").addEventListener("click", submitNewLoan);
  initTabs();
  initSignaturePad("sigEmpOut");
  initSignaturePad("sigHrOut");
  document.querySelectorAll("[data-clear]").forEach(btn=>{
    btn.addEventListener("click", ()=>clearSig(btn.getAttribute("data-clear")));
  });
  document.getElementById("searchBox").addEventListener("input", (e)=>{
    currentSearch = e.target.value.trim().toLowerCase();
    renderList();
  });
  document.querySelectorAll(".chip").forEach(chip=>{
    chip.addEventListener("click", ()=>{
      document.querySelectorAll(".chip").forEach(c=>c.classList.remove("active"));
      chip.classList.add("active");
      currentFilter = chip.getAttribute("data-filter");
      renderList();
    });
  });
  document.getElementById("modalBg").addEventListener("click", (e)=>{
    if(e.target.id === "modalBg") closeModal();
  });
  document.getElementById("loginModalBg").addEventListener("click", (e)=>{
    if(e.target.id === "loginModalBg") closeLoginModal();
  });
  document.querySelectorAll(".doctype-chip").forEach(chip=>{
    chip.addEventListener("click", ()=>{
      document.querySelectorAll(".doctype-chip").forEach(c=>c.classList.remove("active"));
      chip.classList.add("active");
      selectedDocType = chip.getAttribute("data-doctype");
    });
  });
  auth.onAuthStateChanged(user=>{
    currentUser = user;
    updateAuthUI();
    renderEmployeeManageList();
  });
  loadRecords();
});

function todayStr(){
  const d = new Date();
  return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");
}

// -------------------- HR AUTH (Firebase Authentication) --------------------
function updateAuthUI(){
  const btn = document.getElementById("authBtn");
  if(currentUser){
    btn.textContent = "✓ HR: " + currentUser.email;
    btn.classList.add("logged-in");
    btn.onclick = openLoginModal;
    document.getElementById("loginLoggedInView").style.display = "block";
    document.getElementById("loginFormView").style.display = "none";
    document.getElementById("loginCurrentEmail").textContent = currentUser.email;
  }else{
    btn.textContent = "🔒 เข้าสู่ระบบ HR";
    btn.classList.remove("logged-in");
    document.getElementById("loginLoggedInView").style.display = "none";
    document.getElementById("loginFormView").style.display = "block";
  }
}

function openLoginModal(){
  document.getElementById("loginError").style.display = "none";
  document.getElementById("loginModalBg").classList.add("show");
}
function closeLoginModal(){
  document.getElementById("loginModalBg").classList.remove("show");
}

async function hrLogin(){
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;
  const errBox = document.getElementById("loginError");
  errBox.style.display = "none";
  if(!email || !password){
    errBox.textContent = "กรุณากรอกอีเมลและรหัสผ่าน";
    errBox.style.display = "block";
    return;
  }
  const btn = document.getElementById("loginSubmitBtn");
  btn.disabled = true;
  btn.textContent = "กำลังเข้าสู่ระบบ...";
  try{
    await auth.signInWithEmailAndPassword(email, password);
    document.getElementById("loginPassword").value = "";
    showToast("เข้าสู่ระบบ HR สำเร็จ ✓");
    closeLoginModal();
  }catch(err){
    console.error(err);
    errBox.textContent = describeAuthError(err);
    errBox.style.display = "block";
  }finally{
    btn.disabled = false;
    btn.textContent = "เข้าสู่ระบบ";
  }
}

function describeAuthError(err){
  const code = err && err.code;
  const map = {
    "auth/invalid-api-key": "Firebase config ยังไม่ถูกต้อง — เช็คว่ากรอกค่าใน firebase-config.js ครบและถูกต้องหรือยัง",
    "auth/api-key-not-valid.-please-pass-a-valid-api-key.": "Firebase config ยังไม่ถูกต้อง — เช็คค่า apiKey ใน firebase-config.js",
    "auth/operation-not-allowed": "ยังไม่ได้เปิดใช้งาน Email/Password ใน Firebase Console (Authentication → Sign-in method)",
    "auth/user-not-found": "ไม่พบบัญชีนี้ในระบบ — เช็คว่าสร้าง user นี้ใน Firebase Console → Authentication → Users แล้วหรือยัง",
    "auth/wrong-password": "รหัสผ่านไม่ถูกต้อง",
    "auth/invalid-credential": "อีเมลหรือรหัสผ่านไม่ถูกต้อง หรือยังไม่ได้สร้างบัญชีนี้ใน Firebase Console → Authentication → Users",
    "auth/invalid-email": "รูปแบบอีเมลไม่ถูกต้อง",
    "auth/user-disabled": "บัญชีนี้ถูกระงับการใช้งานไว้ใน Firebase Console",
    "auth/too-many-requests": "เข้าสู่ระบบผิดหลายครั้งเกินไป กรุณารอสักครู่แล้วลองใหม่",
    "auth/network-request-failed": "เชื่อมต่อ Firebase ไม่ได้ เช็คอินเทอร์เน็ต",
  };
  if(code && map[code]) return `เข้าสู่ระบบไม่สำเร็จ: ${map[code]}`;
  return `เข้าสู่ระบบไม่สำเร็จ: ${code || (err && err.message) || "ไม่ทราบสาเหตุ"}`;
}

async function hrLogout(){
  await auth.signOut();
  showToast("ออกจากระบบแล้ว");
  closeLoginModal();
}

function initTabs(){
  document.querySelectorAll(".tabbtn").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      document.querySelectorAll(".tabbtn").forEach(b=>b.classList.remove("active"));
      btn.classList.add("active");
      const tab = btn.getAttribute("data-tab");
      document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
      document.getElementById("page-"+tab).classList.add("active");
    });
  });
}

function initEmployeeAutocomplete(){
  const input = document.getElementById("empInput");
  const list = document.getElementById("empSuggest");
  let highlighted = -1;

  function highlightMatch(text, q){
    const idx = text.toLowerCase().indexOf(q.toLowerCase());
    if(idx === -1) return escapeHtml(text);
    return escapeHtml(text.slice(0,idx)) + "<mark>" + escapeHtml(text.slice(idx,idx+q.length)) + "</mark>" + escapeHtml(text.slice(idx+q.length));
  }

  function renderSuggestions(q){
    highlighted = -1;
    const ql = q.toLowerCase();
    const matches = q
      ? EMPLOYEES.filter(e => e.name.toLowerCase().includes(ql) || e.nick.toLowerCase().includes(ql)).slice(0,8)
      : EMPLOYEES.slice(0,200); // ว่าง = โชว์ทั้งหมดเหมือน dropdown
    if(matches.length === 0){
      list.innerHTML = `<div class="ac-empty">ไม่พบชื่อนี้ในระบบ — พิมพ์ต่อได้ ระบบจะใช้ชื่อที่พิมพ์</div>`;
    }else{
      list.innerHTML = matches.map((e,i)=>`
        <div class="ac-item" data-idx="${i}" onclick="selectEmployee('${e.name.replace(/'/g,"\\'")}','${e.nick.replace(/'/g,"\\'")}','${(e.position||"").replace(/'/g,"\\'")}')">
          <div class="ac-name">${q ? highlightMatch(e.name,q) : escapeHtml(e.name)} <span style="font-weight:400;color:var(--text-soft)">(${q ? highlightMatch(e.nick,q) : escapeHtml(e.nick)})</span></div>
          <div class="ac-dept">${escapeHtml(e.dept)}${e.position ? " · "+escapeHtml(e.position) : ""}</div>
        </div>
      `).join("");
    }
    list.classList.add("show");
  }

  input.addEventListener("input", ()=>renderSuggestions(input.value.trim()));
  input.addEventListener("focus", ()=>renderSuggestions(input.value.trim()));
  input.addEventListener("click", ()=>renderSuggestions(input.value.trim()));
  document.addEventListener("click", (e)=>{
    if(!e.target.closest("#empInput") && !e.target.closest("#empSuggest")) list.classList.remove("show");
  });
}

function initPositionAutocomplete(){
  const input = document.getElementById("empPosition");
  const list = document.getElementById("posSuggest");

  function highlightMatch(text, q){
    const idx = text.toLowerCase().indexOf(q.toLowerCase());
    if(idx === -1) return escapeHtml(text);
    return escapeHtml(text.slice(0,idx)) + "<mark>" + escapeHtml(text.slice(idx,idx+q.length)) + "</mark>" + escapeHtml(text.slice(idx+q.length));
  }

  function uniquePositions(){
    const set = new Set();
    EMPLOYEES.forEach(e=>{ if(e.position) set.add(e.position); });
    return Array.from(set).sort((a,b)=>a.localeCompare(b,"th"));
  }

  function renderSuggestions(q){
    const all = uniquePositions();
    const ql = q.toLowerCase();
    const matches = q ? all.filter(p=>p.toLowerCase().includes(ql)) : all;
    if(matches.length === 0){
      list.innerHTML = `<div class="ac-empty">ไม่พบตำแหน่งนี้ — พิมพ์ต่อได้ ระบบจะใช้ข้อความที่พิมพ์</div>`;
    }else{
      list.innerHTML = matches.map(p=>`
        <div class="ac-item" onclick="selectPosition('${p.replace(/'/g,"\\'")}')">
          <div class="ac-name">${q ? highlightMatch(p,q) : escapeHtml(p)}</div>
        </div>
      `).join("");
    }
    list.classList.add("show");
  }

  input.addEventListener("input", ()=>renderSuggestions(input.value.trim()));
  input.addEventListener("focus", ()=>renderSuggestions(input.value.trim()));
  input.addEventListener("click", ()=>renderSuggestions(input.value.trim()));
  document.addEventListener("click", (e)=>{
    if(!e.target.closest("#empPosition") && !e.target.closest("#posSuggest")) list.classList.remove("show");
  });
}

function selectPosition(position){
  document.getElementById("empPosition").value = position;
  document.getElementById("posSuggest").classList.remove("show");
}

function selectEmployee(name, nick, position){
  document.getElementById("empInput").value = `${name} (${nick})`;
  document.getElementById("empSuggest").classList.remove("show");
  if(position){
    document.getElementById("empPosition").value = position;
  }
}

// -------------------- EMPLOYEE MANAGEMENT (Firestore) --------------------
async function loadEmployees(){
  try{
    const snap = await db.collection("employees").get();
    if(snap.empty){
      // ครั้งแรก: seed รายชื่อเริ่มต้นเข้า Firestore
      const batch = db.batch();
      DEFAULT_EMPLOYEES.forEach(emp=>{
        const ref = db.collection("employees").doc();
        batch.set(ref, { name: emp.name, nick: emp.nick, dept: emp.dept || "", position: emp.position || "", createdAt: Date.now() });
      });
      await batch.commit();
      return loadEmployees();
    }
    EMPLOYEES = snap.docs.map(d=>({ id: d.id, ...d.data() }));
    EMPLOYEES.sort((a,b)=> (a.dept||"").localeCompare(b.dept||"","th") || a.name.localeCompare(b.name,"th"));
  }catch(err){
    console.error(err);
    EMPLOYEES = DEFAULT_EMPLOYEES.slice();
    showToast("โหลดรายชื่อพนักงานจาก Firebase ไม่สำเร็จ ใช้รายชื่อสำรองไว้ก่อน");
  }
  renderEmployeeManageList();
}

function renderEmployeeManageList(){
  const box = document.getElementById("empManageList");
  const countEl = document.getElementById("empCount");
  if(!box) return;
  countEl.textContent = EMPLOYEES.length;
  const q = (document.getElementById("empManageSearch").value || "").trim().toLowerCase();
  let list = EMPLOYEES;
  if(q){
    list = list.filter(e => e.name.toLowerCase().includes(q) || e.nick.toLowerCase().includes(q));
  }
  if(list.length === 0){
    box.innerHTML = `<div class="empty">ไม่พบรายชื่อ</div>`;
    return;
  }
  box.innerHTML = list.map(e=>`
    <div class="emprow">
      <div class="info"><b>${escapeHtml(e.name)}</b> (${escapeHtml(e.nick)})<div class="dept">${escapeHtml(e.dept||"-")}${e.position ? " · "+escapeHtml(e.position) : ""}</div></div>
      ${currentUser
        ? `<button class="emp-del" onclick="deleteEmployeeRecord('${e.id}')">ลบ</button>`
        : `<button class="emp-del" style="background:var(--navy-light);color:var(--navy);" onclick="openLoginModal()">🔒 ลบ</button>`}
    </div>
  `).join("");
}

async function addEmployeeRecord(){
  if(!currentUser){ showToast("กรุณาเข้าสู่ระบบ HR ก่อนเพิ่มพนักงาน"); openLoginModal(); return; }
  const name = document.getElementById("newEmpName").value.trim();
  const nick = document.getElementById("newEmpNick").value.trim();
  const dept = document.getElementById("newEmpDept").value.trim();
  const position = document.getElementById("newEmpPosition").value.trim();
  if(!name || !nick){
    showToast("กรุณากรอกชื่อ-นามสกุล และชื่อเล่น");
    return;
  }
  const btn = document.getElementById("addEmpBtn");
  btn.disabled = true;
  btn.textContent = "กำลังบันทึก...";
  try{
    await db.collection("employees").add({ name, nick, dept, position, createdAt: Date.now() });
    showToast("เพิ่มพนักงานเรียบร้อย ✓");
    document.getElementById("newEmpName").value = "";
    document.getElementById("newEmpNick").value = "";
    document.getElementById("newEmpDept").value = "";
    document.getElementById("newEmpPosition").value = "";
    await loadEmployees();
  }catch(err){
    console.error(err);
    showToast("เพิ่มไม่สำเร็จ: " + err.message);
  }finally{
    btn.disabled = false;
    btn.textContent = "+ เพิ่มพนักงาน";
  }
}

async function deleteEmployeeRecord(id){
  if(!currentUser){ showToast("กรุณาเข้าสู่ระบบ HR ก่อน"); openLoginModal(); return; }
  if(!confirm("ลบพนักงานคนนี้ออกจากลิสต์ใช่ไหม?\nไม่กระทบใบยืม-คืนเก่าที่บันทึกไว้แล้ว")) return;
  try{
    await db.collection("employees").doc(id).delete();
    showToast("ลบเรียบร้อย");
    await loadEmployees();
  }catch(err){
    console.error(err);
    showToast("ลบไม่สำเร็จ: " + err.message);
  }
}

// -------------------- ITEM ROWS --------------------
function addItemRow(){
  itemCounter++;
  const id = "item"+itemCounter;
  const wrap = document.createElement("div");
  wrap.className = "itemrow";
  wrap.id = id;
  wrap.innerHTML = `
    <button class="rm" onclick="removeItemRow('${id}')">✕</button>
    <label>รายการทรัพย์สิน</label>
    <input type="text" class="it-name" placeholder="เช่น โน้ตบุ๊ค, คีย์บอร์ด, มือถือ">
    <div class="row2">
      <div><label>Serial Number (S/N)</label><input type="text" class="it-serial" placeholder="ถ้ามี"></div>
      <div><label>รหัสทรัพย์สิน</label><input type="text" class="it-code" placeholder="ถ้ามี"></div>
    </div>
    <label>จำนวน</label>
    <input type="text" class="it-qty" value="1" placeholder="จำนวน">
  `;
  document.getElementById("itemsList").appendChild(wrap);
}

function removeItemRow(id){
  const el = document.getElementById(id);
  if(document.querySelectorAll(".itemrow").length <= 1){
    showToast("ต้องมีอย่างน้อย 1 รายการ");
    return;
  }
  el.remove();
}

function collectItems(){
  const rows = document.querySelectorAll("#itemsList .itemrow");
  const items = [];
  rows.forEach(row=>{
    const name = row.querySelector(".it-name").value.trim();
    if(!name) return;
    items.push({
      name,
      serial: row.querySelector(".it-serial").value.trim(),
      code: row.querySelector(".it-code").value.trim(),
      qty: row.querySelector(".it-qty").value.trim() || "1",
    });
  });
  return items;
}

// -------------------- SIGNATURE PAD --------------------
const sigPads = {};

function initSignaturePad(canvasId){
  const canvas = document.getElementById(canvasId);
  const ratio = window.devicePixelRatio || 1;
  function resize(){
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * ratio;
    canvas.height = rect.height * ratio;
    const ctx = canvas.getContext("2d");
    ctx.scale(ratio, ratio);
    ctx.lineWidth = 2.4;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = "#1631AC";
  }
  resize();
  window.addEventListener("resize", resize);

  const ctx = canvas.getContext("2d");
  let drawing = false;
  let hasInk = false;
  let last = {x:0,y:0};

  function pos(e){
    const rect = canvas.getBoundingClientRect();
    const t = e.touches ? e.touches[0] : e;
    return { x: t.clientX - rect.left, y: t.clientY - rect.top };
  }
  function start(e){
    e.preventDefault();
    drawing = true;
    last = pos(e);
  }
  function move(e){
    if(!drawing) return;
    e.preventDefault();
    const p = pos(e);
    ctx.beginPath();
    ctx.moveTo(last.x, last.y);
    ctx.lineTo(p.x, p.y);
    ctx.stroke();
    last = p;
    hasInk = true;
  }
  function end(){ drawing = false; }

  canvas.addEventListener("mousedown", start);
  canvas.addEventListener("mousemove", move);
  window.addEventListener("mouseup", end);
  canvas.addEventListener("touchstart", start, {passive:false});
  canvas.addEventListener("touchmove", move, {passive:false});
  canvas.addEventListener("touchend", end);

  sigPads[canvasId] = {
    canvas, ctx,
    hasInk: ()=>hasInk,
    clear: ()=>{ ctx.clearRect(0,0,canvas.width,canvas.height); hasInk = false; },
    dataURL: ()=> canvas.toDataURL("image/png"),
  };
}

function clearSig(id){
  sigPads[id].clear();
}

// -------------------- SUBMIT NEW LOAN --------------------
async function submitNewLoan(){
  const empName = document.getElementById("empInput").value.trim();
  if(!empName){
    showToast("กรุณาเลือก/กรอกชื่อพนักงาน"); return;
  }
  const items = collectItems();
  if(items.length === 0){
    showToast("กรุณากรอกรายการอุปกรณ์อย่างน้อย 1 รายการ"); return;
  }
  const dateOut = document.getElementById("dateOut").value;
  if(!dateOut){ showToast("กรุณาเลือกวันที่ยืม"); return; }
  const hrNameOut = document.getElementById("hrNameOut").value.trim();
  if(!hrNameOut){ showToast("กรุณากรอกชื่อ HR ผู้ส่งมอบ"); return; }

  if(!sigPads["sigEmpOut"].hasInk()){ showToast("กรุณาให้พนักงานเซ็นชื่อ"); return; }
  if(!sigPads["sigHrOut"].hasInk()){ showToast("กรุณาให้ HR เซ็นชื่อ"); return; }

  const btn = document.getElementById("submitNewBtn");
  btn.disabled = true;
  btn.textContent = "กำลังบันทึก...";

  const record = {
    docType: selectedDocType,
    employeeName: empName,
    position: document.getElementById("empPosition").value.trim(),
    phone: document.getElementById("empPhone").value.trim(),
    items,
    dateOut,
    dueDate: document.getElementById("dueDate").value || "",
    liabilityAmount: document.getElementById("liabilityAmount").value.trim(),
    hrNameOut,
    signEmpOut: sigPads["sigEmpOut"].dataURL(),
    signHrOut: sigPads["sigHrOut"].dataURL(),
    status: "ยืมอยู่",
    dateIn: "",
    returnNote: "",
    hrNameIn: "",
    signEmpIn: "",
    signHrIn: "",
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };

  try{
    await db.collection("equipment_loans").add(record);
    showToast("บันทึกใบยืมอุปกรณ์เรียบร้อย ✓");
    resetNewForm();
    loadRecords();
    document.querySelector('[data-tab="list"]').click();
  }catch(err){
    console.error(err);
    showToast("บันทึกไม่สำเร็จ: " + err.message);
  }finally{
    btn.disabled = false;
    btn.textContent = "บันทึกใบยืมอุปกรณ์";
  }
}

function resetNewForm(){
  document.getElementById("empInput").value = "";
  document.getElementById("empPosition").value = "";
  document.getElementById("empPhone").value = "";
  document.getElementById("liabilityAmount").value = "";
  document.querySelectorAll(".doctype-chip").forEach(c=>c.classList.remove("active"));
  document.querySelector('.doctype-chip[data-doctype="asset"]').classList.add("active");
  selectedDocType = "asset";
  document.getElementById("dateOut").value = todayStr();
  document.getElementById("dueDate").value = "";
  document.getElementById("hrNameOut").value = "";
  document.getElementById("itemsList").innerHTML = "";
  addItemRow();
  sigPads["sigEmpOut"].clear();
  sigPads["sigHrOut"].clear();
}

// -------------------- LOAD & RENDER LIST --------------------
async function loadRecords(){
  try{
    const snap = await db.collection("equipment_loans").orderBy("createdAt","desc").get();
    records = snap.docs.map(d=>({id:d.id, ...d.data()}));
    renderList();
  }catch(err){
    console.error(err);
    document.getElementById("recList").innerHTML = `<div class="empty">โหลดข้อมูลไม่สำเร็จ<br><span style="font-size:12px">${err.message}</span></div>`;
  }
}

function isOverdue(rec){
  if(rec.status !== "ยืมอยู่" || !rec.dueDate) return false;
  return rec.dueDate < todayStr();
}

function renderList(){
  const box = document.getElementById("recList");
  let filtered = records.filter(rec=>{
    if(currentFilter === "out" && rec.status !== "ยืมอยู่") return false;
    if(currentFilter === "back" && rec.status !== "คืนแล้ว") return false;
    if(currentFilter === "overdue" && !isOverdue(rec)) return false;
    if(currentSearch){
      const hay = (rec.employeeName + " " + rec.items.map(i=>i.name).join(" ")).toLowerCase();
      if(!hay.includes(currentSearch)) return false;
    }
    return true;
  });

  if(filtered.length === 0){
    box.innerHTML = `<div class="empty">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#6B7688" stroke-width="1.5"/></svg>
      <div>ไม่พบรายการ</div>
    </div>`;
    return;
  }

  box.innerHTML = filtered.map(rec=>{
    const overdue = isOverdue(rec);
    const badgeClass = rec.status === "คืนแล้ว" ? "back" : (overdue ? "overdue" : "out");
    const badgeText = rec.status === "คืนแล้ว" ? "คืนแล้ว" : (overdue ? "เกินกำหนด" : "ยืมอยู่");
    const itemNames = rec.items.map(i=>i.name).join(", ");
    return `
      <div class="rec" onclick="openDetail('${rec.id}')">
        <div class="rec-top">
          <div>
            <div class="rec-name">${escapeHtml(rec.employeeName)}</div>
            <div class="rec-sub">ยืม ${formatDate(rec.dateOut)}${rec.dueDate ? " · กำหนดคืน "+formatDate(rec.dueDate) : ""}</div>
          </div>
          <span class="badge ${badgeClass}">${badgeText}</span>
        </div>
        <div class="rec-items">🔧 ${escapeHtml(itemNames)}</div>
      </div>
    `;
  }).join("");
}

function escapeHtml(str){
  const d = document.createElement("div");
  d.textContent = str || "";
  return d.innerHTML;
}

function formatDate(str){
  if(!str) return "-";
  const [y,m,d] = str.split("-");
  const thaiYear = parseInt(y) + 543;
  return `${d}/${m}/${thaiYear}`;
}

// -------------------- DETAIL MODAL --------------------
function openDetail(id){
  const rec = records.find(r=>r.id === id);
  if(!rec) return;
  const overdue = isOverdue(rec);
  const badgeClass = rec.status === "คืนแล้ว" ? "back" : (overdue ? "overdue" : "out");
  const badgeText = rec.status === "คืนแล้ว" ? "คืนแล้ว" : (overdue ? "เกินกำหนด" : "ยืมอยู่");

  const itemsHtml = rec.items.map((it,idx)=>`
    <div class="drow"><span>อุปกรณ์ #${idx+1}</span><span>${escapeHtml(it.name)}</span></div>
    ${it.serial ? `<div class="drow"><span>S/N</span><span>${escapeHtml(it.serial)}</span></div>` : ""}
    ${it.code ? `<div class="drow"><span>รหัสทรัพย์สิน</span><span>${escapeHtml(it.code)}</span></div>` : ""}
    <div class="drow"><span>จำนวน</span><span>${escapeHtml(it.qty||"1")}</span></div>
  `).join("");

  let returnSection = "";
  if(rec.status === "คืนแล้ว"){
    returnSection = `
      <h3 style="font-size:15px;color:var(--navy);margin:18px 0 10px;">ข้อมูลการคืน</h3>
      <div class="detail-grid">
        <div class="drow"><span>วันที่คืน</span><span>${formatDate(rec.dateIn)}</span></div>
        ${rec.returnNote ? `<div class="drow"><span>หมายเหตุ</span><span>${escapeHtml(rec.returnNote)}</span></div>` : ""}
        <div class="drow"><span>HR ผู้รับคืน</span><span>${escapeHtml(rec.hrNameIn)}</span></div>
      </div>
      <label>ลายเซ็นพนักงานตอนคืน</label>
      <div class="sig-preview"><img src="${rec.signEmpIn}"></div>
      <label>ลายเซ็น HR ตอนคืน</label>
      <div class="sig-preview"><img src="${rec.signHrIn}"></div>
    `;
  }

  const modal = document.getElementById("modalBody");
  modal.innerHTML = `
    <div class="modal-head">
      <h3>${escapeHtml(rec.employeeName)}</h3>
      <button class="close-x" onclick="closeModal()">✕</button>
    </div>
    <span class="badge ${badgeClass}" style="margin-bottom:12px;display:inline-block;">${badgeText}</span>
    <div class="detail-grid">
      <div class="drow"><span>วันที่ยืม</span><span>${formatDate(rec.dateOut)}</span></div>
      ${rec.dueDate ? `<div class="drow"><span>กำหนดคืน</span><span>${formatDate(rec.dueDate)}</span></div>` : ""}
      <div class="drow"><span>HR ผู้ส่งมอบ</span><span>${escapeHtml(rec.hrNameOut)}</span></div>
      ${itemsHtml}
    </div>
    <label>ลายเซ็นพนักงานตอนยืม</label>
    <div class="sig-preview"><img src="${rec.signEmpOut}"></div>
    <label>ลายเซ็น HR ตอนยืม</label>
    <div class="sig-preview"><img src="${rec.signHrOut}"></div>
    ${returnSection}
    <div style="margin-top:18px;" class="btn-row">
      <button class="btn btn-outline" onclick="exportPDF('${rec.id}')">📄 Export PDF</button>
      ${rec.status === "ยืมอยู่" ? (currentUser
          ? `<button class="btn btn-primary" onclick="openReturnForm('${rec.id}')">บันทึกการคืน</button>`
          : `<button class="btn btn-ghost" onclick="openLoginModal()">🔒 เข้าสู่ระบบ HR เพื่อบันทึกการคืน</button>`
        ) : ""}
    </div>
  `;
  document.getElementById("modalBg").classList.add("show");
}

function closeModal(){
  document.getElementById("modalBg").classList.remove("show");
}

// -------------------- RETURN FLOW --------------------
function openReturnForm(id){
  if(!currentUser){ showToast("กรุณาเข้าสู่ระบบ HR ก่อน"); openLoginModal(); return; }
  const rec = records.find(r=>r.id === id);
  if(!rec) return;
  const modal = document.getElementById("modalBody");
  modal.innerHTML = `
    <div class="modal-head">
      <h3>บันทึกการคืน — ${escapeHtml(rec.employeeName)}</h3>
      <button class="close-x" onclick="closeModal()">✕</button>
    </div>
    <label>วันที่คืน</label>
    <input type="date" id="retDateIn" value="${todayStr()}">
    <label>หมายเหตุ (ถ้ามี)</label>
    <textarea id="retNote" placeholder="เช่น อุปกรณ์ครบ สภาพปกติ..."></textarea>

    <label>ลายเซ็นพนักงานผู้คืน</label>
    <div class="sigwrap"><canvas class="sigpad" id="retSigEmp"></canvas>
      <div class="sigbar"><span>เซ็นด้วยนิ้ว/เมาส์ (หมึกสีน้ำเงิน)</span><button data-clear="retSigEmp">ล้าง</button></div>
    </div>

    <label>ชื่อ HR ผู้รับคืน</label>
    <input type="text" id="retHrName" placeholder="ชื่อเล่น HR ผู้รับคืนอุปกรณ์">
    <label>ลายเซ็น HR ผู้รับคืน</label>
    <div class="sigwrap"><canvas class="sigpad" id="retSigHr"></canvas>
      <div class="sigbar"><span>เซ็นด้วยนิ้ว/เมาส์ (หมึกสีน้ำเงิน)</span><button data-clear="retSigHr">ล้าง</button></div>
    </div>

    <button class="btn btn-primary" style="margin-top:16px;" id="confirmReturnBtn">ยืนยันการคืนอุปกรณ์</button>
  `;
  initSignaturePad("retSigEmp");
  initSignaturePad("retSigHr");
  document.querySelectorAll("[data-clear]").forEach(btn=>{
    btn.addEventListener("click", ()=>clearSig(btn.getAttribute("data-clear")));
  });
  document.getElementById("confirmReturnBtn").addEventListener("click", ()=>confirmReturn(id));
}

async function confirmReturn(id){
  if(!currentUser){ showToast("กรุณาเข้าสู่ระบบ HR ก่อน"); openLoginModal(); return; }
  const dateIn = document.getElementById("retDateIn").value;
  const returnNote = document.getElementById("retNote").value.trim();
  const hrNameIn = document.getElementById("retHrName").value.trim();

  if(!dateIn){ showToast("กรุณาเลือกวันที่คืน"); return; }
  if(!hrNameIn){ showToast("กรุณากรอกชื่อ HR ผู้รับคืน"); return; }
  if(!sigPads["retSigEmp"].hasInk()){ showToast("กรุณาให้พนักงานเซ็นชื่อ"); return; }
  if(!sigPads["retSigHr"].hasInk()){ showToast("กรุณาให้ HR เซ็นชื่อ"); return; }

  const btn = document.getElementById("confirmReturnBtn");
  btn.disabled = true;
  btn.textContent = "กำลังบันทึก...";

  try{
    await db.collection("equipment_loans").doc(id).update({
      status: "คืนแล้ว",
      dateIn,
      returnNote,
      hrNameIn,
      signEmpIn: sigPads["retSigEmp"].dataURL(),
      signHrIn: sigPads["retSigHr"].dataURL(),
      updatedAt: Date.now(),
    });
    showToast("บันทึกการคืนเรียบร้อย ✓");
    closeModal();
    loadRecords();
  }catch(err){
    console.error(err);
    showToast("บันทึกไม่สำเร็จ: " + err.message);
    btn.disabled = false;
    btn.textContent = "ยืนยันการคืนอุปกรณ์";
  }
}

// -------------------- PDF EXPORT (ตามแพทเทิร์นฟอร์มบริษัท) --------------------
// หมายเหตุ: render เป็น HTML ก่อนแล้วแปลงเป็นภาพด้วย html2canvas เพื่อให้ตัวอักษรไทย
// (สระ/วรรณยุกต์) แสดงผลถูกต้อง เพราะ jsPDF เองไม่รองรับการจัดวางอักขระไทยแบบ complex script

function pdfFieldHtml(label, value, flexGrow){
  return `
    <div style="flex:${flexGrow||1};display:flex;align-items:baseline;gap:8px;border-bottom:1px solid #8a8a8a;padding-bottom:5px;">
      <span style="font-weight:600;white-space:nowrap;">${escapeHtml(label)}</span>
      <span style="flex:1;">${escapeHtml(value||"")}</span>
    </div>`;
}

function pdfSigBlockHtml(label, sigDataUrl, name, dateStr){
  return `
    <div style="text-align:center;">
      <div style="font-weight:600;">${escapeHtml(label)}</div>
      <div style="height:48px;display:flex;align-items:flex-end;justify-content:center;margin-top:6px;">
        ${sigDataUrl ? `<img src="${sigDataUrl}" style="max-height:48px;max-width:180px;">` : ""}
      </div>
      <div style="border-top:1px solid #8a8a8a;margin-top:4px;padding-top:6px;">
        <div>( ${escapeHtml(name||"")} )</div>
        <div style="color:#666;margin-top:4px;">วันที่ &nbsp;${escapeHtml(dateStr||"-")}</div>
      </div>
    </div>`;
}

function buildPdfHtml(rec){
  const isPC = rec.docType === "pc";
  const title = isPC ? "ใบยืม-คืน PC/Notebook" : "ใบยืม-คืน ทรัพย์สินของบริษัท";

  const headers = isPC
    ? ["ลำดับ","รายการทรัพย์สิน","Serial Number (S/N)","รหัสทรัพย์สิน","จำนวน"]
    : ["ลำดับ","รายการทรัพย์สิน","รหัสทรัพย์สิน","จำนวน"];

  const rowsHtml = rec.items.map((it,idx)=>{
    const cells = isPC
      ? [idx+1, it.name, it.serial||"-", it.code||"-", it.qty||"1"]
      : [idx+1, it.name, it.code||"-", it.qty||"1"];
    return `<tr>${cells.map((c,i)=>`<td style="border:1px solid #555;padding:8px;text-align:${i===1?"left":"center"};">${escapeHtml(String(c))}</td>`).join("")}</tr>`;
  }).join("");

  const returned = rec.status === "คืนแล้ว";
  const returnNoteHtml = (returned && rec.returnNote)
    ? `<div style="margin-top:14px;font-size:13px;"><b>หมายเหตุการคืน:</b> ${escapeHtml(rec.returnNote)}</div>`
    : "";

  const liabilityAmount = rec.liabilityAmount ? escapeHtml(rec.liabilityAmount) : "...........................";

  return `
  <div style="width:794px;padding:34px;box-sizing:border-box;background:#fff;font-family:'Sarabun',sans-serif;color:#161616;line-height:1.7;">

    <div style="text-align:center;">
      <img src="${LOGO_B64}" style="width:130px;display:inline-block;">
      <div style="font-weight:700;font-size:19px;margin-top:10px;">บริษัท เพอร์เฟค กรุ๊ป อินเตอร์เทรดดิ้ง จำกัด</div>
      <div style="font-size:12px;color:#666;margin-top:3px;letter-spacing:.03em;">PERFECT GROUP INTERTRADING COMPANY LIMITED</div>
    </div>

    <div style="display:flex;justify-content:space-between;align-items:flex-end;margin-top:18px;border-bottom:2px solid #161616;padding-bottom:8px;">
      <div style="font-weight:700;font-size:21px;">${title}</div>
      <div style="font-size:14px;">วันที่&nbsp; ${escapeHtml(formatDate(rec.dateOut))}</div>
    </div>

    <div style="margin-top:14px;font-size:14px;">บริษัท เพอร์เฟค กรุ๊ป อินเตอร์เทรดดิ้ง จำกัด</div>

    <div style="margin-top:10px;">${pdfFieldHtml("ชื่อ-นามสกุล", rec.employeeName)}</div>

    <div style="display:flex;gap:28px;margin-top:12px;">
      ${pdfFieldHtml("ตำแหน่ง", rec.position)}
      ${pdfFieldHtml("โทรศัพท์", rec.phone)}
    </div>

    <table style="width:100%;border-collapse:collapse;margin-top:18px;font-size:13.5px;">
      <thead>
        <tr style="background:#eef0f4;">
          ${headers.map(h=>`<th style="border:1px solid #555;padding:9px 8px;">${escapeHtml(h)}</th>`).join("")}
        </tr>
      </thead>
      <tbody>
        ${rowsHtml}
      </tbody>
    </table>
    ${returnNoteHtml}

    <div style="margin-top:16px;font-size:12px;">
      <div>1. พนักงานจะต้องตรวจสอบรายการทรัพย์สินให้ถูกต้องตามที่ได้รับไป พร้อมลงชื่อระบุวันที่รับลงในเอกสาร</div>
      <div>2. กรณีที่มีการส่งคืน ขอเพิ่ม เปลี่ยนแปลงรายการทรัพย์สิน จะต้องตรวจสอบราชการให้ถูกต้อง พร้อมลงชื่อรับ-คืน ลงในเอกสารให้เรียบร้อย</div>
      <div>3. พนักงานที่พ้นสภาพการเป็นพนักงานของบริษัท มีหน้าที่ส่งมอบทรัพย์สินของบริษัทคืนในวันสุดท้ายที่ปฏิบัติงาน และลงชื่อส่งมอบทรัพย์สินให้เรียบร้อย</div>
    </div>

    <div style="margin-top:12px;font-size:12.5px;">
      ข้าพเจ้าขอรับรองว่าจะดูแลรักษาอุปกรณ์เป็นอย่างดี หากมีการสูญหายเกิดขึ้น ข้าพเจ้ายินดีจะรับผิดชอบเป็นจำนวน ${liabilityAmount} บาท โดยไม่มีเงื่อนไขใดๆ
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:40px;margin-top:26px;font-size:13.5px;">
      ${pdfSigBlockHtml("ผู้เบิก", rec.signEmpOut, rec.employeeName, formatDate(rec.dateOut))}
      ${pdfSigBlockHtml("ผู้ให้เบิก", rec.signHrOut, rec.hrNameOut, formatDate(rec.dateOut))}
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:40px;margin-top:22px;font-size:13.5px;">
      ${pdfSigBlockHtml("ผู้คืน", returned ? rec.signEmpIn : null, returned ? rec.employeeName : "", returned ? formatDate(rec.dateIn) : "")}
      ${pdfSigBlockHtml("ผู้รับคืน", returned ? rec.signHrIn : null, returned ? rec.hrNameIn : "", returned ? formatDate(rec.dateIn) : "")}
    </div>

    <div style="display:flex;justify-content:space-between;margin-top:18px;font-size:10.5px;color:#999;">
      <div>${isPC ? "FM-HRD-0010 Rev.00 เริ่มใช้ 05/04/2567" : ""}</div>
      <div>สร้างเอกสารเมื่อ ${escapeHtml(new Date().toLocaleString("th-TH"))}</div>
    </div>
  </div>`;
}

function waitForImages(container){
  const imgs = Array.from(container.querySelectorAll("img"));
  return Promise.all(imgs.map(img=>{
    if(img.complete) return Promise.resolve();
    return new Promise(resolve=>{
      img.onload = resolve;
      img.onerror = resolve;
    });
  }));
}

async function exportPDF(id){
  const rec = records.find(r=>r.id === id);
  if(!rec) return;

  const holder = document.getElementById("pdfTemplate");
  holder.innerHTML = buildPdfHtml(rec);
  await waitForImages(holder);
  await new Promise(r=>setTimeout(r, 60)); // เผื่อเวลาให้ฟอนต์/เลย์เอาต์นิ่ง

  const target = holder.firstElementChild;
  const canvas = await html2canvas(target, { scale: 2.2, useCORS: true, backgroundColor: "#ffffff" });

  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF({ unit: "mm", format: "a4" });
  const pxPerMM = canvas.width / 210;
  const imgHeightMM = canvas.height / pxPerMM;
  const imgData = canvas.toDataURL("image/png");

  if(imgHeightMM <= 297){
    // พอดี 1 หน้า วางเต็มความกว้าง
    pdf.addImage(imgData, "PNG", 0, 0, 210, imgHeightMM);
  }else{
    // เนื้อหายาวกว่า 1 หน้า -> ย่อสัดส่วนให้พอดีความสูง 297mm แล้ววางกึ่งกลาง (บังคับให้จบใน 1 หน้าเสมอ)
    const scale = 297 / imgHeightMM;
    const w = 210 * scale;
    const h = 297;
    const x = (210 - w) / 2;
    pdf.addImage(imgData, "PNG", x, 0, w, h);
  }

  holder.innerHTML = "";
  const fname = `EquipmentLoan_${rec.dateOut}_${rec.employeeName.replace(/\s/g,"")}.pdf`;
  pdf.save(fname);
}

// -------------------- TOAST --------------------
let toastTimer;
function showToast(msg){
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>t.classList.remove("show"), 2800);
}
