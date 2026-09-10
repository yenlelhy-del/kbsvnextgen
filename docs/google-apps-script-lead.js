/**
 * KBSV NextGen 2026 — Lead Registration Apps Script
 * 
 * Sheet ID: 109OqvACskjNnSTP98aGbCJg-JInBLzLEue-r7JyYlwI
 * Sheet GID: 56723235
 * 
 * HƯỚNG DẪN DEPLOY:
 * 1. Mở Google Sheet: https://docs.google.com/spreadsheets/d/109OqvACskjNnSTP98aGbCJg-JInBLzLEue-r7JyYlwI/edit
 * 2. Vào Extensions → Apps Script
 * 3. Xóa code mặc định, paste toàn bộ code này vào
 * 4. Bấm Deploy → New deployment
 *    - Type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Bấm Deploy → Copy URL mới
 * 6. Gửi URL đó cho mình để cập nhật vào script.js
 */

const SHEET_ID = '109OqvACskjNnSTP98aGbCJg-JInBLzLEue-r7JyYlwI';
const SHEET_GID = 56723235;

function getTargetSheet() {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  const sheets = ss.getSheets();
  for (let i = 0; i < sheets.length; i++) {
    if (sheets[i].getSheetId() === SHEET_GID) {
      return sheets[i];
    }
  }
  return ss.getSheets()[0];
}

function doPost(e) {
  try {
    const sheet = getTargetSheet();
    const params = e.parameter;

    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Timestamp',
        'Họ và tên',
        'Số điện thoại',
        'Email',
        'Trường Đại học',
        'Năm học',
        'Link Social',
        'Lý do tham gia',
        'Nguồn'
      ]);
    }

    let yearLabel = params.year || '';
    if (yearLabel === '3') yearLabel = 'Năm 3';
    else if (yearLabel === '4') yearLabel = 'Năm 4';
    else if (yearLabel === 'graduated') yearLabel = 'Đã tốt nghiệp';

    sheet.appendRow([
      params.submittedAt || new Date().toISOString(),
      params.fullName || '',
      params.phone || '',
      params.email || '',
      params.university || '',
      yearLabel,
      params.social || '',
      params.motivation || '',
      'nextgen.finpeace.cloud'
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'ok', message: 'Lead saved' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok', message: 'KBSV NextGen Lead API is running' }))
    .setMimeType(ContentService.MimeType.JSON);
}
