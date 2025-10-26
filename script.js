// Image URLs
const images = {
  colive: {
    building: 'https://raw.githubusercontent.com/Vishnuteja156546/Tharuni-Pg/main/attachments/colive_pg.png',
    '1share': 'https://raw.githubusercontent.com/Vishnuteja156546/Tharuni-Pg/main/attachments/1_share_colive.png',
    '2share': 'https://raw.githubusercontent.com/Vishnuteja156546/Tharuni-Pg/main/attachments/2_sharing_colive.png',
    '3share': 'https://raw.githubusercontent.com/Vishnuteja156546/Tharuni-Pg/main/attachments/3_share_colive.png',
    dining: 'https://raw.githubusercontent.com/Vishnuteja156546/Tharuni-Pg/main/attachments/Dining_colive.png',
    washing: 'https://raw.githubusercontent.com/Vishnuteja156546/Tharuni-Pg/main/attachments/Screenshot_20251025_085323_Google.jpg',
    tv: 'https://raw.githubusercontent.com/Vishnuteja156546/Tharuni-Pg/main/attachments/Tv_colive.png',
    cctv: 'https://raw.githubusercontent.com/Vishnuteja156546/Tharuni-Pg/main/attachments/cctv.jpg',
    common: 'https://raw.githubusercontent.com/Vishnuteja156546/Tharuni-Pg/main/attachments/common_room.png',
    parking: 'https://raw.githubusercontent.com/Vishnuteja156546/Tharuni-Pg/main/attachments/parking_colive.png'
  },
  gents: {
    building: 'https://raw.githubusercontent.com/Vishnuteja156546/Tharuni-Pg/main/gents/gents_pg.jpg',
    parking: 'https://raw.githubusercontent.com/Vishnuteja156546/Tharuni-Pg/main/gents/parking_gents.jpg'
  }
};

// Location Data
const locations = {
  colive: 'Aadhya Premium Colive and PG, 12, 1st Main Rd, 3rd cross, Srinivasa layout, Kattigenahalli, Bengaluru, Karnataka 560064',
  gents: 'Tharuni pg for gents (Cmr University harsha), Cmr University, opposite Bayapanahalli, Srinivasa Nagar, Byappanahalli, Bengaluru, Karnataka 562149'
};

// Room Data
const roomData = {
  colive: {
    '1share': {
      title: '1-Sharing Room - ₹16,000/month',
      image: images.colive['1share'],
      description: 'Premium single room with all modern amenities and food included',
      features: [
        'Private Room with Temperature Control',
        'Attached Private Bathroom',
        'Mini Fridge in Room',
        'WiFi High-Speed Internet',
        'Study Table & Chair',
        'Spacious Wardrobe',
        'Daily Room Cleaning',
        'Premium Food Included (North & South Indian)',
        '2x Non-Veg Per Week',
        'Eggs Once a Week',
        'Self Cooking Allowed (Stove Provided)',
        'Bike Parking',
        '24/7 CCTV Security',
        'Biometric Entry System'
      ],
      gallery: [
        images.colive['1share'],
        images.colive.dining,
        images.colive.common,
        images.colive.tv
      ]
    },
    '2share': {
      title: '2-Sharing Room - ₹9,000/month',
      image: images.colive['2share'],
      description: 'Comfortable shared room with excellent facilities and food',
      features: [
        'Shared Room',
        'Attached Bathroom',
        'Study Tables for Both',
        'WiFi Included',
        'Wardrobes',
        'Daily Cleaning',
        'Premium Food (Veg & Non-Veg)',
        '2x Non-Veg Weekly',
        'Eggs Weekly',
        'Self Cooking Allowed (Stove Provided)',
        'Gaming Zone Access',
        'TV Room Access',
        'Washing Machine',
        '24/7 Security',
        'Fingerprint Biometric'
      ],
      gallery: [
        images.colive['2share'],
        images.colive.washing,
        images.colive.parking,
        images.colive.cctv
      ]
    },
    '3share': {
      title: '3-Sharing Room - ₹7,000/month',
      image: images.colive['3share'],
      description: 'Budget-friendly option with all essential amenities',
      features: [
        'Shared Room',
        'Common Bathroom',
        'Study Tables',
        'WiFi Access',
        'Storage Space',
        'Daily Cleaning',
        'Food Included (North & South Indian)',
        '2x Non-Veg Weekly',
        'Eggs Weekly',
        'Self Cooking Allowed (Stove Provided)',
        'Common TV Room Access',
        'Indoor Games',
        'Security System',
        'Bike Parking'
      ],
      gallery: [
        images.colive['3share'],
        images.colive.tv,
        images.colive.dining,
        images.colive.common
      ]
    }
  },
  gents: {
    '1share': {
    title: '1-Sharing Room - ₹8,000/month',
    image: 'https://raw.githubusercontent.com/Vishnuteja156546/Tharuni-Pg/main/gents/1share_gents.jpg',
      description: 'Spacious single room near CMR University',
      features: [
        'Private Room',
        'Attached Bathroom',
        'Study Table',
        'WiFi',
        'Wardrobe',
        'Daily Housekeeping',
        'Washing Machine Access',
        '3 Meals Daily',
        'Biometric Security',
        'Bike Parking',
        '24/7 CCTV'
      ],
      gallery: []
    },
    '2share': {
      title: '2-Sharing Room - ₹7,000/month',
      image: 'https://raw.githubusercontent.com/Vishnuteja156546/Tharuni-Pg/main/gents/2share_gents.jpg',
      description: 'Affordable shared accommodation with great facilities',
      features: [
        'Shared Room',
        'Study Tables',
        'WiFi',
        'Wardrobe',
        'Daily Cleaning',
        'Washing Machine',
        '3 Meals Daily',
        'Biometric Entry',
        'Bike Parking',
        'Power Backup'
      ],
      gallery: []
    },
    '3share': {
      title: '3-Sharing Room - ₹6,500/month',
      image: 'https://raw.githubusercontent.com/Vishnuteja156546/Tharuni-Pg/main/gents/3share_gents.jpg',
      description: 'Budget-friendly room with essential amenities',
      features: [
        'Shared Room',
        'Common Bathroom',
        'Study Tables',
        'WiFi',
        'Individual Storage',
        'Daily Housekeeping',
        'Washing Machine',
        '3 Meals Daily',
        'Security System',
        'Bike Parking',
        'Water Purifier',
        'TV Room'
      ],
      gallery: []
    }
  }
};

// Page Navigation
function showPage(pageId) {
  // Hide all pages
  document.querySelectorAll('.page-section').forEach(page => {
    page.classList.add('hidden');
  });
  
  // Show selected page
  const targetPage = document.getElementById(`${pageId}-page`);
  if (targetPage) {
    targetPage.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// Scroll to Section
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Open Room Modal
function openRoomModal(pgType, roomType) {
  const modal = document.getElementById('roomModal');
  const body = document.getElementById('roomModalBody');
  const data = roomData[pgType][roomType];

  let galleryHTML = '';
  if (data.gallery && data.gallery.length > 0) {
    galleryHTML = `
      <div class="room-gallery">
        <div class="main-room-image">
          <img src="${data.image}" alt="${data.title}" style="width: 100%; height: auto; border-radius: 15px; margin-bottom: 1rem;">
        </div>
        <div class="gallery-thumbs">
          ${data.gallery.map(img => `
            <img src="${img}" alt="Room view" style="width: 100px; height: 80px; object-fit: cover; border-radius: 8px; margin: 0.5rem; cursor: pointer; border: 2px solid rgba(255,255,255,0.2);" onclick="changeMainImage('${img}')">
          `).join('')}
        </div>
      </div>
    `;
  } else {
    galleryHTML = `
      <div class="room-image-placeholder" style="width: 100%; height: 300px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 15px; display: flex; align-items: center; justify-content: center; font-size: 4rem; margin-bottom: 1.5rem;">
        ${roomType === '1share' ? '🛏️' : roomType === '2share' ? '🛏️🛏️' : '🛏️🛏️🛏️'}
      </div>
    `;
  }

  body.innerHTML = `
    <h2 style="color: #4ecdc4; margin-bottom: 1.5rem; font-size: 1.8rem;">${data.title}</h2>
    
    ${galleryHTML}
    
    <p style="color: rgba(255, 255, 255, 0.8); font-size: 1.1rem; margin-bottom: 1.5rem; line-height: 1.6;">${data.description}</p>
    
    ${pgType === 'colive' ? `
      <div style="background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%); color: #333; padding: 1.5rem; border-radius: 12px; text-align: center; font-weight: 800; font-size: 1.1rem; margin-bottom: 2rem;">
        🎉 SPECIAL OFFER: Refer a friend & earn ₹1000 direct to your account! <span style="font-size: 0.75rem; display: block; margin-top: 0.3rem; font-weight: 600;">*Terms and conditions apply</span>
      </div>
    ` : ''}
    
    <h3 style="color: #ffd700; margin: 1.5rem 0 1rem; font-size: 1.3rem;">✨ What's Included:</h3>
    <ul style="list-style: none; margin-bottom: 2rem;">
      ${data.features.map(f => `
        <li style="padding: 0.8rem 0; color: rgba(255, 255, 255, 0.9); border-bottom: 1px solid rgba(255, 255, 255, 0.1); display: flex; align-items: center; gap: 0.5rem;">
          <span style="color: #4ecdc4; font-size: 1.2rem;">✓</span>
          <span>${f}</span>
        </li>
      `).join('')}
    </ul>

    ${pgType === 'colive' ? `
      <div style="background: rgba(78, 205, 196, 0.1); padding: 1.5rem; border-radius: 12px; border-left: 4px solid #4ecdc4; margin-bottom: 1.5rem;">
        <h4 style="color: #4ecdc4; margin-bottom: 0.8rem;">🍽️ Premium Food Included:</h4>
        <p style="color: rgba(255, 255, 255, 0.9); line-height: 1.6;">
          • North Indian & South Indian cuisine<br>
          • Veg & Non-Veg options<br>
          • 2x Non-Veg per week<br>
          • Eggs once a week<br>
          • Fresh, hygienic home-cooked meals
        </p>
      </div>

      <div style="background: rgba(255, 215, 0, 0.1); padding: 1.5rem; border-radius: 12px; border-left: 4px solid #ffd700; margin-bottom: 1.5rem;">
        <h4 style="color: #ffd700; margin-bottom: 0.8rem;">🍳 Self Cooking Facility:</h4>
        <p style="color: rgba(255, 255, 255, 0.9); line-height: 1.6;">
          • Stove provided for self-cooking<br>
          • Flexibility to cook your own meals<br>
          • Clean and hygienic cooking space<br>
          • Perfect for those who prefer home-cooked food
        </p>
      </div>

      <div style="background: rgba(255, 215, 0, 0.1); padding: 1.5rem; border-radius: 12px; border-left: 4px solid #ffd700; margin-bottom: 1.5rem;">
        <h4 style="color: #ffd700; margin-bottom: 0.8rem;">🎉 Referral Program:</h4>
        <p style="color: rgba(255, 255, 255, 0.9); line-height: 1.6;">
          Refer a friend to Tharuni Colive, join them & earn ₹1000 directly credited to your account!<br>
          <span style="font-size: 0.85rem; opacity: 0.8; display: block; margin-top: 0.5rem;">* Terms and conditions apply</span>
        </p>
      </div>
    ` : `
      <div style="background: rgba(78, 205, 196, 0.1); padding: 1.5rem; border-radius: 12px; border-left: 4px solid #4ecdc4; margin-bottom: 1.5rem;">
        <h4 style="color: #4ecdc4; margin-bottom: 0.8rem;">🍽️ Food Service:</h4>
        <p style="color: rgba(255, 255, 255, 0.9); line-height: 1.6;">
          • 3 Meals daily included<br>
          • Nutritious and hygienic food<br>
          • North & South Indian options<br>
          • Fresh, home-cooked meals
        </p>
      </div>
    `}

    <button onclick="closeRoomModal()" style="width: 100%; padding: 1.2rem; background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%); color: white; border: none; border-radius: 12px; font-weight: 800; cursor: pointer; font-size: 1.1rem; margin-top: 1rem; transition: all 0.3s ease;">
      Close
    </button>
  `;

  modal.classList.add('active');
}

// Change Main Image in Gallery
function changeMainImage(imageSrc) {
  const mainImage = document.querySelector('.main-room-image img');
  if (mainImage) {
    mainImage.style.opacity = '0';
    setTimeout(() => {
      mainImage.src = imageSrc;
      mainImage.style.opacity = '1';
    }, 200);
  }
}

// Close Room Modal
function closeRoomModal() {
  document.getElementById('roomModal').classList.remove('active');
}

// Close modal on background click
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('roomModal');
  if (modal) {
    modal.onclick = function(event) {
      if (event.target === modal) {
        closeRoomModal();
      }
    };
  }
});

// Call Phone
function callPhone(phoneNumber) {
  window.location.href = `tel:+91${phoneNumber}`;
}

// Open Google Maps
function openMaps(pgType) {
  const location = locations[pgType];
  const mapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(location)}`;
  window.open(mapsUrl, '_blank');
}

// View Details
function viewDetails(pgType) {
  if (pgType === 'colive') {
    showPage('colive');
  } else if (pgType === 'gents') {
    showPage('gents');
  }
}

// Scroll to Contact
function scrollToContact(pgType) {
  const contactCard = document.getElementById(`contact-${pgType}`);
  const contactSection = document.getElementById('contact');
  
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    if (contactCard) {
      setTimeout(() => {
        contactCard.style.transform = 'scale(1.05)';
        contactCard.style.boxShadow = '0 20px 60px rgba(255, 215, 0, 0.5)';
        contactCard.style.borderColor = '#ffd700';
        
        setTimeout(() => {
          contactCard.style.transform = '';
          contactCard.style.boxShadow = '';
          contactCard.style.borderColor = '';
        }, 2000);
      }, 500);
    }
  }
}

// Handle Feedback Submit
function handleFeedbackSubmit(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const pgType = document.getElementById('pgType').value;
  const feedbackType = document.getElementById('feedbackType').value;
  const message = document.getElementById('message').value;

  const feedbackMessage = `
✉️ NEW FEEDBACK RECEIVED

Name: ${name}
Phone: ${phone}
PG: ${pgType === 'colive' ? 'Tharuni Colive' : 'Tharuni Gents PG'}
Type: ${feedbackType}
Message: ${message}

Timestamp: ${new Date().toLocaleString()}
  `.trim();

  alert('Thank you for your feedback! We will get back to you within 24 hours.\n\nYour feedback has been recorded successfully.');
  
  console.log(feedbackMessage);
  
  event.target.reset();
}

// Smooth Scroll for Navigation
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href && href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
});

// Intersection Observer for Scroll Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe elements for animation
window.addEventListener('load', () => {
  document.querySelectorAll('.pg-select-card, .contact-card-new, .feedback-card, .price-card-new').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
  });
});

// Add Building Images to PG Cards on Home Page
document.addEventListener('DOMContentLoaded', function() {
  const pgCards = document.querySelectorAll('.pg-select-card');
  
  pgCards.forEach(card => {
    const heading = card.querySelector('h3');
    
    if (heading && heading.textContent.includes('Colive')) {
      const imageDiv = document.createElement('div');
      imageDiv.style.cssText = 'width: 100%; height: 200px; margin-bottom: 1.5rem; border-radius: 15px; overflow: hidden; box-shadow: 0 8px 24px rgba(0,0,0,0.3);';
      imageDiv.innerHTML = `<img src="${images.colive.building}" alt="Tharuni Colive Building" style="width: 100%; height: 100%; object-fit: cover;">`;
      
      const icon = card.querySelector('.pg-select-icon');
      if (icon) {
        icon.parentNode.insertBefore(imageDiv, icon.nextSibling);
      }
    }
    
    if (heading && heading.textContent.includes('Gents')) {
      const imageDiv = document.createElement('div');
      imageDiv.style.cssText = 'width: 100%; height: 200px; margin-bottom: 1.5rem; border-radius: 15px; overflow: hidden; box-shadow: 0 8px 24px rgba(0,0,0,0.3);';
      imageDiv.innerHTML = `<img src="${images.gents.building}" alt="Tharuni Gents PG Building" style="width: 100%; height: 100%; object-fit: cover;">`;
      
      const icon = card.querySelector('.pg-select-icon');
      if (icon) {
        icon.parentNode.insertBefore(imageDiv, icon.nextSibling);
      }
    }
  });
});

// Console Welcome Message
console.log('%c🏠 Welcome to Tharuni PGs!', 'font-size: 24px; color: #4ecdc4; font-weight: bold;');
console.log('%c✨ Best Stay in Bangalore Near CMR, REVA & IT Parks', 'font-size: 16px; color: #f093fb;');
console.log('%c💰 Colive: Refer & Earn ₹1000! *T&C Apply', 'font-size: 14px; color: #ffd700;');

// Preload Images
window.addEventListener('load', () => {
  Object.values(images.colive).forEach(src => {
    const img = new Image();
    img.src = src;
  });
  
  Object.values(images.gents).forEach(src => {
    const img = new Image();
    img.src = src;
  });
});
