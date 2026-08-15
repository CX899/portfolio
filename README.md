# CX899 Portfolio

Personal portfolio for **Colin Xiong** — Software Engineering student at McGill University (B.Eng., Co-op, May 2027).

**Live site:** https://cx899.github.io/portfolio

## About

Built with React (Create React App) and deployed to GitHub Pages. The site collects my
internship experience (AWS, Shopify, Cisco, Bell Canada, meSO Groupe Inc.), my startup work on
Conex through the McGill Dobson Startup School, and the personal and course projects I've
shipped along the way.

## Local development

```bash
npm install
npm start      # http://localhost:3000
npm run build  # production build
npm run deploy # publish build/ to gh-pages
```

## Structure

- `src/data/user.js` — bio, socials, and the project list rendered across the site
- `src/data/seo.js` — per-page meta descriptions and keywords
- `src/components/homepage/works.jsx` — work experience card
- `src/pages/` — homepage, about, projects, contact

---

Template from [truethari/reactfolio](https://github.com/truethari/reactfolio).
