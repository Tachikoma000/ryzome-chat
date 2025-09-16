# Logos Directory

Place your company and product logos here:

## Recommended Files:
- `ryzome-logo.svg` - Main Ryzome logo (SVG format)
- `ryzome-logo.png` - PNG fallback version
- `ryzome-icon.svg` - Small icon version (32x32px)
- `company-logo.png` - Your company logo

## Usage Example:
```tsx
import Image from 'next/image';

<Image
  src="/images/logos/ryzome-logo.svg"
  alt="Ryzome Logo"
  width={120}
  height={40}
/>
```

## Specifications:
- **Format**: SVG preferred, PNG as fallback
- **Size**: 200x60px for main logo, 40x40px for icon
- **Background**: Transparent
