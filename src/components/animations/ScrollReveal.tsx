"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
    className?: string;
}

export const ScrollReveal = ({
    children,
    width = "100%",
    delay = 0.25,
    direction = "up",
    className
}: ScrollRevealProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const variants = {
        hidden: {
            opacity: 0,
            y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
            x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration: 0.6,
                delay,
                ease: "easeOut" as "easeOut"
            }
        },
    };

    return (
        <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={cn("relative", className)}
            style={{ width }}
        >
            {children}
        </motion.div>
    );
};
