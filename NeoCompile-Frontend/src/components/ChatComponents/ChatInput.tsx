import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { useContext } from "react";
import { AppContext } from "@/Context/AppContextProvider";
import axios from "axios";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

const ChatInput = ({ onSendMessage, disabled }: ChatInputProps) => {
  const [message, setMessage] = useState("");
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("Must be used within AppContextProvider");
  }

  const { code, language, setResponseMsg, setGenerateStatus } = context;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message) {
      const completeText: string = code + message;
      onSendMessage(message.trim());
      setGenerateStatus(false);
      axios.post(import.meta.env.VITE_CODE_GENERATOR_API, {
        text: completeText,
        language: language
      }).then(res => {
        const response = res.data.data;
        const cleanedCode = response.replace(/```[\s\S]*?([\s\S]*?)```/, "$1").trim();
        setResponseMsg(cleanedCode);
        setMessage("");
        setGenerateStatus(true);
      }).catch(err => {
        console.error(err);
        setMessage("");
        setGenerateStatus(false);
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 p-4">
      <Textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        className="min-h-[10px] flex-grow resize-none"
        disabled={disabled}
      />
      <Button className="cursor-pointer" type="submit" disabled={!message.trim() || disabled}>
        <Send className="size-4" />
      </Button>
    </form>
  );
};

export default ChatInput;