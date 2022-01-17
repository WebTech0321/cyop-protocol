import React, {useState, useEffect, useCallback} from "react"
import useTyped from "hooks/typed";
import LoadingPanel from "components/loading-panel";
import useSound from "use-sound";
import ScreenError from "components/screen-error";

const sndAction = require('assets/audio/action.mp3').default

export const ConnectWallet = () => {

    const [isConnected, setConnected] = useState(false)
    const [showConnectButton, setShowConnectButton] = useState(false)
    const [playSound] = useSound(sndAction, {interrupt: true})
    
    const onCompleteTitleAnimation = () => {
    }

    const onCompleteAnimation = () => {
        setShowConnectButton(true)
    }

    const [title, titleCompleted] = useTyped({
        text: "CyOp PROTOCOL:\\",
        start: true,
        speed: 20,
        onComplete: onCompleteTitleAnimation
    })
    const [description, descCompleted] = useTyped({
        text: "ACCESS THE TERMINAL BY CONNECTING YOUR WALLET NOW",
        start: titleCompleted,
        speed: 20,
        onComplete: onCompleteAnimation
    })

    const onClickConnect = () => {
        playSound()
        setConnected(true)
    }
    
	return (
		<div className="full-screen text-center p-3 d-flex flex-column justify-content-center align-items-center">
            <ScreenError />
        {!isConnected && 
        <>
            <div className="text-large text-danger mb-2">
                <span>{title}</span>
                {titleCompleted && 
                <span className="typed-cursor danger">|</span>
                }
            </div>
            <div className="text-large">
                <span>{description}</span>
                {!titleCompleted && 
                <span className="typed-cursor">|</span>
                }
            </div>
            <div className={`co-button btn-connect ${showConnectButton ? '' : 'invisible'}`} style={{marginTop: '80px'}} onClick={onClickConnect}>
                connect
            </div>
        </>
        }
        {isConnected && 
            <LoadingPanel />
        }
      </div>
	)
}

export default ConnectWallet