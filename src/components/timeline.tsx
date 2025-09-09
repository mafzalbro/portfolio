"use client";

import { motion } from "framer-motion";

type TimelineItem = {
  role: string;
  company: string;
  period: string;
  description: string;
};

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative pl-8">
      <div className="absolute left-0 top-0 h-full w-0.5 bg-border -translate-x-1/2 ml-4"></div>
      
      <div className="space-y-16">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full bg-primary -translate-x-1/2 ml-4 ring-8 ring-card"></div>
            <div className="pl-8">
              <p className="text-sm font-semibold text-muted-foreground">{item.period}</p>
              <h3 className="font-headline text-2xl font-bold mt-1 text-primary">
                {item.role}
              </h3>
              <p className="font-semibold text-foreground/80">{item.company}</p>
              <p className="mt-3 text-foreground/70">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
