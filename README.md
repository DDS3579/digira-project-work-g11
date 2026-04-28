# Sahaj Shikshya - Educational Platform

**Team**: Team Digira  
**Project Type**: Grade 11 Team Project - Educational Web Application  
**Status**: 🚀 In Active Development

---

## Overview

**Sahaj Shikshya** (meaning "Easy Learning" in Nepali) is a modern educational platform that empowers students to make informed decisions about higher education. The platform offers comprehensive tools for university exploration, scholarship discovery, and education loan calculation—all wrapped in a visually stunning, responsive interface with smooth animations and glass-morphism design.

## ✨ Key Features

- **3D Globe Animation** - Interactive Three.js visualization showcasing global university reach
- **User Authentication** - Secure login/signup system for personalized experiences
- **Comprehensive Dashboard** - Intuitive interface with collapsible sidebar navigation
- **University Exploration** - Browse detailed information about universities worldwide
- **Scholarship Finder** - Discover scholarship opportunities tailored to your needs
- **Loan Calculator** - Calculate education loan requirements with flexible parameters
- **Comparison Tools** - Compare multiple universities side-by-side
- **Alternative Suggestions** - Intelligent recommendations for alternative educational paths
- **Fully Responsive** - Seamless experience on mobile, tablet, and desktop
- **Modern Design** - Glass-morphism effects, smooth animations, and professional styling

---

## 🛠️ Technology Stack

### Frontend
- **HTML5** - Semantic markup and structured content
- **CSS3** - Advanced styling with custom properties and animations
- **Vanilla JavaScript** - Pure JS for interactive functionality (no dependencies)

### Frameworks & Utilities
- **Tailwind CSS** - Utility-first CSS framework for rapid development
- **DaisyUI** - Pre-built Tailwind components for consistency and speed

### Libraries
- **Three.js** (r128) - 3D graphics engine for the interactive globe animation
- **Google Fonts** - Typography (Inter, Space Grotesk, DM Sans, Sora)
- **Animate.css** - Pre-built CSS animations
- **Chart.js** - Data visualization (for future enhancements)
- **AOS (Animate On Scroll)** - Scroll-triggered animations

### Data & Storage
- **JSON** - Static data storage for countries and university rankings

---

## 📁 Project Structure

```
project/
├── index.html                          # Landing page (main entry point)
├── landing.html                        # Alternative landing page variant
├── README.md                           # Project documentation
│
├── assets/
│   └── images/                         # Images and graphic resources
│
├── css/                                # Styling
│   ├── styles.css                      # Global styles and theme configuration
│   ├── sidebar.css                     # Sidebar and dashboard animations
│   ├── dashboard.css                   # Dashboard-specific components
│   ├── pages.css                       # Page-specific styles
│   ├── responsive.css                  # Responsive design utilities
│   ├── universities.css                # University page styles
│   └── variables.css                   # CSS custom properties
│
├── data/
│   ├── countries.json                  # Country data
│   ├── nepalese_university_rankings.json # Nepalese university rankings
│   └── university_rankings.json        # Global university rankings
│
├── documentation/
│   └── planning.md                     # Project planning and specs
│
├── js/                                 # JavaScript modules
│   ├── ui.js                           # UI interactions and 3D globe
│   ├── main.js                         # Main application logic
│   ├── calculator.js                   # Loan calculator functionality
│   ├── data.js                         # Data management and fetching
│   ├── storage.js                      # Local storage handling
│   ├── alternatives.js                 # Alternative suggestions logic
│   └── demo-auth.js                    # Demo authentication
│
└── pages/
    ├── auth/
    │   ├── login.html                  # User login page
    │   └── signup.html                 # User registration page
    │
    └── dashboard/
        ├── home.html                   # Dashboard home with news feed
        ├── universities.html           # University browser
        ├── scholarships.html           # Scholarship explorer
        ├── loan.html                   # Education loan calculator
        ├── comparison.html             # University comparison tool
        └── alternatives.html           # Alternative education paths
```

---

## 📄 File Details

### Landing & Auth Pages
- **index.html / landing.html** - Main entry point with 3D globe animation powered by Three.js
- **pages/auth/login.html** - User login with responsive two-panel layout and animations
- **pages/auth/signup.html** - Registration page with grain texture and fade animations

### Dashboard Pages
All dashboard pages include collapsible sidebar navigation with glass-morphism design:
- **home.html** - Dashboard hub with latest news feed
- **universities.html** - University browser with listings and details
- **scholarships.html** - Scholarship discovery and filtering
- **loan.html** - Interactive education loan calculator
- **comparison.html** - Side-by-side university comparison
- **alternatives.html** - Alternative education path suggestions

### Styling (CSS)
- **styles.css** - Global theme, colors, typography, glass-morphism effects
- **sidebar.css** - Sidebar layout, blob animations, responsive breakpoints
- **dashboard.css** - Card styling, news feed, custom scrollbars
- **Other CSS files** - Page-specific and responsive utilities

### JavaScript
- **ui.js** - Mobile menu toggle and 3D globe initialization
- **main.js, calculator.js, data.js, storage.js** - Feature implementations (in development)
- **demo-auth.js, alternatives.js** - Specialized module functionality

### Data
- **countries.json** - Country reference data
- **university_rankings.json** - Global university rankings
- **nepalese_university_rankings.json** - Nepal-specific university data

## 🎨 Color Palette

| Element | Hex Code | Usage |
|---------|----------|-------|
| Primary Blue | `#2563eb` | Main brand color, buttons, links |
| Primary Dark Blue | `#1d4ed8` | Darker interactive states |
| Deep Blue | `#1e3a8a` | Text on light backgrounds |
| Slate (Dark BG) | `#0f172a` | Dark theme backgrounds |
| Accent Yellow | `#fcd34d` | Highlights and accents |
| Accent Green | `#059669` | Success states, positive actions |
| Accent Red | `#dc2626` | Errors, warnings, alerts |
| Light Gray | `#f1f5f9` | Light backgrounds |
| Gray | `#cbd5e1` | Borders and dividers |
| Dark Gray | `#94a3b8` | Secondary text |

---

## 🔤 Typography

- **Body**: Inter (300, 400, 500, 600) - Clean, modern readability
- **Headings**: Space Grotesk (400, 500, 600, 700) - Bold, distinctive display
- **Dashboard**: DM Sans (400, 500, 600) + Sora (600, 700, 800) - Professional interface

---

## 🎯 Design Patterns

### Glass-morphism
Semi-transparent backgrounds with blur effects, subtle borders, and layered shadows create a modern, frosted glass appearance throughout the UI.

### Blob Animations
Five animated blob shapes in the sidebar with radial gradients and blur filters create organic movement (22s duration animations).

### Responsive Design
Mobile-first approach with Tailwind CSS breakpoints ensuring smooth experiences across all device sizes—no media queries needed for core layouts.

### Animation System
- Floating animations (4s)
- Fade-up staggered delays (0.1s increments)
- Hover transitions and transformations
- Scroll-triggered effects

---

## 🚀 Getting Started

### Quick Start

1. **Clone or download** the project to your local machine
2. **Open `index.html`** in your web browser
3. **Explore** the landing page with 3D globe animation
4. **Navigate** using links to auth pages, dashboard, and features

### Browser Requirements
- Chrome/Edge (latest) ✓
- Firefox (latest) ✓
- Safari (latest) ✓
- Modern browsers with ES6 support

---

## 💡 Development Workflow

### Current Implementation
- ✅ Frontend UI/UX complete
- ✅ 3D globe animation (Three.js)
- ✅ Responsive layouts
- ✅ Animation framework

### In Development
- 🔄 JavaScript feature implementations
- 🔄 Data integration and APIs
- 🔄 User authentication
- 🔄 Calculator algorithms

### Setup for Development
1. Open project files in your code editor
2. Use a local server (e.g., `python -m http.server 8000`)
3. Make changes and test in browser
4. No build step required (vanilla JavaScript)

---

## 📋 Project Checklist

- ✅ Landing page with 3D globe
- ✅ Authentication page layouts
- ✅ Dashboard with sidebar navigation
- ✅ Multiple feature pages
- ✅ Responsive design system
- ✅ Glass-morphism design implementation
- ⏳ JavaScript functionality
- ⏳ Backend APIs
- ⏳ Database integration
- ⏳ Advanced features (filters, sorting, etc.)

---

## 🔗 Dependencies (CDN)

All libraries loaded from trusted CDNs:
- **Tailwind CSS** - css.tailwindcss.com
- **Three.js r128** - cdnjs.cloudflare.com
- **Google Fonts** - fonts.googleapis.com
- No npm/build tools required

---

## 📝 License

This project is part of the Team Digira Grade 11 curriculum project.

---

## 👥 Team

**Team Digira** - Created as a comprehensive educational platform project

---

## 📧 Support & Feedback

For questions, feedback, or contributions, please reach out to the Team Digira development group.

---

*Last Updated: April 28, 2026*