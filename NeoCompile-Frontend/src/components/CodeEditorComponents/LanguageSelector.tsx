import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { SiPython, SiJavascript, SiRust, SiPhp, SiSwift } from "react-icons/si";
import { FaJava, FaGolang } from "react-icons/fa6";
import { BiLogoCPlusPlus, BiLogoTypescript } from "react-icons/bi";

interface Language {
    id: string;
    icon: React.JSX.Element;
}

const languages: Language[] = [
    { id: 'javascript', icon: <SiJavascript className="size-7" /> },
    { id: 'python', icon: <SiPython className="size-7" /> },
    { id: 'java', icon: <FaJava className="size-7" /> },
    { id: 'cpp', icon: <BiLogoCPlusPlus className="size-7" /> },
    { id: 'go', icon: <FaGolang className="size-7" /> },
    { id: 'rust', icon: <SiRust className="size-7" /> },
    { id: 'php', icon: <SiPhp className="size-7" /> },
    { id: 'typescript', icon: <BiLogoTypescript className="size-7" /> },
    { id: 'swift', icon: <SiSwift className="size-7" /> },
];

interface LanguageSelectorProps {
    onSelectLanguage: (language: string) => void;
    selectedLanguage: string;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ onSelectLanguage, selectedLanguage }) => {
    return (
        <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="w-24 bg-gray-900 h-full p-4 border-r border-gray-800"
        >
            <div className="space-y-2 flex flex-col items-center justify-center gap-1">
                {languages.map((lang) => (
                    <Button
                        key={lang.id}
                        variant={selectedLanguage === lang.id ? "default" : "ghost"}
                        className={`w-full items-center justify-center py-5 ${selectedLanguage === lang.id ? 'bg-violet-600 hover:bg-violet-700' : 'hover:bg-gray-800'}`}
                        onClick={() => onSelectLanguage(lang.id)}
                    >
                        {lang.icon}
                    </Button>
                ))}
            </div>
        </motion.div>
    );
};

export default LanguageSelector;