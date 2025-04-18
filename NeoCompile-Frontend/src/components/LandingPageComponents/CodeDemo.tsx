import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Plus, Terminal, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const CodeDemo: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [output, setOutput] = useState('');
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  // Sample code to display
  const codeSnippet = `function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  
  const pivot = arr[0];
  const left = [];
  const right = [];
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage
const unsortedArray = [5, 3, 7, 6, 2, 9];
const sortedArray = quickSort(unsortedArray);
console.log(sortedArray);`;

  const runCode = () => {
    setIsRunning(true);
    setOutput('');
    setCurrentLineIndex(0);
  };

  useEffect(() => {
    if (isRunning) {
      const lines = [
        "> Running code...",
        "> Compiling...",
        "> Optimizing...",
        "> [1, 2, 3, 5, 6, 7, 9]",
        "> Process completed successfully in 0.23s"
      ];

      const typeOutput = async () => {
        if (currentLineIndex < lines.length) {
          setOutput(prev => prev + (prev ? '\n' : '') + lines[currentLineIndex]);
          setCurrentLineIndex(prev => prev + 1);
        } else {
          setIsRunning(false);
        }
      };

      const timeout = setTimeout(typeOutput, currentLineIndex === 0 ? 300 : 700);
      return () => clearTimeout(timeout);
    }
  }, [isRunning, currentLineIndex]);

  return (
    <Card className="w-full bg-code text-code-foreground overflow-hidden relative backdrop-blur-sm border border-secondary/30">
      <CardHeader className="p-3 bg-secondary/50 border-b border-secondary/30 flex flex-row justify-between items-center">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-sm font-medium">AI Code Compiler</div>
        <div>
          <Button variant="ghost" size="icon" className="text-code-foreground">
            <Plus size={14} />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="grid grid-cols-1 lg:grid-cols-5">
          {/* Code editor area */}
          <div className="col-span-3 p-4 font-mono text-sm overflow-hidden relative">
            <pre className="whitespace-pre-wrap">
              {codeSnippet.split('\n').map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.03, duration: 0.3 }}
                  className="relative"
                >
                  <span className="inline-block w-6 mr-2 text-gray-500 select-none text-right">{index + 1}</span>
                  <motion.span
                    initial={{ color: '#A9B1D6' }}
                    animate={{ 
                      color: isRunning && index === currentLineIndex + 4 ? '#7DF9FF' : '#A9B1D6' 
                    }}
                  >
                    {line}
                  </motion.span>
                </motion.div>
              ))}
            </pre>
            
            {/* Animated typing cursor */}
            <motion.div 
              className="absolute bottom-4 right-4"
              initial={{ opacity: 0.5 }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <div className="h-5 w-[1px] bg-primary"></div>
            </motion.div>
          </div>
          
          {/* Terminal/Output area */}
          <div className="col-span-2 bg-black p-4 font-mono text-sm text-green-400 flex flex-col">
            <div className="flex items-center mb-2 text-white">
              <Terminal size={14} className="mr-2" />
              <span>Output</span>
            </div>
            <div className="flex-1 whitespace-pre-wrap">
              {output || "// Output will appear here after running the code"}
              
              {isRunning && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                >
                  _
                </motion.span>
              )}
            </div>
            <div className="mt-4 flex justify-end">
              <Button
                className="flex items-center cursor-pointer"
                size="sm"
                disabled={isRunning}
                onClick={runCode}
              >
                <Play size={14} className="mr-2" />
                Run Code
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CodeDemo;