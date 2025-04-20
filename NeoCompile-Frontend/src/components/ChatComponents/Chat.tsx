import React from "react";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

interface Message {
    text: string;
    isAi: boolean;
}

const Chat: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([
        {
            text: "Hello! I'm your AI assistant. How can I help you today?",
            isAi: true,
        },
    ]);
    const [isLoading, setIsLoading] = useState(false);

    const handleSendMessage = async (message: string) => {
        // Add user message
        setMessages((prev) => [...prev, { text: message, isAi: false }]);
        setIsLoading(true);

        // Simulate AI response
        setTimeout(() => {
            setMessages((prev) => [
                ...prev,
                {
                    text: `I received your message: "${message}".`,
                    isAi: true,
                },
            ]);
            setIsLoading(false);
        }, 1000);
    };

    return (
        <Card className="w-full max-w-3xl mx-auto overflow-hidden">
            <div className="h-[600px] flex flex-col">
                <div className="flex-1 overflow-y-auto">
                    {messages.map((message, index) => (
                        <ChatMessage
                            key={index}
                            message={message.text}
                            isAi={message.isAi}
                        />
                    ))}
                </div>
                <ChatInput onSendMessage={handleSendMessage} disabled={isLoading} />
            </div>
        </Card>
    );
};

export default Chat;