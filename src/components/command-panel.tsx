import React, { useState }  from "react"
import useTyped from "hooks/typed";
import { Routes, Route, useLocation } from "react-router-dom"

const sndCmd = require("assets/audio/command.mp3").default

interface ICommandPanel {
    onComplete?: () => void
}

export const CommandPanel = ({onComplete} : ICommandPanel) => {
	
  const location = useLocation();
	const [cmdText, setCmdText] = useState("searching:\\active event\\file_loaded>")

    const onCompleteAnimation = () => {
        if(onComplete)
            onComplete()
    }

	const [aniCmdText, cmdCompleted] = useTyped({
		text: cmdText, 
        start: true,
        speed: 20,
        soundFile: sndCmd,
            onComplete: onCompleteAnimation
	})
	

	return (
		<div className="co-cmd-panel d-flex align-items-center">
			<span>{aniCmdText}</span>
            {!cmdCompleted && 
            <div className="text-caret"></div>
            }
		</div>
	)
}

export default CommandPanel