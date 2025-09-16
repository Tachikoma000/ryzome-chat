# Backgrounds Directory

Place your background images and patterns here:

## Recommended Files:
- `chat-bg.jpg` - Custom chat background
- `hero-bg.png` - Hero section background
- `pattern.svg` - Subtle background pattern
- `gradient-overlay.png` - Custom gradient overlays

## Usage Example:
```tsx
// As CSS background
<div 
  className="bg-cover bg-center h-64"
  style={{ backgroundImage: 'url(/images/backgrounds/chat-bg.jpg)' }}
>
  Content here
</div>

// As overlay
<div className="relative">
  <div 
    className="absolute inset-0 opacity-10 bg-cover bg-center"
    style={{ backgroundImage: 'url(/images/backgrounds/pattern.svg)' }}
  />
  <div className="relative z-10">Your content</div>
</div>
```

## Specifications:
- **Format**: JPG for photos, PNG for graphics with transparency
- **Size**: 1920x1080px or higher for full backgrounds
- **Optimization**: Compress for web (use tools like TinyPNG)
- **Usage**: Consider opacity overlays for subtle effects
