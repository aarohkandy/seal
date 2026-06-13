import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "solid-motion inline-flex items-center justify-center gap-2 rounded-md text-sm font-semibold outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-[var(--brand-primary)] text-white shadow-sm hover:bg-[#3f2671]",
        secondary: "border border-[var(--border)] bg-white text-[var(--ink)] hover:bg-[var(--surface-muted)]",
        gold: "bg-[var(--brand-gold)] text-[#241a0b] shadow-sm hover:bg-[#a9976c]",
        ghost: "hover:bg-[var(--surface-muted)]"
      },
      size: {
        sm: "h-9 px-3",
        md: "h-10 px-4",
        lg: "h-12 px-5"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export function Button({ className, variant, size, asChild, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}
