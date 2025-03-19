"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NavBar() {
    return (
        <div>
            <div className="flex justify-center text-center items-center border-b py-4">
                <Link href="/">
                    <motion.div
                        className="relative"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        <span className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                            CBB
                        </span>
                        <motion.div 
                            className="absolute -bottom-1 left-0 right-0 h-[2px] bg-primary"
                            initial={{ width: "0%" }}
                            whileHover={{ width: "100%" }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>
                </Link>
            </div>
        </div>
    )
}