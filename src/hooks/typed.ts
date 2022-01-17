import { useState, useEffect } from 'react';
import useSound from "use-sound"
const sndType = require("assets/audio/type.mp3").default

interface ITyped {
  text: string,
  start: boolean,
  startDelay?: number,
  speed?: number,
  soundFile?: string,
  onComplete?: () => void
}

export default function useTyped({text, start, startDelay = 0, speed = 50, soundFile = sndType, onComplete} : ITyped) : [string, boolean] {
  const [currentString, setCurrentString] = useState('')  
  const [audio, setAudio] = useState<HTMLAudioElement>()
  const [completed, setCompleted] = useState(false)
  let timer : NodeJS.Timeout

  const typewrite = (curString : string, curStrPos : number) => {
    timer = setTimeout(() => {
        if (curStrPos === curString.length) {
          // stop();
          setTimeout(() => {
            setCompleted(true)
          }, 500)
          if(onComplete)
            onComplete()
        } else {
          setCurrentString( curString.substring(0, curStrPos + 1) )
          curStrPos++;
			    typewrite(curString, curStrPos);
        }
    }, speed)
  }

  const pauseAudio = () => {
      if(audio) {
        if(completed) {
          audio.loop = false;
          audio.pause();
          audio.currentTime = 0;
        } else {
          audio.currentTime = 0;
          audio.play()
        }
      }
  }

  useEffect(() => {
    if(start) {
      const audio = new Audio(soundFile)
      setAudio(audio)
      if(startDelay > 0) {
        timer = setTimeout(() => {
          typewrite(text, 0) 
          audio.play();
        }, startDelay)
      } else {
        typewrite(text, 0)
        audio.addEventListener('load', function() { 
          audio.play();
        }, false);
      }

      audio.addEventListener('ended', pauseAudio)

      // Remove event listeners on cleanup
      return () => {
        audio.pause()
        audio.removeEventListener('ended', pauseAudio)
        clearTimeout( timer )
      };
    }
  }, [start]); // Empty array ensures that effect is only run on mount and unmount

  return [ currentString, completed ];
}