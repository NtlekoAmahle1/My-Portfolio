import React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none data-[state=open]:bg-secondary/50",
          variant === "default" ? "bg-primary text-primary-foreground hover:bg-primary/90" : null,
          variant === "destructive" ? "bg-destructive text-destructive-foreground hover:bg-destructive/90" : null,
          variant === "outline" ? "bg-transparent border border-input hover:bg-accent hover:text-accent-foreground" : null,
          variant === "secondary" ? "bg-secondary text-secondary-foreground hover:bg-secondary/80" : null,
          variant === "ghost" ? "hover:bg-accent hover:text-accent-foreground" : null,
          variant === "link" ? "underline-offset-4 hover:underline" : null,
          size === "default" ? "h-10 py-2 px-4" : null,
          size === "sm" ? "h-9 px-3 rounded-md" : null,
          size === "lg" ? "h-11 px-8 rounded-md" : null,
          size === "icon" ? "h-10 w-10" : null,
          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  },
)
Button.displayName = "Button"