# CV Dashboard - Vue.js Project

A modern Vue.js single-page application for showcasing a professional CV/portfolio with component-based architecture and routing.

## 🚀 Features

- **Vue 3** - Modern reactive framework with Composition API
- **Vue Router 4** - Client-side routing with hash-based navigation
- **Component-based Architecture** - Modular, maintainable Vue components
- **EmailJS Integration** - Functional contact form with email sending
- **Responsive Design** - Mobile-friendly interface
- **Vite Build System** - Fast development and optimized production builds

## 📁 Project Structure

```
CursorDemo/
├── index.html              # Vue app entry point
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite build configuration
├── src/
│   ├── main.js            # Vue app bootstrap
│   ├── App.vue            # Root component with navigation
│   ├── router.js          # Vue Router configuration
│   ├── views/             # Page components (routes)
│   │   ├── AboutView.vue
│   │   ├── ExperienceView.vue
│   │   ├── EducationView.vue
│   │   ├── SkillsView.vue
│   │   ├── ProjectsView.vue
│   │   ├── HobbiesView.vue
│   │   ├── AwardsView.vue
│   │   └── ContactView.vue
│   ├── components/        # Reusable components (future)
│   └── assets/            # Static assets
│       ├── css/
│       │   └── styles.css # Main stylesheet
│       └── images/
│           └── Me.png     # Profile image
├── EMAIL_SETUP.md         # Email configuration guide
└── README.md             # This file
```

## 🛠️ Installation & Setup

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Start Development Server:**
   ```bash
   npm run dev
   ```
   Opens at `http://localhost:3000`

3. **Build for Production:**
   ```bash
   npm run build
   ```

4. **Preview Production Build:**
   ```bash
   npm run preview
   ```

## 🎯 Navigation & Routing

- **Hash-based routing**: Clean URLs like `http://localhost:3000/#/about`
- **Active link highlighting**: Current section automatically highlighted
- **Single Page Application**: No page reloads between sections
- **Browser navigation**: Back/forward buttons work perfectly

**Available Routes:**
- `/about` - Personal introduction
- `/experience` - Work experience
- `/education` - Academic background
- `/skills` - Technical skills
- `/projects` - Key projects
- `/hobbies` - Personal interests
- `/awards` - Achievements
- `/contact` - Contact form

## 📧 Email Configuration

The contact form uses EmailJS for sending emails. Configure in `src/main.js`:

```javascript
emailjs.init('YOUR_EMAILJS_PUBLIC_KEY')
```

See `EMAIL_SETUP.md` for complete setup instructions.

## 🔧 Development

**Component Structure:**
```vue
<template>
  <!-- Component HTML -->
</template>

<script>
export default {
  name: 'ComponentName',
  // Component logic
}
</script>

<style scoped>
/* Component-specific styles */
</style>
```

**Adding New Sections:**
1. Create new component in `src/views/`
2. Add route to `src/router.js`
3. Add navigation link to `src/App.vue`

## 📱 Features

- **Reactive Forms**: Real-time validation in contact form
- **Loading States**: Visual feedback during form submission
- **Error Handling**: Graceful error messages
- **Responsive Design**: Optimized for all screen sizes
- **Accessibility**: Semantic HTML and proper form labels

## 🏗️ Build System

- **Vite**: Lightning-fast development server and build tool
- **Hot Module Replacement**: Instant updates during development
- **ES6+ Support**: Modern JavaScript features
- **Optimized Production Builds**: Minified and optimized for performance

## 🎨 Styling

- **Global Styles**: `src/assets/css/styles.css`
- **Component Styles**: Scoped styles in each `.vue` file
- **CSS Grid & Flexbox**: Modern layout techniques
- **Font Awesome Icons**: Professional icon set

## 📚 Technologies Used

- **Vue.js 3** - Progressive JavaScript framework
- **Vue Router 4** - Official routing library
- **Vite** - Next-generation frontend tooling
- **EmailJS** - Email sending service
- **Font Awesome** - Icon library

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

This is a proper Vue.js project with industry-standard structure, making it easy to maintain, extend, and deploy.
