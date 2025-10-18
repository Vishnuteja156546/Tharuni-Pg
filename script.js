const roomData = {
  coliving: {
    '1share': {
      title: '1-Sharing Room - ₹14,000/month',
      emoji: '🛏️',
      description: 'Premium single room with attached bathroom',
      features: ['AC Room', 'Attached Private Bathroom', 'WiFi Included', 'Mini Fridge', 'Study Table', 'Wardrobe', 'Daily Cleaning', 'Laundry Service', '3 Meals Daily', 'Bike Parking', '24/7 CCTV Security']
    },
    '2share': {
      title: '2-Sharing Room - ₹8,000/month',
      emoji: '🛏️🛏️',
      description: 'Comfortable room shared with one person',
      features: ['AC Room', 'Shared Bathroom', 'WiFi Included', 'Study Tables', 'Wardrobes', 'Daily Cleaning', 'Laundry Service', '3 Meals Daily', 'Bike Parking', '24/7 CCTV Security', 'Gaming Setup']
    },
    '3share': {
      title: '3-Sharing Room - ₹6,500/month',
      emoji: '🛏️🛏️🛏️',
      description: 'Budget-friendly room with excellent amenities',
      features: ['AC Room', 'Common Bathroom', 'WiFi Included', 'Study Tables', 'Wardrobes', 'Daily Cleaning', 'Laundry Service', '3 Meals Daily', 'Bike Parking', '24/7 CCTV Security', 'Carrom Board']
    }
  },
  boys: {
    '1share': {
      title: '1-Sharing Room - ₹13,000/month',
      emoji: '🛏️',
      description: 'Premium room with attached bathroom',
      features: ['AC Room', 'Attached Private Bathroom', 'Study Table', 'WiFi', 'Daily Housekeeping', 'Washing Machine', '3 Meals Daily', 'Biometric Security', 'Bike Parking', '24/7 CCTV', 'Common TV Room']
    },
    '2share': {
      title: '2-Sharing Room - ₹8,000/month',
      emoji: '🛏️🛏️',
      description: 'Spacious room for two friends',
      features: ['AC Room', 'Shared Bathroom', 'Study Tables', 'WiFi', 'Daily Housekeeping', 'Washing Machine', '3 Meals Daily', 'Biometric Security', 'Bike Parking', '24/7 CCTV', 'Study Room']
    },
    '3share': {
      title: '3-Sharing Room - ₹7,000/month',
      emoji: '🛏️🛏️🛏️',
      description: 'Value option with great amenities',
      features: ['Fan Room', 'Common Bathroom', 'Study Tables', 'WiFi', 'Daily Housekeeping', 'Washing Machine', '3 Meals Daily', 'Biometric Security', 'Bike Parking', '24/7 CCTV', 'Common TV Room']
    },
    '4share': {
      title: '4-Sharing Room - ₹6,000/month',
      emoji: '🛏️🛏️🛏️🛏️',
      description: 'Most economical option',
      features: ['Fan Room', 'Common Bathroom', 'Study Tables', 'WiFi', 'Daily Housekeeping', 'Washing Machine', '3 Meals Daily', 'Biometric Security', 'Bike Parking', '24/7 CCTV', 'Recreational Area']
    }
  },
  girls: {
    '1share': {
      title: '1-Sharing Room - ₹13,000/month',
      emoji: '🛏️',
      description: 'Premium room with full privacy',
      features: ['AC Room', 'Attached Private Bathroom', 'Wardrobe', 'WiFi', 'Daily Cleaning', 'Washing Machine', '3 Meals Daily', 'Biometric Entry', 'Warden on Duty', '24/7 CCTV', 'Female Security']
    },
    '2share': {
      title: '2-Sharing Room - ₹8,000/month',
      emoji: '🛏️🛏️',
      description: 'Comfortable shared room',
      features: ['AC Room', 'Shared Bathroom', 'Wardrobes', 'WiFi', 'Daily Cleaning', 'Washing Machine', '3 Meals Daily', 'Biometric Entry', 'Warden on Duty', '24/7 CCTV', 'Recreation Room']
    },
    '3share': {
      title: '3-Sharing Room - ₹7,000/month',
      emoji: '🛏️🛏️🛏️',
      description: 'Cosy room for three',
      features: ['Fan Room', 'Common Bathroom', 'Wardrobes', 'WiFi', 'Daily Cleaning', 'Washing Machine', '3 Meals Daily', 'Biometric Entry', 'Warden on Duty', '24/7 CCTV', 'Study Area']
    },
    '4share': {
      title: '4-Sharing Room - ₹6,000/month',
      emoji: '🛏️🛏️🛏️🛏️',
      description: 'Budget-friendly with all basics',
      features: ['Fan Room', 'Common Bathroom', 'Wardrobes', 'WiFi', 'Daily Cleaning', 'Washing Machine', '3 Meals Daily', 'Biometric Entry', 'Warden on Duty', '24/7 CCTV', 'Common Area']
    }
  }
};

// Open Room Modal with GitHub Images
function openRoomModal(pgType, roomType) {
  const modal = document.getElementById('roomModal');
  const body = document.getElementById('roomModalBody');
  const data = roomData[pgType][roomType];

  const imageBase = `https://raw.githubusercontent.com/Vishnuteja156546/Tharuni-Pg/main/${roomType}_${pgType}`;
  const imageExtensions = ['webp', 'jpg', 'jpeg'];

  const imageHtml = imageExtensions.map(ext => 
    `<img src="${imageBase}.${ext}" alt="${pgType} ${roomType}" 
      style="width:100%; border-radius:12px; margin-bottom:1rem; object-fit:cover;">`
  ).join('');

  body.innerHTML = `
    <h2 style="color: #4ecdc4; margin-bottom: 1rem;">${data.emoji} ${data.title}</h2>
    ${imageHtml}
    <p style="color: rgba(255, 255, 255, 0.8); font-size: 1.1rem; margin-bottom: 1.5rem;">${data.description}</p>

    <h3 style="color: #ffd700; margin: 1.5rem 0 1rem;">What's Included:</h3>
    <ul style="list-style: none; margin-bottom: 2rem;">
      ${data.features.map(f => `<li style="padding: 0.6rem 0; color: rgba(255, 255, 255, 0.8); border-bottom: 1px solid rgba(255, 255, 255, 0.1);">✓ ${f}</li>`).join('')}
    </ul>

    

    <button onclick="closeRoomModal()" style="width: 100%; padding: 1rem; background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%); color: white; border: none; border-radius: 10px; font-weight: 800; cursor: pointer; font-size: 1rem;">Close</button>
  `;

  modal.classList.add('active');
}

function closeRoomModal() {
  document.getElementById('roomModal').classList.remove('active');
}

document.getElementById('roomModal').onclick = function(event) {
  if (event.target === this) closeRoomModal();
};

function filterPGs(type) {
  const cards = document.querySelectorAll('.pg-card');
  const buttons = document.querySelectorAll('.type-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  cards.forEach(card => {
    if (type === 'all' || card.dataset.type === type) card.classList.remove('hidden');
    else card.classList.add('hidden');
  });
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function scrollToContact(pgType) {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function callPhone(phoneNumber) {
  window.location.href = `tel:+91${phoneNumber}`;
}

// ✅ Updated Open Maps with exact location links
function openMaps(pgType) {
  let mapsUrl = "";
  switch (pgType) {
    case "girls":
      mapsUrl = "https://www.google.com/maps/place/THARUNI+LADIES+P.G+(New),+#73,Doresanipalya,Bilekahalli,near,Kalyani+Kala+Mandir,Bangalore+-+560076";
      break;
    case "boys":
      mapsUrl = "https://www.google.com/maps/place/Tharuni+pg+for+gents+(Cmr+University+harsha),+Cmr+University,+opposite+Bayapanahalli,+Srinivasa+Nagar,+Byappanahalli,+Bengaluru,+Karnataka+562149";
      break;
    case "coliving":
      mapsUrl = "https://www.google.com/maps/place/Aadhya+Premium+Colive+and+PG,+12,+1st+Main+Rd,+3rd+cross,+Srinivasa+layout,+Kattigenahalli,+Bengaluru,+Karnataka+560064";
      break;
    default:
      mapsUrl = "https://www.google.com/maps";
  }
  window.open(mapsUrl, "_blank");
}

function viewDetails(pgType) {
  alert(`Click on any room type to see detailed amenities and features!\n\nFor more information:\n\nCo-Living: +91 98765 43210\nBoys PG: +91 98765 43211\nGirls PG: +91 98765 43212`);
}

function handleFeedbackSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const pgType = document.getElementById('pgType').value;
  const feedbackType = document.getElementById('feedbackType').value;
  const message = document.getElementById('message').value;
  alert(`Thank you for your feedback!\n\nName: ${name}\nPhone: ${phone}\nPG: ${pgType}\nType: ${feedbackType}\nMessage: ${message}`);
  event.target.reset();
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href && href !== '#') {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('.pg-card, .contact-card, .feedback-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'all 0.6s ease';
  observer.observe(el);
});
