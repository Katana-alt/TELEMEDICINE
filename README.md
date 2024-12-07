<!-<!-- Sidebar -->
<aside class="sidebar">
  <!-- Language Selector -->
  <div class="language-selector">
    <button id="english-btn" class="lang-btn">English</button>
    <button id="swahili-btn" class="lang-btn">Kiswahili</button>
  </div>

  <!-- Search Bar -->
  <div class="search-bar">
    <input type="text" id="search-input" placeholder="Search...">
    <button class="search-btn">Search</button>
  </div>

  <!-- Sidebar Links -->
  <ul class="sidebar-links">
    <li><a id="telemedicine-link" href="https://www.health.go.ke/telemedicine/" target="_blank">Telemedicine Benefits</a></li>
    <li><a id="how-it-works-link" href="https://www.medihealthkenya.com/how-telemedicine-works" target="_blank">How It Works</a></li>
    <li><a id="find-doctor-link" href="https://www.kenyamedicaldirectory.co.ke/" target="_blank">Find a Doctor</a></li>
    <li><a id="patient-reviews-link" href="#">Patient Reviews</a></li>
  </ul>

  <!-- WhatsApp Contact -->
  <div class="whatsapp-contact">
    <p>📲 Chat with us on WhatsApp: <a href="https://wa.me/254701594268" target="_blank">+254701594268</a></p>
  </div>

  <!-- Footer -->
  <div class="footer">
    <p>&copy; 2024 All Rights Reserved</p>
  </div>
</aside>

<!-- Add the styling -->
<style>
  /* Sidebar Styling */
  .sidebar {
    width: 250px;
    background-color: #FF6F61; /* Bright coral background */
    color: #FFFFFF; /* White text */
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Subtle shadow */
  }

  /* Language Selector Styling */
  .language-selector {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .lang-btn {
    background-color: #F39C12; /* Bright yellow-orange */
    color: white;
    padding: 12px 18px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .lang-btn:hover {
    background-color: #E67E22; /* Slightly darker shade */
  }

  /* Search Bar Styling */
  .search-bar {
    display: flex;
    margin-bottom: 20px;
  }

  .search-bar input {
    padding: 12px;
    border: 2px solid #FF6F61; /* Matching border color */
    border-radius: 5px;
    width: 80%;
    background-color: #F1C40F; /* Light yellow background */
    color: #333;
  }

  .search-btn {
    padding: 12px;
    background-color: #27AE60; /* Vibrant green */
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    transition: background-color 0.3s ease;
  }

  .search-btn:hover {
    background-color: #2ECC71; /* Slightly lighter shade */
  }

  /* Sidebar Links Styling */
  .sidebar-links {
    list-style: none;
    padding: 0;
  }

  .sidebar-links li {
    margin: 15px 0;
  }

  .sidebar-links a {
    color: #FFFFFF; /* White text for links */
    text-decoration: none;
    font-size: 18px;
    font-weight: 500;
    transition: color 0.3s ease;
  }

  .sidebar-links a:hover {
    color: #3498DB; /* Bright blue on hover */
    font-weight: bold;
  }

  /* WhatsApp Contact Styling */
  .whatsapp-contact {
    margin-top: 20px;
    text-align: center;
    font-size: 16px;
  }

  .whatsapp-contact a {
    color: #FFFFFF;
    font-weight: bold;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .whatsapp-contact a:hover {
    color: #25D366; /* WhatsApp green on hover */
  }

  /* Footer Styling */
  .footer {
    margin-top: 20px;
    text-align: center;
    font-size: 14px;
    color: #FFFFFF;
  }
</style>

<script>
  // Toggle between English and Kiswahili
  const englishBtn = document.getElementById('english-btn');
  const swahiliBtn = document.getElementById('swahili-btn');

  const searchInput = document.getElementById('search-input');
  const telemedicineLink = document.getElementById('telemedicine-link');
  const howItWorksLink = document.getElementById('how-it-works-link');
  const findDoctorLink = document.getElementById('find-doctor-link');
  const patientReviewsLink = document.getElementById('patient-reviews-link');

  englishBtn.addEventListener('click', () => {
    // Switch to English
    searchInput.placeholder = 'Search...';
    telemedicineLink.textContent = 'Telemedicine Benefits';
    howItWorksLink.textContent = 'How It Works';
    findDoctorLink.textContent = 'Find a Doctor';
    patientReviewsLink.textContent = 'Patient Reviews';
  });

  swahiliBtn.addEventListener('click', () => {
    // Switch to Kiswahili
    searchInput.placeholder = 'Tafuta daktari, huduma, au habari...';
    telemedicineLink.textContent = 'Faida za Telemedicine Kenya';
    howItWorksLink.textContent = 'Jinsi Telemedicine Inavyofanya Kazi';
    findDoctorLink.textContent = 'Pata Daktari';
    patientReviewsLink.textContent = 'Maoni ya Wapatiwa Huduma';
  });
</script>
