"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Component for the decoding text effect
const DecodingText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayText, setDisplayText] = useState("");
  const [isDecoding, setIsDecoding] = useState(true);
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let currentIndex = 0;
    let iterations = 0;
    
    // Calculate interval to complete in ~2 seconds
    const totalSteps = text.length * 2; // Each character needs about 2 iterations
    const interval = 2000 / totalSteps;
    
    const startDecoding = () => {
      timeout = setTimeout(() => {
        if (currentIndex < text.length) {
          let result = "";
          for (let i = 0; i < text.length; i++) {
            if (i <= currentIndex && iterations > 1) {
              result += text[i];
            } else if (text[i] === " ") {
              result += " ";
            } else {
              result += characters[Math.floor(Math.random() * characters.length)];
            }
          }
          
          setDisplayText(result);
          
          iterations++;
          
          if (iterations > 1) {
            currentIndex++;
            iterations = 0;
          }
          
          startDecoding();
        } else {
          setIsDecoding(false);
          setDisplayText(text);
        }
      }, interval);
    };
    
    // Start the animation after the specified delay
    const delayTimeout = setTimeout(() => {
      startDecoding();
    }, delay);
    
    return () => {
      clearTimeout(timeout);
      clearTimeout(delayTimeout);
    };
  }, [text, delay]);

  return <p className="text-center text-2xl font-mono">{displayText}</p>;
};

export default function Hero() {
    return (
        <div className="container mx-auto px-4">
            <div className="flex justify-center items-center min-h-[90vh] py-6 md:py-2">
                <div className="flex flex-col md:flex-row md:items-center md:gap-8 lg:gap-12 w-full max-w-4xl"> 
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="md:flex-1"
                    >
                        <div className="text-center mb-4 md:mb-4">
                            <h1 className="text-3xl md:text-4xl font-bold">I&lsquo;m Clemente Barros</h1>
                        </div>
                        <div className="mx-auto md:ml-4 px-3 py-3 sm:px-4 sm:py-4 md:px-6 md:py-6 flex justify-center items-center">
                            <Image 
                                src="/icons/IMG_9580.jpg" 
                                width={250} 
                                height={250} 
                                alt="Clemente Barros profile" 
                                className="rounded-xl object-cover w-full max-w-[200px] sm:max-w-[220px] md:max-w-[250px]"
                                priority 
                            />
                        </div>
                    </motion.div>
                    <div className="mt-6 md:mt-0 md:flex-1 space-y-4 md:space-y-6 self-center">
                        <DecodingText text="I'm Software Engineer & AI Enthusiast" delay={500} />
                        <DecodingText text="Tech Entrepreneur & Business Developer" delay={2700} />
                        <DecodingText text="Computer Sciences Student at Universidad de los Andes CL" delay={4900} />
                    </div>
                </div>
            </div>
        </div>
    )
}