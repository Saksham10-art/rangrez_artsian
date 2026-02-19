// Smooth scroll for nav links
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    
    // ✅ Only add smooth scroll for internal anchors
    if (href.startsWith("#")) {
      link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          window.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
        }
      });
    }
  });
});



// Sticky navbar effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 4px 16px rgba(0,0,0,0.12)';
  } else {
    navbar.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
  }
});

// Language dropdown toggle
document.querySelector('.lang-btn').addEventListener('click', e => {
  e.preventDefault();
  const menu = document.querySelector('.dropdown-menu');
  menu.classList.toggle('show');
});

// Close dropdown when clicking outside
document.addEventListener('click', e => {
  const btn = document.querySelector('.lang-btn');
  const menu = document.querySelector('.dropdown-menu');
  if (!btn.contains(e.target) && !menu.contains(e.target)) {
    menu.classList.remove('show');
  }
});

// Fade‑in on scroll
const fadeElements = document.querySelectorAll('.fade-in, .stat-card, .design-card');

const fadeInOnScroll = () => {
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight * 0.85;
    if (isVisible) {
      el.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', fadeInOnScroll);

document.addEventListener("DOMContentLoaded", function () {

  const rawCost = document.getElementById('rawCost');
  const laborHours = document.getElementById('laborHours');
  const demandIndex = document.getElementById('demandIndex');
  const suggestedPrice = document.getElementById('suggestedPrice');

  const updatePrice = () => {
  const cost = parseFloat(rawCost.value) || 0;
  const hours = parseFloat(laborHours.value) || 0;
  const demand = parseFloat(demandIndex.value) || 1;

  const skillRate = 180;     // more realistic
  const overhead = 150;      
  const profitMargin = 0.15; // 15%
  const platformFee = 0.08;  // 8%

  const laborCost = hours * skillRate;
  const totalCost = cost + laborCost + overhead;

  const withProfit = totalCost * (1 + profitMargin);
  const withPlatform = withProfit * (1 + platformFee);

  // Demand adjustment (max 20% increase)
  const demandAdjustment = 1 + ((demand - 1) * 0.05);

  const finalPrice = withPlatform * demandAdjustment;

  suggestedPrice.textContent =
    `₹${Math.round(finalPrice).toLocaleString()}`;
};


  rawCost.addEventListener('input', updatePrice);
  laborHours.addEventListener('input', updatePrice);
  demandIndex.addEventListener('input', updatePrice);

  updatePrice(); // 🔥 important (initial calculation)

});

const cards = document.querySelectorAll(".stat-card");

window.addEventListener("scroll", () => {
  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if (top < window.innerHeight - 50) {
      card.classList.add("show");
    }
  });
});

/* ==============================
   MULTI LANGUAGE SYSTEM
================================ */

const translations = {

  en: {
    heroTitle: "Transparent Pricing. <br> Empowered Karigars.",
    heroText: "Rangrez connects Lucknow’s Chikankari artisans directly with buyers, ensuring fair wages, transparent pricing, and stories woven into every stitch.",
    storyTitle: "The Hands Behind the Thread",
    storyText1: "Two women artisans are carefully hand-embroidering fabric in a quiet workspace. They are stitching intricate patterns on delicate white cloth.",
    storyText2: "The fabric reflects fine, detailed craftsmanship and patience. Their expressions show calm determination and authentic artistry.",
    fairTitle: "Fair Price Discovery Engine",
    fairSubtitle: "See how we calculate a fair price for every Chikankari piece.",
    impactTitle: "Our Impact in Lucknow",
    artisans: "Artisans Empowered",
    trades: "Fair Trades Enabled",
    listings: "Verified Craft Listings",
    trendingTitle: "Trending Chikankari Designs",
    lucknowTitle: "A Touch of Lucknow",
    lucknowText: "Lucknow is not just a city — it is an emotion woven in white threads. Every stitch reflects dedication, heritage, and dignity. Because heritage deserves respect and artisans deserve fairness.",
    footerAbout: "A transparent marketplace connecting Lucknow’s Chikankari artisans with conscious buyers across the world.",
    madeWith: "Made with ❤️ in Lucknow"
  },

  hi: {
    heroTitle: "पारदर्शी मूल्य। <br> सशक्त कारीगर।",
    heroText: "रंगरेज़ लखनऊ के चिकनकारी कारीगरों को सीधे ग्राहकों से जोड़ता है, जिससे उचित वेतन, पारदर्शी मूल्य और हर टांके में बुनी कहानियाँ सुनिश्चित होती हैं।",
    storyTitle: "धागों के पीछे के हाथ",
    storyText1: "दो महिला कारीगर शांत वातावरण में सफेद कपड़े पर बारीक कढ़ाई कर रही हैं। वे सुई और धागे से जटिल पैटर्न बना रही हैं।",
    storyText2: "यह कपड़ा धैर्य और पारंपरिक कला की झलक दिखाता है। उनके चेहरे एकाग्रता और सच्ची कला को दर्शाते हैं।",
    fairTitle: "उचित मूल्य निर्धारण प्रणाली",
    fairSubtitle: "देखें कि हम हर चिकनकारी उत्पाद का उचित मूल्य कैसे तय करते हैं।",
    impactTitle: "लखनऊ में हमारा प्रभाव",
    artisans: "सशक्त कारीगर",
    trades: "न्यायपूर्ण व्यापार",
    listings: "सत्यापित उत्पाद सूची",
    trendingTitle: "प्रचलित चिकनकारी डिज़ाइन",
    lucknowTitle: "लखनऊ की एक झलक",
    lucknowText: "लखनऊ सिर्फ एक शहर नहीं — यह सफेद धागों में बुनी भावना है। हर टांका समर्पण और विरासत को दर्शाता है। क्योंकि विरासत सम्मान की हकदार है और कारीगर न्याय के।",
    footerAbout: "एक पारदर्शी बाज़ार जो लखनऊ के चिकनकारी कारीगरों को जागरूक ग्राहकों से जोड़ता है।",
    madeWith: "❤️ के साथ लखनऊ में निर्मित"
  },

  ur: {
    heroTitle: "شفاف قیمتیں۔ <br> بااختیار کاریگر۔",
    heroText: "رنگریز لکھنؤ کے چکنکاری ہنرمندوں کو براہِ راست خریداروں سے جوڑتا ہے، تاکہ منصفانہ اجرت، شفاف قیمتیں اور ہر ٹانکے میں کہانی یقینی بن سکے۔",
    storyTitle: "دھاگے کے پیچھے کے ہاتھ",
    storyText1: "دو خواتین ہنرمند خاموش ماحول میں سفید کپڑے پر باریک کشیدہ کاری کر رہی ہیں۔ وہ سوئی اور دھاگے سے پیچیدہ نقش بنا رہی ہیں۔",
    storyText2: "یہ کپڑا صبر اور روایتی مہارت کی عکاسی کرتا ہے۔ ان کے تاثرات توجہ اور خالص فن کو ظاہر کرتے ہیں۔",
    fairTitle: "منصفانہ قیمت کا نظام",
    fairSubtitle: "دیکھیں کہ ہم ہر چکنکاری مصنوعات کی منصفانہ قیمت کیسے طے کرتے ہیں۔",
    impactTitle: "لکھنؤ میں ہمارا اثر",
    artisans: "بااختیار ہنرمند",
    trades: "منصفانہ تجارت",
    listings: "تصدیق شدہ مصنوعات",
    trendingTitle: "مقبول چکنکاری ڈیزائن",
    lucknowTitle: "لکھنؤ کی ایک جھلک",
    lucknowText: "لکھنؤ صرف ایک شہر نہیں — یہ سفید دھاگوں میں بنی ایک کیفیت ہے۔ ہر ٹانکا روایت اور وقار کی عکاسی کرتا ہے۔ کیونکہ وراثت عزت کی مستحق ہے اور ہنرمند انصاف کے۔",
    footerAbout: "ایک شفاف مارکیٹ پلیس جو لکھنؤ کے چکنکاری ہنرمندوں کو باشعور خریداروں سے جوڑتی ہے۔",
    madeWith: "❤️ کے ساتھ لکھنؤ میں تیار کیا گیا"
  }
};


document.querySelectorAll("[data-lang]").forEach(button => {
  button.addEventListener("click", e => {
    e.preventDefault();

    const lang = button.getAttribute("data-lang");
    const elements = document.querySelectorAll("[data-key]");

    elements.forEach(el => {
      const key = el.getAttribute("data-key");
      el.innerHTML = translations[lang][key];
    });

    document.querySelector(".dropdown-menu").classList.remove("show");
  });
});


/* =============================
   HAMBURGER TOGGLE
============================= */

document.addEventListener("DOMContentLoaded", function () {

  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!hamburger || !navMenu) return;

  // Toggle menu
  hamburger.addEventListener("click", function () {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
  });

  // Close when link clicked
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      hamburger.classList.remove("active");
    });
  });

  // Close when clicking outside
  document.addEventListener("click", function (e) {
    if (
      navMenu.classList.contains("active") &&
      !navMenu.contains(e.target) &&
      !hamburger.contains(e.target)
    ) {
      navMenu.classList.remove("active");
      hamburger.classList.remove("active");
    }
  });

});

let isRegister = false;

/* MESSAGE HELPER FUNCTION */
function showMessage(msg, type = "error") {
  const msgBox = document.getElementById("authMessage");
  msgBox.style.display = "block";
  msgBox.innerText = msg;
  msgBox.className = `auth-message ${type}`; // Add 'error' or 'success' class
}

function clearMessage() {
  const msgBox = document.getElementById("authMessage");
  msgBox.style.display = "none";
  msgBox.innerText = "";
  msgBox.className = "auth-message";
}

/* OPEN MODAL */
function openLogin(){
  document.getElementById("authModal").style.display="flex";
  isRegister = false;
  updateAuthUI();
  clearMessage(); // Naya open hone pe purane messages clear
}

function openRegister(){
  document.getElementById("authModal").style.display="flex";
  isRegister = true;
  updateAuthUI();
  clearMessage(); 
}

function closeAuth(){
  document.getElementById("authModal").style.display="none";
  clearMessage();
}

/* TOGGLE */
function toggleAuth(){
  isRegister = !isRegister;
  updateAuthUI();
  clearMessage(); // Login se register switch karte waqt error hata dein
}

/* UPDATE UI */
function updateAuthUI(){
  const title = document.getElementById("authTitle");
  const nameField = document.getElementById("authName");
  const submitBtn = document.getElementById("authSubmit");
  const toggleText = document.getElementById("toggleText");

  if(isRegister){
    title.innerText = "Register";
    nameField.style.display = "block";
    submitBtn.innerText = "Register";
    toggleText.innerHTML = `Already have an account?
      <span onclick="toggleAuth()" style="color:#c47a2c; cursor:pointer; font-weight:600;">
      Login</span>`;
  } else {
    title.innerText = "Login";
    nameField.style.display = "none";
    submitBtn.innerText = "Login";
    toggleText.innerHTML = `Don’t have an account?
      <span onclick="toggleAuth()" style="color:#c47a2c; cursor:pointer; font-weight:600;">
      Register</span>`;
  }
}

/* SUBMIT */
function submitAuth(){
  clearMessage(); // Button click hote hi pehle purana msg hatao

  // .trim() use kiya hai taaki khali spaces type karne pe error aaye
  const name = document.getElementById("authName").value.trim();
  const email = document.getElementById("authEmail").value.trim();
  const password = document.getElementById("authPassword").value.trim();

  if(!email || !password){
    showMessage("Please fill all fields", "error");
    return;
  }

  if(isRegister){
    if(!name){
      showMessage("Enter your name", "error");
      return;
    }

    localStorage.setItem("userData", JSON.stringify({name,email,password}));
    showMessage("Registration successful! Switching to login...", "success");
    
    // Register hone ke baad 1.5 seconds wait karke automatically login screen laayega
    setTimeout(() => {
      isRegister = false;
      updateAuthUI();
      clearMessage();
    }, 1500);

  } else {
    const saved = JSON.parse(localStorage.getItem("userData"));

    if(saved && saved.email === email && saved.password === password){
      localStorage.setItem("loggedUser", saved.name);
      loadUser();
      closeAuth(); // Login success hote hi modal close
    } else {
      showMessage("Invalid email or password", "error");
    }
  }
}

/* LOAD USER */
function loadUser(){
  const user = localStorage.getItem("loggedUser");

  if(user){
    // In IDs ko apne navbar ke hisaab se use kijiye
    if(document.getElementById("authButtons")) document.getElementById("authButtons").style.display="none";
    if(document.getElementById("navUser")) document.getElementById("navUser").style.display="flex";
    if(document.getElementById("welcomeUser")) document.getElementById("welcomeUser").innerText="Hi, " + user;
  }
}

/* LOGOUT */
function logout(){
  localStorage.removeItem("loggedUser");
  if(document.getElementById("authButtons")) document.getElementById("authButtons").style.display="flex";
  if(document.getElementById("navUser")) document.getElementById("navUser").style.display="none";
}

document.addEventListener("DOMContentLoaded", loadUser);