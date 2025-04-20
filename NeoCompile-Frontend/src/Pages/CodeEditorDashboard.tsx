import React, { useState, useEffect } from 'react';
import LanguageSelector from '@/components/CodeEditorComponents/LanguageSelector';
import CodeEditor from '@/components/CodeEditorComponents/CodeEditor';
import OutputPanel from '@/components/CodeEditorComponents/OutputPanel';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Play } from "lucide-react";
import axios from 'axios';
import CodeGeneratorPanel from '@/components/CodeEditorComponents/CodeGeneratorPanel';
import { useContext } from 'react';
import { AppContext } from '@/Context/AppContextProvider';

const CodeEditorDashboard: React.FC = () => {
    const [selectedLanguage, setSelectedLanguage] = useState<string>('javascript');
    const [currentCode, setCurrentCode] = useState<string>('');
    const [output, setOutput] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [explanation, setExplanation] = useState<string>('');
    const [explanationLoading, setExplanationLoading] = useState<boolean>(false);
    const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false);

    const context = useContext(AppContext);

    if (!context) {
        throw new Error("Must be used within AppContextProvider");
    }

    const { setCode, setLanguage, responseMsg, generateStatus } = context;

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
        try {
            setExplanationLoading(true);
            axios.post(import.meta.env.VITE_CODE_EXPLANATION_API, {
                code: currentCode,
                language: selectedLanguage
            }).then(res => {
                setExplanationLoading(false);
                setExplanation(res.data.data);
            }).catch(err => {
                setExplanationLoading(false);
                console.error(err);
            });
        } catch (error) {
            console.error(error);
            setExplanationLoading(false);
        }
    }

    const handleGenerateCode = async () => {
        setIsSheetOpen(true);
        setLanguage(selectedLanguage);
        setCode(currentCode);
    }

    useEffect(() => {
        if (generateStatus) {
            setCurrentCode(responseMsg);
        }
    }, [generateStatus, responseMsg]);

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
                            <Button onClick={handleCodeRun} size={'lg'} className='text-base font-medium bg-violet-600'><Play />Run Code</Button>
                            <Button onClick={handleGenerateCode} className="bg-slate-100 text-slate-950 hover:bg-slate-200 text-base font-medium flex items-center gap-2">
                                <Sparkles className="size-4" />
                                Generate Code
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
                    explanation={explanation}
                    explanationLoading={explanationLoading}
                />
                <CodeGeneratorPanel
                    isSheetOpen={isSheetOpen}
                    setIsSheetOpen={setIsSheetOpen}
                />
            </div>
        </>
    );
};

export default CodeEditorDashboard;