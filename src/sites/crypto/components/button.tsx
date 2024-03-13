import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";
import { colors } from "../theme";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: cn(
          `max-sm:px-4 max-sm:text-sm bg-primary text-primary-foreground hover:bg-primary/90 max-sm:max-w-auto min-w-[200px] rounded-full bg-transparent px-5 font-bold uppercase text-white ring-[3px] ring-[${colors.hover}] hover:bg-transparent  hover:text-[${colors.hover}] hover:ring-2`,
        ),
        filled: `max-sm:px-4 max-sm:text-sm  text-primary-foreground  max-sm:max-w-auto bg-[#00C4F4] min-w-[200px] rounded-full   px-5 font-bold uppercase text-white ring-[3px] ring-[#00C4F4] hover:bg-white text-black`,
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "max-sm:px-3 max-sm:text-sm border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "px-0 max-sm:text-sm text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: `h-[50px] px-4 py-2`,
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };