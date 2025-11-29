# Navigation Menu Animated Hover Effect

## Overview
The navigation menu now includes a smooth animated hover pill effect that follows your cursor as you hover over different menu items. This works for **both dropdown triggers and plain links**, creating a premium, interactive feel similar to modern design systems.

## How It Works

### 1. **Hover Context**
The navigation menu uses React Context to track which item is currently being hovered across all menu items:

```tsx
const NavigationMenuHoverContext = React.createContext<NavigationMenuHoverContextType>({
  hoveredIndex: null,
  setHoveredIndex: () => {},
})
```

### 2. **Reusable Hover Pill Component**
A dedicated `HoverPill` component handles the animated background:

```tsx
const HoverPill: React.FC<HoverPillProps> = ({ isActive }) => {
  if (!isActive) return null

  return (
    <motion.div
      layoutId="navigation-hover-pill"
      className="absolute inset-0 h-full w-full rounded-full bg-gray-100 dark:bg-neutral-800"
      transition={{
        type: "spring",
        stiffness: 380,
        damping: 30,
      }}
    />
  )
}
```

The `layoutId="navigation-hover-pill"` is the magic that makes the pill smoothly animate between items.

### 3. **Code Organization**
The code is now organized into clear sections:
- **Hover Context** - Shared state management
- **Hover Pill** - Reusable animated component
- **Main Components** - NavigationMenu, List, Item
- **Styled Components** - Trigger and Link with hover effects
- **Exports** - Clean public API

## Usage

### Example with Dropdowns and Links

```tsx
<NavigationMenu>
  <NavigationMenuList>
    {/* Dropdown with hover effect */}
    <NavigationMenuItem>
      <NavigationMenuTrigger hoverIndex={0}>Products</NavigationMenuTrigger>
      <NavigationMenuContent>
        {/* Dropdown content */}
      </NavigationMenuContent>
    </NavigationMenuItem>

    {/* Another dropdown */}
    <NavigationMenuItem>
      <NavigationMenuTrigger hoverIndex={1}>Solutions</NavigationMenuTrigger>
      <NavigationMenuContent>
        {/* Dropdown content */}
      </NavigationMenuContent>
    </NavigationMenuItem>

    {/* Plain link with hover effect */}
    <NavigationMenuItem>
      <NavigationMenuLink hoverIndex={2} asChild>
        <Link href="/docs">Docs</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>

    {/* Another plain link */}
    <NavigationMenuItem>
      <NavigationMenuLink hoverIndex={3} asChild>
        <Link href="/pricing">Pricing</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
```

### Important Notes

1. **hoverIndex Prop**: 
   - Add `hoverIndex` to **both** `NavigationMenuTrigger` and `NavigationMenuLink`
   - Use sequential numbers (0, 1, 2, 3...) for the best visual effect
   - The hover pill will smoothly animate between ALL items (triggers and links)

2. **NavigationMenuLink Behavior**:
   - **With `hoverIndex`**: Gets the animated hover pill effect (for top-level navigation)
   - **Without `hoverIndex`**: Uses default styling (for dropdown content links)

3. **Mouse Leave**: The hover effect automatically resets when you move your mouse away from the menu.

## Real-World Example

Your current navigation at `src/components/layout/navigation/navigation.tsx` demonstrates this:

- **Home** (hoverIndex={0}) - Dropdown trigger
- **Features** (hoverIndex={1}) - Dropdown trigger  
- **Docs** (hoverIndex={2}) - Plain link with hover effect
- **Pricing** (hoverIndex={3}) - Plain link with hover effect

Try hovering between all four items to see the smooth pill animation flow across both dropdowns and links!

## Customization

### Change Pill Color
Edit the `HoverPill` component in `navigation-menu.tsx`:

```tsx
// Current: bg-gray-100 dark:bg-neutral-800
// Change to your preferred color:
className="absolute inset-0 h-full w-full rounded-full bg-primary/10 dark:bg-primary/20"
```

### Adjust Animation Speed
Modify the transition properties in `HoverPill`:

```tsx
transition={{
  type: "spring",
  stiffness: 500,  // Higher = faster
  damping: 25,     // Lower = more bounce
}}
```

### Change Pill Shape
Update the border radius in `HoverPill`:

```tsx
// Current: rounded-full (fully rounded)
// Options:
className="... rounded-md"    // Slightly rounded
className="... rounded-lg"    // More rounded
className="... rounded-none"  // No rounding (rectangle)
```

## Advanced: Using the Hook

You can also use the `useNavigationMenuHover` hook in custom components:

```tsx
import { useNavigationMenuHover } from "@/components/ui/navigation-menu"

function CustomNavItem() {
  const { hoveredIndex, setHoveredIndex } = useNavigationMenuHover()
  
  // Your custom logic here
}
```

## TypeScript Support

Full TypeScript support with proper interfaces:

```tsx
interface NavigationMenuTriggerProps extends React.ComponentProps<typeof NavigationMenuPrimitive.Trigger> {
  hoverIndex?: number
}

interface NavigationMenuLinkProps extends React.ComponentProps<typeof NavigationMenuPrimitive.Link> {
  hoverIndex?: number
}
```
