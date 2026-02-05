/**
 * OFFICIAL SALSABILAH AMIN EMPIRES - ALL-IN-ONE ENGINE
 * Registered in UK: 09814720 | Strategy: MD AL AMIN SOHAG
 */

const EMPIRE_CONFIG = {
    API_KEY: "9957b74834b6681bca3660749917d404134724ff49426",
    GATEWAY_URL: "https://amarsmsbd.xyz/api/smsSendApi",
    SENDER_ID: "880961761xxxx", // এখানে আপনার প্যানেলের সেন্ডার আইডি দিন
    EMI_DIVIDER: 6
};

// ১. স্মার্ট কিস্তি ও এসএমএস ফাংশন
async function processSmartReminders(customerName, totalDue, mobile) {
    let cleanDue = parseFloat(totalDue.toString().replace(/[^0-9.]/g, ''));
    if (isNaN(cleanDue) || cleanDue <= 0) return;

    let installmentAmount = (cleanDue / EMPIRE_CONFIG.EMI_DIVIDER).toFixed(2);
    let nextDate = new Date();
    nextDate.setMonth(nextDate.getMonth() + 1);
    nextDate.setDate(10);

    let message = `Shu-priyo ${customerName}, Salsabilah Electronics-e apnar kisti ${installmentAmount} TK. Shesh tarik: ${nextDate.toLocaleDateString('en-GB')}. Dhonno-bad.`;

    const params = new URLSearchParams({
        apiKey: EMPIRE_CONFIG.API_KEY,
        smsText: message,
        number: mobile,
        senderid: EMPIRE_CONFIG.SENDER_ID
    });

    try {
        await fetch(`${EMPIRE_CONFIG.GATEWAY_URL}?${params.toString()}`, { method: 'GET' });
        console.log("SMS Sent Successfully");
    } catch (e) {
        console.log("SMS Gateway Offline");
    }
}

// ২. রাজকীয় ওয়ারেন্টি সার্টিফিকেট প্রিন্ট ফাংশন
function printOfficialWarranty(invoiceId, customerName, itemName, expiryDate) {
    const printWindow = window.open('', '_blank');
    const htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <style>
                @page { size: A4; margin: 0; }
                body { font-family: 'Times New Roman', serif; color: #1a1a1a; margin: 0; padding: 0; }
                .border { width: 190mm; height: 277mm; border: 15px double #002366; margin: 10mm auto; padding: 40px; position: relative; box-sizing: border-box; }
                .header { text-align: center; border-bottom: 2px solid #002366; padding-bottom: 20px; }
                .header h1 { font-size: 36pt; margin: 0; letter-spacing: 2px; }
                .header p { font-size: 12pt; margin: 5px 0; font-weight: bold; }
                .body { margin-top: 50px; line-height: 1.8; font-size: 14pt; }
                .body strong { color: #002366; }
                .footer { position: absolute; bottom: 60px; right: 80px; text-align: center; }
                .footer img { width: 180px; }
                .watermark { position: absolute; top: 35%; left: 15%; font-size: 80pt; color: rgba(0,35,102,0.05); transform: rotate(-45deg); z-index: -1; pointer-events: none; }
            </style>
        </head>
        <body onload="window.print()">
            <div class="border">
                <div class="watermark">SALSABILAH AMIN</div>
                <div class="header">
                    <h1>CERTIFICATE OF WARRANTY</h1>
                    <p>SALSABILAH AMIN EMPIRES LTD.</p>
                    <p>UK REG NO: 09814720 | EST. NOVEMBER 2024</p>
                </div>
                <div class="body">
                    <p><strong>Certificate ID:</strong> ${invoiceId}</p>
                    <p><strong>Beneficiary:</strong> ${customerName}</p>
                    <p><strong>Item Description:</strong> ${itemName}</p>
                    <p><strong>Warranty Status:</strong> Valid Until ${expiryDate}</p>
                    <p><strong>Authorized By:</strong> SR Electronics Park, Bangladesh</p>
                    <p style="margin-top: 30px; font-size: 11pt; font-style: italic;">
                        This document serves as an official guarantee under the laws of Salsabilah Amin Empires Ltd. 
                        Any modification without authorization renders this certificate null and void.
                    </p>
                </div>
                <div class="footer">
                    <img src="https://salsabilah.com/assets/signature.png" alt="Signature"><br>
                    <strong>MD. AL AMIN SOHAG</strong><br>
                    Managing Director
                </div>
            </div>
        </body>
        </html>
    `;
    printWindow.document.write(htmlContent);
    printWindow.document.close();
}

console.log("Salsabilah Empires System: All-in-One Core Loaded.");
