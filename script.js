function calculateBMI() {
  let weight = parseFloat(document.getElementById("weight").value);
  let heightCm = parseFloat(document.getElementById("height").value);

  if (isNaN(weight) || isNaN(heightCm) || weight <= 0 || heightCm <= 0) {
    alert("กรุณากรอกน้ำหนักและส่วนสูงให้ถูกต้อง");
    return;
  }
  
  let heightM = heightCm / 100; // แปลงเซนติเมตรเป็นเมตร
  let bmi = weight / (heightM * heightM);

  let status = "";
  if (bmi < 18.5) {
    status = "น้ำหนักน้อยเกินไป";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    status = "น้ำหนักปกติ";
  } else if (bmi >= 25 && bmi <= 29.9) {
    status = "น้ำหนักเกิน";
  } else {
    status = "โรคอ้วน";
  }

  document.getElementById(
    "bmi-result"
  ).textContent = `ค่า BMI ของคุณคือ: ${bmi.toFixed(2)} (${status})`;

  // บันทึกเวลา วันที่ และผลการคำนวณ
  addToHistory(weight, heightCm, bmi.toFixed(2), status);
}



function addToHistory(weight, height, bmi, status) {
  let historyList = document.getElementById("history-list");


  // สร้างแถวใหม่ในตาราง
  let tr = document.createElement("tr");


  // เพิ่มคอลัมน์สำหรับวันที่และเวลา
  let currentDateTime = new Date().toLocaleString();
  let tdDateTime = document.createElement("td");
  tdDateTime.textContent = currentDateTime;

  // เพิ่มคอลัมน์สำหรับน้ำหนัก
  let tdWeight = document.createElement("td");
  tdWeight.textContent = weight;


  // เพิ่มคอลัมน์สำหรับส่วนสูง
  let tdHeight = document.createElement("td");
  tdHeight.textContent = height;


  // เพิ่มคอลัมน์สำหรับ BMI
  let tdBMI = document.createElement("td");
  tdBMI.textContent = bmi;


  // เพิ่มคอลัมน์สำหรับสถานะ
  let tdStatus = document.createElement("td");
  tdStatus.textContent = status;


  // เพิ่มคอลัมน์ทั้งหมดในแถว
  tr.appendChild(tdDateTime);
  tr.appendChild(tdWeight);
  tr.appendChild(tdHeight);
  tr.appendChild(tdBMI);
  tr.appendChild(tdStatus);

  
  // เพิ่มแถวลงในตาราง
  historyList.appendChild(tr);
}
