import React, { useState } from 'react';
import LanguageSelector from '@/components/CodeEditorComponents/LanguageSelector';
import CodeEditor from '@/components/CodeEditorComponents/CodeEditor';
import OutputPanel from '@/components/CodeEditorComponents/OutputPanel';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from "lucide-react";

const CodeEditorDashboard: React.FC = () => {
    const [selectedLanguage, setSelectedLanguage] = useState<string>('javascript');
    const [currentCode, setCurrentCode] = useState('');
    const [explanation, setExplanation] = useState('');

    const handleAnalyze = () => {
        // For now, we'll just set a placeholder explanation
        // In a real implementation, this would call an AI service
        setExplanation("This is a sample code explanation. To get real AI explanations, you'll need to connect to a backend service.");
    };

    return (
        <>
            <motion.header
                className={`transition-all duration-300 bg-blue-500/10`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-14">
                        <div className="flex items-center">
                            <motion.span className="text-xl font-bold text-gradient">
                                NeoCompile
                            </motion.span>
                        </div>
                        <div className="flex items-center gap-4">
                            <Button size={'lg'} className='text-lg font-medium bg-violet-600'>Run</Button>
                            <Button className="bg-violet-600 text-lg font-medium flex items-center gap-2">
                                <Sparkles className="size-4" />
                                Analyze Code
                                <ArrowRight className="size-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </motion.header>
            <div className="flex h-screen bg-gray-950">
                <LanguageSelector
                    selectedLanguage={selectedLanguage}
                    onSelectLanguage={setSelectedLanguage}
                />
                <CodeEditor
                    language={selectedLanguage}
                    onCodeChange={setCurrentCode}
                />
                <OutputPanel
                    code={currentCode}
                    onAnalyze={handleAnalyze}
                    explanation={explanation}
                />
            </div>
        </>
    );
};

export default CodeEditorDashboard;