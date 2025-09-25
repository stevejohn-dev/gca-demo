document.addEventListener('DOMContentLoaded', () => {
    const urlInput = document.getElementById('urlInput');
    const generateBtn = document.getElementById('generateBtn');
    const qrcodeDiv = document.getElementById('qrcode');
    const motivationalMessage = document.getElementById('motivationalMessage');

    let qrcode = null; // To store the QRCode instance

    generateBtn.addEventListener('click', () => {
        const url = urlInput.value.trim();

        if (!url) {
            alert('Please enter a URL.');
            return;
        }

        // Clear previous QR code
        if (qrcode) {
            qrcodeDiv.innerHTML = ''; // Clear the content of the div
            qrcode = null; // Reset the qrcode instance
        }

        // Generate new QR code
        qrcode = new QRCode(qrcodeDiv, {
            text: url,
            width: 256,
            height: 256,
            colorDark : "#000000",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
        });

        motivationalMessage.classList.remove('hidden');
    });
});