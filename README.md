# Quran App - Sheikh Mohamed Ahmed Hassan 📖🎧

A beautifully designed, premium React application built to showcase and play the Quran recitations of Sheikh Mohamed Ahmed Hassan (الشيخ محمد أحمد حسن). 

![Demo Preview](https://via.placeholder.com/800x400.png?text=Quran+React+App+-+Premium+UI)

## ✨ Features

- **Premium UI & Glassmorphism:** A stunning, modern interface with glass-like components and vibrant background gradients.
- **Dark & Light Mode:** Seamless theme switching with custom CSS variables that adapt beautifully to user preference.
- **Custom Audio Player:** A fully personalized audio tracking system with progress bar, duration counting, and playback controls.
- **Responsive Design:** Optimized to look great on both desktop and mobile screens.
- **Zero Config Styling:** Built 100% with Vanilla CSS directly utilizing native features over complex styling frameworks.
- **Modern Arabic Typography:** Utilizing Google Fonts (Cairo & Readex Pro) for crisp, readable Arabic script.

## 🚀 Tech Stack

- **Framework:** [React](https://reactjs.org/) via [Vite](https://vitejs.dev/)
- **Styling:** Vanilla CSS (CSS3)
- **Deployment & Hosting:** Ready for Vercel, Netlify, or GitHub Pages.

## 📥 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/zizoelsadany/quran_mhamed.git
   cd quran_mhamed
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Add Audio Files:**
   Ensure you place the recitation `.mp3` files inside the `public/audio/` directory.

4. **Start the development server:**
   ```bash
   npm run dev
   ```

## 📂 Project Structure

```text
├── public/
│   └── audio/              # Contains the MP3 recitation files
├── src/
│   ├── components/         # Reusable UI components (Header, AudioPlayer, SurahList)
│   ├── data/               # Contains Metadata like surahs.js (mapping files to names)
│   ├── App.jsx             # Main Application Logic & State Wrapper
│   └── index.css           # Global Premium Styling (Theme Variables, Aesthetics)
└── README.md
```

## 👨‍💻 Author

Built by [zizoelsadany](https://github.com/zizoelsadany).

---
*Made with ❤️ for the Holy Quran.*
