# Premium AI Portfolio

A futuristic, glassmorphism-inspired portfolio website built with React, Vite, Tailwind CSS, Framer Motion, GSAP, React Three Fiber, Lenis, and EmailJS.

## Features
- Premium neon blue and purple visual system
- Animated loader, glassmorphism cards, and immersive hero section
- Smooth scrolling, scroll reveals, and 3D background elements
- Project filters, search, and contact form placeholder integration
- Responsive layout with a dedicated 404 page

## Scripts
- `npm install`
- `npm run dev`
- `npm run build`

## Replace the profile image

To replace the sample image shown in the hero section:

1. Put your image file in `src/assets/` (recommended size: square, e.g. 1024x1024).
2. Name it `profile.jpg` or `profile.png` (or keep any name).
3. Update the import in `src/App.jsx` near the top:

	- Current: `import ProfileSample from './assets/profile-sample.svg'`
	- Replace with: `import ProfileSample from './assets/your-file-name.jpg'`

4. Save and run `npm run dev` to see changes.

Or simply overwrite `src/assets/profile-sample.svg` with your own image (SVG or raster), keeping the same filename.
