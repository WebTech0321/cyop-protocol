import React, {useState, useEffect, useCallback} from "react"
import useTyped from "hooks/typed";
import LoadingPanel from "components/loading-panel";

export const ConnectWallet = () => {

    const [isConnected, setConnected] = useState(false)
    const [showConnectButton, setShowConnectButton] = useState(false)
    
    const onCompleteTitleAnimation = () => {
    }

    const onCompleteAnimation = () => {
        setShowConnectButton(true)
    }

    const [title, titleCaret] = useTyped({
        text: "CyOp PROTOCOL",
        speed: 20,
        onComplete: onCompleteTitleAnimation
    })
    const [description, descCaret] = useTyped({
        text: "ACCESS THE TERMINAL BY CONNECTING YOUR WALLET NOW",
        startDelay: 500,
        speed: 20,
        onComplete: onCompleteAnimation
    })

    const onClickConnect = () => {
        setConnected(true)
    }
    
	return (
		<div className="full-screen text-center p-3 d-flex flex-column justify-content-center align-items-center">
            {!isConnected && 
            <>
                <div className="text-large text-danger mb-2">
                    <span>{title}</span>
                    {titleCaret && 
                    <span className="typed-cursor danger">|</span>
                    }
                </div>
                <div className="text-large">
                    <span>{description}</span>
                    {descCaret && 
                    <span className="typed-cursor">|</span>
                    }
                </div>
                <div className={`co-button ${showConnectButton ? '' : 'invisible'}`} style={{marginTop: '80px'}} onClick={onClickConnect}>
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