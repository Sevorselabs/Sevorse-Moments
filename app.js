// Sample photo data with AI-generated information
const photoData = [
    {
        id: 1,
        src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
        title: 'Mountain Vista',
        category: 'nature',
        date: '2024-01-15',
        caption: 'Majestic mountain peaks at sunrise',
        tags: ['mountains', 'landscape', 'sunrise'],
        aiAnalysis: {
            dominantColors: ['#3B5998', '#8B9DC3', '#DFE3EE'],
            objects: ['mountains', 'sky', 'clouds'],
            mood: 'serene'
        }
    },
    {
        id: 2,
        src: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=800',
        title: 'Ocean Sunset',
        category: 'nature',
        date: '2024-01-20',
        caption: 'Golden hour by the sea',
        tags: ['ocean', 'sunset', 'beach'],
        aiAnalysis: {
            dominantColors: ['#FF6B35', '#F7931E', '#FDC830'],
            objects: ['ocean', 'sky', 'horizon'],
            mood: 'peaceful'
        }
    },
    {
        id: 3,
        src: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800',
        title: 'Urban Explorer',
        category: 'people',
        date: '2024-02-05',
        caption: 'City adventures and street photography',
        tags: ['portrait', 'urban', 'fashion'],
        aiAnalysis: {
            dominantColors: ['#2C3E50', '#E74C3C', '#ECF0F1'],
            objects: ['person', 'building', 'street'],
            mood: 'confident'
        }
    },
    {
        id: 4,
        src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800',
        title: 'Wedding Celebration',
        category: 'events',
        date: '2024-02-14',
        caption: 'Love and celebration captured',
        tags: ['wedding', 'celebration', 'love'],
        aiAnalysis: {
            dominantColors: ['#FFFFFF', '#F8E0E6', '#D4AF37'],
            objects: ['people', 'flowers', 'decoration'],
            mood: 'joyful'
        }
    },
    {
        id: 5,
        src: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800',
        title: 'Tropical Paradise',
        category: 'travel',
        date: '2024-03-10',
        caption: 'Island getaway dreams',
        tags: ['tropical', 'beach', 'vacation'],
        aiAnalysis: {
            dominantColors: ['#00B4DB', '#0083B0', '#F8E71C'],
            objects: ['palm trees', 'sand', 'water'],
            mood: 'relaxing'
        }
    },
    {
        id: 6,
        src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
        title: 'Creative Portrait',
        category: 'people',
        date: '2024-03-15',
        caption: 'Artistic expression through photography',
        tags: ['portrait', 'studio', 'creative'],
        aiAnalysis: {
            dominantColors: ['#34495E', '#9B59B6', '#ECF0F1'],
            objects: ['person', 'background'],
            mood: 'artistic'
        }
    },
    {
        id: 7,
        src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
        title: 'Forest Trail',
        category: 'nature',
        date: '2024-03-22',
        caption: 'Walking through ancient woods',
        tags: ['forest', 'nature', 'hiking'],
        aiAnalysis: {
            dominantColors: ['#27AE60', '#16A085', '#F39C12'],
            objects: ['trees', 'path', 'foliage'],
            mood: 'adventurous'
        }
    },
    {
        id: 8,
        src: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800',
        title: 'Road Trip',
        category: 'travel',
        date: '2024-04-01',
        caption: 'Journey into the unknown',
        tags: ['travel', 'road', 'adventure'],
        aiAnalysis: {
            dominantColors: ['#3498DB', '#95A5A6', '#F1C40F'],
            objects: ['road', 'landscape', 'sky'],
            mood: 'inspiring'
        }
    },
    {
        id: 9,
        src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800',
        title: 'Birthday Party',
        category: 'events',
        date: '2024-04-10',
        caption: 'Celebrating another year',
        tags: ['birthday', 'party', 'celebration'],
        aiAnalysis: {
            dominantColors: ['#E74C3C', '#F39C12', '#3498DB'],
            objects: ['cake', 'balloons', 'people'],
            mood: 'festive'
        }
    },
    {
        id: 10,
        src: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800',
        title: 'Lake Reflection',
        category: 'nature',
        date: '2024-04-15',
        caption: 'Mirror-like water at dawn',
        tags: ['lake', 'reflection', 'calm'],
        aiAnalysis: {
            dominantColors: ['#2980B9', '#8E44AD', '#ECF0F1'],
            objects: ['water', 'mountains', 'sky'],
            mood: 'tranquil'
        }
    },
    {
        id: 11,
        src: 'https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=800',
        title: 'Family Gathering',
        category: 'people',
        date: '2024-04-20',
        caption: 'Together with loved ones',
        tags: ['family', 'gathering', 'love'],
        aiAnalysis: {
            dominantColors: ['#E67E22', '#C0392B', '#ECF0F1'],
            objects: ['people', 'home', 'decor'],
            mood: 'warm'
        }
    },
    {
        id: 12,
        src: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800',
        title: 'Desert Landscape',
        category: 'travel',
        date: '2024-04-25',
        caption: 'Vast horizons and endless skies',
        tags: ['desert', 'landscape', 'travel'],
        aiAnalysis: {
            dominantColors: ['#E67E22', '#F39C12', '#3498DB'],
            objects: ['sand', 'dunes', 'sky'],
            mood: 'expansive'
        }
    }
];

// Timeline data
const timelineData = [
    {
        date: 'January 2024',
        title: 'Winter Adventures',
        description: 'Started the year with amazing mountain trips and winter photography sessions.'
    },
    {
        date: 'February 2024',
        title: 'Urban Exploration',
        description: 'Explored city streets and captured the essence of urban life through portraits.'
    },
    {
        date: 'March 2024',
        title: 'Tropical Escape',
        description: 'Island paradise vacation with stunning beaches and crystal-clear waters.'
    },
    {
        date: 'April 2024',
        title: 'Spring Celebrations',
        description: 'Celebrated special moments with family and friends, creating lasting memories.'
    }
];

// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

// Global state
let currentFilter = 'all';
let lightboxIndex = 0;
let filteredPhotos = [...photoData];

// DOM Elements
const loader = document.getElementById('loader');
const galleryGrid = document.getElementById('gallery-grid');
const timelineContainer = document.getElementById('timeline-container');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxCaption = document.getElementById('lightbox-caption');
const lightboxTags = document.getElementById('lightbox-tags');

// Initialize app
function init() {
    // Hide loader with animation
    gsap.to(loader, {
        opacity: 0,
        duration: 0.5,
        delay: 1,
        onComplete: () => {
            loader.style.display = 'none';
        }
    });

    // Render gallery and timeline
    renderGallery();
    renderTimeline();
    setupEventListeners();
    initAnimations();
}

// Render gallery
function renderGallery() {
    galleryGrid.innerHTML = '';
    
    filteredPhotos.forEach((photo, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.setAttribute('data-category', photo.category);
        item.innerHTML = `
            <img src="${photo.src}" alt="${photo.title}" loading="lazy">
            <div class="gallery-item-overlay">
                <h3 class="gallery-item-title">${photo.title}</h3>
                <div class="gallery-item-tags">
                    ${photo.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;
        
        item.addEventListener('click', () => openLightbox(index));
        galleryGrid.appendChild(item);
    });

    // Animate gallery items
    gsap.from('.gallery-item', {
        opacity: 0,
        y: 50,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out'
    });
}

// Render timeline
function renderTimeline() {
    timelineContainer.innerHTML = '<div class="timeline-line"></div>';
    
    timelineData.forEach((item, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.innerHTML = `
            <div class="timeline-content">
                <div class="timeline-date">${item.date}</div>
                <h3 class="timeline-title">${item.title}</h3>
                <p class="timeline-description">${item.description}</p>
            </div>
            <div class="timeline-dot"></div>
        `;
        timelineContainer.appendChild(timelineItem);
    });
}

// Filter gallery
function filterGallery(filter) {
    currentFilter = filter;
    
    if (filter === 'all') {
        filteredPhotos = [...photoData];
    } else {
        filteredPhotos = photoData.filter(photo => photo.category === filter);
    }
    
    // Animate out old items
    gsap.to('.gallery-item', {
        opacity: 0,
        scale: 0.8,
        duration: 0.3,
        stagger: 0.05,
        onComplete: renderGallery
    });
}

// Lightbox functions
function openLightbox(index) {
    lightboxIndex = index;
    const photo = filteredPhotos[index];
    
    lightbox.classList.add('active');
    lightboxImg.src = photo.src;
    lightboxTitle.textContent = photo.title;
    lightboxCaption.textContent = photo.caption;
    lightboxTags.innerHTML = photo.tags.map(tag => 
        `<span class="tag">${tag}</span>`
    ).join('');
    
    // Animate lightbox
    gsap.from('#lightbox-img', {
        scale: 0.8,
        opacity: 0,
        duration: 0.5,
        ease: 'power3.out'
    });
    
    gsap.from('.lightbox-info', {
        y: 50,
        opacity: 0,
        duration: 0.5,
        delay: 0.2,
        ease: 'power3.out'
    });
}

function closeLightbox() {
    gsap.to(lightbox, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
            lightbox.classList.remove('active');
            lightbox.style.opacity = 1;
        }
    });
}

function nextPhoto() {
    lightboxIndex = (lightboxIndex + 1) % filteredPhotos.length;
    openLightbox(lightboxIndex);
}

function prevPhoto() {
    lightboxIndex = (lightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    openLightbox(lightboxIndex);
}

// Setup event listeners
function setupEventListeners() {
    // Navigation buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const section = btn.getAttribute('data-section');
            const element = document.getElementById(section);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // CTA button
    document.querySelector('.cta-btn').addEventListener('click', () => {
        const gallery = document.getElementById('gallery');
        if (gallery) {
            gallery.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });

    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterGallery(btn.getAttribute('data-filter'));
        });
    });

    // Lightbox controls
    document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
    document.getElementById('lightbox-next').addEventListener('click', nextPhoto);
    document.getElementById('lightbox-prev').addEventListener('click', prevPhoto);
    
    // Close lightbox on backdrop click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') nextPhoto();
        if (e.key === 'ArrowLeft') prevPhoto();
    });
}

// Initialize GSAP animations
function initAnimations() {
    // Hero animations
    gsap.from('.hero-title', {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 1.5,
        ease: 'power3.out'
    });

    gsap.from('.hero-subtitle', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 1.7,
        ease: 'power3.out'
    });

    gsap.from('.cta-btn', {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        delay: 1.9,
        ease: 'back.out(1.7)'
    });

    // Floating cards animation
    gsap.to('.card-1', {
        y: 20,
        rotation: 5,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
    });

    gsap.to('.card-2', {
        y: -25,
        rotation: -3,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        delay: 0.5
    });

    gsap.to('.card-3', {
        y: 15,
        rotation: -5,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        delay: 1
    });

    // Section title animations
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power3.out'
        });
    });

    // Timeline animations
    gsap.utils.toArray('.timeline-item').forEach((item, index) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            x: index % 2 === 0 ? -100 : 100,
            duration: 1,
            ease: 'power3.out'
        });
    });

    // Feature cards animations
    gsap.utils.toArray('.feature-card').forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 50,
            rotation: 5,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'back.out(1.7)'
        });
    });

    // Parallax effect for hero
    gsap.to('.hero-content', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        },
        y: 150,
        opacity: 0.3
    });

    // Header hide/show on scroll
    let lastScroll = 0;
    ScrollTrigger.create({
        start: 'top -80',
        end: 99999,
        onUpdate: (self) => {
            const currentScroll = self.scroll();
            if (currentScroll > lastScroll && currentScroll > 100) {
                gsap.to('.header', { y: -100, duration: 0.3 });
            } else {
                gsap.to('.header', { y: 0, duration: 0.3 });
            }
            lastScroll = currentScroll;
        }
    });
}

// AI-powered features simulation
function analyzeImage(photo) {
    // Simulate AI analysis
    return {
        description: `This ${photo.category} photo captures ${photo.title.toLowerCase()}`,
        mood: photo.aiAnalysis.mood,
        suggestions: [
            'Apply sunset filter',
            'Enhance colors',
            'Add vintage effect'
        ],
        similarPhotos: photoData.filter(p => 
            p.category === photo.category && p.id !== photo.id
        ).slice(0, 3)
    };
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { photoData, timelineData, analyzeImage };
}
