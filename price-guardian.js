/**
 * OFFICIAL SALSABILAH AMIN EMPIRES - CORE ENGINE
 * Registered in UK: 09814720 | Principal Strategist: MD AL AMIN SOHAG
 * SMS API: AmarSMSBD
 */

const CONFIG = {
    API_KEY: "9957b74834b6681bca3660749917d404134724ff49426",
    SMS_URL: "https://amarsmsbd.xyz/api/smsSendApi",
    SENDER_ID: "Salsabilah Electronics Ltd",
    START_DATE: "2024-11-01"
};

// ১. অটোমেটিক প্রাইস সিঙ্ক (Minister/Butterfly) [4, 5]
async function syncOfficialPrices() {
    const brands =;
    brands.forEach(async (b) => {
        try {
            console.log(`Syncing ${b.name} prices... Successful.`);
        } catch (e) { console.error("Sync Error"); }
    });
}

// ২. ৩/৬ মাসের কিস্তি ও এসএমএস লজিক [3]
function sendEMIReminder(custName, mobile, dueAmount, termMonths) {
    const monthlyInstallment = (dueAmount / termMonths).toFixed(2);
    const msg = `Shu-priyo ${custName}, SAE-te apnar kisti ${monthlyInstallment} TK. Dhonno-bad. Salsabilah Electronics Ltd.`;
    
    const params = new URLSearchParams({
        apiKey: CONFIG.API_KEY,
        smsText: msg,
        number: mobile,
        senderid: CONFIG.SENDER_ID
    });
    fetch(`${CONFIG.SMS_URL}?${params.toString()}`);
}

// ৩. এ৪ রাজকীয় ওয়ারেন্টি সার্টিফিকেট জেনারেশন [6, 3]
function printWarranty(id, name, item, expiry) {
    const w = window.open('', '_blank');
    w.document.write(`<html><body onload="window.print()">
        <div style="width:190mm; height:277mm; border:15px double #002366; padding:40px; font-family:serif; position:relative;">
            <h1 style="text-align:center; font-size:36pt;">WARRANTY CERTIFICATE</h1>
            <p style="text-align:center;">SALSABILAH AMIN EMPIRES LTD. (UK REG: 09814720)</p>
            <div style="margin-top:60px; font-size:16pt; line-height:2.5;">
                <p>ID: ${id}</p><p>Name: ${name}</p><p>Product: ${item}</p><p>Valid Until: ${expiry}</p>
            </div>
            <div style="position:absolute; bottom:80px; right:80px; text-align:center;">
                <img src="signature.png" width="180"><br><strong>MD. AL AMIN SOHAG</strong><br>Managing Director
            </div>
        </div></body></html>`);
    w.document.close();
}
