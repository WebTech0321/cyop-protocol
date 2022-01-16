import { useState, useEffect } from 'react';

interface ITyped {
  text: string,
  startDelay?: number,
  speed?: number,
  onComplete?: () => void
}

export default function useTyped({text, startDelay = 0, speed = 50, onComplete} : ITyped) {
  const [currentString, setCurrentString] = useState('')
  let timer : NodeJS.Timeout

  const typewrite = (curString : string, curStrPos : number) => {
    timer = setTimeout(() => {
        if (curStrPos === curString.length) {
          if(onComplete)
            onComplete()
        } else {
          setCurrentString( curString.substring(0, curStrPos + 1) )
          curStrPos++;
			    typewrite(curString, curStrPos);
        }
    }, speed)
  }

  useEffect(() => {
    if(startDelay > 0) {
      timer = setTimeout(() => {
        typewrite(text, 0)
      }, startDelay)
    } else {
      typewrite(text, 0)
    }
    // Remove event listeners on cleanup
    return () => {
      clearTimeout( timer )
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return currentString;
}