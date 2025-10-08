# Sevorse Moments 📸

The ultimate AI-powered Digital Album webapp featuring stunning GSAP animations and modern web technologies.

## ✨ Features

### 🎨 GSAP Animations
- **Smooth Page Transitions** - Fluid animations throughout the user experience
- **Scroll-Triggered Animations** - Elements come alive as you scroll
- **Interactive Gallery** - Hover effects and smooth transitions
- **Parallax Effects** - Dynamic depth and movement
- **Timeline Animations** - Beautifully animated memory timeline
- **Loading Animations** - Engaging loader with smooth fade-in

### 🤖 AI-Powered Features
- **Smart Image Analysis** - Automatic content recognition
- **Intelligent Tagging** - AI-generated tags for each photo
- **Color Analysis** - Dominant color extraction
- **Mood Detection** - Emotional tone identification
- **Auto Captions** - AI-generated descriptions
- **Smart Filters** - Category-based organization

### 📱 Modern Design
- **Responsive Layout** - Works perfectly on all devices
- **Lightbox Gallery** - Full-screen photo viewing
- **Smooth Navigation** - Keyboard and mouse support
- **Filter System** - Easy photo categorization
- **Timeline View** - Chronological memory display
- **Dark Mode Sections** - Beautiful contrast and readability

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Sevorselabs/Sevorse-Moments.git
cd Sevorse-Moments
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open automatically in your default browser at `http://localhost:8080`

## 🎯 Usage

### Navigation
- **Gallery** - Browse all photos with category filters
- **Timeline** - View memories in chronological order
- **AI Features** - Explore AI-powered capabilities

### Gallery Controls
- Click on any photo to open the lightbox
- Use arrow keys (← →) to navigate between photos
- Press ESC to close the lightbox
- Filter photos by category using the filter buttons

### Keyboard Shortcuts
- `←` Previous photo
- `→` Next photo
- `ESC` Close lightbox

## 🛠️ Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with custom properties
- **JavaScript (ES6+)** - Interactive functionality
- **GSAP 3.12** - Professional-grade animations
- **ScrollTrigger** - Scroll-based animations
- **Unsplash API** - High-quality placeholder images

## 📂 Project Structure

```
Sevorse-Moments/
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── app.js              # JavaScript logic and GSAP animations
├── package.json        # Project configuration
├── .gitignore          # Git ignore rules
└── README.md           # Project documentation
```

## 🎨 Customization

### Adding Your Own Photos

Edit the `photoData` array in `app.js`:

```javascript
const photoData = [
    {
        id: 1,
        src: 'path/to/your/image.jpg',
        title: 'Your Photo Title',
        category: 'nature', // or 'people', 'events', 'travel'
        date: '2024-01-15',
        caption: 'Your caption here',
        tags: ['tag1', 'tag2', 'tag3'],
        aiAnalysis: {
            dominantColors: ['#color1', '#color2'],
            objects: ['object1', 'object2'],
            mood: 'mood_description'
        }
    }
];
```

### Customizing Colors

Edit CSS custom properties in `styles.css`:

```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #f093fb;
    /* ... more colors */
}
```

## 🌟 Key Animations

1. **Hero Section** - Floating cards with continuous animation
2. **Gallery Grid** - Staggered fade-in and hover effects
3. **Timeline** - Scroll-triggered side-to-side animations
4. **Feature Cards** - Back-ease entrance with rotation
5. **Lightbox** - Scale and fade transitions
6. **Header** - Auto-hide on scroll down

## 📱 Responsive Design

The webapp is fully responsive and optimized for:
- Desktop (1920px and above)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🔧 Development

### Available Scripts

- `npm start` - Start development server
- `npm run dev` - Start development server (alias)
- `npm test` - Run tests (placeholder)

## 🚀 Deployment

### Deploy to GitHub Pages

1. Build the project (already static files)
2. Push to GitHub
3. Enable GitHub Pages in repository settings
4. Select the main branch as source

### Deploy to Netlify

1. Connect your repository to Netlify
2. Set build command to `echo "No build needed"`
3. Set publish directory to `/`
4. Deploy!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👏 Acknowledgments

- GSAP for amazing animation library
- Unsplash for beautiful placeholder images
- The open-source community for inspiration

## 📧 Contact

Sevorselabs - [@sevorselabs](https://github.com/Sevorselabs)

Project Link: [https://github.com/Sevorselabs/Sevorse-Moments](https://github.com/Sevorselabs/Sevorse-Moments)

---

Made with ❤️ by Sevorselabs