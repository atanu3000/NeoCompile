import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Editor from '@monaco-editor/react';

interface CodeEditorProps {
    language: string;
    onCodeChange: (code: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ language, onCodeChange }) => {
    const [code, setCode] = useState<string>('');

    const getDefaultCode = (lang: string) => {
        switch (lang) {
            case 'javascript':
                return `console.log("Hello, World!");`;
            case 'python':
                return `print("Hello, World!")`;
            case 'java':
                return `public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}`;
            case 'cpp':
                return `#include <iostream>\nint main() {\n    std::cout << "Hello, World!"; \n    return 0; \n}`;
            case 'go':
                return `package main\nimport "fmt"\nfunc main() {\n    fmt.Println("Hello, World!")\n}`;
            case 'rust':
                return `fn main() {\nprintln!("Hello, World!");\n}`;
            case 'php':
                return `<?php\necho "Hello, World!"\n;?>`;
            case 'typescript':
                return `console.log("Hello, World!");`;
            case 'swift':
                return `print("Hello, World!")`
            default:
                return `// Start coding here`;
        }
    };

    useEffect(() => {
        setCode(getDefaultCode(language));
    }, [language]);

    const handleEditorChange = (value: string | undefined) => {
        if (value !== undefined) {
            setCode(value);
            onCodeChange(value);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex-1 h-full"
        >
            <Editor
                height="100%"
                defaultLanguage="javascript"
                language={language.toLowerCase()}
                value={code}
                onChange={handleEditorChange}
                theme="vs-dark"
                options={{
                    minimap: { enabled: true },
                    fontSize: 16,
                    lineNumbers: 'on',
                    roundedSelection: false,
                    scrollBeyondLastLine: false,
                    automaticLayout: true
                }}
            />
        </motion.div>
    );
};

export default CodeEditor;