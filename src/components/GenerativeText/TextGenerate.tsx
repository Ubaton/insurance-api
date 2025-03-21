"use client";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";

const words = `We understand that choosing the right insurance can feel overwhelming. 
    That’s why we're here to make it easier for you. Whether you're looking for personal coverage, 
    health insurance, or specialized plans for your business, we have flexible options tailored to fit your needs.
    We're committed to providing you with the best coverage at the best price.`;

export default function TextGenerate() {
  return <TextGenerateEffect duration={2} filter={false} words={words} />;
}
