# Swanked Website Project

## 📌 Overview
This project is a multi-page website developed for **Swanked**, a South African streetwear and sneaker marketplace founded in 2013.  

The website translates a design proposal into a functional HTML-based site that reflects street culture, modern UI structure, and user engagement.

---

## 🎯 Objectives
- Create a structured multi-page website  
- Improve navigation and usability  
- Represent streetwear culture digitally  
- Implement engaging content (Journal, Lookbook, Soundscape)  
- Lay the foundation for future interactivity (theme toggle)

---

## 👥 Target Audience
- Gen Z and Millennials  
- Sneaker collectors  
- Urban fashion enthusiasts  

---

## 🌐 Website Pages

| Page | Description |
|------|------------|
| `index.html` | Homepage with intro and navigation |
| `shop.html` | Product display page |
| `about.html` | Brand info + contact form + social links |
| `features.html` | Website functionality overview |
| `journal.html` | Articles + Lookbook + Soundscape |
| `contact.html` | Contact form |

---

## ✨ Features
- Multi-page navigation  
- Semantic HTML structure  
- Contact form  
- Community Lookbook (images)  
- Audio player (Swanked Soundscape)  
- Consistent layout across pages  

---

## 🎨 Design Approach
- Streetwear-inspired aesthetic  
- Minimal, structured layout  
- Mobile-first planning  
- Grid-based layout concept  

### Colour Palette (Proposed)
- **Black** (#000000)  
- **White** (#FFFFFF)  
- **Orange** (#FF4500)  
- **Blue** (#2D5BFF)  

---

## ⚙️ Technologies Used
- HTML (structure)  
- CSS (planned for styling)  
- JavaScript (planned for interactivity)  

---

## 📁 Media Files
Make sure these files are included:
- `look1.jpg`, `look2.jpg`, `look3.jpg`  
- `soundscape.mp3`  
- (Optional) logo + product images  

---

## 🚀 Future Improvements
- Add CSS styling  
- Implement theme toggle (JavaScript)  
- Improve responsiveness  
- Add real product data  
- Connect to live social media  

---

## Sitemap
![Swanked Website Sitemap](Documents/Swanked_Sitemap.png)

## 🎨 Design Philosophy & Architecture

### Theme Infrastructure
The user interface is built around a heavy photographic film aesthetic featuring two distinct view modes:
* **Nocturnal Mode (Default):** A sleek, black-out viewport (`#000000`) paired with sharp white typography and a blazing electric orange/red accent (`#ff4500`).
* **Inverted Mode:** A high-contrast negative film effect that flips dark and light values seamlessly while maintaining the iconic signature accent branding color.

---

 ## 📋Changelog

### ✅ Finished (Part 2 Layout, CSS & worked on changes based on feedback from part 2)
* **Widescreen Brand Identity:** Implemented a full-width, edge-to-edge responsive header banner optimized to scale dynamically across viewports.
* **Component Encapsulation:** Refactored layout architecture using clean semantic groupings (`<header>`, `<section>`) bundled within container `<div>` elements for optimal Flexbox positioning.
* **Pure CSS State Management:** Engineered a fully functional theme toggle utilizing the **CSS Checkbox Hack** (`:has()` and sibling combinator architecture) to manipulate custom variable properties at the `:root` level.
* **Typographic Architecture:** Replaced browser default styles with clean, high-contrast streetwear editorial layouts.## 📋 Project Status & Progress Tracker
    
### Architecture & Layout
    The project is organized into distinct archive sections, utilizing a responsive CSS Grid system to maintain consistency across devices:
-**Archive Page**
- Core Essentials: Introduces the debut collection through a curated lifestyle narrative.
- Street Study: A visual exploration of collective aesthetics, paired with detail-oriented product highlights.
- Soundscape: An interactive integration of brand atmosphere, featuring a centered, event-curated Spotify playlist.

-**Journal**
The Journal page provides a space for community engagement, featuring:
- Curated sneaker and streetwear news.
- A Community Lookbook displaying user styles.
- Integrated Swanked Soundscape playlists.
### Recent Updates
- Transitioned to a 3-column responsive grid layout for all archive sections.
- Implemented dedicated containers for each project drop to ensure visual separation.
- Integrated high-energy event photography alongside the Spotify audio player for a unified brand experience.
---

### ⏳ In Progress(Done)
* **Multipage Synchronization:** Currently setting up structural container layouts and pasting core structural components across alternative project pages (`shop.html`, `Thearchive.html`, `Journal.html`, `Aboutus.html`).
* **Asset Integration:** Exporting custom graphic layouts from Canva to serve as unified high-performance branding banners.

### 2026-05-28 @ 21:40 SAST-Latest Milestone Updates 
* **[2026-06-13 @ 22:03 SAST]** - Added a backgroung image in the about us section on the home page
*  **[2026-06-13 @ 21:35 SAST]**- Added a divider line across all pages on the website
* **[2026-06-13 @ 21:35 SAST]** - `style: clean up redundant cascade definitions and consolidate navigation selectors`
  * Deleted duplicated navbar rule block around line 827 to resolve CSS specificity conflicts and ensure correct link color inheritance.
 * Transitioned to a 3-column responsive grid layout for all archive sections.
- Implemented dedicated containers for each project drop to ensure visual separation.
- Integrated high-energy event photography alongside the Spotify audio player for a unified brand experience.
* **Fixed Browser Cache Blocks:** Successfully implemented hard-reload strategies to bypass stubborn local browser cache locks, ensuring style updates render instantly.
* **Synchronized HTML/CSS Architecture:** Cleaned up and refactored semantic element class bindings (`.section-title`) so the document markup perfectly connects with the stylesheet engine.
* **Engineered Lemkus-Inspired Typography:** Built a premium, fluid hover-expansion typography layout that dynamically scales text and smoothly increases letter-spacing (`letter-spacing: 4px`).
* **Synced Distributed Workspace:** Resolved local/remote repository divergence issues by safely rebasing the codebase (`git pull --rebase`) and locking local files into Git tracking configuration.
* 2026-05-29 @ 09:30 SAST-Implemented a CSS Grid layout for the Archive section to organize concept drops.
* 2026-05-29 @ 08:15 SAST-Integrated a curated Spotify "Soundscape" playlist to enhance brand atmosphere.
* Fixed issues with the background of the contact form.
## About Us Page Refresh
- **Layout Optimization**: Implemented a modern, responsive two-column split-layout for the "About Us" section, pairing brand narrative with immersive store imagery.
- **Thematic Integration**: Updated section headings ("Our Story", "Our Mission") and applied CSS variables to ensure seamless styling between "Nocturnal" and "Electric" modes.
- **Refined Aesthetics**: Streamlined visual hierarchy by removing rigid borders in favor of clean whitespace and responsive typography, enhancing the overall "Swanked" editorial feel.
- **Asset Integration**: Integrated `inside_swanked.png` to anchor the brand identity and provide visual context for the storefront experience.
## Bug Fix: Navigation Theme Visibility
- **CSS Conflict Resolution**: Identified and resolved a specificity conflict between hard-coded color styles and theme-aware CSS variables.
- **2026-05-28 @ 17:30 SAST-Dynamic Theme Implementation**: Updated the navigation CSS to utilize the `var(--text-color)` variable, ensuring the navigation text maintains high contrast against the background in both "Nocturnal" and "Electric" modes.
- **Consistency Optimization**: Standardized navigation link properties to ensure a uniform user experience
## Product Catalog Expansion
- **2026-05-29 @ 18:05 SAST-Grid Layout Implementation**: Integrated a responsive CSS Grid system (`.product-grid`) to display 9 curated products, ensuring a clean, symmetrical layout across different screen sizes.
- **2026-05-29 @ 15:20 SAST-Component Reusability**: Standardized the `product-card` HTML/CSS structure, enabling consistent styling for product meta-data and interactive elements like the "Add to Cart" button.
- **Dynamic Alignment**: Utilized Flexbox within the product cards to align branding, pricing, and action buttons for a polished, professional storefront aesthetic.
## Homepage Dynamic Enhancements
- **2026-05-29 @ 15:20 SAST-Scroll Marquee Implementation**: Added a high-impact, theme-aware CSS marquee to the home page for dynamic messaging.
- **Animation Integration**: Utilized CSS keyframe animations to create a seamless, infinite scroll effect that remains consistent across all site themes.
* **[2026-06-13 @ 20:15 SAST]** - `Fix theme switch button layout and background video spacing`
  * Removed conflicting CSS to fix the broken white box, restored original absolute position coordinates, and made the header video stretch edge-to-edge.
* **[2026-06-13 @ 19:48 SAST]** - `Add background video to homepage header section`
  * Wrapped the main navigation links and banner logo inside a showcase wrapper to play the store video directly in the header background.
* **[2026-06-13 @ 20:45 SAST]** - `style: refactor about page layout to implement responsive side-by-side flex columns`
  * Wrapped brand story and features checklist within a flexible container module to optimize horizontal space utilization based on feedback.
---
## 2026-05-29 @ 22:15 SAST-Testing & Debugging
- **Device Cross-Compatibility**: Conducted responsive testing on desktop, tablet (iPad Pro), and mobile viewports using Chrome DevTools.
- **2026-05-29 @ 10:15 SAST-Hover Interaction Refinement**: Identified that `:hover` states were inconsistent on touch-based devices. Resolved this by refactoring CSS selectors to group `:hover`, `:active`, and `:focus` states, ensuring fluid visual feedback for mouse, touch, and keyboard navigation.
- **Mobile Layout Optimization**: Adjusted grid behaviour to a forced 2-column layout on mobile viewports using `grid-template-columns: repeat(2, 1fr)`, preventing vertical stacking and improving storefront density.
- **Layout Integrity**: Verified that CSS Grid and Flexbox layouts maintained their structure during viewport resizing, ensuring a consistent user experience.
#### Fixed ([v1.0.1] - 2026-06-13 @ 21:48 SAST)
* **CSS Conflict Resolution**: Removed duplicate `.about-hero-bg` definitions that were causing inconsistent theme application.
* **Code Cleanup**: Resolved syntax irregularities and consolidated CSS selector blocks to ensure proper cascading.
* **Theme Engine Optimization**: Finalized the `:root:has(.toggle-checkbox:checked)` logic, ensuring global theme variables propagate correctly across the entire layout.
* **Structural Refinement**: Standardized header and container spacing to prevent layout "flickering" during theme transitions.
### ✅ Finished (Part 3 js)
## [1.0.0] - 2026-06-13 @ 23:33 SAST
### Added
- Theme Engine: "Nocturnal" (default) and "Negative" (light) modes.
- Persistent state management using `localStorage` to remember theme choices.
- Head-level script initialization to bootstrap theme state and minimize render flicker.
- [2026-06-13 @ 11:47 SAST] Form Validation: Implemented `validateForm()` function to handle name, email (Regex), and age range checks.
- [2026-06-13 @ 11:47 SAST] Security: Integrated `.textContent` for error message injection to prevent potential XSS vulnerabilities.
- [2026-06-13 @ 11:47 SAST]  User Feedback: Added dedicated `<p id="errorMsg" class="error"></p>` container to provide real-time validation feedback.
- [2026-06-14 @ 1:20 SAST] **Dynamic Rendering**: Implemented `renderGallery` to generate product cards directly from a central `products` data array.
- [2026-06-14 @ 1:20 SAST] **Search Functionality**: Created `filterProducts` for real-time, case-insensitive searching of product names and categories.
- [2026-06-14 @ 1:20 SAST] **Image Interactivity**: Added `window.open` event listeners to product images, enabling "open in new tab" functionality upon click.
- [2026-06-14 @ 1:20 SAST] **UI Integration**: Added dynamic "Add to Cart" button generation and cart-counter preparation within the gallery template.
- [2026-06-16 @ 17:48 SAST] Dynamic Location Map: Integrated Leaflet.js to display the Swanked headquarters on the About Us page.
- [2026-06-16 @ 17:48 SAST] Security & Stability: Implemented "guard clauses" across validation.js to prevent script crashes on pages without specific DOM elements (gallery/forms).
-[2026-06-14 @ 18:50 SAST] Lightbox Feature: Implemented a custom lightbox overlay for product images in shop.html to improve user experience and image viewing
- [2026-06-14 @ 18:50 SAST] Dynamic Glow Effects: Added interactive box-shadow glow effects to the lightbox, which update dynamically based on the active theme (Blue/Orange).
- [2026-06-14 @ 18:50 SAST] CSS Transitions: Implemented smooth transition properties for border-color and box-shadow shifts during theme switching.
- [2026-06-14 @ 19:35 SAST] AJAX Form Submission: Implemented fetch() API in validation.js to handle contact form submissions asynchronously, preventing full-page reloads.
- [2026-06-14 @ 19:35 SAST] Dynamic Success Feedback: Replaced standard alerts with in-page DOM injection to display "Message Sent" confirmations.
- [2026-06-14 @ 19:35 SAST] Asynchronous Validation: Integrated live form validation that runs before the background request, providing immediate user feedback.
- [2026-06-14 @ 20:25 SAST] SEO Metadata: Implemented unique <meta> descriptions, keywords, and <title> tags for all pages (Home, Shop, Journal, Archive, About Us).
- [2026-06-14 @ 20:25 SAST] Open Graph Support: Added og:title, og:description, and og:url tags to ensure professional link previews on social media.
- [2026-06-14 @ 20:25 SAST] Mobile Optimization: Standardized viewport meta tags across the entire site to ensure responsive rendering on mobile devices.



### Changed
- CSS: Migrated from hardcoded hex values to CSS variable-based theme engine.
- Logic: Standardized all theme-related naming conventions to "negative" across CSS and JavaScript.
- Validation: Cleaned up CSS syntax by removing redundant orphan brackets and streamlining variable scope.
- [2026-06-13 @ 11:47 SAST] Refactored JS: Updated all error injection methods from `.innerHTML` to `.textContent` for improved performance and security.
- [2026-06-13 @ 11:47 SAST] CSS Styling: Added `.error` class to ensure validation messages maintain consistent branding across "Nocturnal" and "Negative" themes.
- [2026-06-14 @ 01:20 SAST] **Rendering Conflict**: Resolved conflicts caused by duplicate hard-coded HTML by moving to a 100% data-driven generation approach.
- [2026-06-14 @ 01:20 SAST] **Initialization**: Added automatic function execution on page load to ensure the gallery populates immediately.
- [2026-06-14 @ 01:20 SAST]  **Data Persistence**: Integrated `JSON.parse` and `JSON.stringify` to maintain cart state across multiple browser pages. 
- [2026-06-14 @ 19:35 SAST] Refactored Contact Form: Removed legacy onsubmit attributes and hardcoded actions to favor modern, event-driven JavaScript listeners.
- [2026-06-14 @ 19:35 SAST] Code Cleanup: Removed redundant age input fields and validation logic, streamlining the contact.html structure.
- [2026-06-14 @ 19:35 SAST]UX Improvements: Implemented dynamic data capture to ensure form inputs are processed and ready for asynchronous transmission.


### Fixed
- Resolved theme-switching conflict where the "Negative" state was not persisting across page navigation.
- Optimized JavaScript execution order to improve theme rendering consistency.
- [2026-06-13 @ 11:47 SAST] Resolved minor layout shifting by applying `min-height` to the error message container.
- [2026-06-16 @ 17:48 SAST] Map Initialization: Corrected execution order of leaflet.js and validation.js to ensure the map container is defined before initialization.
- [2026-06-16 @ 17:48 SAST] Gallery Rendering Logic: Resolved syntax errors in renderGallery to ensure the product grid renders correctly without breaking the script execution.
- [2026-06-16 @ 17:48 SAST] Browser Security: Addressed file:/// origin issues by moving to a local development server workflow for map rendering.
- [2026-06-14 @ 18:50 SAST] Navigation UI: Removed forced window.open behavior in favor of the new modal-based Lightbox to prevent unwanted browser tab clutter.
- [2026-06-14 @ 18:50 SAST]Component Styling: Replaced hardcoded CSS colors with theme-aware selectors to ensure consistency with the user’s selected site theme.

 
### Security & Optimization [2026-06-14 @ 1:20 SAST]
- **Code Consolidation**: Merged redundant display logic into a single source of truth (`renderGallery`).
- **Scalability**: Designed the codebase to support future product additions simply by updating the `products` array.
---
## References
(No date a) Swanked.  
Available at:< https://swanked.co.za/> [Accessed: 09 April 2026].  
(No date b) Pinterest. Available at: 
<https://za.pinterest.com/search/pins/?q=industrial+spaces&rs=typed > [Accessed: 13 
April 2026].  
Admin. (2026). *Website design costs in South Africa: Full pricing breakdown (2026)*. Gridweb Web Design Cape Town, South Africa. Available at: https://gridweb.co.za/website-design-costs-south-africa/ [Accessed: 19 April 2026].  
Chrome Hearts. (nd). *Chrome Hearts Official Store*. Available at: https://www.chromehearts.com/ [Accessed: 10 April 2026].  
Hassabis, D. (2023). *Google Gemini*. Google. Available at: https://gemini.google.com/ [Accessed: 19 April 2026].
Mayor, E. (2025). *Real website costs in South Africa across 7 types compared*. Pretoria Web Design for Proven Leads and Faster Sales Growth. Available at: https://swervedesigns.co.za/real-website-costs-in-south-africa-across-types-compared/ [Accessed: 19 April 2026].  
Moyo, B. (2026). *Website maintenance costs in South Africa*. Symaxx Digital. Available at: https://symaxx.com/blog/website-maintenance-costs-in-south-africa [Accessed: 19 April 2026].
NOCTA. (nd). *Official NOCTA Site*. Available at: https://www.nocta.com/en-za [Accessed: 09 April 2026].
Pin On Design inspi (2025) Pinterest. Available at: 
<https://za.pinterest.com/pin/9640586698229822/  > [Accessed: 10 April 2026].  
Understanding the costs of domain registration and hosting in South Africa ,2025. News, 
Tips and Tricks - Register Domain SA, [blog]. Available at:  
<https://www.registerdomain.co.za/blog/domain-hosting-costs-south
africa/#:~:text=What%20does%20web%20hosting%20cost,simple%20site%20quickly
%20without%20coding.  > [Accessed: 19 April 2026].  
Pin On Fashion Website, 2026.Pinterest. Available at: 
<https://za.pinterest.com/pin/4925880839247944/ >[Accessed: 10 April 2026].  
Pin on RCA,2026. Pinterest. Available at:  
<https://za.pinterest.com/pin/16677461116591430/ >[Accessed: 10 April 2026].  
Pin on website design (2025) Pinterest. Available at: 
<https://za.pinterest.com/pin/1688918606868899/ > [Accessed: 10 April 2026].  
Zonefour (no date) ZONEFOUR. Available at:< https://zonefourclo.com/ > [Accessed: 10 
April 2026]. 

---
## 👤 Author
**Ammaarah Mostert**  
ST10505101  
Web Development (WEDE5020)

---

## 📌 Notes
This project focuses on HTML structure and layout. Styling and advanced functionality can be added in future versions.
