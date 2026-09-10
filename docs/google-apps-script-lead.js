/**
 * KBSV NextGen 2026 — Lead Registration
 * Script này GẮN với Sheet → dùng getActiveSpreadsheet() → ít quyền hơn
 * 
 * CHỈ CẦN LÀM 1 BƯỚC:
 * → Bấm nút ▶️ Run (chọn function doGet) → Accept permissions → XONG
 */

function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheets = ss.getSheets();
    var sheet = null;
    
    for (var i = 0; i < sheets.length; i++) {
      if (sheets[i].getSheetId() === 56723235) {
        sheet = sheets[i];
        break;
      }
    }
    if (!sheet) sheet = sheets[0];
    
    var params = e.parameter;

    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Timestamp', 'Họ và tên', 'Số điện thoại', 'Email',
        'Trường Đại học', 'Năm học', 'Link Social', 'Lý do tham gia', 'Nguồn'
      ]);
    }

    var yearLabel = params.year || '';
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
      .createTextOutput(JSON.stringify({status:'ok'}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({status:'error', msg: err.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({status:'ok', message:'KBSV NextGen Lead API running'}))
    .setMimeType(ContentService.MimeType.JSON);
}
