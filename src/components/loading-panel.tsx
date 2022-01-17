import React, {useState, useEffect, useCallback} from "react"
import useTyped from "hooks/typed";
import useIncrease from "hooks/increase";
import ProgressBar from "components/progressbar";
import { useNavigate } from "react-router-dom";

export const LoadingPanel = () => {

    const navigate = useNavigate()
    const [showProgress, setShowProgress] = useState(false)

    const onCompleteTitleAnimation = () => {
    }

    const onCompleteInitiateAnimation = () => {
    }

    const onCompleteSearchAnimation = () => {
        setShowProgress(true)
    }

    const onCompleteLoading = () => {
        navigate("/active-event")
    }

    const [textConnected, connectCompleted] = useTyped({
        text: "wallet successfully connected...",
        start: true,
        speed: 30,
        onComplete: onCompleteTitleAnimation
    })
    const [textInitiate, initiateCompleted] = useTyped({
        text: "initiate terminal.",
        start: connectCompleted,
        speed: 30,
        onComplete: onCompleteInitiateAnimation
    })
    const [textLoading] = useTyped({
        text: "loading",
        start: initiateCompleted,
        speed: 30,
        onComplete: onCompleteSearchAnimation
    })
    
	return (
		<>
            <div className="loading-panel-notification text-start">
                <div className="mb-2">
                    <span>{textConnected}</span>
                    {!connectCompleted && 
                    <span className="typed-cursor danger">|</span>
                    }
                </div>
                <div className="">
                    <span>{textInitiate}</span>
                    {connectCompleted && !initiateCompleted && 
                    <span className="typed-cursor">|</span>
                    }
                </div>
            </div>
            <div className="d-flex align-items-center">
                <div className="me-1">
                    {textLoading}
                </div>
                <div style={{width: '320px'}}>
                    {showProgress &&
                        <ProgressBar progress={100} animateInterval={20} onComplete={onCompleteLoading}/>
                    }
                </div>
            </div>
        </>
	)
}

export default LoadingPanel