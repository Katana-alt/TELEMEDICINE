<!-- Sidebar -->
<aside class="sidebar">
  <!-- Language Selector -->
  <div class="language-selector">
    <button id="english-btn">English</button>
    <button id="swahili-btn">Kiswahili</button>
  </div>

  <!-- Search Bar -->
  <div class="search-bar">
    <input type="text" id="search-input" placeholder="Search...">
    <button>Search</button>
  </div>

  <!-- Sidebar Links -->
  <ul class="sidebar-links">
    <li><a id="telemedicine-link" href="https://www.health.go.ke/telemedicine/" target="_blank">Telemedicine Benefits</a></li>
    <li><a id="how-it-works-link" href="https://www.medihealthkenya.com/how-telemedicine-works" target="_blank">How It Works</a></li>
    <li><a id="find-doctor-link" href="https://www.kenyamedicaldirectory.co.ke/" target="_blank">Find a Doctor</a></li>
    <li><a id="patient-reviews-link" href="#">Patient Reviews</a></li>
  </ul>
</aside>

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
me">Home</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#about">About Us</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <button class="hamburger">&#9776;</button>
  </nav>

  <!-- Main Content Area and Sidebar -->
  <div class="container">
    <!-- Main Content Section -->
    <section class="main-content">
      <h2>Welcome to Our Telemedicine Platform</h2>
      <p>
        Telemedicine offers a convenient way to consult with healthcare professionals remotely. Our platform provides a seamless experience for both patients and doctors.
      </p>
      <p>
        Learn more about the <a href="https://www.healthit.gov/topic/telemedicine-and-telehealth" target="_blank">benefits of telemedicine</a>, including faster consultations, cost savings, and access to specialists.
      </p>
      <p>
        Whether you're in a rural area or simply prefer the convenience of home, telemedicine is transforming healthcare. <a href="https://www.cdc.gov/coronavirus/2019-ncov/hcp/telehealth.html" target="_blank">Explore how telemedicine improves accessibility</a> and why it's becoming a popular choice for patients around the world.
      </p>
    </section>

    <!-- Sidebar -->
    <aside class="sidebar">
      <div class="search-bar">
        <input type="text" placeholder="Search...">
        <button>Search</button>
      </div>
      <ul class="sidebar-links">
        <li><a href="https://www.telehealthresourcecenter.org/what-is-telemedicine/" target="_blank">Telemedicine Benefits</a></li>
        <li><a href="https://www.ama-assn.org/delivering-care/public-health/telemedicine-during-covid-19" target="_blank">How It Works</a></li>
        <li><a href="https://www.mayoclinic.org/tests-procedures/telehealth/about/pac-20488194" target="_blank">Find a Doctor</a></li>
        <li><a href="#">Patient Reviews</a></li>
      </ul>
    </aside>
  </div>

  <!-- Footer -->
  <footer class="footer">
    <p>&copy; 2024 Telemedicine Solutions. All rights reserved.</p>
    <div class="social-media">
      <a href="#">Facebook</a>
      <a href="#">Twitter</a>
      <a href="#">LinkedIn</a>
    </div>
    <p>Contact us: contact@telemedicine.com | (254) 0701594268</p>
  </footer>

  <script src="scripts.js"></script>
</body>
</html>
