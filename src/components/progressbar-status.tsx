import React, { useState, useEffect }  from "react"
import useIncrease from "hooks/increase";

interface IProgressBarStatus {
    value?: number,
    total?: number,
    unit?: string,
    animateInterval?: number,
    visible?: boolean
}

const TOTAL_BAR_COUNT = 28;

export const ProgressBarStatus = ({value, total, unit, animateInterval = 10, visible = true} : IProgressBarStatus) => {
	
    const [progressBars, setProgressBars] = useState<boolean[]>([])
    const currentValue = useIncrease({
        value: value || 0,
        speed: animateInterval,
        condition: [value, total]
    })

    useEffect(() => {
        let prog = []
        const progress = Math.round(TOTAL_BAR_COUNT * currentValue / 100);
        for(let i = 0; i < TOTAL_BAR_COUNT; i++) {
            prog.push( i < progress )
        }
        setProgressBars( prog )
    }, [currentValue])

	return (
		<div className="co-progress-status d-flex justify-content-between">
            <span>[</span>
            {progressBars.map((value, index) => (
                <span className={`${visible ? value ? '' : 'incomplete' : 'hidden'}`} key={`co-progress-status-${index}`}>|</span>
            ))}
            <span className="ms-1 text-desc text-end" style={{minWidth: '90px'}}>{`${value ? currentValue : ''} ${unit}`}</span>
            <span>]</span>
		</div>
	)
}

export default ProgressBarStatus