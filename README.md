# Personal Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This portfolio is designed to showcase both hardware and software engineering skills, projects, and experience.

## Features

- Modern and responsive design
- Smooth animations with Framer Motion
- Dark theme with custom color scheme
- Sections for About, Skills, Projects, and Contact
- Mobile-friendly navigation
- Hardware and software skills showcase
- Project portfolio with filtering options
- Contact form
- Social media integration

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Customization

### Personal Information
- Update your name and title in the `Hero` component
- Modify the about text in the `About` component
- Update your contact information in the `Contact` component
- Add your social media links in the `Footer` component

### Skills
Edit the skills arrays in the `Skills` component to match your expertise:
- Hardware skills
- Software skills
- Add or remove skill categories as needed

### Projects
Add your projects in the `Projects` component:
- Project title
- Description
- Technologies used
- Project image
- Link to live demo or repository

### Styling
The color scheme and other styles can be customized in:
- `tailwind.config.js` for theme colors
- `src/index.css` for global styles and component classes

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Framer Motion
- React Router
- Heroicons

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── App.tsx
└── index.css
```

## License

This project is open source and available under the MIT License.
