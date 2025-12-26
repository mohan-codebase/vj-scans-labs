# Animation Guide for VJ Scans & Labs

This project is equipped with **Motion** (formerly Framer Motion) and **Tailwind CSS**, giving you powerful tools to create smooth, professional animations.

## 1. Using Motion (Framer Motion)

**Best for**: Scroll animations, complex entrances, exit animations, and gestures.

The project uses the `motion` package. You can import from `motion/react`.

### Basic Usage (Fade In)

To animate a component when it mounts or comes into view:

```tsx
'use client';

import { motion } from "motion/react";

const MyComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Content here...
    </motion.div>
  );
};
```

### Animate on Scroll (While in View)

To make elements animate only when they scroll into the screen:

```tsx
'use client';
import { motion } from "motion/react";

const ScrollSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }} // Trigger when 100px into view
      transition={{ duration: 0.6 }}
    >
      <h2>This animates when you scroll naturally!</h2>
    </motion.div>
  );
};
```

### Staggered Children

If you have a list (like mapped items) and want them to appear one by one:

```tsx
'use client';
import { motion } from "motion/react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const ListComponent = () => {
  return (
    <motion.ul
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {[1, 2, 3].map((id) => (
        <motion.li key={id} variants={item}>
          Item {id}
        </motion.li>
      ))}
    </motion.ul>
  );
};
```

## 2. Using Tailwind CSS Transitions

**Best for**: Hover states, focus states, and simple clicks.

```tsx
<button className="transition-all duration-300 hover:scale-105 hover:bg-blue-600">
  Hover Me
</button>
```

- `transition-all`: Enables transitions.
- `duration-300`: Sets animation time to 300ms.
- `hover:scale-105`: Slightly grows the element on hover.

## 3. Reusable `FadeIn` Component

You can create a reusable wrapper to quickly animate any section.

**Create `src/components/ui/FadeIn.tsx`:**

```tsx
'use client';

import { motion } from "motion/react";
import React from "react";

export const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
```

**Usage:**

```tsx
import { FadeIn } from "@/components/ui/FadeIn";

export default function Section() {
  return (
    <section>
      <FadeIn>
        <h1>My Title</h1>
      </FadeIn>
      <FadeIn delay={0.2}>
        <p>My description...</p>
      </FadeIn>
    </section>
  )
}
```
