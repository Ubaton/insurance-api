"use client";

import { InfiniteMovingCards } from "../ui/InfiniteMovingCards";

export default function MovingCards() {
  return (
    <div className="h-[30rem] flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Having comprehensive business insurance has been a lifesaver. When unexpected challenges came up, my policy helped cover the costs, and I was able to keep my business running smoothly.",
    name: "Sarah Thompson",
    title: "Small Business Owner",
  },
  {
    quote:
      "I never thought I needed insurance until an accident happened. My health insurance took care of everything, saving me from thousands in medical bills. It's something everyone should have.",
    name: "Michael Rodriguez",
    title: "Freelance Designer",
  },
  {
    quote: "Home insurance gave me the peace of mind I needed. Knowing my home and belongings are protected makes me feel secure no matter what life throws my way.",
    name: "Emily Chen",
    title: "New Homeowner",
  },
  {
    quote:
      "Life insurance was one of the best decisions I made for my family. It gives me comfort knowing they'll be financially secure if anything happens to me.",
    name: "James Patel",
    title: "Father of Two",
  },
  {
    quote:
      "When my store was damaged by a flood, my insurance policy covered the repairs and loss of income. I don't know what I would have done without it!When my store was damaged by a flood, my insurance policy covered the repairs and loss of income. I don't know what I would have done without it!",
    name: "Olivia Martinez",
    title: "Entrepreneur",
  },
  {
    quote:
      "Getting car insurance was easier than I expected, and it's already paid off. When my car was rear-ended last month, my policy covered the repair costs without any hassle.",
    name: "David Kim",
    title: "Software Engineer",
  },
  {
    quote:
      "Travel insurance saved my trip! I had to cancel due to a medical emergency, and I was fully reimbursed. I won't travel without it again.",
    name: "Priya Singh",
    title: "Traveler",
  },

];
