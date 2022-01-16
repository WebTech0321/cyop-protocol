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

    const [textConnected, connectCaret] = useTyped({
        text: "wallet successfully connected...",
        speed: 20,
        onComplete: onCompleteTitleAnimation
    })
    const [textInitiate, initiateCaret] = useTyped({
        text: "initiate terminal.",
        startDelay: 600,
        speed: 20,
        onComplete: onCompleteInitiateAnimation
    })
    const [textSearch, searchCaret] = useTyped({
        text: "loading",
        startDelay: 1000,
        speed: 20,
        onComplete: onCompleteSearchAnimation
    })
    
	return (
		<>
            <div className="loading-panel-notification text-start">
                <div className="mb-2">
                    <span>{textConnected}</span>
                    {connectCaret && 
                    <span className="typed-cursor danger">|</span>
                    }
                </div>
                <div className="">
                    <span>{textInitiate}</span>
                    {initiateCaret && 
                    <span className="typed-cursor">|</span>
                    }
                </div>
            </div>
            <div className="d-flex align-items-center">
                <div className="me-1">
                    {textSearch}
                    {searchCaret && 
                    <span className="typed-cursor">|</span>
                    }
                </div>
                <div style={{width: '320px'}}>
                    {showProgress &&
                        <ProgressBar progress={100} onComplete={onCompleteLoading}/>
                    }
                </div>
            </div>
        </>
	)
}

export default LoadingPanel