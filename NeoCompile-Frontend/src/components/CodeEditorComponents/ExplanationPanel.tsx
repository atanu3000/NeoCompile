import React from 'react';
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { motion } from 'framer-motion';

interface ExplanationPanelProps {
    isSheetOpen: boolean;
    setIsSheetOpen: React.Dispatch<React.SetStateAction<boolean>>;
    explanation: string;
    explanationLoading: boolean;
    isAnimating: boolean;
}

const ExplanationPanel: React.FC<ExplanationPanelProps> = ({ isSheetOpen, setIsSheetOpen, explanation, explanationLoading, isAnimating }) => {
    const animationVarient = {
        hidden: {
            opacity: 0,
            y: 20,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    }
    return (
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetContent className="w-[400px] sm:w-[540px] bg-gray-900 border-gray-800">
                <div className="h-full flex flex-col gap-4 pt-8 px-3">
                    <h3 className="text-lg font-medium text-gray-100">Code Explanation</h3>
                    {explanationLoading ? (
                        <div className="flex items-center justify-center bg-gray-800 p-4 rounded-lg text-sm text-gray-200">
                            <div className="loader"></div>
                        </div>
                    ) : (
                        <div className="flex-1 bg-gray-800 p-4 rounded-lg text-sm text-gray-200">
                            {
                                Array.from(
                                    explanation
                                ).map((char, index) => (
                                    <motion.span key={index} variants={animationVarient} animate={isAnimating ? "visible" : "hidden"}>
                                        {char}
                                    </motion.span>
                                ))
                            }
                        </div>
                    )}
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default ExplanationPanel;