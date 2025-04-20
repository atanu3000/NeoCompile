import React from 'react';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

interface OutputPanelProps {
    output: string;
    loading: boolean;
    explanation: string;
    explanationLoading: boolean;
}

const OutputPanel: React.FC<OutputPanelProps> = ({ output, loading, explanation, explanationLoading }) => {
    return (
        <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="w-96 bg-gray-900 h-full p-3 border-l border-gray-800 flex flex-col"
        >
            <div className="flex flex-col gap-4">
                <div className="flex-1 mt-1">
                    <h3 className="text-lg font-medium text-gray-400 mb-2">Output</h3>
                    <div className="bg-gray-800 p-4 rounded-lg text-sm text-gray-200 min-h-[200px]">
                        {loading ? (
                            <div className='w-full items-center justify-center'>
                                <div className="loader"></div>
                            </div>
                        ) : (
                            <div>
                                {output || "Your code output here"}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="h-96 flex flex-col gap-4 pt-4">
                <h3 className="text-lg font-medium text-gray-100">Code Explanation</h3>
                {explanationLoading ? (
                    <div className="flex items-center justify-center bg-gray-800 p-4 rounded-lg text-sm text-gray-200">
                        <div className="loader"></div>
                    </div>
                ) : (
                    <div className="w-full bg-gray-800 p-4 rounded-lg text-sm text-gray-200 overflow-y-auto break-words whitespace-pre-wrap">
                        <ReactMarkdown
                            rehypePlugins={[rehypeRaw]}
                            remarkPlugins={[remarkGfm]}
                        >
                            {explanation || "Your Code Explanation Here"}
                        </ReactMarkdown>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default OutputPanel;