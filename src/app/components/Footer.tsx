
"use client";

import { GithubIcon, InstagramIcon, LinkedinIcon, MailIcon } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Footer() {
    const [showCopyNotification, setShowCopyNotification] = useState(false);
    
    const copyEmailToClipboard = () => {
        navigator.clipboard.writeText('clemente.barros.b@gmail.com');
        setShowCopyNotification(true);
        
        setTimeout(() => {
            setShowCopyNotification(false);
        }, 2000);
    };
    
    return (
        <div className="pt-10 sm:pt-20">
            <div className="border-t pt-5">
                <div>
                    <h1 className="text-xl sm:text-2xl font-bold text-center">Contacto</h1>
                </div>
                <div className="container mx-auto p-5">
                    <div className="flex justify-center items-center h-16 sm:h-20 gap-6 sm:gap-16">
                        <Link href="https://github.com/clementecbb" className="relative group">
                            <motion.div
                                whileHover={{ 
                                    scale: 1.2,
                                    rotate: 10,
                                    transition: { type: "spring", stiffness: 400, damping: 10 }
                                }}
                            >
                                <GithubIcon size={40} className="sm:w-[70px] sm:h-[70px] transition-colors duration-300 group-hover:text-primary" />
                            </motion.div>
                        </Link>
                        <Link href="https://www.linkedin.com/in/clemente-jose-barros-bustamante-6103462b8/" className="relative group">
                            <motion.div
                                whileHover={{ 
                                    scale: 1.2,
                                    rotate: -10,
                                    transition: { type: "spring", stiffness: 400, damping: 10 }
                                }}
                            >
                                <LinkedinIcon size={40} className="sm:w-[70px] sm:h-[70px] transition-colors duration-300 group-hover:text-primary" />
                            </motion.div>
                        </Link>
                        <Link href="https://www.instagram.com/im_clemente_/" className="relative group">
                            <motion.div
                                whileHover={{ 
                                    scale: 1.2,
                                    rotate: 10,
                                    transition: { type: "spring", stiffness: 400, damping: 10 }
                                }}
                            >
                                <InstagramIcon size={40} className="sm:w-[70px] sm:h-[70px] transition-colors duration-300 group-hover:text-primary" />
                            </motion.div>
                        </Link>
                        <button 
                            onClick={copyEmailToClipboard} 
                            className="relative group"
                            aria-label="Copy email to clipboard"
                        >
                            <motion.div
                                whileHover={{ 
                                    scale: 1.2,
                                    rotate: -10,
                                    transition: { type: "spring", stiffness: 400, damping: 10 }
                                }}
                            >
                                <MailIcon size={40} className="sm:w-[70px] sm:h-[70px] transition-colors duration-300 group-hover:text-primary" />
                            </motion.div>
                            
                            {showCopyNotification && (
                                <motion.div 
                                    className="absolute -top-10 sm:-top-12 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-md text-xs sm:text-sm whitespace-nowrap"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                >
                                    Email copiado!
                                </motion.div>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}