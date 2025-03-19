"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Projects() {
    return (
        <div className="py-16 container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
            
            <motion.div 
                className="max-w-4xl mx-auto bg-card border border-border rounded-xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="md:flex">
                    <div className="md:w-1/3 flex items-center justify-center p-8 bg-gradient-to-br from-gray-900 to-gray-800">
                        <Image 
                            src="/icons/fintwise.svg" 
                            alt="Fintwise Logo" 
                            width={260} 
                            height={190}
                            className="object-contain"
                        />
                    </div>
                    
                    <div className="md:w-2/3 p-8">
                        <div className="flex items-center mb-4">
                            <h3 className="text-2xl font-bold">Fintwise</h3>
                            <span className="ml-3 px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary">
                                In Development
                            </span>
                        </div>
                        
                        <p className="text-muted-foreground mb-6">
                            Take control of your finances with our AI-driven insights. Connect
                            your accounts, visualize spending patterns, and receive
                            personalized recommendations.
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-6">
                            <span className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">React</span>
                            <span className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">Next.js</span>
                            <span className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">AI</span>
                            <span className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">FinTech</span>
                        </div>
                        
                        <motion.button 
                            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Coming Soon
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}