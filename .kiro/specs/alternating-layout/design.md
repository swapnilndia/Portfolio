# Alternating Layout Design Document

## Overview

The alternating layout system will create a consistent visual rhythm across all pages by implementing a pattern where content sections alternate between left-right and right-left orientations. This design builds upon the existing glassmorphism design system and hero section patterns while introducing a systematic approach to content layout that enhances visual engagement and readability.

## Architecture

### Layout Pattern System

```
Page Structure:
├── Section 1 (Default: Content Left, Visuals Right)
├── Section 2 (Reverse: Content Right, Visuals Left)
├── Section 3 (Default: Content Left, Visuals Right)
├── Section 4 (Reverse: Content Right, Visuals Left)
└── ... (continues alternating)
```

### CSS Class System

```scss
// Base hero section (existing)
.hero {
  // Default layout: content left, visuals right
}

// Reverse modifier (existing, needs enhancement)
.hero--reverse {
  // Reverse layout: content right, visuals left
}

// New systematic classes
.section {
  &--default {
    /* alias for standard hero */
  }
  &--reverse {
    /* alias for hero--reverse */
  }
  &--alternate-1 {
    /* first in alternating sequence */
  }
  &--alternate-2 {
    /* second in alternating sequence */
  }
}
```

### File Structure

```
src/
├── scss/
│   ├── components/
│   │   ├── _hero.scss (existing, enhanced)
│   │   ├── _alternating-section.scss (existing, enhanced)
│   │   └── _section-variants.scss (new)
│   └── utilities/
│       └── _layout-helpers.scss (new)
├── components/
│   ├── sections/
│   │   ├── AlternatingSection.js (new)
│   │   ├── SectionContent.js (new)
│   │   └── SectionVisuals.js (new)
│   └── layout/
│       └── PageLayout.js (enhanced)
```

## Components and Interfaces

### AlternatingSection Component

**Purpose**: Wrapper component that automatically applies alternating layout classes

**Props Interface**:

```javascript
interface AlternatingSectionProps {
  children: React.ReactNode;
  index: number; // Used to determine if section should be reversed
  className?: string;
  spacing?: 'default' | 'compact' | 'spacious';
  variant?: 'hero' | 'content' | 'feature';
}
```

**Key Features**:

- Automatic alternating logic based on index
- Consistent spacing system
- Integration with existing hero patterns
- Responsive behavior

### SectionContent Component

**Purpose**: Standardized content area with consistent typography and spacing

**Props Interface**:

```javascript
interface SectionContentProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  chips?: string[];
  actions?: ActionButton[];
  alignment?: 'left' | 'center';
}

interface ActionButton {
  label: string;
  href?: string;
  onClick?: () => void;
  variant: 'primary' | 'ghost';
  external?: boolean;
}
```

### SectionVisuals Component

**Purpose**: Flexible visual content area supporting different media types

**Props Interface**:

```javascript
interface SectionVisualsProps {
  type: 'stack' | 'image' | 'stats' | 'custom';
  content?: StackContent | ImageContent | StatsContent;
  children?: React.ReactNode;
}

interface StackContent {
  product?: ProductCard;
  player?: PlayerCard;
}

interface ImageContent {
  src: string;
  alt: string;
  aspectRatio?: string;
}

interface StatsContent {
  items: StatItem[];
}
```

## Data Models

### Page Section Configuration

```javascript
const pageConfig = {
  home: {
    sections: [
      {
        id: 'hero',
        type: 'hero',
        content: {
          title: 'Full-Stack Developer & Digital Craftsman',
          subtitle: 'I create beautiful, performant web applications...',
          chips: ['React & Next.js', 'Node.js', 'TypeScript'],
          actions: [
            { label: 'View My Work', href: '/projects', variant: 'primary' },
            { label: 'Get In Touch', href: '/contact', variant: 'ghost' },
          ],
        },
        visuals: {
          type: 'stack',
          content: {
            product: {
              /* product card data */
            },
            player: {
              /* player card data */
            },
          },
        },
      },
      {
        id: 'approach',
        type: 'content',
        content: {
          title: 'My Approach',
          subtitle: 'I believe in creating digital experiences...',
          chips: ['User-Centered', 'Performance First'],
        },
        visuals: {
          type: 'stack',
          content: {
            /* visuals data */
          },
        },
      },
      // ... more sections
    ],
  },
  // ... other pages
};
```

### Section Spacing System

```javascript
const spacingConfig = {
  default: {
    marginTop: 'clamp(48px, 6vw, 80px)',
    marginBottom: 'clamp(24px, 4vw, 48px)',
    gap: 'clamp(32px, 5vw, 64px)',
  },
  compact: {
    marginTop: 'clamp(24px, 4vw, 48px)',
    marginBottom: 'clamp(16px, 2vw, 32px)',
    gap: 'clamp(24px, 4vw, 48px)',
  },
  spacious: {
    marginTop: 'clamp(64px, 8vw, 120px)',
    marginBottom: 'clamp(32px, 6vw, 64px)',
    gap: 'clamp(48px, 7vw, 96px)',
  },
};
```

## SCSS Design System Enhancement

### Enhanced Hero Component

```scss
// _hero.scss (enhanced)
.hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(32px, 5vw, 64px);
  align-items: center;
  margin-top: clamp(48px, 6vw, 80px);

  @include down(md) {
    grid-template-columns: 1fr;
    gap: clamp(24px, 4vw, 32px);
    text-align: center;
  }

  // Content area (left by default)
  > div:first-child {
    order: 1;

    .title {
      @include on-glass;
      font-size: clamp(28px, 5vw, 42px);
      font-weight: 700;
      line-height: 1.2;
      margin-bottom: space(4);
    }

    .subtitle {
      @include on-glass;
      font-size: clamp(14px, 2vw, 16px);
      line-height: 1.6;
      margin-bottom: space(6);
      opacity: 0.9;
    }

    .cta-row {
      display: flex;
      gap: space(4);
      margin-bottom: space(6);

      @include down(sm) {
        flex-direction: column;
        align-items: center;
      }
    }

    .chips {
      display: flex;
      flex-wrap: wrap;
      gap: space(2);

      @include down(md) {
        justify-content: center;
      }
    }
  }

  // Visual area (right by default)
  > div:last-child {
    order: 2;

    .stack {
      display: flex;
      flex-direction: column;
      gap: space(4);
    }
  }

  // Reverse modifier
  &--reverse {
    > div:first-child {
      order: 2;

      @include down(md) {
        order: 1;
      }
    }

    > div:last-child {
      order: 1;

      @include down(md) {
        order: 2;
      }
    }
  }
}
```

### Section Variants System

```scss
// _section-variants.scss (new)
.section {
  // Base section styles
  &--hero {
    @extend .hero;
  }

  &--content {
    @extend .hero;

    .title {
      font-size: clamp(24px, 4vw, 36px);
    }
  }

  &--feature {
    @extend .hero;

    .title {
      font-size: clamp(20px, 3vw, 32px);
    }

    margin-top: clamp(24px, 4vw, 48px);
  }

  // Spacing variants
  &--compact {
    margin-top: clamp(24px, 4vw, 48px);
    gap: clamp(24px, 4vw, 48px);
  }

  &--spacious {
    margin-top: clamp(64px, 8vw, 120px);
    gap: clamp(48px, 7vw, 96px);
  }

  // Alternating helpers
  &--alternate {
    &:nth-child(even) {
      @extend .hero--reverse;
    }
  }
}
```

### Layout Utilities

```scss
// _layout-helpers.scss (new)
@mixin alternating-section($index: null) {
  @extend .hero;

  @if $index and $index % 2 == 0 {
    @extend .hero--reverse;
  }
}

@mixin section-spacing($variant: 'default') {
  @if $variant == 'compact' {
    margin-top: clamp(24px, 4vw, 48px);
    gap: clamp(24px, 4vw, 48px);
  } @else if $variant == 'spacious' {
    margin-top: clamp(64px, 8vw, 120px);
    gap: clamp(48px, 7vw, 96px);
  } @else {
    margin-top: clamp(48px, 6vw, 80px);
    gap: clamp(32px, 5vw, 64px);
  }
}

// Utility classes
.u-alternate-even {
  &:nth-child(even) {
    @extend .hero--reverse;
  }
}

.u-alternate-odd {
  &:nth-child(odd) {
    @extend .hero--reverse;
  }
}
```

## Responsive Design Strategy

### Breakpoint Behavior

```scss
// Mobile (< 768px)
@include down(md) {
  .hero,
  .hero--reverse {
    grid-template-columns: 1fr;
    text-align: center;

    > div:first-child,
    > div:last-child {
      order: initial; // Reset order on mobile
    }

    // Content always comes first on mobile
    > div:first-child {
      order: 1;
    }

    > div:last-child {
      order: 2;
    }
  }
}

// Tablet (768px - 1024px)
@include between(md, lg) {
  .hero {
    gap: clamp(24px, 4vw, 48px);

    .title {
      font-size: clamp(24px, 4vw, 32px);
    }
  }
}

// Desktop (> 1024px)
@include up(lg) {
  .hero {
    gap: clamp(48px, 6vw, 80px);
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }
}
```

### Content Adaptation

- **Mobile**: All sections stack vertically with content first, visuals second
- **Tablet**: Reduced spacing, smaller typography, maintained alternating pattern
- **Desktop**: Full alternating layout with optimal spacing and typography

## Integration with Existing Systems

### Glassmorphism Effects

```scss
// Maintain existing glassmorphism on alternating sections
.hero,
.section {
  .product,
  .player {
    @include glass;
    // Existing card styles preserved
  }

  .mock-img {
    // Existing gradient backgrounds preserved
    background: radial-gradient(/* existing gradients */);
  }
}
```

### Background Blobs

```scss
// Page-specific blob colors maintained
.blobs {
  &--home {
    /* existing home colors */
  }
  &--about {
    /* existing about colors */
  }
  &--projects {
    /* existing projects colors */
  }
  &--experience {
    /* existing experience colors */
  }
  &--contact {
    /* existing contact colors */
  }
}
```

### Animation Integration

```scss
// Smooth transitions for layout changes
.hero {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  > div {
    transition: order 0.3s ease;
  }
}

// Scroll-triggered animations (future enhancement)
.hero {
  &[data-animate='true'] {
    > div:first-child {
      animation: slideInLeft 0.6s ease-out;
    }

    > div:last-child {
      animation: slideInRight 0.6s ease-out;
    }
  }

  &--reverse[data-animate='true'] {
    > div:first-child {
      animation: slideInRight 0.6s ease-out;
    }

    > div:last-child {
      animation: slideInLeft 0.6s ease-out;
    }
  }
}
```

## Error Handling

### Layout Fallbacks

- Missing content gracefully handled with placeholder text
- Invalid section configurations fall back to default layout
- Responsive breakpoint failures maintain readable stacked layout

### Content Validation

- Required props validation for section components
- Graceful degradation for missing visual content
- Accessibility fallbacks for interactive elements

## Testing Strategy

### Visual Regression Tests

- Screenshot comparison across all breakpoints
- Alternating pattern verification on all pages
- Glassmorphism effect consistency

### Responsive Tests

- Layout behavior at various screen sizes
- Content reflow and readability
- Touch interaction areas on mobile

### Accessibility Tests

- Keyboard navigation through sections
- Screen reader content order
- Focus management and indicators

## Performance Considerations

### CSS Optimization

- Minimal additional CSS footprint
- Reuse of existing design tokens and mixins
- Efficient grid and flexbox implementations

### JavaScript Optimization

- Lightweight component implementations
- Minimal runtime layout calculations
- Efficient re-rendering strategies

### Loading Performance

- Progressive enhancement approach
- Critical CSS for above-the-fold sections
- Lazy loading for below-the-fold content

## Implementation Notes

### Migration Strategy

1. Enhance existing hero sections with alternating classes
2. Update page components to use systematic alternating pattern
3. Add new sections where needed to meet 3-section minimum
4. Test and refine responsive behavior
5. Add animation enhancements (optional)

### Maintenance Considerations

- Clear documentation for adding new alternating sections
- Consistent naming conventions for section variants
- Automated testing for layout consistency
- Design system integration guidelines
