document.addEventListener('DOMContentLoaded', () => {
    const urlInput = document.getElementById('urlInput');
    const generateBtn = document.getElementById('generateBtn');
    const clearBtn = document.getElementById('clearBtn');
    const qrcodeContainer = document.getElementById('qrcodeContainer');
    const recentQRCodes = document.getElementById('recentQRCodes');
    const motivationalMessage = document.getElementById('motivationalMessage');
    const qrSizeSelect = document.getElementById('qrSize');
    const qrLevelSelect = document.getElementById('qrLevel');

    let qriousInstance = null;

    const motivationalMessages = [
        "You're doing great!",
        "Keep up the amazing work!",
        "Fantastic job!",
        "Awesome QR code generated!",
        "Success! Another QR code for the books!"
    ];

    // Load settings from local storage or set defaults
    const loadSettings = () => {
        const savedSize = localStorage.getItem('qrSize');
        const savedLevel = localStorage.getItem('qrLevel');

        if (savedSize) {
            qrSizeSelect.value = savedSize;
        }
        if (savedLevel) {
            qrLevelSelect.value = savedLevel;
        }
    };

    // Save settings to local storage
    const saveSettings = () => {
        localStorage.setItem('qrSize', qrSizeSelect.value);
        localStorage.setItem('qrLevel', qrLevelSelect.value);
    };

    // Initialize settings on load
    loadSettings();

    qrSizeSelect.addEventListener('change', saveSettings);
    qrLevelSelect.addEventListener('change', saveSettings);

    const generateQRCode = () => {
        const url = urlInput.value.trim();
        if (!url) {
            alert('Please enter a URL.');
            return;
        }

        // Clear previous QR code
        qrcodeContainer.innerHTML = '';

        const size = parseInt(qrSizeSelect.value);
        const level = qrLevelSelect.value;

        qriousInstance = new QRious({
            element: qrcodeContainer,
            value: url,
            size: size,
            level: level
        });

        displayMotivationalMessage();
        addRecentQRCode(url);
    };

    const clearAll = () => {
        urlInput.value = '';
        qrcodeContainer.innerHTML = '';
        motivationalMessage.classList.add('hidden');
        qriousInstance = null;
    };

    const displayMotivationalMessage = () => {
        const randomIndex = Math.floor(Math.random() * motivationalMessages.length);
        motivationalMessage.textContent = motivationalMessages[randomIndex];
        motivationalMessage.classList.remove('hidden');
    };

    const addRecentQRCode = (url) => {
        const listItem = document.createElement('li');
        listItem.textContent = url;
        recentQRCodes.prepend(listItem); // Add to the beginning of the list

        // Limit the number of recent QR codes displayed
        while (recentQRCodes.children.length > 5) {
            recentQRCodes.removeChild(recentQRCodes.lastChild);
        }
    };

    generateBtn.addEventListener('click', generateQRCode);
    clearBtn.addEventListener('click', clearAll);
});
