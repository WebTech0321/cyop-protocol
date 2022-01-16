import React, { useState, useEffect }  from "react"
import useTyped from "hooks/typed";

const SCREEN_MIN_W = 1280
const SCREEN_MIN_H = 768 // 1024

export const ScreenError = () => {
	
    const [showTitleCaret, setShowTitleCaret] = useState(true)
    const [showCaret, setShowCaret] = useState(false)
    const [isDesktop, setDesktop] = useState(true)
    
    const onCompleteTitleAnimation = () => {
        setShowTitleCaret(false)
        setShowCaret(true)
    }

    const onCompleteAnimation = () => {
        setShowCaret(false)
    }

    const errorTitle = useTyped({
        text: "Incompatible device detected.",
        speed: 10,
        onComplete: onCompleteTitleAnimation
    })
    const errorText = useTyped({
        text: "Please use a desktop computer to access the terminal.",
        startDelay: 500,
        speed: 10,
        onComplete: onCompleteAnimation
    })
    
	
    useEffect(() => {
        resizeHandler();
        window.addEventListener('resize', resizeHandler);        
        // Remove event listeners on cleanup
        return () => {
            window.removeEventListener('resize', resizeHandler);
        };
    }, [])

    const resizeHandler = () => {
		const width = window.screen.width
		const height = window.screen.height
        
		if( width < SCREEN_MIN_W || height < SCREEN_MIN_H ) {
			setDesktop(false)
		} else {
			setDesktop(true)
		}
    }

	return (
        <>
        {!isDesktop &&
            <div className="full-screen text-center p-3 d-flex flex-column align-items-center justify-content-center">
                <div className="text-with-caret text-danger mb-2">
                    <span>{errorTitle}</span>
                    {showTitleCaret && 
                    <span className="text-caret danger"></span>
                    }
                </div>
                <div className="text-with-caret">
                    <span>{errorText}</span>
                    {showCaret && 
                    <span className="text-caret"></span>
                    }
                </div>
            </div>
        }
        </>
	)
}

export default ScreenError