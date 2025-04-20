import React from 'react';
import { Sheet, SheetContent } from "@/components/ui/sheet";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

interface ExplanationPanelProps {
    isSheetOpen: boolean;
    setIsSheetOpen: React.Dispatch<React.SetStateAction<boolean>>;
    explanation: string;
    explanationLoading: boolean;
}

const ExplanationPanel: React.FC<ExplanationPanelProps> = ({ isSheetOpen, setIsSheetOpen, explanation, explanationLoading }) => {
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
                            <ReactMarkdown
                                rehypePlugins={[rehypeRaw]}
                                remarkPlugins={[remarkGfm]}
                            >
                                {explanation}
                            </ReactMarkdown>
                        </div>
                    )}
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default ExplanationPanel;