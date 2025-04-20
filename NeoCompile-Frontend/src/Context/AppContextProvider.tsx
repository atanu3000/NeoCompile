import React, { useState, ReactNode } from "react";

interface CodeInfo {
    code: string;
    language: string;
    responseMsg: string;
    setResponseMsg: (code: string) => void;
    setCode: (code: string) => void;
    setLanguage: (lang: string) => void;
    generateStatus: boolean;
    setGenerateStatus: (loading: boolean) => void;
}

export const AppContext = React.createContext<CodeInfo | undefined>(undefined);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
    const [code, setCode] = useState<string>('');
    const [language, setLanguage] = useState<string>('');
    const [responseMsg, setResponseMsg] = useState<string>('');
    const [generateStatus, setGenerateStatus] = useState<boolean>(false);
    return (
        <AppContext.Provider value={{ code, setCode, language, setLanguage, responseMsg, setResponseMsg, generateStatus, setGenerateStatus }}>
            {children}
        </AppContext.Provider>
    );
};