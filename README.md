# Dr. Imon Mukherjee - Academic Portfolio Website

A modern, responsive academic portfolio website built with React, TypeScript, and Tailwind CSS, showcasing Dr. Imon Mukherjee's extensive research contributions, publications, and academic achievements.

## 🚀 Features

- **Modern Design**: Clean, professional interface with gradient backgrounds and smooth animations
- **Responsive Layout**: Optimized for all device sizes (desktop, tablet, mobile)
- **Comprehensive Content**: Detailed sections for all academic achievements
- **Interactive Navigation**: Smooth scrolling and dropdown navigation menus
- **Search Functionality**: Advanced search capabilities for publications
- **Professional UI Components**: Built with Shadcn/ui components for consistency

## 📚 Content Sections

### Main Page (`/`)
- **Hero Section**: Professional introduction with carousel
- **About**: Academic background and contact information
- **Research Interests**: Key research areas with icons
- **Funded Projects**: Overview of research funding (with links to detailed page)
- **Publications**: Selected publications with filtering (with links to detailed page)
- **Academic Supervision**: Ph.D. supervision overview (with links to detailed page)
- **Recent Talks**: Latest invited talks and conferences
- **Contact Form**: Professional contact form

### Publications Page (`/publications`)
- **Journal Publications**: SCI/SCI(E) indexed papers with impact factors
- **Conference Papers**: International conference presentations
- **Book Chapters**: Springer book chapters
- **Patents**: Filed and published patents
- **Advanced Search**: Search by title, authors, or journal
- **Filtering**: Categorized by publication type

### Academic Supervision Page (`/academic-supervision`)
- **Ph.D. Students**: Awarded and ongoing Ph.D. supervision
- **M.Tech Students**: Master's thesis supervision
- **M.Sc Students**: Master of Science supervision
- **B.Tech Projects**: Undergraduate project supervision
- **Other Institutions**: Supervision at previous institutions

### Funded Projects Page (`/funded-projects`)
- **Project Details**: Comprehensive project information
- **Funding Agencies**: DRDO, SERB, MeitY, DST-WB
- **Project Categories**: Quantum Computing, AI/ML, Information Security, Data Science
- **Financial Summary**: Total funding and project counts

## 🛠️ Technology Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **State Management**: React Hooks
- **Development**: Hot reload with Vite

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd imon-sir-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:8080` (or the port shown in terminal)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
src/
├── components/
│   └── ui/           # Shadcn/ui components
├── pages/
│   ├── Index.tsx     # Main portfolio page
│   ├── Publications.tsx
│   ├── AcademicSupervision.tsx
│   ├── FundedProjects.tsx
│   └── NotFound.tsx
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
└── App.tsx           # Main app component with routing
```

## 🎨 Design Features

- **Color Scheme**: Professional blue-purple gradient theme
- **Typography**: Clean, readable fonts with proper hierarchy
- **Animations**: Smooth hover effects and transitions
- **Cards**: Modern card-based layout for content organization
- **Badges**: Color-coded badges for status and categories
- **Responsive Grid**: Adaptive grid layouts for different screen sizes

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet**: Responsive layouts for medium screens
- **Desktop**: Full-featured experience for large screens
- **Navigation**: Adaptive navigation for different screen sizes

## 🔧 Customization

### Adding New Content
1. Update the data arrays in respective page components
2. Add new routes in `App.tsx` if needed
3. Update navigation menus accordingly

### Styling Changes
- Modify Tailwind classes in component files
- Update color schemes in the gradient utilities
- Adjust spacing and layout in the component structure

### Adding New Pages
1. Create new page component in `src/pages/`
2. Add route in `App.tsx`
3. Update navigation menus
4. Ensure consistent styling with existing pages

## 📊 Content Management

The website content is managed through structured data arrays in each component:
- **Publications**: Organized by type with metadata
- **Projects**: Categorized by funding agency and research area
- **Supervision**: Structured by degree level and status
- **Talks**: Chronological listing of invited presentations

## 🌐 Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options
- **Vercel**: Drag and drop the `dist` folder
- **Netlify**: Connect repository for automatic deployment
- **GitHub Pages**: Deploy from the `dist` folder
- **Traditional Hosting**: Upload `dist` folder to web server

## 📈 Performance Features

- **Code Splitting**: Automatic route-based code splitting
- **Lazy Loading**: Images and components loaded on demand
- **Optimized Builds**: Vite optimizations for production
- **Responsive Images**: Optimized image loading and display

## 🔍 SEO Features

- **Meta Tags**: Proper meta descriptions and titles
- **Semantic HTML**: Proper heading structure and semantic elements
- **Accessibility**: ARIA labels and keyboard navigation
- **Performance**: Fast loading times and Core Web Vitals

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary and confidential. All rights reserved.

## 👨‍💼 About Dr. Imon Mukherjee

**Dr. Imon Mukherjee** is a Distinguished Professor in the Department of Computer Science & Engineering at the Indian Institute of Information Technology (IIIT) Kalyani. He holds a Ph.D. from Jadavpur University and specializes in:

- **Quantum Computing** and **Quantum Cryptography**
- **Steganography** and **Information Security**
- **Machine Learning** applications in agriculture and computer vision
- **Data Analytics** and **Knowledge Management**

With extensive research funding from prestigious agencies like DRDO, SERB, MeitY, and DST, Dr. Mukherjee has supervised numerous Ph.D., M.Tech, and B.Tech students, published extensively in high-impact journals, and delivered invited talks at leading institutions worldwide.

## 📞 Contact

- **Email**: imon@iiitkalyani.ac.in
- **Institution**: IIIT Kalyani, West Bengal, India
- **Google Scholar**: [Profile](https://scholar.google.com/citations?user=3xcXNz0AAAAJ&hl=en)
- **ORCID**: [0000-0002-8598-148X](https://orcid.org/0000-0002-8598-148X)

---

*This portfolio website showcases the academic excellence and research contributions of Dr. Imon Mukherjee, providing a comprehensive overview of his distinguished career in computer science and engineering.*
