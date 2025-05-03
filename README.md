# All Stars Helsinki

A modern, responsive web application for the All Stars Helsinki sports team. Built with React, Vite, and Tailwind CSS, this project features a clean design, dynamic pages, and a customizable theme using CSS variables.

## Features

- **Responsive Design:** Looks great on all devices.
- **Custom Theming:** Easily change primary colors via `theme.css`.
- **Contact Page:** Stylish contact form and team info.
- **Players, Schedule, Gallery, Join Us:** Modular pages for all team needs.
- **Reusable Components:** Navbar, Footer, and more.
- **Modern Stack:** React, Vite, Tailwind CSS, and Lucide icons.

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/all_stars_helsinki.git
   cd all_stars_helsinki
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. **Open in your browser:**
   Visit [http://localhost:5173](http://localhost:5173)

## Project Structure

```
all_stars_helsinki/
├── public/                # Static assets
│   ├── assets/            # Images and icons
│   ├── components/        # Navbar, Footer, etc.
│   ├── pages/             # Main pages (Contact, Players, etc.)
│   ├── theme.css          # CSS variables for theming
│   ├── App.jsx
│   └── App.css
├── package.json
├── tailwind.config.js
└── README.md
```

## Theming

All main colors are defined in `src/theme.css` as CSS variables.  
To update the color scheme, edit the variables in that file:

```css
:root {
  --color-primary: #0a2342;
  --color-yellow: #e3b04b;
  --color-yellow-hover: #ffd369;
  --color-white: #ffffff;
  --color-light: #f5f5f5;
}
```

## Customization

- **Add new pages:** Create a new file in `src/pages/` and add a route in your router.
- **Update team info:** Edit the content in the relevant page/component.
- **Change images:** Replace or add images in `src/assets/img/`.

## License

This project is for educational and demonstration purposes.

[ JOIN US (text) ]
[ Quote ]

[ Player 1 ][ Player 2 ]
[ Player 3 ][ Become a member ]

---

|Player 1||Player 2|
| |\***\*\_\*\***|
|–––-----| Form |
|Player 3|–––––––––|
| |Player 4 |

---
