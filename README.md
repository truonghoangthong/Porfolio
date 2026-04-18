# Personal Portfolio

A personal portfolio website built with vanilla HTML, CSS, and JavaScript. Deployed on Vercel.

Live site: [truonghoangthong.vercel.app](https://truonghoangthong.vercel.app) *(update if needed)*

---

## Project Structure

```
portfolio/
├── assets/                  # Images and static assets
├── index.html               # Main HTML file
├── style.css                # Stylesheet
├── main.js                  # JavaScript (interactions, animations, contact form)
├── vercel.json              # Vercel SPA rewrite config
└── .gitignore
```

---

## Features

- Typing animation (Typed.js)
- Scroll reveal animations (ScrollReveal)
- Project carousel with prev/next navigation
- Contact form via EmailJS (no backend required)
- CV download button (Google Drive link)
- Responsive design — tested from 400px to desktop
- Smooth scroll and active nav link highlight on scroll

---

## Tech Stack

| Layer      | Technology                  |
|------------|-----------------------------|
| Markup     | HTML5                       |
| Styling    | CSS3 (custom, no framework) |
| Scripting  | Vanilla JavaScript          |
| Icons      | Unicons v4.0.8              |
| Animations | Typed.js, ScrollReveal      |
| Email      | EmailJS                     |
| Hosting    | Vercel                      |

---

## Getting Started

No build step needed. Just open `index.html` in a browser, or serve it with any static server:

```bash
npx serve .
```

---

## Configuration

### CV Download

The CV download buttons in `main.js` point to a Google Drive link. To update:

```js
const cvLink = "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID";
```

### Contact Form (EmailJS)

The contact form uses [EmailJS](https://www.emailjs.com/). To configure for your own account, update the following in `main.js`:

```js
emailjs.init("YOUR_PUBLIC_KEY");
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData);
```

---

## Deployment

The site is deployed on Vercel. The `vercel.json` file rewrites all routes to `index.html` for SPA-style navigation:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

To deploy your own copy:

```bash
npm i -g vercel
vercel
```

---
