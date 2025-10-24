import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none cursor-pointer active:translate-y-[1px]",
  {
    variants: {
      variant: {
        default:
          "bg-linear-to-b from-primary to-primary/90 text-primary-foreground shadow-[0_4px_14px_0_rgba(0,0,0,0.4),0_8px_0_0_rgba(0,0,0,0.25),inset_0_1px_0_0_rgba(255,255,255,0.15)] hover:shadow-[0_4px_14px_0_rgba(0,0,0,0.5),0_8px_0_0_rgba(0,0,0,0.3),inset_0_1px_0_0_rgba(255,255,255,0.15)] active:shadow-[0_2px_8px_0_rgba(0,0,0,0.4),0_4px_0_0_rgba(0,0,0,0.25),inset_0_1px_0_0_rgba(255,255,255,0.15)] border-t border-white/10",
        destructive:
          "bg-linear-to-b from-destructive to-destructive/90 text-white shadow-[0_4px_14px_0_rgba(220,38,38,0.4),0_8px_0_0_rgba(0,0,0,0.25),inset_0_1px_0_0_rgba(255,255,255,0.15)] hover:shadow-[0_4px_14px_0_rgba(220,38,38,0.5),0_8px_0_0_rgba(0,0,0,0.3),inset_0_1px_0_0_rgba(255,255,255,0.15)] active:shadow-[0_2px_8px_0_rgba(220,38,38,0.4),0_4px_0_0_rgba(0,0,0,0.25),inset_0_1px_0_0_rgba(255,255,255,0.15)] border-t border-white/10",
        outline:
          "border-2 border-border bg-linear-to-b from-background to-muted/30 shadow-[0_4px_14px_0_rgba(0,0,0,0.2),0_6px_0_0_rgba(0,0,0,0.15),inset_0_1px_0_0_rgba(255,255,255,0.05)] hover:shadow-[0_4px_14px_0_rgba(0,0,0,0.3),0_6px_0_0_rgba(0,0,0,0.2),inset_0_1px_0_0_rgba(255,255,255,0.05)] active:shadow-[0_2px_8px_0_rgba(0,0,0,0.2),0_3px_0_0_rgba(0,0,0,0.15),inset_0_1px_0_0_rgba(255,255,255,0.05)]",
        secondary:
          "bg-linear-to-b from-secondary to-secondary/90 text-secondary-foreground shadow-[0_4px_14px_0_rgba(0,0,0,0.3),0_8px_0_0_rgba(0,0,0,0.2),inset_0_1px_0_0_rgba(255,255,255,0.1)] hover:shadow-[0_4px_14px_0_rgba(0,0,0,0.4),0_8px_0_0_rgba(0,0,0,0.25),inset_0_1px_0_0_rgba(255,255,255,0.1)] active:shadow-[0_2px_8px_0_rgba(0,0,0,0.3),0_4px_0_0_rgba(0,0,0,0.2),inset_0_1px_0_0_rgba(255,255,255,0.1)] border-t border-white/5",
        ghost:
          "hover:bg-accent/10 hover:text-accent-foreground dark:hover:bg-accent/5 shadow-none",
        link: "text-primary underline-offset-4 hover:underline shadow-none",
      },
      size: {
        default: "h-11 px-6 py-2.5 has-[>svg]:px-5",
        sm: "h-9 rounded-lg gap-1.5 px-4 has-[>svg]:px-3.5 text-xs",
        lg: "h-12 rounded-xl px-8 has-[>svg]:px-6 text-base",
        icon: "size-11",
        "icon-sm": "size-9",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
