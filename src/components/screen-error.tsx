import React, { useState, useEffect }  from "react"
import useTyped from "hooks/typed";

const SCREEN_MIN_W = 1280
const SCREEN_MIN_H = 768 // 1024

export const ScreenError = () => {
	
    const [isDesktop, setDesktop] = useState(true)
    
    const onCompleteTitleAnimation = () => {
    }

    const onCompleteAnimation = () => {
        // setShowCaret(false)
    }

    const [errorTitle, titleCaret] = useTyped({
        text: "Incompatible device detected.",
        speed: 20,
        onComplete: onCompleteTitleAnimation
    })
    const [errorText, textCaret] = useTyped({
        text: "Please use a desktop computer to access the terminal.",
        startDelay: 800,
        speed: 20,
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
                <div className="text-danger mb-2">
                    <span>{errorTitle}</span>
                    {titleCaret && 
                    <span className="typed-cursor danger">|</span>
                    }
                </div>
                <div>
                    <span>{errorText}</span>
                    {textCaret && 
                    <span className="typed-cursor">|</span>
                    }
                </div>
            </div>
        }
        </>
	)
}

export default ScreenError