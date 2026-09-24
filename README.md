# 🎨 Deny Yudha Taruna — Portfolio Website

A responsive, dark-themed portfolio that showcases **UI/UX Design** and **Game Design** work, skills and case studies.

> **Status:** 🚧 Under active development. Content, image assets and project case studies are updated regularly.

---

## ✨ Features

- 📱 **Responsive** — optimized for desktop, tablet and mobile.
- 🎯 **Portfolio filter** — browse projects by category (UI/UX, Game, Graphic).
- ⌨️ **Typing animation** — rotating role text on the home page (Typed.js).
- 📜 **Scroll animations** — elements reveal as you scroll (ScrollReveal).
- 🧭 **Smart navigation** — sticky header with automatic active-link highlight.
- 📋 **Quick contact** — one-click WhatsApp chat and copy-to-clipboard email.

## 🛠️ Tech Stack

| Category  | Tools                                                                                                                                                          |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Core      | HTML5, CSS3, JavaScript (ES6+)                                                                                                                                 |
| Libraries | [Boxicons](https://boxicons.com/) · [Typed.js](https://mattboldt.com/demos/typed-js/) · [ScrollReveal](https://scrollrevealjs.org/) · [Poppins](https://fonts.google.com/specimen/Poppins) |

## 📁 Project Structure

```text
├── index.html       # Home — intro plus previews of every section
├── about.html       # Background, approach and education
├── skills.html      # Skills, tools and proficiency levels
├── portfolio.html   # Filterable projects and case studies
├── contact.html     # WhatsApp, email and social links
├── style.css        # Global styles, theme variables, responsive rules
├── script.js        # Navigation, animations, filter, copy email
└── img/             # Images and project mockups
```

## 🚀 Getting Started

1. Clone or download this repository.
2. Open `index.html` in a browser (or use a local server such as VS Code *Live Server*).
3. An internet connection is required to load the icon, font and animation libraries.

## 🧩 Customization

| To change…               | Edit…                                                    |
| ------------------------ | -------------------------------------------------------- |
| Theme colors             | `:root` variables at the top of `style.css`              |
| Typed role texts         | `strings` in section 3 of `script.js`                    |
| Add a portfolio project  | Copy a `.portfolio-card` in `portfolio.html`, then set `data-category` to `uiux`, `game` or `graphic` |
| Contact details          | `contact.html` (and `copyEmail()` in `script.js`)        |

## 🔗 Connect

- GitHub: [@Denyyt](https://github.com/Denyyt)
- Instagram: [@deny_yt](https://www.instagram.com/deny_yt)
