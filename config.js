/* ============================================================
   ตั้งค่าการเชื่อมต่อ Google Sheet — แก้ไฟล์นี้ไฟล์เดียว ทุกเครื่องได้ค่าตามนี้
   ============================================================

   url   : URL ของ Apps Script Web App (ลงท้ายด้วย /exec)
           ได้มาจากขั้นตอน Deploy ใน backend/Code.gs
   token : รหัสลับ ต้องตรงกับตัวแปร TOKEN ในไฟล์ backend/Code.gs

   ถ้า url ว่างไว้ แอปจะทำงานแบบเก็บข้อมูลในเครื่องอย่างเดียว
   (หรือใช้ฐานข้อมูลของ claude.ai เมื่อเปิดเป็น artifact)
*/
window.LUX_CONFIG = {
  url: 'https://script.google.com/macros/s/AKfycbwxp1gN-WWXpAaQhhuuh_4yeR-YmmMn5BxU1kf919Fs6VsI2NPykBKtSemkEoTFwZUitA/exec',
  token: '0000'
};
