/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {
    // Error handling for dependencies
    const checkDependencies = () => {
        if (typeof bootstrap === 'undefined') {
            console.error('Bootstrap is not loaded. Please check your internet connection or CDN link.');
            return false;
        }
        if (typeof FontAwesome === 'undefined') {
            console.error('Font Awesome is not loaded. Please check your internet connection or CDN link.');
            return false;
        }
        return true;
    };

    // Only proceed if dependencies are loaded
    if (!checkDependencies()) {
        return;
    }

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }
    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        try {
            new bootstrap.ScrollSpy(document.body, {
                target: '#mainNav',
                rootMargin: '0px 0px -40%',
            });
        } catch (error) {
            console.error('Error initializing ScrollSpy:', error);
        }
    }

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Add error handling for image loading
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            console.error(`Failed to load image: ${this.src}`);
            this.alt = 'Image failed to load';
            this.style.border = '1px solid #ccc';
        });
    });
});
const dosisPupuk = {
  "Padi":          { NPK: 300, Urea: 200 },
  "Jagung":        { NPK: 250, Urea: 150 },
  "Kedelai":       { NPK: 200, Urea: 100 },
  "Ubi Kayu":      { NPK: 200, Urea: 100 },
  "Ubi Jalar":     { NPK: 180, Urea: 90 },

  // 🥬 Hortikultura (sayur & buah semusim)
  "Kangkung":      { NPK: 150, Urea: 70 },
  "Bayam":         { NPK: 150, Urea: 70 },
  "Sawi":          { NPK: 180, Urea: 80 },
  "Selada":        { NPK: 150, Urea: 60 },
  "Cabai":         { NPK: 500, Urea: 250 },
  "Tomat":         { NPK: 350, Urea: 200 },
  "Terong":        { NPK: 300, Urea: 150 },
  "Mentimun":      { NPK: 250, Urea: 120 },
  "Bawang Merah":  { NPK: 350, Urea: 125 },
  "Bawang Putih":  { NPK: 320, Urea: 120 },
  "Wortel":        { NPK: 280, Urea: 120 },
  "Pepaya":        { NPK: 400, Urea: 200 },
  "Semangka":      { NPK: 350, Urea: 180 },
  "Melon":         { NPK: 350, Urea: 180 },
  "Pisang":        { NPK: 600, Urea: 350 },

  // 🌴 Perkebunan (per tahun, dibagi beberapa kali aplikasi)
  "Kelapa Sawit":  { NPK: 700, Urea: 300 },
  "Karet":         { NPK: 400, Urea: 150 },
  "Kopi":          { NPK: 400, Urea: 150 },
  "Kakao":         { NPK: 350, Urea: 120 },
  "Tebu":          { NPK: 500, Urea: 350 },

  // 🌱 Tanaman Nilai Tinggi
  "Vanili":        { NPK: 250, Urea: 100 },
  "Jahe":          { NPK: 300, Urea: 120 },
  "Kunyit":        { NPK: 280, Urea: 110 },
  "Kencur":        { NPK: 250, Urea: 100 },
  "Tembakau":      { NPK: 350, Urea: 150 },
  "Porang":        { NPK: 250, Urea: 120 }
  };

  // Kalkulator Pupuk
  const formPupukEl = document.getElementById("formPupuk");
  if (formPupukEl) {
  formPupukEl.addEventListener("submit", function(e) {
    e.preventDefault();
    const luas = parseFloat(document.getElementById("luas").value);
    const tanaman = document.getElementById("tanaman").value;

    if (!dosisPupuk[tanaman]) return;

    const dosis = dosisPupuk[tanaman];
    const total = {
      NPK: dosis.NPK * luas,
      Urea: dosis.Urea * luas
    };

    const hasilDiv = document.getElementById("hasilPupuk");
    if (hasilDiv) {
      hasilDiv.style.display = "block";
      hasilDiv.innerHTML = `
      <b>Hasil Perhitungan:</b><br>
      - NPK: ${total.NPK} kg<br>
      - Urea: ${total.Urea} kg
    `;
    }
  });
  }

  // Simulasi Biaya Tanam
  const formBiayaEl = document.getElementById("formBiaya");
  if (formBiayaEl) {
  formBiayaEl.addEventListener("submit", function(e) {
    e.preventDefault();

    const luas = parseFloat(document.getElementById("biayaLuas").value);
    const bibit = parseFloat(document.getElementById("biayaBibit").value);
    const pupuk = parseFloat(document.getElementById("biayaPupuk").value);
    const tenaga = parseFloat(document.getElementById("biayaTenaga").value);
    const hasilPerHa = parseFloat(document.getElementById("hasilPanen").value);
    const hargaJual = parseFloat(document.getElementById("hargaJual").value);

    const modal = (bibit + pupuk + tenaga) * luas;
    const hasilPanen = hasilPerHa * 1000 * luas; // ton -> kg
    const pendapatan = hasilPanen * hargaJual;
    const keuntungan = pendapatan - modal;

    const hasilDiv = document.getElementById("hasilBiaya");
    if (hasilDiv) {
      hasilDiv.style.display = "block";
      hasilDiv.innerHTML = `
      <b>Ringkasan Perhitungan:</b>
      <table class="farm-table">
        <tr><th>Modal Total</th><td>Rp ${modal.toLocaleString()}</td></tr>
        <tr><th>Estimasi Hasil Panen</th><td>${hasilPanen.toLocaleString()} kg</td></tr>
        <tr><th>Estimasi Pendapatan</th><td>Rp ${pendapatan.toLocaleString()}</td></tr>
        <tr><th>Estimasi Keuntungan</th><td>Rp ${keuntungan.toLocaleString()}</td></tr>
      </table>
    `;
    }
  });
  }
const dataTanam = {
    "Padi": {
    musim: "Oktober – Desember (awal musim hujan)",
    ketersediaan: "Butuh air irigasi / hujan cukup",
    cuaca: "Suhu 22–27°C, tanah sawah subur"
  },
  "Jagung": {
    musim: "Maret – Juni (musim kemarau awal)",
    ketersediaan: "Butuh pupuk NPK & Urea cukup",
    cuaca: "Suhu 23–30°C, tanah gembur & drainase baik"
  },
  "Kedelai": {
    musim: "Juni – Agustus (setelah panen padi)",
    ketersediaan: "Butuh tanah gembur & pengairan terbatas",
    cuaca: "Suhu 21–28°C, tidak tergenang air"
  },
  "Ubi Kayu": {
    musim: "Awal musim hujan (Oktober – Desember)",
    ketersediaan: "Butuh lahan luas & pupuk organik",
    cuaca: "Suhu 25–29°C, tanah kering gembur"
  },
  "Ubi Jalar": {
    musim: "Maret – Juli",
    ketersediaan: "Butuh tanah gembur berpasir",
    cuaca: "Suhu 21–27°C, curah hujan sedang"
  },

  // 🥬 Hortikultura
  "Kangkung": {
    musim: "Sepanjang tahun",
    ketersediaan: "Butuh air banyak",
    cuaca: "Suhu 22–30°C, tanah lembab"
  },
  "Bayam": {
    musim: "Sepanjang tahun",
    ketersediaan: "Butuh sinar matahari penuh",
    cuaca: "Suhu 20–28°C, tanah gembur"
  },
  "Sawi": {
    musim: "November – Februari",
    ketersediaan: "Butuh pupuk cukup & sinar matahari",
    cuaca: "Suhu 20–25°C, tanah subur lembab"
  },
  "Selada": {
    musim: "Januari – Maret",
    ketersediaan: "Butuh air cukup & naungan sebagian",
    cuaca: "Suhu 18–25°C, tanah gembur"
  },
  "Cabai": {
    musim: "November – Desember",
    ketersediaan: "Butuh pupuk intensif & air cukup",
    cuaca: "Suhu 24–28°C, tanah gembur subur"
  },
  "Tomat": {
    musim: "Maret – Mei",
    ketersediaan: "Butuh sinar matahari penuh",
    cuaca: "Suhu 20–27°C, tanah gembur pH 5,5–6,5"
  },
  "Terong": {
    musim: "Maret – Juni",
    ketersediaan: "Butuh pemeliharaan intensif",
    cuaca: "Suhu 22–30°C, tanah subur gembur"
  },
  "Mentimun": {
    musim: "April – Juni",
    ketersediaan: "Butuh banyak air",
    cuaca: "Suhu 21–27°C, tanah subur gembur"
  },
  "Bawang Merah": {
    musim: "Juni – Agustus",
    ketersediaan: "Butuh lahan kering & sinar penuh",
    cuaca: "Suhu 25–32°C, tanah gembur lempung berpasir"
  },
  "Bawang Putih": {
    musim: "Mei – Agustus",
    ketersediaan: "Butuh lahan sejuk",
    cuaca: "Suhu 15–24°C, dataran tinggi >700 mdpl"
  },
  "Wortel": {
    musim: "April – Juli",
    ketersediaan: "Butuh tanah gembur & sejuk",
    cuaca: "Suhu 15–20°C, dataran tinggi"
  },
  "Pepaya": {
    musim: "Sepanjang tahun",
    ketersediaan: "Butuh lahan luas & pemupukan",
    cuaca: "Suhu 22–28°C, tanah subur gembur"
  },
  "Semangka": {
    musim: "April – Juni",
    ketersediaan: "Butuh sinar penuh & tanah kering",
    cuaca: "Suhu 23–28°C, tanah berpasir"
  },
  "Melon": {
    musim: "April – Juli",
    ketersediaan: "Butuh sinar penuh & pemupukan intensif",
    cuaca: "Suhu 25–30°C, tanah gembur subur"
  },
  "Pisang": {
    musim: "Sepanjang tahun",
    ketersediaan: "Butuh air cukup & pemeliharaan",
    cuaca: "Suhu 25–30°C, tanah subur lembab"
  },

  // 🌴 Perkebunan
  "Kelapa Sawit": {
    musim: "Sepanjang tahun",
    ketersediaan: "Butuh lahan luas",
    cuaca: "Suhu 25–30°C, tanah subur lembab"
  },
  "Karet": {
    musim: "Awal musim hujan",
    ketersediaan: "Butuh lahan luas",
    cuaca: "Suhu 25–32°C, tanah dalam & gembur"
  },
  "Kopi": {
    musim: "April – Juni",
    ketersediaan: "Butuh naungan sebagian",
    cuaca: "Suhu 18–24°C, dataran tinggi"
  },
  "Kakao": {
    musim: "Maret – Mei",
    ketersediaan: "Butuh naungan & air cukup",
    cuaca: "Suhu 21–28°C, tanah gembur subur"
  },
  "Tebu": {
    musim: "Mei – Oktober",
    ketersediaan: "Butuh lahan luas",
    cuaca: "Suhu 25–32°C, tanah subur gembur"
  },

  // 🌱 Tanaman Nilai Tinggi
  "Vanili": {
    musim: "April – Juni",
    ketersediaan: "Butuh naungan pohon penaung",
    cuaca: "Suhu 18–28°C, tanah gembur lembab"
  },
  "Jahe": {
    musim: "April – Juni",
    ketersediaan: "Butuh tanah gembur lembab",
    cuaca: "Suhu 20–30°C, tanah subur berhumus"
  },
  "Kunyit": {
    musim: "April – Juni",
    ketersediaan: "Butuh naungan sebagian",
    cuaca: "Suhu 20–30°C, tanah gembur berpasir"
  },
  "Kencur": {
    musim: "April – Juni",
    ketersediaan: "Butuh tanah lembab",
    cuaca: "Suhu 22–30°C, tanah subur gembur"
  },
  "Tembakau": {
    musim: "Mei – Juni",
    ketersediaan: "Butuh sinar penuh",
    cuaca: "Suhu 21–32°C, tanah gembur berpasir"
  },
  "Porang": {
    musim: "Oktober – Desember",
    ketersediaan: "Butuh naungan 40–60%",
    cuaca: "Suhu 24–30°C, tanah subur gembur"
  }
}

  const pilihTanaman = document.getElementById("pilihTanaman");
  const tabelTanam = document.getElementById("tabelTanam");
  const isiTabel = document.getElementById("isiTabel");
  const infoTanam = document.getElementById("infoTanam");

  if (pilihTanaman && tabelTanam && isiTabel && infoTanam) {
    pilihTanaman.addEventListener("change", () => {
      const pilihan = pilihTanaman.value;
      if (pilihan && dataTanam[pilihan]) {
        const d = dataTanam[pilihan];
        isiTabel.innerHTML = `
          <tr>
            <td>${d.musim}</td>
            <td>${d.ketersediaan}</td>
            <td>${d.cuaca}</td>
          </tr>
        `;
        tabelTanam.style.display = "table";
        infoTanam.style.display = "block";
        infoTanam.textContent = `Data Tumbuhan: ${pilihan}`;
      } else {
        tabelTanam.style.display = "none";
        infoTanam.style.display = "block";
        infoTanam.textContent = "Pilih Salah Satu Tumbuhan";
      }
    });
  }
  const tipsList = [
    {
      title: "3 Cara Mengatasi Ulat pada Cabai 🌶️",
      text: "Gunakan insektisida nabati, periksa daun setiap hari, dan tanam bunga perangkap seperti kenikir.",
      image: "https://source.unsplash.com/400x300/?chili,plant"
    },
    {
      title: "Tips Menanam Padi Lebih Subur 🌾",
      text: "Gunakan bibit unggul, atur jarak tanam 25x25 cm, dan jangan lupa pemupukan berimbang NPK.",
      image: "https://source.unsplash.com/400x300/?rice,field"
    },
    {
      title: "Cara Mudah Merawat Ayam Kampung 🐓",
      text: "Beri pakan alami seperti jagung, jaga kebersihan kandang, dan vaksinasi rutin.",
      image: "https://source.unsplash.com/400x300/?chicken,farm"
    },
    {
      title: "Mengurangi Hama pada Jagung 🌽",
      text: "Gunakan pestisida organik, lakukan rotasi tanaman, dan tanam jagung bersama kacang tanah.",
      image: "https://source.unsplash.com/400x300/?corn,plant"
    }
  ];

  const randomTip = tipsList[Math.floor(Math.random() * tipsList.length)];
  const tipsTitleEl = document.getElementById("tipsTitle");
  const tipsTextEl = document.getElementById("tipsText");
  const tipsImageEl = document.getElementById("tipsImage");
  if (tipsTitleEl && tipsTextEl && tipsImageEl) {
    tipsTitleEl.innerText = randomTip.title;
    tipsTextEl.innerText = randomTip.text;
    tipsImageEl.src = randomTip.image;
  }

// ===== MODERN VISUAL ENHANCEMENTS =====

// Add scroll animations
const addScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animateElements = document.querySelectorAll('.service-item, .portfolio-item, .timeline-panel, .farm-section, .accordion-item');
  animateElements.forEach(el => observer.observe(el));
};

// Add parallax effect to masthead
const addParallaxEffect = () => {
  const masthead = document.querySelector('.masthead');
  if (masthead) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      masthead.style.transform = `translateY(${rate}px)`;
    });
  }
};

// Add floating animation to service icons
const addFloatingIcons = () => {
  const serviceIcons = document.querySelectorAll('.fa-stack');
  serviceIcons.forEach((icon, index) => {
    icon.style.animation = `floating ${3 + index * 0.5}s ease-in-out infinite`;
    icon.style.animationDelay = `${index * 0.2}s`;
  });
};

// Add gradient text effect
const addGradientText = () => {
  const gradientTexts = document.querySelectorAll('.section-heading, .masthead-heading');
  gradientTexts.forEach(text => {
    text.style.background = 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))';
    text.style.webkitBackgroundClip = 'text';
    text.style.webkitTextFillColor = 'transparent';
    text.style.backgroundClip = 'text';
  });
};

// Add hover effects to cards
const addCardHoverEffects = () => {
  const cards = document.querySelectorAll('.service-item, .portfolio-item, .farm-section');
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px) scale(1.02)';
      this.style.boxShadow = 'var(--shadow-xl)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
      this.style.boxShadow = 'var(--shadow-md)';
    });
  });
};

// Add typing effect to masthead
const addTypingEffect = () => {
  const mastheadHeading = document.querySelector('.masthead-heading');
  if (mastheadHeading) {
    const text = mastheadHeading.textContent;
    mastheadHeading.textContent = '';
    mastheadHeading.style.borderRight = '2px solid var(--white)';
    
    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        mastheadHeading.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      } else {
        mastheadHeading.style.borderRight = 'none';
      }
    };
    
    setTimeout(typeWriter, 1000);
  }
};

// Add particle background effect
const addParticleBackground = () => {
  const masthead = document.querySelector('.masthead');
  if (masthead) {
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particle-container';
    particleContainer.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      z-index: 1;
    `;
    
    // Create particles
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        animation: float ${Math.random() * 10 + 10}s linear infinite;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
      `;
      particleContainer.appendChild(particle);
    }
    
    masthead.appendChild(particleContainer);
  }
};

// Add smooth reveal animations
const addRevealAnimations = () => {
  const revealElements = document.querySelectorAll('.service-item, .portfolio-item, .timeline-panel');
  
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    revealObserver.observe(el);
  });
};

// Add interactive form enhancements
const addFormEnhancements = () => {
  const inputs = document.querySelectorAll('.farm-form input, .farm-form select');
  
  inputs.forEach(input => {
    // Add floating label effect
    const label = input.previousElementSibling;
    if (label && label.tagName === 'LABEL') {
      input.addEventListener('focus', () => {
        label.style.color = 'var(--primary-color)';
        label.style.transform = 'translateY(-20px) scale(0.8)';
      });
      
      input.addEventListener('blur', () => {
        if (!input.value) {
          label.style.color = 'var(--text-secondary)';
          label.style.transform = 'translateY(0) scale(1)';
        }
      });
    }
    
    // Add input validation visual feedback
    input.addEventListener('input', () => {
      if (input.value) {
        input.style.borderColor = 'var(--primary-color)';
        input.style.boxShadow = '0 0 0 3px rgba(46, 125, 50, 0.1)';
      } else {
        input.style.borderColor = 'var(--light-gray)';
        input.style.boxShadow = 'none';
      }
    });
  });
};

// Add progress indicators
const addProgressIndicators = () => {
  const sections = document.querySelectorAll('.page-section');
  
  const progressBar = document.createElement('div');
  progressBar.className = 'progress-bar';
  progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 4px;
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
    z-index: 9999;
    transition: width 0.3s ease;
  `;
  
  document.body.appendChild(progressBar);
  
  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.offsetHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrollPercent + '%';
  });
};

// Add theme toggle functionality
const addThemeToggle = () => {
  const themeToggle = document.createElement('button');
  themeToggle.className = 'theme-toggle';
  themeToggle.innerHTML = '🌙';
  themeToggle.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    color: white;
    font-size: 20px;
    cursor: pointer;
    z-index: 1000;
    box-shadow: var(--shadow-lg);
    transition: var(--transition-normal);
  `;
  
  document.body.appendChild(themeToggle);
  
  let isDark = false;
  themeToggle.addEventListener('click', () => {
    isDark = !isDark;
    document.body.classList.toggle('dark-theme');
    themeToggle.innerHTML = isDark ? '☀️' : '🌙';
  });
};

// Add loading animations
const addLoadingAnimations = () => {
  const loadingScreen = document.createElement('div');
  loadingScreen.className = 'loading-screen';
  loadingScreen.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, var(--primary-color), var(--primary-light));
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
    transition: opacity 0.5s ease;
  `;
  
  const spinner = document.createElement('div');
  spinner.className = 'spinner';
  spinner.style.cssText = `
    width: 50px;
    height: 50px;
    border: 4px solid rgba(255, 255, 255, 0.3);
    border-top: 4px solid white;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  `;
  
  loadingScreen.appendChild(spinner);
  document.body.appendChild(loadingScreen);
  
  // Hide loading screen after page loads
  window.addEventListener('load', () => {
    setTimeout(() => {
      loadingScreen.style.opacity = '0';
      setTimeout(() => {
        loadingScreen.remove();
      }, 500);
    }, 1000);
  });
};

// Add CSS animations
const addCSSAnimations = () => {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes floating {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }
    
    @keyframes float {
      0% { transform: translateY(100vh) rotate(0deg); opacity: 1; }
      100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
    }
    
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    
    .dark-theme {
      --bg-primary: #1a1a1a;
      --bg-secondary: #2d2d2d;
      --text-primary: #ffffff;
      --text-secondary: #cccccc;
      --white: #2d2d2d;
      --light-gray: #404040;
    }
    
    .dark-theme .service-item,
    .dark-theme .portfolio-item,
    .dark-theme .farm-container,
    .dark-theme .accordion-item {
      background: var(--white);
      border-color: var(--light-gray);
    }
    
    .dark-theme .navbar {
      background: linear-gradient(135deg, #1a1a1a, #2d2d2d) !important;
    }
  `;
  document.head.appendChild(style);
};

// Initialize all visual enhancements
const initVisualEnhancements = () => {
  addCSSAnimations();
  addScrollAnimations();
  addParallaxEffect();
  addFloatingIcons();
  addGradientText();
  addCardHoverEffects();
  addTypingEffect();
  addParticleBackground();
  addRevealAnimations();
  addFormEnhancements();
  addProgressIndicators();
  addThemeToggle();
  addLoadingAnimations();
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initVisualEnhancements();
});
