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
      
      <div className="space-y-12">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-primary -translate-x-1/2 ml-4 ring-8 ring-background"></div>
            <div className="pl-8">
              <p className="text-sm text-muted-foreground">{item.period}</p>
              <h3 className="font-headline text-xl font-bold mt-1 text-accent">
                {item.role}
              </h3>
              <p className="font-medium text-foreground">{item.company}</p>
              <p className="mt-2 text-muted-foreground max-w-2xl">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
