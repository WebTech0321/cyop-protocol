import { useState, useEffect } from 'react';

interface IIncrease {
  value: number,
  startDelay?: number,
  speed?: number,
  onComplete?: () => void,
  condition?: Array<any>
}

export default function useIncrease({value, condition = [], startDelay = 0, speed = 30, onComplete} : IIncrease) {
  const [currentValue, setCurrentValue] = useState(0)
  let timer : NodeJS.Timeout

  const increase = (curValue : number) => {
    timer = setTimeout(() => {
        if (curValue === value) {
          if(onComplete)
            onComplete()
        } else {
          setCurrentValue( curValue + 1 )
			    increase( curValue + 1 );
        }
    }, speed)
  }

  useEffect(() => {
    if(startDelay > 0) {
      timer = setTimeout(() => {
        increase(0)
      }, startDelay)
    } else {
      increase(0)
    }
    // Remove event listeners on cleanup
    return () => {
      clearTimeout( timer )
    };
  }, condition); // Empty array ensures that effect is only run on mount and unmount

  return currentValue;
}