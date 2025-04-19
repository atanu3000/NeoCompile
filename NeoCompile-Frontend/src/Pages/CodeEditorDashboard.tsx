import React, { useState } from 'react';
import LanguageSelector from '@/components/CodeEditorComponents/LanguageSelector';
import CodeEditor from '@/components/CodeEditorComponents/CodeEditor';
import OutputPanel from '@/components/CodeEditorComponents/OutputPanel';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from "lucide-react";
import axios from 'axios';

const CodeEditorDashboard: React.FC = () => {
    const [selectedLanguage, setSelectedLanguage] = useState<string>('javascript');
    const [currentCode, setCurrentCode] = useState<string>('');
    const [output, setOutput] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const handleCodeRun = () => {
        try {
            setLoading(true);
            axios.post(import.meta.env.VITE_CODE_COMPILE_API, {
                code: currentCode,
                language: selectedLanguage
            }).then(res => {
                setLoading(false);
                setOutput(res.data.data);
            }).catch(err => {
                setLoading(false);
                console.error(err);
            });
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    }

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
                            <Button onClick={handleCodeRun} size={'lg'} className='text-lg font-medium bg-violet-600'>Run</Button>
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
                    loading={loading}
                    output={output}
                />
            </div>
        </>
    );
};

export default CodeEditorDashboard;