# Sahaj Shikshya - Grade 11 Team Project

**Team**: Team Digira  
**Project Type**: Educational Platform Web Application  
**Status**: In Development

---

## Project Overview

**Sahaj Shikshya** is a comprehensive educational platform designed to help students with crucial life decisions regarding higher education. The platform provides tools for comparing universities, exploring scholarship opportunities, and calculating education loans. It features a modern, responsive design with advanced animations and a sleek user interface built on contemporary web technologies.

### Key Features

- **3D Globe Animation**: Interactive Three.js visualization on the landing page showcasing global reach
- **User Authentication**: Login and signup pages for user account management
- **Dashboard System**: Comprehensive dashboard with collapsible sidebar navigation
- **University Exploration**: Browse and view information about universities worldwide
- **Scholarship Finder**: Discover available scholarships and opportunities
- **Loan Calculator**: Calculate education loan requirements
- **University Comparison**: Compare multiple universities side-by-side
- **Alternative Suggestions**: Get suggestions for alternative educational paths
- **Responsive Design**: Full mobile, tablet, and desktop responsiveness
- **Modern UI**: Glassmorphism effects, smooth animations, and professional styling

---

## Technology Stack

### Frontend
- **HTML5** - Semantic markup and structure
- **CSS3** - Custom styling with advanced features
- **Vanilla JavaScript** - Interactive functionality without external dependencies
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **DaisyUI** - Pre-built Tailwind components for consistency

### Libraries & Tools
- **Three.js** (r128) - 3D graphics and WebGL rendering for globe animation
- **Google Fonts** - Typography (Inter, Space Grotesk, DM Sans, Sora)
- **Animate.css** - Pre-built CSS animations
- **Chart.js** - Data visualization (for future enhancements)
- **AOS (Animate On Scroll)** - Scroll-triggered animations

### Data Storage
- **JSON** - Static data storage for countries and university rankings

---

## Project Structure

```
project/
│
├── index.html                          # Landing page (main entry point)
├── landing.html                        # Alternative landing page
├── README.md                           # Project documentation (this file)
│
├── assets/
│   └── images/                         # Image resources and graphics
│
├── css/
│   ├── styles.css                      # Global styles and theme configuration
│   ├── variables.css                   # (Empty - reserved for CSS variables)
│   ├── sidebar.css                     # Sidebar styling with blob animations
│   ├── dashboard.css                   # Dashboard-specific styles
│   ├── responsive.css                  # (Empty - responsive design utilities)
│   └── (additional styling files)
│
├── data/
│   ├── countries.json                  # (Empty - country data storage)
│   └── university_rankings.json        # (Empty - university ranking data)
│
├── documentation/
│   └── planning.md                     # Project planning and technology stack
│
├── js/
│   ├── main.js                         # (Empty - main application logic)
│   ├── ui.js                           # UI interactions and 3D globe initialization
│   ├── calculator.js                   # (Empty - calculator functionality)
│   ├── data.js                         # (Empty - data management)
│   └── storage.js                      # (Empty - local storage handling)
│
└── pages/
    ├── auth/
    │   ├── login.html                  # User login page
    │   └── signup.html                 # User registration page
    │
    └── dashboard/
        ├── home.html                   # Dashboard home with latest news
        ├── universities.html           # University listing and exploration
        ├── scholarships.html           # Scholarship opportunities
        ├── loan.html                   # Education loan calculator
        ├── comparision.html            # University comparison tool
        └── alternatives.html           # Alternative education suggestions
```

---

## File Contents & Descriptions

### Core HTML Files

#### `index.html`
**Purpose**: Main landing page with 3D globe animation  
**Key Features**:
- Tailwind CSS configuration with custom color scheme
- Three.js integration for 3D globe visualization
- Google Fonts: Inter (400, 500, 600), Space Grotesk (400, 500, 600, 700)
- Custom CSS variables for theming
- Responsive container for globe animation
- Grain overlay effect for visual enhancement

#### `landing.html`
**Purpose**: Alternative landing page (similar to index.html)  
**Features**: Same as index.html with identical structure and styling

### Authentication Pages

#### `pages/auth/login.html`
**Purpose**: User login functionality  
**Features**:
- Responsive two-panel layout (left panel for branding on desktop)
- Mobile top bar for small screens
- Floating animations on elements
- Fade-up animations with staggered delays
- Google Fonts: Inter (300, 400, 500, 600), Space Grotesk (600, 700)
- Tailwind CSS with custom color extensions
- Dark theme on left panel with light right panel

#### `pages/auth/signup.html`
**Purpose**: User registration  
**Features**:
- Similar layout to login page
- Responsive flex layout (desktop side-by-side, mobile stacked)
- Grain texture overlay effect
- Mobile top bar with logo and action links
- Multiple fade-up animations with progressive delays
- DM Sans and Sora font family integration

### Dashboard Pages

#### `pages/dashboard/home.html`
**Purpose**: Main dashboard landing page  
**Features**:
- Collapsible sidebar with animated blobs
- Navigation with icons and badges
- Latest news scrollable section
- Dark glass-morphism effects
- Active navigation state tracking
- Responsive design with drawer overlay

#### `pages/dashboard/universities.html`
**Purpose**: University exploration and listing  
**Features**:
- University listing interface
- Sidebar navigation with "New" badge indicator
- Glass-morphism design patterns
- Icons for each navigation item
- Responsive layout structure

#### `pages/dashboard/scholarships.html`
**Purpose**: Scholarship discovery and information  
**Features**:
- Scholarship opportunity listings
- Sidebar navigation system
- Money/funding icon in navigation
- Glass-morphism card design
- Responsive grid layout

#### `pages/dashboard/loan.html`
**Purpose**: Education loan calculator  
**Features**:
- Loan calculation interface
- Dashboard sidebar navigation
- Currency/loan icon in navigation
- Input form structure for loan parameters
- Responsive design

#### `pages/dashboard/comparision.html` (Note: Typo in filename - should be "comparison")
**Purpose**: University comparison tool  
**Features**:
- Side-by-side university comparison
- Multiple comparison parameters
- Comparison chart visualization
- Sidebar navigation
- Responsive comparison grid

#### `pages/dashboard/alternatives.html`
**Purpose**: Alternative education suggestions  
**Features**:
- Alternative pathway suggestions
- Recommendation interface
- Sidebar navigation
- Glass-morphism cards
- Responsive layout

---

## CSS Files

### `css/styles.css`
**Purpose**: Global styles and theme configuration  
**Contents**:
- CSS custom properties (variables) for colors:
  - Primary: `#2563eb` (Blue)
  - Primary Dark: `#1d4ed8`
  - Accent Yellow: `#fcd34d`
  - Accent Green: `#059669` (with dark variant)
  - Accent Red: `#dc2626`
  - Gray scale: 100, 300, 400, 900
- Shadow definitions (green, large)
- Transition timing and easing functions
- Body background color and overflow settings
- Grain overlay effect (fixed, full-screen, pointer-events: none)
- Glass-morphism card classes (`.glass-card`, `.dark-glass-card`)
- Text highlight with accent yellow
- Scroll indicator with bounce animation
- Service card hover effects
- Canvas container positioning
- Utility classes for consistent styling

### `css/sidebar.css`
**Purpose**: Sidebar and dashboard styling  
**Contents**:
- Reset styles (margin, padding, box-sizing)
- Font smoothing for cross-browser consistency
- CSS custom properties:
  - Colors: Blue, Dark Blue, Deep Blue, Slate
  - Dimensions: Sidebar width (264px), collapsed width (76px), topbar height (60px)
  - Border radius: XL, LG, MD
  - Glass-morphism properties (background, border, shadow)
  - Topbar styling
- Body background with radial gradient overlays
- Blob canvas animations and positioning
- Blob element styling (5 blobs with different animations)
- Complex animations (blob1, blob2, blob3, blob4, blob5)
- Sidebar layout with glass effect
- Navigation item styling with hover effects
- Responsive breakpoints for sidebar collapse
- Dark glass card styling

### `css/dashboard.css`
**Purpose**: Dashboard-specific component styles  
**Contents**:
- News/content card styling (`.latest-news`)
- Scrollable section styling with custom scrollbar
- Webkit scrollbar styling (track, thumb, hover states)
- Firefox scrollbar color configuration
- News item cards (`.news-home`) with:
  - Gradient backgrounds
  - Subtle top border effect
  - Hover animations and transformations
  - Shadow effects on hover
  - Gradient background transitions
- Typography for news items
- Spacing and layout utilities
- Transitions and animations for interactive elements

### `css/variables.css`
**Status**: Currently empty - reserved for CSS variable definitions

### `css/responsive.css`
**Status**: Currently empty - reserved for responsive design utilities

---

## JavaScript Files

### `js/ui.js`
**Purpose**: User interface interactions and animations  
**Current Contents**:
- Navbar menu toggle functionality:
  - `openMenu` button event listener
  - `closeMenu` button event listener
  - Class manipulation for mobile menu show/hide
  - Uses Tailwind utility classes (max-md:w-0, max-md:w-full)

- 3D Globe Animation (`initHeroGlobe` function):
  - Three.js scene initialization
  - WebGL renderer setup with antialiasing
  - Dynamic pixel ratio for device optimization
  - Three-light system (ambient, directional, point)
  - Sphere geometry for globe (64 segments)
  - Phong material with transparency and shininess
  - Wireframe overlay for visual effect
  - Particle system for "student" representation
  - Connecting lines (pathways) between points
  - Camera setup with perspective projection
  - Responsive canvas sizing
  - Particle material with opacity and size attenuation

### `js/main.js`
**Status**: Currently empty - reserved for main application logic

### `js/calculator.js`
**Status**: Currently empty - reserved for loan calculator functionality

### `js/data.js`
**Status**: Currently empty - reserved for data fetching and processing

### `js/storage.js`
**Status**: Currently empty - reserved for local storage/session management

---

## Data Files

### `data/countries.json`
**Status**: Currently empty - reserved for country data storage

### `data/university_rankings.json`
**Status**: Currently empty - reserved for university ranking data

---

## Documentation

### `documentation/planning.md`
**Purpose**: Project planning and technical requirements  
**Contents**:
- **Technologies to be Used**:
  - Programming Languages: HTML, CSS, Vanilla JavaScript, JSON
  - Frameworks: Tailwind CSS, DaisyUI
  - Libraries: Chart.js, Animate on Scroll (AOS), Animate.css, Three.js

---

## Color Scheme

The project uses a modern blue-based color palette:

| Color Name | Hex Code | Usage |
|-----------|----------|-------|
| Primary Blue | #2563eb | Main brand color, buttons |
| Primary Dark Blue | #1d4ed8 | Darker variant for contrast |
| Deep Blue | #1e3a8a | Text and shadows |
| Slate (Dark BG) | #0f172a | Dark backgrounds |
| Accent Yellow | #fcd34d | Highlights, accents |
| Accent Green | #059669 | Success, positive actions |
| Accent Green Dark | #047857 | Darker variant |
| Accent Red | #dc2626 | Errors, warnings |
| White | #ffffff | Light backgrounds, text |
| Gray 100 | #f1f5f9 | Light backgrounds |
| Gray 300 | #cbd5e1 | Borders, dividers |
| Gray 400 | #94a3b8 | Secondary text |
| Gray 900 | #0f172a | Dark text |

---

## Typography

The project uses carefully selected Google Fonts:

- **Body Font**: Inter (weights: 300, 400, 500, 600)
- **Display Font**: Space Grotesk (weights: 400, 500, 600, 700)
- **Dashboard Font**: DM Sans (weights: 400, 500, 600)
- **Dashboard Display**: Sora (weights: 600, 700, 800)

---

## Key Design Patterns

### Glass-morphism
The UI extensively uses glass-morphism effects with:
- Semi-transparent backgrounds with blur filters
- Subtle borders with low opacity
- Layered shadow effects for depth

### Blob Animations
The sidebar features animated blob shapes:
- 5 animated blobs with different timings
- Radial gradients for depth
- Blur filters for softness
- Complex keyframe animations (22s duration)

### Responsive Design
All pages are fully responsive with:
- Mobile-first approach
- Tailwind CSS media queries (max-md, md, lg, xl)
- Flexible layouts
- Touch-friendly interface

### Animations
- Floating animations (4s duration)
- Fade-up animations with staggered delays (0.1s increments)
- Hover state transitions
- Scroll indicator bounce effect
- Blob morphing animations

---

## Getting Started

1. **Open the project** in a web browser by opening `index.html` or `landing.html`
2. **Navigate to pages** using the provided links
3. **Login/Signup** using the authentication pages
4. **Access dashboard** features through the sidebar navigation
5. **Explore features** like university listings, scholarships, and calculators

---

## Dependencies

All dependencies are loaded via CDN:
- **Tailwind CSS**: cdn.tailwindcss.com
- **Three.js**: cdnjs.cloudflare.com/ajax/libs/three.js/r128
- **Google Fonts**: fonts.googleapis.com

---

## Browser Support

The project uses modern web standards and is best viewed on:
- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

## Future Enhancements

- [ ] Complete JavaScript functionality for all features
- [ ] Implement data storage and retrieval
- [ ] Add loan calculator algorithm
- [ ] Implement university comparison logic
- [ ] Add scholarship filtering and sorting
- [ ] User authentication backend
- [ ] Database integration
- [ ] Admin dashboard for content management
- [ ] More data visualization with Chart.js
- [ ] Multilingual support

---

## Notes for Development

1. **Empty Files**: Several files are currently empty and reserved for future functionality (main.js, calculator.js, data.js, storage.js, countries.json, university_rankings.json, responsive.css, variables.css)
2. **Styling**: The project primarily uses Tailwind CSS with custom CSS for specialized components
3. **3D Graphics**: The globe animation in ui.js is the most complex feature and uses Three.js
4. **Responsive**: The dashboard uses a collapsible sidebar pattern that adapts to screen size

---

## Project Status

- ✅ Landing page with 3D globe animation
- ✅ Authentication pages (UI only)
- ✅ Dashboard layout and navigation
- ✅ Multiple dashboard pages structure
- ✅ Responsive design implementation
- ⏳ Backend functionality (in development)
- ⏳ Database integration (pending)
- ⏳ Feature completion (in progress)

---

*Last Updated: April 27, 2026*