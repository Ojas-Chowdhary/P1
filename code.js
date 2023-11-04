// Initialize Firebase and other code here...

const languageSelect = document.getElementById('language-select');
const aboutSection = document.getElementById('about');

// Event listener for language selection
languageSelect.addEventListener('change', function() {
    const selectedLanguage = languageSelect.value;
    
    if (selectedLanguage === 'english') {
        // English content
        aboutSection.querySelector('h2').textContent = 'About Us';
        aboutSection.querySelector('p').textContent = 'Welcome to the Muth Mukth March, where we stand together for a cause. Our mission is to create positive change in the world by raising awareness and working toward solutions for the issues that matter most to you. Join us on this journey.';
    } else if (selectedLanguage === 'hindi') {
        // Hindi content
        aboutSection.querySelector('h2').textContent = 'हमारे बारे में';
        aboutSection.querySelector('p').textContent = 'मुठ मुक्त मार्च में आपका स्वागत है, जहाँ हम साथ में एक उद्देश्य के लिए खड़े होते हैं। हमारा मिशन आपकी सबसे महत्वपूर्ण मुद्दों के लिए जागरूकता बढ़ाना और समाधान की दिशा में काम करके दुनिया में सकारात्मक परिवर्तन बनाना है। हमारे साथ इस सफर पर शामिल हों।';
    }
});

// Rest of your JavaScript code for enrolling and Firebase integration...
