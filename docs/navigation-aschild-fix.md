# Fix: NavigationMenuLink with asChild and hoverIndex

## Problem
When using `NavigationMenuLink` with both `asChild` and `hoverIndex` props, React threw an error:
```
React.Children.only expected to receive a single React element child
```

## Root Cause
The `asChild` prop (from Radix UI) expects to receive exactly one child element that it can clone and merge props into. However, when we added the hover effect, we were wrapping children with:
1. `<HoverPill />` component
2. `<span>` wrapper for the actual content

This created multiple children, violating the `asChild` contract.

## Solution
We now detect when `asChild` is used with `hoverIndex` and handle it specially:

```tsx
if (props.asChild) {
  // Clone the single child and merge our className
  const child = React.Children.only(props.children as React.ReactElement)
  
  return (
    <div 
      className="relative"
      onMouseEnter={() => setHoveredIndex(index)}
    >
      <HoverPill isActive={hoveredIndex === index} />
      {React.cloneElement(child, {
        className: cn(
          navigationMenuTriggerStyle(),
          "relative z-20",
          (child.props as any).className
        ),
      } as any)}
    </div>
  )
}
```

### How It Works
1. **Wrapper div**: We wrap everything in a `<div>` to hold the hover pill
2. **Clone child**: We use `React.cloneElement()` to clone the single child (e.g., `<Link>`)
3. **Merge classes**: We merge our navigation styles with the child's existing className
4. **Preserve hover**: The div handles the `onMouseEnter` event for the hover effect

## Usage
Now you can safely use both props together:

```tsx
<NavigationMenuItem>
  <NavigationMenuLink hoverIndex={2} asChild>
    <Link href="/docs">Docs</Link>
  </NavigationMenuLink>
</NavigationMenuItem>
```

The hover pill will appear behind the Link, and all styling will be properly applied!
