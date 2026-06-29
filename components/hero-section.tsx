"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = (reduceMotion: boolean): Variants => ({
  hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
});

const image = (reduceMotion: boolean): Variants => ({
  hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
});

const card = (reduceMotion: boolean): Variants => ({
  hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
});

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const reduceMotion = useReducedMotion();
  const itemBase = item(!!reduceMotion);
  const imageBase = image(!!reduceMotion);
  const cardBase = card(!!reduceMotion);

  if (mounted)
    return (
      <section className="relative isolate overflow-hidden px-6 pt-16 pb-12 md:pt-24 md:pb-20">
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <Image
            src="/images/hero-bg.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/45 to-background/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
        </div>
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 z-10">
          <motion.div
            className="flex flex-col items-start gap-6"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              variants={itemBase}
              className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground"
            >
              <Heart className="size-4" aria-hidden="true" />
              Compassionate care, at your pace
            </motion.span>

            <motion.h1
              variants={itemBase}
              className="text-balance font-serif text-4xl font-medium leading-tight tracking-tight text-foreground md:text-6xl"
            >
              A calm space to feel heard and supported
            </motion.h1>

            <motion.p
              variants={itemBase}
              className="max-w-md text-pretty text-lg leading-relaxed text-muted-foreground"
            >
              At Picton Psychology, we offer warm, judgement free therapy to
              help you navigate life&apos;s challenges and rediscover your sense
              of balance.
            </motion.p>

            <motion.div
              variants={itemBase}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <Button
                render={<Link href="#contact" />}
                nativeButton={false}
                size="lg"
                className="rounded-full px-6"
              >
                Book a session
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
              <Button
                render={<Link href="#services" />}
                nativeButton={false}
                size="lg"
                variant="outline"
                className="rounded-full border-border bg-card px-6"
              >
                Explore services
              </Button>
            </motion.div>
          </motion.div>

          <div className="relative">
            <motion.div
              className="overflow-hidden rounded-[2.5rem] border border-border/60 shadow-sm"
              variants={imageBase}
              initial="hidden"
              animate="visible"
            >
              <Image
                src="/images/clinic-room.webp"
                alt="A peaceful, sunlit therapy room with a comfortable armchair and a green plant"
                width={720}
                height={820}
                className="h-full w-full object-cover"
                priority
              />
            </motion.div>
            <motion.div
              className="absolute -bottom-5 -left-5 hidden rounded-3xl border border-border/60 bg-card px-6 py-4 shadow-sm sm:block"
              variants={cardBase}
              initial="hidden"
              animate="visible"
            >
              <p className="font-serif text-2xl font-medium text-foreground">
                500+
              </p>
              <p className="text-sm text-muted-foreground">
                people supported with care
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    );
}
