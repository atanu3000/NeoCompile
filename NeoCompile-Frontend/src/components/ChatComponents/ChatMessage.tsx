import React from "react";
import { cn } from "@/lib/utils";
import { Bot } from "lucide-react";

interface ChatMessageProps {
    message: string;
    isAi?: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, isAi = false }) => {
    return (
        <div
            className={cn(
                "flex w-full items-start gap-4 p-4",
                isAi ? "bg-secondary" : "bg-background"
            )}
        >
            {isAi && (
                <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md bg-primary text-primary-foreground">
                    <Bot className="h-4 w-4" />
                </div>
            )}
            <div className={cn("flex flex-col gap-1", isAi ? "ml-0" : "ml-12")}>
                <div className="text-sm font-medium">
                    {isAi ? "AI Assistant" : "You"}
                </div>
                <div className="text-base text-muted-foreground">{message}</div>
            </div>
        </div>
    );
};

export default ChatMessage;