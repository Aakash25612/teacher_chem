import React from 'react';

export const formatNCERTText = (text: string) => {
  const words = text.split(' ');
  const result: JSX.Element[] = [];
  
  for (let i = 0; i < words.length; i++) {
    if (words[i].toLowerCase() === 'line' && 
        words[i + 1]?.toLowerCase() === 'by' && 
        words[i + 2]?.toLowerCase() === 'line') {
      result.push(
        <span key={i} className="text-blue-600 font-bold">
          line by line
        </span>
      );
      i += 2; // Skip the next two words since we've handled them
    } else {
      result.push(<span key={i}>{words[i]} </span>);
    }
  }
  
  return <>{result}</>;
};