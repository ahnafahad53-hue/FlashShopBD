
const SPREADSHEET_ID = '1le_9XHeSrK-xJaXlzeu1GWu6tVgc9L7etml9MvYLSuM'; // Replace with your Google Sheet ID
const SHEET_NAME = 'Orders'; // Main orders sheet name

// ========== MAIN FUNCTION ==========
function doPost(e) {
  try {
    // Parse incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Validate required fields
    const validation = validateOrderData(data);
    if (!validation.valid) {
      return createErrorResponse(validation.message);
    }
    
    // Get spreadsheet and sheet
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);
    
    // Create sheet if it doesn't exist
    if (!sheet) {
      sheet = spreadsheet.insertSheet(SHEET_NAME);
      setupSheetHeaders(sheet);
    }
    
    // Ensure headers exist
    if (sheet.getLastRow() === 0) {
      setupSheetHeaders(sheet);
    }
    
    // Generate Order ID
    const orderId = generateOrderId(sheet);
    const timestamp = new Date();
    
    // Process order data
    const orderRow = processOrderData(data, orderId, timestamp);
    
    // Append order row
    const lastRow = sheet.getLastRow();
    sheet.appendRow(orderRow);
    
    // Format the new row
    formatOrderRow(sheet, lastRow + 1);
    
    // Return success response
    return createSuccessResponse(orderId);
    
  } catch (error) {
    Logger.log('Error in doPost: ' + error.toString());
    return createErrorResponse('Server error: ' + error.toString());
  }
}

// ========== DATA PROCESSING ==========
function processOrderData(data, orderId, timestamp) {
  const items = data.items || [];
  
  // Calculate subtotal from items
  const subtotal = items.reduce((sum, item) => {
    return sum + (item.price * item.quantity);
  }, 0);
  
  // Format products list
  const productsList = formatProductsList(items);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  
  // Build order row
  const row = [
    orderId,                                                    // A: Order ID
    timestamp,                                                   // B: Timestamp
    productsList,                                                // C: Product Names (formatted)
    totalItems,                                                  // D: Total Items Count
    data.fullName || '',                                         // E: Full Name
    data.phone || '',                                            // F: Phone
    data.email || '',                                            // G: Email
    data.fullAddress || '',                                      // H: Full Address
    data.deliveryLocation === 'inside' ? 'Inside Dhaka' : 'Outside Dhaka', // I: Delivery Location
    subtotal,                                                    // J: Subtotal
    data.deliveryCost || 0,                                      // K: Delivery Cost
    data.totalPrice || 0                                         // L: Total Price
  ];
  
  return row;
}

// ========== PRODUCT FORMATTING ==========
function formatProductsList(items) {
  if (!items || items.length === 0) return '';
  
  // Format: "Product Name (Qty: 2 x ৳650), Product Name 2 (Qty: 1 x ৳450)"
  const formatted = items.map(item => {
    const name = item.name || 'Unknown Product';
    const qty = item.quantity || 0;
    const price = item.price || 0;
    return `${name} (Qty: ${qty} x ৳${price})`;
  });
  
  return formatted.join(', ');
}

// ========== SHEET SETUP ==========
function setupSheetHeaders(sheet) {
  const headers = [
    'Order ID',
    'Timestamp',
    'Product Names',
    'Total Items',
    'Full Name',
    'Phone',
    'Email',
    'Full Address',
    'Delivery Location',
    'Subtotal',
    'Delivery Cost',
    'Total Price'
  ];
  
  // Set headers
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  
  // Format header row
  const headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setFontWeight('bold');
  headerRange.setBackground('#1a73e8');
  headerRange.setFontColor('#ffffff');
  headerRange.setFontSize(11);
  
  // Set column widths
  sheet.setColumnWidth(1, 100);  // Order ID
  sheet.setColumnWidth(2, 160); // Timestamp
  sheet.setColumnWidth(3, 300); // Product Names
  sheet.setColumnWidth(4, 100); // Total Items
  sheet.setColumnWidth(5, 150); // Full Name
  sheet.setColumnWidth(6, 120); // Phone
  sheet.setColumnWidth(7, 200); // Email
  sheet.setColumnWidth(8, 250); // Full Address
  sheet.setColumnWidth(9, 130); // Delivery Location
  sheet.setColumnWidth(10, 120); // Subtotal
  sheet.setColumnWidth(11, 120); // Delivery Cost
  sheet.setColumnWidth(12, 120); // Total Price
  
  // Freeze header row
  sheet.setFrozenRows(1);
}

// ========== ROW FORMATTING ==========
function formatOrderRow(sheet, rowNumber) {
  // Format timestamp
  sheet.getRange(rowNumber, 2).setNumberFormat('yyyy-mm-dd hh:mm:ss');
  
  // Format currency columns (Subtotal, Delivery Cost, Total Price)
  sheet.getRange(rowNumber, 10).setNumberFormat('৳#,##0.00');
  sheet.getRange(rowNumber, 11).setNumberFormat('৳#,##0.00');
  sheet.getRange(rowNumber, 12).setNumberFormat('৳#,##0.00');
  
  // Format Total Items as number
  sheet.getRange(rowNumber, 4).setNumberFormat('0');
  
  // Alternate row colors for better readability
  if (rowNumber % 2 === 0) {
    sheet.getRange(rowNumber, 1, 1, 12).setBackground('#f8f9fa');
  }
}

// ========== ORDER ID GENERATION ==========
function generateOrderId(sheet) {
  const lastRow = sheet.getLastRow();
  
  // If sheet only has header, start from #1001
  if (lastRow <= 1) {
    return '#1001';
  }
  
  // Get all Order IDs from column A (skip header)
  const orderIdRange = sheet.getRange(2, 1, lastRow - 1, 1);
  const orderIds = orderIdRange.getValues().flat();
  
  // Find the highest order number
  let maxOrderNumber = 1000;
  
  orderIds.forEach(orderId => {
    if (orderId && typeof orderId === 'string' && orderId.startsWith('#')) {
      const number = parseInt(orderId.substring(1));
      if (!isNaN(number) && number > maxOrderNumber) {
        maxOrderNumber = number;
      }
    }
  });
  
  // Return next order ID
  return '#' + (maxOrderNumber + 1);
}

// ========== VALIDATION ==========
function validateOrderData(data) {
  // Check required fields
  if (!data.fullName || data.fullName.trim() === '') {
    return { valid: false, message: 'Full name is required' };
  }
  
  if (!data.phone || data.phone.trim() === '') {
    return { valid: false, message: 'Phone number is required' };
  }
  
  if (!data.fullAddress || data.fullAddress.trim() === '') {
    return { valid: false, message: 'Full address is required' };
  }
  
  // Check items
  if (!data.items || !Array.isArray(data.items) || data.items.length === 0) {
    return { valid: false, message: 'At least one item is required' };
  }
  
  // Validate each item
  for (let i = 0; i < data.items.length; i++) {
    const item = data.items[i];
    if (!item.name || !item.price || !item.quantity) {
      return { valid: false, message: `Item ${i + 1} is missing required fields` };
    }
    if (item.quantity <= 0) {
      return { valid: false, message: `Item ${i + 1} has invalid quantity` };
    }
    if (item.price <= 0) {
      return { valid: false, message: `Item ${i + 1} has invalid price` };
    }
  }
  
  return { valid: true };
}

// ========== RESPONSE HELPERS ==========
function createSuccessResponse(orderId) {
  return ContentService.createTextOutput(JSON.stringify({
    status: 'success',
    orderId: orderId,
    message: 'Order saved successfully'
  })).setMimeType(ContentService.MimeType.JSON);
}

function createErrorResponse(message) {
  return ContentService.createTextOutput(JSON.stringify({
    status: 'error',
    message: message
  })).setMimeType(ContentService.MimeType.JSON);
}

// ========== TEST FUNCTION ==========
function testDoPost() {
  const testData = {
    fullName: 'Test User',
    phone: '01712345678',
    email: 'test@example.com',
    fullAddress: '123 Test Street, Dhaka, Bangladesh',
    deliveryLocation: 'inside',
    items: [
      { id: 'nasal-cleaner-01', name: 'Smart Nasal Cleaner Bottle', price: 650, quantity: 2 },
      { id: 'foot-odor-spray', name: 'Foot Odor Eliminator Spray', price: 450, quantity: 1 }
    ],
    deliveryCost: 80,
    totalPrice: 1830
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(mockEvent);
  Logger.log(result.getContent());
}
