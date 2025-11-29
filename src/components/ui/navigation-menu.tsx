import * as React from "react"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { cva } from "class-variance-authority"
import { ChevronDownIcon } from "lucide-react"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

// ============================================================================
// HOVER CONTEXT - Shared state for animated hover effect
// ============================================================================

interface NavigationMenuHoverContextType {
  hoveredIndex: number | null
  setHoveredIndex: (index: number | null) => void
}

const NavigationMenuHoverContext = React.createContext<NavigationMenuHoverContextType>({
  hoveredIndex: null,
  setHoveredIndex: () => { },
})

// Custom hook to use the hover context
const useNavigationMenuHover = () => {
  const context = React.useContext(NavigationMenuHoverContext)
  if (!context) {
    throw new Error("useNavigationMenuHover must be used within NavigationMenuList")
  }
  return context
}

// ============================================================================
// HOVER PILL - Reusable animated background component
// ============================================================================

interface HoverPillProps {
  isActive: boolean
}

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

// ============================================================================
// MAIN COMPONENTS
// ============================================================================

function NavigationMenu({
  className,
  children,
  viewport = true,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Root> & {
  viewport?: boolean
}) {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      data-viewport={viewport}
      className={cn(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        className
      )}
      {...props}
    >
      {children}
      {viewport && <NavigationMenuViewport />}
    </NavigationMenuPrimitive.Root>
  )
}

function NavigationMenuList({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.List>) {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null)

  return (
    <NavigationMenuHoverContext.Provider value={{ hoveredIndex, setHoveredIndex }}>
      <NavigationMenuPrimitive.List
        data-slot="navigation-menu-list"
        onMouseLeave={() => setHoveredIndex(null)}
        className={cn(
          "group flex flex-1 list-none items-center justify-center gap-1",
          className
        )}
        {...props}
      />
    </NavigationMenuHoverContext.Provider>
  )
}

function NavigationMenuItem({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Item>) {
  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      className={cn("relative", className)}
      {...props}
    />
  )
}

// ============================================================================
// STYLED COMPONENTS WITH HOVER EFFECT
// ============================================================================

const navigationMenuTriggerStyle = cva(
  "group relative inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-300 transition-colors disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-ring/50 outline-none focus-visible:ring-[3px] focus-visible:outline-1"
)

interface NavigationMenuTriggerProps extends React.ComponentProps<typeof NavigationMenuPrimitive.Trigger> {
  hoverIndex?: number
}

function NavigationMenuTrigger({
  className,
  children,
  hoverIndex,
  ...props
}: NavigationMenuTriggerProps) {
  const { hoveredIndex, setHoveredIndex } = useNavigationMenuHover()
  const index = hoverIndex ?? 0

  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      onMouseEnter={() => setHoveredIndex(index)}
      className={cn(navigationMenuTriggerStyle(), className)}
      {...props}
    >
      <HoverPill isActive={hoveredIndex === index} />
      <span className="relative z-20 flex items-center gap-1">
        {children}
        <ChevronDownIcon
          className="relative top-[1px] size-3 transition duration-300 group-data-[state=open]:rotate-180"
          aria-hidden="true"
        />
      </span>
    </NavigationMenuPrimitive.Trigger>
  )
}

function NavigationMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Content>) {
  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      className={cn(
        "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto",
        "group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuViewport({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Viewport>) {
  return (
    <div
      className={cn(
        "absolute top-full left-0 isolate z-50 flex justify-center"
      )}
    >
      <NavigationMenuPrimitive.Viewport
        data-slot="navigation-menu-viewport"
        className={cn(
          "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--radix-navigation-menu-viewport-width)]",
          className
        )}
        {...props}
      />
    </div>
  )
}

interface NavigationMenuLinkProps extends React.ComponentProps<typeof NavigationMenuPrimitive.Link> {
  hoverIndex?: number
}

function NavigationMenuLink({
  className,
  hoverIndex,
  ...props
}: NavigationMenuLinkProps) {
  // If hoverIndex is provided, use hover effect (for top-level links)
  // Otherwise, use default styling (for dropdown links)
  const hasHoverEffect = hoverIndex !== undefined

  if (hasHoverEffect) {
    const { hoveredIndex, setHoveredIndex } = useNavigationMenuHover()
    const index = hoverIndex ?? 0

    // When using asChild with hover effect, we can't wrap children
    // So we need to handle it differently
    if (props.asChild) {
      // Clone the child and add our props to it
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

    // Without asChild, we can render normally
    return (
      <NavigationMenuPrimitive.Link
        data-slot="navigation-menu-link"
        onMouseEnter={() => setHoveredIndex(index)}
        className={cn(
          navigationMenuTriggerStyle(),
          className
        )}
        {...props}
      >
        <HoverPill isActive={hoveredIndex === index} />
        <span className="relative z-20">{props.children}</span>
      </NavigationMenuPrimitive.Link>
    )
  }

  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      className={cn(
        "data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuIndicator({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Indicator>) {
  return (
    <NavigationMenuPrimitive.Indicator
      data-slot="navigation-menu-indicator"
      className={cn(
        "data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="bg-border relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md" />
    </NavigationMenuPrimitive.Indicator>
  )
}

// ============================================================================
// EXPORTS
// ============================================================================

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
  useNavigationMenuHover,
}
