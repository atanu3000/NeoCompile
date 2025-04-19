import React from 'react';
import { motion } from 'framer-motion';

interface OutputPanelProps {
    code: string;
    onAnalyze: () => void;
    explanation: string;
}

const OutputPanel: React.FC<OutputPanelProps> = ({ code, onAnalyze, explanation }) => {
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
                        {explanation || "enter your name :"}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default OutputPanel;