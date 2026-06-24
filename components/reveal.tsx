"use client";

import { type ReactNode, useEffect, useState } from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";

type Direction = "up" | "down" | "left" | "right" | "none";

const OFFSET = 28;

function getOffset(direction: Direction) {
  switch (direction) {
    case "up":
      return { x: 0, y: OFFSET };
    case "down":
      return { x: 0, y: -OFFSET };
    case "left":
      return { x: OFFSET, y: 0 };
    case "right":
      return { x: -OFFSET, y: 0 };
    default:
      return { x: 0, y: 0 };
  }
}

type RevealProps = {
  children: ReactNode;
  /** Direction the content travels from as it appears. */
  direction?: Direction;
  /** Delay in seconds before the animation starts. */
  delay?: number;
  /** Additional className passed to the wrapper. */
  className?: string;
  /** When true, children animate in sequence via <RevealItem>. */
  stagger?: boolean;
  as?: "div" | "section" | "li" | "ul";
};

/**
 * Fades and gently lifts content into view when it scrolls into the viewport.
 * Respects the user's reduced-motion preference.
 */
export function Reveal({
  children,
  direction = "up",
  delay = 0,
  className,
  stagger = false,
  as = "div",
}: RevealProps) {
  const [mounted, isMounted] = useState(false);

  useEffect(() => {
    isMounted(true);
  }, []);

  const reduceMotion = useReducedMotion();
  const offset = getOffset(direction);

  const variants: Variants = {
    hidden: reduceMotion
      ? { opacity: 0 }
      : { opacity: 0, x: offset.x, y: offset.y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
        ...(stagger ? { staggerChildren: 0.12, delayChildren: delay } : {}),
      },
    },
  };

  const MotionTag = motion[as];
  if (mounted)
    return (
      <MotionTag
        className={className}
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2, margin: "0px 0px -10% 0px" }}
      >
        {children}
      </MotionTag>
    );
}

/** A child item to use inside a <Reveal stagger> container. */
export function RevealItem({
  children,
  direction = "up",
  className,
  as = "div",
}: {
  children: ReactNode;
  direction?: Direction;
  className?: string;
  as?: "div" | "li";
}) {
  const reduceMotion = useReducedMotion();
  const offset = getOffset(direction);

  const variants: Variants = {
    hidden: reduceMotion
      ? { opacity: 0 }
      : { opacity: 0, x: offset.x, y: offset.y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const MotionTag = motion[as];

  return (
    <MotionTag className={className} variants={variants}>
      {children}
    </MotionTag>
  );
}
