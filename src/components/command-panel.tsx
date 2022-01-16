import React, { useState }  from "react"
import useTyped from "hooks/typed";
import { Routes, Route, useLocation } from "react-router-dom"

interface ICommandPanel {
    onComplete?: () => void
}

export const CommandPanel = ({onComplete} : ICommandPanel) => {
	
    const location = useLocation();
    const [showCaret, setShowCaret] = useState(true)
	const [cmdText, setCmdText] = useState("searching:\\void\\sucked in>")

    const onCompleteAnimation = () => {
        if(onComplete)
            onComplete()
        setShowCaret(false)
    }

	const aniCmdText = useTyped({
		text: cmdText, 
		onComplete: onCompleteAnimation
	})
	

	return (
		<div className="co-cmd-panel d-flex align-items-center">
			<span>{aniCmdText}</span>
            {showCaret && 
            <div className="text-caret"></div>
            }
		</div>
	)
}

export default CommandPanel