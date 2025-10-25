# Technical Documentation – Assignment 2

**Student:** Khalid Al-Anazi  
**Course:** ICS 344 – Web Engineering  
**Assignment:** 2 – Interactive Features  

---

## 🧩 Overview
This document explains the technical parts of my portfolio website after adding interactivity, data handling, and animations.

---

## 📁 File Summary
| File | Description |
|------|--------------|
| `index.html` | The main webpage containing all sections (About, Projects, Contact). |
| `css/styles.css` | Handles design, purple theme, animations, and responsive layout. |
| `js/script.js` | JavaScript logic for greeting, dark/light mode, search, validation, and fade effects. |

---

## ⚙️ Key Functionalities

### 1. Dynamic Greeting
```js
function updateGreeting() { ... }
```
- Checks the user’s local time and changes the message to “Good morning/afternoon/evening”.
- Updates immediately when the page loads.

---

### 2. Dark/Light Mode Memory
- Uses `localStorage` to save the last selected theme.  
- When the page reloads, it reads that value and applies the same mode automatically.

---

### 3. Live Search Bar
```js
searchBar.addEventListener("input", ...)
```
- Filters project cards in real time.  
- If no project matches, a message “No projects found” appears.

---

### 4. Contact Form Validation
- Checks if all inputs are filled.  
- Shows red warning for empty fields.  
- Simulates sending using a `setTimeout()` to show a loading state.

---

### 5. Fade-In Animation on Scroll
- Adds the `visible` class to project cards when they enter the viewport.  
- Makes the site look smooth and dynamic.

---

## 🎨 Design Details
- **Color palette:** Purple (`#6f42c1`) as primary accent.
- **Fonts:** Default system sans-serif (clean and simple).
- **Layout:** Grid + Flexbox responsive design.
- **Animations:** CSS transitions for buttons, cards, and scrolling fade effects.

---

## 💡 Data Handling
- **LocalStorage:** Used to store theme preference.  
- **Form data:** Handled temporarily in the browser (no backend).

---

## 🧠 AI Integration Summary
- AI was used for **debugging**, **code organization**, and **CSS improvement**.
- The logic and implementation were done manually to match course expectations.

---

## 🧾 Testing
- Tested on Chrome and Firefox browsers.
- Checked on both desktop and mobile view (responsive layout works).
- Verified dark/light mode toggle persistence.

---

## ✅ Conclusion
The portfolio now meets all Assignment 2 requirements:
- Dynamic content  
- Data handling  
- Animation and transitions  
- Error handling and user feedback  
- AI integration with proper documentation  

© 2025 Khalid Al-Anazi
