"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Definición de tipos para las tecnologías
interface Technology {
  name: string;
  icon: string;
  description: string;
}

export default function TechStack() {
    // Lista de tecnologías con sus iconos y descripciones
    const technologies: Technology[] = [
        {
            name: 'Next.js',
            icon: '/icons/next.svg',
            description: 'Framework de React que permite renderizado del lado del servidor y generación de sitios estáticos.'
        },
        {
            name: 'React',
            icon: '/icons/react.svg',
            description: 'Biblioteca JavaScript para construir interfaces de usuario con componentes reutilizables.'
        },
        {
            name: 'Tailwind CSS',
            icon: '/icons/tailwind.svg',
            description: 'Framework CSS utilitario para crear diseños personalizados sin salir de tu HTML.'
        },
        {
            name: 'TypeScript',
            icon: '/icons/typescript.svg',
            description: 'Superset de JavaScript que añade tipado estático opcional y otras características.'
        },
        {
            name: 'Node.js',
            icon: '/icons/nodejs.svg',
            description: 'Entorno de ejecución para JavaScript construido con el motor V8 de Chrome.'
        },
        {
            name: 'Python',
            icon: '/icons/python.svg',
            description: 'Lenguaje de programación interpretado de alto nivel.'
        },
        {
            name: 'PostgresQL',
            icon: '/icons/postgresql.svg',
            description: 'Sistema de gestión de bases de datos relacional.'
        },
        {
            name: 'Ruby on Rails',
            icon: '/icons/rails.svg',
            description: 'Framework de Ruby para desarrollo web basado en el patrón de diseño MVC.'
        },
        {
            name: 'React Native',
            icon: '/icons/reactnative.svg',
            description: 'Framework de React para crear aplicaciones para iOS y Android.'
        },
        {
            name: 'Figma',
            icon: '/icons/figma.svg',
            description: 'Herramienta de diseño gráfico y prototipado de interfaces.'
        },
        {
            name: 'Astro.js',
            icon: '/icons/astro.svg',
            description: 'Framework de JavaScript para el desarrollo de sitios web estaticos.'
        }
        
    ];

    return (
        <div className="py-12">
            <h2 className="text-3xl font-bold text-center mb-10">Tecnologías</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {technologies.map((tech, index) => (
                    <TechCard key={index} technology={tech} />
                ))}
            </div>
        </div>
    );
}

// Componente para cada tarjeta de tecnología
function TechCard({ technology }: { technology: Technology }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="relative h-48 rounded-xl overflow-hidden"
            whileHover={{ 
                scale: 1.05,
                rotateX: 15,
                rotateY: 15,
                transition: { duration: 0.3 }
            }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            <div className="absolute inset-0 bg-card text-card-foreground border border-border p-4 flex flex-col justify-center items-center transition-all duration-300">
                {/* Icono de fondo con efecto blur cuando está hover */}
                <div className={`absolute inset-0 flex justify-center items-center transition-all duration-300 ${isHovered ? 'opacity-10 blur-sm' : 'opacity-100'}`}>
                    <div className="bg-white rounded-full p-3 flex items-center justify-center w-20 h-20">
                        <Image 
                            src={technology.icon} 
                            alt={technology.name} 
                            width={50} 
                            height={50} 
                            className="object-contain"
                        />
                    </div>
                </div>
                
                {/* Contenido que se muestra siempre */}
                <h3 className={`text-sm font-bold text-card-foreground mb-1 z-10 transition-all duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
                    
                </h3>
                
                {/* Contenido que se muestra al hacer hover */}
                <div className={`flex flex-col items-center justify-center transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                    <h3 className="text-sm font-bold text-primary mb-2">{technology.name}</h3>
                    <p className="text-xs text-muted-foreground text-center">{technology.description}</p>
                </div>
            </div>
        </motion.div>
    );
}