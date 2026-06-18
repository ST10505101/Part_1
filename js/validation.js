/* =========================================================================
   Switch Theme Validation
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector('.toggle-checkbox');
    
    // Check for saved user preference on Load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'negative') {
        if (themeToggle) themeToggle.checked = true;
        document.documentElement.classList.add('negative');
    }

    // Save preference when user toggles
    if (themeToggle) {
        themeToggle.addEventListener('change', (e) => {
            if (e.target.checked) {
                localStorage.setItem('theme', 'negative');
                document.documentElement.classList.add('negative');
            } else {
                localStorage.setItem('theme', 'nocturnal');
                document.documentElement.classList.remove('negative');
            }
        });
    }
});

/* =========================================================================
   Form Validation (Guarded)
   ========================================================================== */
const contactForm = document.getElementById('simpleForm');

// The Guard Clause: Only run if 'simpleForm' exists on the current page
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        // 1. Prevent default form submission
        event.preventDefault(); 

        // 2. Capture form data
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        const errorMsg = document.getElementById("errorMsg");
        
        // Clear previous errors
        if (errorMsg) errorMsg.textContent = ""; 

        // 3. Validation Logic
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        if (name === "" || email === "" || message === "") {
            if (errorMsg) errorMsg.textContent = "All fields are required.";
            return;
        }

        if (!emailPattern.test(email)) {
            if (errorMsg) errorMsg.textContent = "Please enter a valid email address.";
            return;
        }

        // 4. AJAX Submission
        const payload = { name, email, message };
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        })
        .then(response => response.json())
        .then(data => {
            const container = document.querySelector('.form-container');
            if (container) {
                container.innerHTML = `
                    <h3>Thank You, ${name}!</h3>
                    <p>Your message has been sent successfully.</p>
                `;
            }
        })
        .catch(error => {
            if (errorMsg) errorMsg.textContent = "Something went wrong. Please try again.";
        });
    });
}

/* =========================================================================
   SWANKED MAIN SCRIPT: Gallery, Search, and Cart Logic
   ========================================================================== */

// 1. Data
const products = [
    { name: "New Era Cap", category: "Headwear", price: "R699", image: "Images/newera_cap.jpg" },
    { name: "Nike Air Force 1 Type 2", category: "Footwear", price: "R3,499", image: "Images/Nike_Air.Force 1_type 2.jpg" },
    { name: "Stussy", category: "Clothing", price: "R2,299", image: "Images/Stussy.jpg" },
    { name: "Vanquish T-Shirt", category: "Clothing", price: "R499", image: "Images/vanquish_tee.jpg" },
    { name: "Vanquish Hoodie", category: "Clothing", price: "R899", image: "Images/vanquish_hoodie.jpg" },
    { name: "Nike x NOCTA T-Shirt", category: "Clothing", price: "R1,998", image: "Images/Nike x NOCTA T-Shirt.jpg" },
    { name: "Nike tech fleece", category: "Clothing", price: "R2,399.95", image: "Images/Nike tech fleece.jpg" },
    { name: "Supreme camo hoodie", category: "Clothing", price: "R7,999", image: "Images/Supreme camo hoodie.jpg" },
    { name: "Nike Dunks", category: "Footwear", price: "R1,299", image: "Images/nike_dunks.jpg" }
];

// 2. Global State
let cartTotal = 0;

// 3. Render Function (Updates the UI)
function renderGallery(productList) {
    const gallery = document.getElementById('gallery');
    if (!gallery) return;
    gallery.innerHTML = ""; 

    productList.forEach(p => {
        const item = document.createElement('div');
        item.className = 'product-card';
        item.innerHTML = `
            <div class="product-image-wrapper">
                <img src="${p.image}" alt="${p.name}" loading="lazy" width="300" height="300" class="clickable-image" style="cursor: pointer;">
            </div>
            <div class="product-info">
                <div class="product-text-meta">
                    <span class="product-brand">${p.category}</span>
                    <h3 class="product-title">${p.name}</h3>
                    <span class="product-price">${p.price}</span>
                </div>
                  <button class="add-to-cart-btn" aria-label="Add to cart">

            <div class="cart-icon-wrapper">

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="cart-icon">

                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>

                    <line x1="3" y1="6" x2="21" y2="6"></line>

                    <path d="M16 10a4 4 0 0 1-8 0"></path>

                </svg>

            </div>

        </button>
            </div>
        `;
        gallery.appendChild(item);
    });
}

// 4. Search Function (Global - accessible to HTML onkeyup)
function filterProducts() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const filtered = products.filter(p => 
        p.name.toLowerCase().includes(input) || 
        p.category.toLowerCase().includes(input)
    );
    renderGallery(filtered);
}

// 5. Cart Logic
function addToCart(itemName) {
    // Increment Count
    cartTotal++;
    const countElement = document.getElementById("cart-count");
    if (countElement) countElement.textContent = cartTotal;

    // Trigger Toast
    showToast(`${itemName} added to your cart!`);
}

// 6. UI Helpers
function showToast(message) {
    const toast = document.getElementById("toast");
    if (!toast) return;
    toast.textContent = message;
    toast.style.display = "block";
    setTimeout(() => { toast.style.display = "none"; }, 3000);
}

// 7. Initialize
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('gallery')) {
        renderGallery(products);
    }
});

/*========================================================================
Dynamic Map Validation
==========================================================================*/
const mapElement = document.getElementById('map');

if (mapElement) {
//1. Initialize the map centered at 11 orphan street, Cape Town
const map = L.map('map').setView([-33.9259, 18.4133], 17);

//2. Load OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

//3. Add a marker for the shop
L.marker([-33.9259, 18.4133]).addTo(map)
    .bindPopup('Swanked Apparel - 11 Orphan Street, Cape Town')
    .openPopup();
}

/* =========================================================================
   Lightbox Validation
   ========================================================================== */
   // Add these functions to your validation.js
function openLightbox(imageUrl) {
    document.getElementById('full-image').src = imageUrl;
    document.getElementById('lightbox').style.display = 'flex';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

/* =========================================================================
   Black Flash Fix
   ========================================================================== */
// Remove the 'no-transition' class once the page is fully loaded
window.addEventListener('load', () => {
    document.body.classList.remove('no-transition');
});
