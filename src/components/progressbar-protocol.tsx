import React, { useState, useEffect, useRef }  from "react"
import useIncrease from "hooks/increase";

interface IProgressBarProtocol {
    progress?: number,
    animateInterval?: number,
}

const UNIT_PROG_WIDTH = 16;

export const ProgressBarProtocol = ({progress, animateInterval = 5} : IProgressBarProtocol) => {
	
    const refProgress = useRef<HTMLDivElement>(null)
    const [progressOverallWidth, setProgressOverallWidth] = useState<number>(0)
    const [progressHalfWidth, setProgressHalfWidth] = useState<number>(0)
    const [progressWidth, setProgressWidth] = useState<number>(0)
    const overallValue = useIncrease({
        value: 100,
        startDelay: 0,
        speed: animateInterval,
        condition: [progress]
    })
    const halfValue = useIncrease({
        value: progress ? progress * 1.7 > 100 ? 100 : progress * 1.7 : 0,
        startDelay: 600,
        speed: animateInterval,
        condition: [progress]
    })
    const currentValue = useIncrease({
        value: progress || 0,
        startDelay: 600,
        speed: animateInterval,
        condition: [progress]
    })

    useEffect(() => {
        if(progress && refProgress.current) {
            const w = refProgress.current.clientWidth
            const overallW = Math.round((w * overallValue / 100) / UNIT_PROG_WIDTH) * UNIT_PROG_WIDTH
            setProgressOverallWidth( overallW )
        }
    }, [overallValue])
    
    useEffect(() => {
        if(progress && refProgress.current) {
            const w = refProgress.current.clientWidth
            const halfW = Math.round((w * halfValue / 100) / UNIT_PROG_WIDTH) * UNIT_PROG_WIDTH
            setProgressHalfWidth( halfW )
        }
    }, [halfValue])
    
    useEffect(() => {
        if(progress && refProgress.current) {
            const w = refProgress.current.clientWidth
            const currentW = Math.round((w * currentValue / 100) / UNIT_PROG_WIDTH) * UNIT_PROG_WIDTH
            setProgressWidth( currentW )
        }
    }, [currentValue])

	return (
		<div className="co-progress-protocol" ref={refProgress}>
            {progress && 
            <>
                <div className="progress-item progress-overall" style={{width: `${progressOverallWidth}px`}}></div>
                <div className="progress-item progress-half" style={{width: `${progressHalfWidth}px`}}></div>
                <div className="progress-item progress-current" style={{width: `${progressWidth}px`}}></div>
            </>
            }
		</div>
	)
}

export default ProgressBarProtocol