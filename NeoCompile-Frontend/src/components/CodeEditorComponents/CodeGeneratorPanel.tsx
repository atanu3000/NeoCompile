import React from 'react';
import { Sheet, SheetContent } from "@/components/ui/sheet";
import Chat from '../ChatComponents/Chat';

interface ExplanationPanelProps {
    isSheetOpen: boolean;
    setIsSheetOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CodeGeneratorPanel: React.FC<ExplanationPanelProps> = ({ isSheetOpen, setIsSheetOpen }) => {
    return (
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetContent className="w-96 bg-gray-900 border-gray-800">
                <div className="h-full flex flex-col gap-4 pt-8 px-3">
                    <h3 className="text-lg font-medium text-gray-100">Ai Code Generator</h3>
                    <Chat />
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default CodeGeneratorPanel;