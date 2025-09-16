# Custom Images and Logos Guide

## 📁 Directory Structure

Your custom images should be placed in the `public/images/` directory with the following organization:

```
public/
└── images/
    ├── logos/          # Company logos, brand assets
    ├── icons/          # UI icons, small graphics
    └── backgrounds/    # Background images, patterns
```

## 🖼️ Recommended Image Organization

### `/public/images/logos/`
- `ryzome-logo.svg` - Main Ryzome logo (SVG preferred)
- `ryzome-logo.png` - PNG version for fallback
- `ryzome-icon.svg` - Small icon version
- `company-logo.png` - Your company logo

### `/public/images/icons/`
- `chat-icon.svg` - Custom chat icons
- `user-avatar.png` - Default user avatar
- `bot-avatar.png` - Custom bot avatar
- `feature-icons/` - Subdirectory for feature icons

### `/public/images/backgrounds/`
- `chat-bg.jpg` - Custom chat background
- `hero-bg.png` - Hero section background
- `patterns/` - Subdirectory for pattern images

## 💻 How to Use Images in Your Code

### Method 1: Using Next.js Image Component (Recommended)

```tsx
import Image from 'next/image';

// In your component
<Image
  src="/images/logos/ryzome-logo.svg"
  alt="Ryzome Logo"
  width={120}
  height={40}
  priority // Use for above-the-fold images
/>
```

### Method 2: Using Regular img Tag

```tsx
<img 
  src="/images/icons/chat-icon.svg" 
  alt="Chat Icon"
  className="w-6 h-6"
/>
```

### Method 3: Using as CSS Background

```tsx
<div 
  className="bg-cover bg-center h-64"
  style={{ backgroundImage: 'url(/images/backgrounds/chat-bg.jpg)' }}
>
  Content here
</div>
```

## 🎨 Example Implementations

### Replace Bot Avatar in MessageBubble

```tsx
// In MessageBubble.tsx
{!isUser && (
  <div className="flex-shrink-0 w-8 h-8 rounded-full overflow-hidden">
    <Image
      src="/images/icons/ryzome-bot-avatar.png"
      alt="Ryzome Bot"
      width={32}
      height={32}
      className="w-full h-full object-cover"
    />
  </div>
)}
```

### Add Logo to Header

```tsx
// In ChatContainer.tsx header
<div className="flex items-center gap-3">
  <Image
    src="/images/logos/ryzome-logo.svg"
    alt="Ryzome"
    width={32}
    height={32}
  />
  <div>
    <h1 className="text-lg font-semibold text-gray-900">Ryzome Agent</h1>
    <p className="text-sm text-gray-600">
      Your AI assistant for all things Ryzome
    </p>
  </div>
</div>
```

### Custom Background

```tsx
// In ChatContainer.tsx
<div className="flex flex-col h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 relative">
  {/* Optional background image overlay */}
  <div 
    className="absolute inset-0 opacity-5 bg-cover bg-center"
    style={{ backgroundImage: 'url(/images/backgrounds/ryzome-pattern.png)' }}
  />
  
  {/* Rest of your content */}
</div>
```

## 📏 Image Specifications

### Logos
- **Format**: SVG preferred (scalable), PNG as fallback
- **Size**: 200x60px for main logo, 40x40px for icon
- **Background**: Transparent
- **Colors**: Provide both light and dark versions if needed

### Icons
- **Format**: SVG preferred
- **Size**: 24x24px, 32x32px, 48x48px variants
- **Style**: Consistent with your design system
- **Colors**: Monochrome or brand colors

### Backgrounds
- **Format**: JPG for photos, PNG for graphics with transparency
- **Size**: 1920x1080px or higher for full backgrounds
- **Optimization**: Compress for web (use tools like TinyPNG)

## 🚀 Performance Tips

1. **Use Next.js Image Component**: Automatic optimization and lazy loading
2. **Optimize File Sizes**: Compress images before adding them
3. **Use Appropriate Formats**: 
   - SVG for logos and icons
   - WebP for modern browsers
   - PNG for transparency
   - JPG for photos
4. **Provide Alt Text**: Always include descriptive alt attributes
5. **Use Priority Loading**: Add `priority` prop for above-the-fold images

## 🔄 Dynamic Image Loading

For user-uploaded or dynamic images:

```tsx
const [imageError, setImageError] = useState(false);

<Image
  src={imageError ? '/images/icons/default-avatar.png' : userAvatarUrl}
  alt="User Avatar"
  width={32}
  height={32}
  onError={() => setImageError(true)}
/>
```

## 📱 Responsive Images

```tsx
<Image
  src="/images/logos/ryzome-logo.svg"
  alt="Ryzome Logo"
  width={120}
  height={40}
  className="w-20 h-auto md:w-30 lg:w-40"
/>
```

## 🎯 Quick Start Checklist

- [ ] Add your logo to `/public/images/logos/`
- [ ] Add custom icons to `/public/images/icons/`
- [ ] Add background images to `/public/images/backgrounds/`
- [ ] Update components to use your custom images
- [ ] Test images load correctly in development
- [ ] Optimize images for production

## 📝 Notes

- All paths start with `/` (e.g., `/images/logos/logo.svg`)
- Images in `public/` are served statically
- Next.js automatically optimizes images when using the Image component
- SVG files work great for logos and icons (scalable and small file size)
- Consider creating both light and dark versions of logos for theme support

---

**Ready to customize?** Just drop your images into the appropriate folders and update the component code to reference them!
