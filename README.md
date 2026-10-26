
# 💍 Matrimonial Web Portal (Frontend Overview)
Live:https://ubaidrehman007.github.io/matrimonialweb/index.html
## 📌 About The Project
The **Matrimonial Web Portal** is a modern, responsive, and user-centric matchmaking frontend designed to help individuals find compatible life partners with confidence and safety. The platform focuses on verified identity badges, multi-community compatibility (Religion, Caste, Profession, Location), and transparent membership tiers. It delivers a fast, mobile-first browsing experience without relying on heavy frontend frameworks.

---

## 🎨 Frontend Architecture & Design System

* **Architecture Pattern:** Modular Multi-Page Application (MPA) built with clean separation of concerns (HTML5 for semantic structure, CSS3/Bootstrap 5 for layout & branding, and modular Vanilla ES6+ JavaScript for client-side interactivity).
* **Typography & Palette:** Primary font is Google Fonts (*Poppins*). Theme centers on an assertive primary accent (`#dc3545` - Ruby/Crimson Red) paired with a deep dark header/footer (`#212529`) and clean neutral backgrounds (`#f8f9fa`) to maintain trust and legibility.
* **Responsive Layout:** 12-column flexbox grid powered by Bootstrap 5, fully adapted for mobile, tablet, and desktop viewports.
* **Visual Effects:** Micro-interactions, soft card elevations (`box-shadow`), image zoom transitions on hover, entry animations via Animate.css, and dynamic status badges.

---

## 📄 Page Breakdown & Functionality

1. **Home (`index.html`):**
   * High-impact Hero banner with quick registration and browse calls-to-action.
   * Quick-search widget for fast matching by partner gender, religion, and location.
   * Live statistics counter showing registered members, matches made, and verified ratios.
   * Trust and safety highlights, featured candidate cards, customer success stories, and tiered membership plans.

2. **Search & Discovery (`search.html`):**
   * Multi-attribute filter sidebar (Filter by Gender, Religion, Maximum Age, and City).
   * Real-time DOM profile rendering and dynamic "Profiles Found" counter without full page reload.
   * Direct profile shortlisting toggle with instant heart icon status update.

3. **Candidate Details (`profile-details.html`):**
   * Deep-dive candidate profile card featuring verified badges, educational background, career details, personal bio, and partner expectations.
   * Instant action buttons: "Send Interest" and "Shortlist".

4. **User Onboarding (`register.html` & `login.html`):**
   * Split-screen layout (branding lifestyle visual on one side, clean form inputs on the other).
   * Structured form fields for basic profile attributes, contact info, and credentials.

5. **About Us (`about.html`):**
   * Brand mission statement, privacy-first matchmaking philosophy, and safety standards explanation.

6. **Contact & Helpdesk (`contact.html`):**
   * Interactive query submission form with instant validation feedback.
   * Direct support contacts, office address, working hours, and embedded location map.

---

## ⚙️ Interactive Frontend Features (JavaScript)

* **Multi-Filter Engine:** Client-side array filtering across multiple criteria simultaneously.
* **Scroll-Triggered Number Counters:** Incremental number animation triggered as the user scrolls into the statistics section.
* **Stateful Shortlisting:** Interactive button state toggling between "Shortlist" and "Shortlisted" saved in the DOM.
* **Global Preloader:** Smooth window load detection that fades out the preloader once assets are loaded.
* **Direct Floating Utilities:** Floating WhatsApp widget for fast customer chat and a smooth scroll-to-top floating action button.
