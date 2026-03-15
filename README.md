# Tribe Components

A Vue 3 component library with 30+ reusable, themeable UI components.

## Installation

```bash
npm install @olivier808s/tribe-components
```

## Setup

Register all components globally:

```ts
import { createApp } from 'vue'
import TribeComponents from '@olivier808s/tribe-components'
import '@olivier808s/tribe-components/style.css'

const app = createApp(App)
app.use(TribeComponents)
app.mount('#app')
```

Or import components individually:

```ts
import { Button, Card, Modal } from '@olivier808s/tribe-components'
```

## Components

### Layout & Structure
- `Accordion` — collapsible content sections
- `Card` — content container
- `Tabs` — tabbed navigation
- `Stepper` — multi-step flow indicator
- `TableCard` — table with card styling

### Navigation
- `DropdownMenu` — contextual menu
- `DropdownOptions` — option list dropdown
- `HoverBox` — hover-triggered content
- `Tooltip` — inline tooltip

### Forms & Inputs
- `Textbox`, `Textarea` — text input fields
- `Checkbox`, `Radio`, `Toggle` — boolean inputs
- `Select`, `Multiselect` — single and multi-selection
- `DatePicker` — date selection
- `NumberInput`, `CurrencyInput` — numeric inputs
- `FileButton`, `DragAndDropFiles`, `Dropzone` — file upload

### Display
- `Button`, `IconButton` — action buttons
- `Badge`, `Tag`, `ClickableTag` — labels and chips
- `Avatar`, `AvatarGroup` — user avatars
- `Paragraph` — styled text block
- `Loader` — loading indicator
- `CodeSnippet` — formatted code display
- `AttachmentList`, `FileList` — file listings
- `MediaCarousel`, `MediaInput` — media handling
- `Modal`, `ModalContent` — modal dialogs
- `ToastContainer`, `ToastMessage` — toast notifications

### Utilities
- `TribeIcon` — built-in SVG icon set
- `StopPropagation` — event propagation wrapper

## Composables

```ts
import { useToast, useFiles, useIsHandheld } from '@olivier808s/tribe-components'
```

- **`useToast()`** — show and dismiss toast notifications
- **`useFiles()`** — file formatting utilities and readable file sizes
- **`useIsHandheld()`** — detect handheld/mobile viewport (configurable breakpoint, default 800px)

## Theming

Tribe Components uses Tailwind CSS v4 with a CSS variable-based theme. Override the following variables in your own CSS to customize the look:

```css
@theme {
  --color-primary: ...;
  --color-secondary: ...;
  --color-accent: ...;

  --color-error: ...;
  --color-success: ...;

  --color-base: ...;
  --color-card: ...;
  --color-card-accent: ...;
  --color-border: ...;
  --color-dropdown: ...;
  --color-dropdown-select: ...;
  --color-quick-filter: ...;
  --color-quick-filter-selected: ...;
  --color-base-text: ...;
  --color-secondary-text: ...;
  --color-dropdown-text: ...;
}
```

Dark mode is supported via Tailwind's class strategy — add the `dark` class to your root element.

### CSS Exports

| Import path | Contents |
|---|---|
| `.../style.css` | Full library styles |

## TypeScript

Full TypeScript support is included. Props, emits, slots, and shared types are all exported:

```ts
import type { ButtonVariant, TribeIconType } from '@olivier808s/tribe-components'
```

## Requirements

- Vue 3.2+
- Node 18+

## License

MIT
