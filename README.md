# 🎮 8-Bit Portfolio Website

A retro-style portfolio website built with Next.js and NES.css, featuring a gamified experience with achievements, progress tracking, and pixel-perfect 8-bit aesthetics.

## ✨ Features

- **🕹️ Retro 8-bit Design**: Built with NES.css for authentic retro gaming aesthetics
- **🌙 Dark Mode**: Optimized dark theme for comfortable viewing
- **🎯 Gamification**:
  - Score system for user interactions
  - Achievement unlocks
  - Level progression
  - Progress tracking
- **📱 Responsive Design**: Works perfectly on all devices
- **⚡ Performance Optimized**: Built with Next.js 15 and modern best practices
- **🎨 Smooth Animations**: Powered by Framer Motion

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**:
  - NES.css (8-bit UI framework)
  - Tailwind CSS (utility-first CSS)
  - Custom CSS animations
- **Typography**: Press Start 2P (authentic 8-bit font)
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Language**: TypeScript
- **Deployment**: Ready for Vercel/Netlify

## 📋 Sections

1. **🏠 Intro**: Welcome section with animated character and typewriter effect
2. **💼 Experience**: Interactive timeline of professional experience
3. **🚀 Projects**: Filterable project showcase with live demos
4. **⚙️ Technologies**: Categorized skill breakdown with proficiency levels
5. **📧 Contact**: Interactive contact form with social links

## 🎮 Gamification Features

- **Score System**: Earn points for navigation and interactions
- **Achievements**: Unlock rewards for exploring the portfolio
- **Level System**: Progress through levels based on engagement
- **Progress Bars**: Visual feedback for user journey
- **Retro Notifications**: Achievement unlock animations

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone <repository-url>
   cd portfolio2
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Run the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization

### Personal Information

Update the following files with your information:

- \`src/components/sections/IntroSection.tsx\` - Name and introduction
- \`src/components/sections/ExperienceSection.tsx\` - Work experience
- \`src/components/sections/ProjectsSection.tsx\` - Your projects
- \`src/components/sections/TechnologiesSection.tsx\` - Your skills
- \`src/components/sections/ContactSection.tsx\` - Contact information

### Styling

- \`src/app/globals.css\` - Global styles and theme colors
- CSS custom properties for easy color customization
- Responsive breakpoints using Tailwind CSS

### Gamification

- \`src/components/GameProvider.tsx\` - Achievement system
- \`src/components/Navigation.tsx\` - Score tracking
- Customize achievements, points, and levels

## 📁 Project Structure

\`\`\`
src/
├── app/
│ ├── layout.tsx # Root layout with navigation
│ ├── page.tsx # Main page component
│ └── globals.css # Global styles
├── components/
│ ├── Navigation.tsx # Navigation with gamification
│ ├── GameProvider.tsx # Game state management
│ └── sections/ # Page sections
│ ├── IntroSection.tsx
│ ├── ExperienceSection.tsx
│ ├── ProjectsSection.tsx
│ ├── TechnologiesSection.tsx
│ └── ContactSection.tsx
\`\`\`

## 🌐 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Deploy with zero configuration

### Other Platforms

\`\`\`bash
npm run build
npm start
\`\`\`

## 🎯 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for speed
- **SEO**: Complete meta tags and structured data
- **Accessibility**: WCAG compliant

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: \`git checkout -b feature/amazing-feature\`
3. Commit changes: \`git commit -m 'Add amazing feature'\`
4. Push to branch: \`git push origin feature/amazing-feature\`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎮 Credits

- **NES.css** - For the amazing 8-bit UI components
- **Press Start 2P** - Google Fonts for authentic pixel typography
- **React Icons** - For the icon library
- **Framer Motion** - For smooth animations

## 📞 Contact

Raumil Dhandhukia - [your.email@example.com](mailto:your.email@example.com)

Project Link: [https://github.com/yourusername/portfolio2](https://github.com/yourusername/portfolio2)

---

Built with ❤️ and lots of ☕ by [Raumil Dhandhukia](https://github.com/yourusername)
