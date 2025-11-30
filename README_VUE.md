# CV Dashboard - Vue.js Standalone Version

This is a standalone Vue.js implementation that runs directly in the browser without requiring Node.js/npm setup.

## 🚀 Features

- **Vue 3** - Modern reactive framework loaded from CDN
- **Vue Router 4** - Client-side routing with hash-based navigation
- **Component-based Architecture** - Modular JavaScript components
- **EmailJS Integration** - Functional contact form with email sending
- **Responsive Design** - Mobile-friendly interface
- **No Build Process** - Runs directly in browser

## 📁 How It Works

The `index.html` file contains:
- **Vue.js & Vue Router** loaded from CDN
- **All components** defined as JavaScript objects
- **Routing configuration** set up programmatically
- **EmailJS integration** for contact form functionality

## 🛠️ Usage

**Simply open `index.html` in your browser!**

No installation, no build process, no development server required. The Vue.js framework and all dependencies are loaded from CDN.

## 🎯 Navigation Features

- **Hash-based routing**: URLs like `index.html#/about`
- **Active link highlighting**: Current section automatically highlighted
- **Smooth transitions**: Vue-powered component switching
- **Browser back/forward**: Full navigation history support

## 📧 Email Configuration

The contact form uses EmailJS with pre-configured credentials. To modify:

1. Update the EmailJS keys in the `ContactView` component in `index.html`
2. Follow the setup guide in `EMAIL_SETUP.md`

## 🔧 Development

To modify the application:
1. Edit the component templates in the JavaScript objects within `index.html`
2. Modify the routing configuration in the same file
3. Update styles in `styles.css`

## 📱 Browser Support

- Modern browsers with ES6 support
- Chrome, Firefox, Safari, Edge
- Mobile browsers supported

## 🎨 Architecture

```
index.html
├── Vue.js (CDN)
├── Vue Router (CDN)
├── EmailJS (CDN)
├── Component Definitions
│   ├── AboutView
│   ├── ExperienceView
│   ├── EducationView
│   ├── SkillsView
│   ├── ProjectsView
│   ├── HobbiesView
│   ├── AwardsView
│   └── ContactView
└── Router Configuration
```

This standalone approach provides the full Vue.js experience without the complexity of build tools, making it perfect for simple projects and demonstrations.
