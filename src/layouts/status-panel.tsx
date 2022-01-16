import React, { useState, useEffect }  from "react"
import ProgressBarStatus from "components/progressbar-status";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom"
import { date2str, time2str } from "helpers/utils";
import ProgressBarProtocol from "components/progressbar-protocol";

interface IStatusPanel {
    isStart?: boolean
}

export const StatusPanel = ({
    isStart = true
}: IStatusPanel) => {
	
    const location = useLocation();
	const navigate = useNavigate();
    const [initatedDate, setInitiatedDate] = useState<Date>(new Date())

    const [protocolFund, setProtocolFund] = useState<number>()
    const [marketBuy, setMarketBuy] = useState<number>()
    const [luckyStaker, setLuckyStaker] = useState<number>()
    const [liquidity, setLiquidity] = useState<number>()

    const [protocolProgress, setProtocolProgress] = useState<number>()

    useEffect(() => {
        if(isStart) {
            const fund = 120
            setProtocolFund( fund )
            setMarketBuy( fund * 0.8 )
            setLuckyStaker( fund * 0.1 )
            setLiquidity( fund * 0.1 )

            setTimeout(() => {
                setProtocolProgress(50)
            }, 1000)
        }
    }, [isStart])
    
	return (
        <div className="co-status-panel">
            <div className="section-progress">
                <div className="d-flex justify-content-between">
                    <div className="d-flex">
                        <div className="co-progress-label">Protocol fund</div>
                        <ProgressBarStatus total={protocolFund} value={protocolFund} unit="eth" visible={false}/>
                    </div>
                    
                    <div className="ms-3 flex-0">
                        <div>Initiated</div>
                        <div className="text-desc">
                            {date2str(initatedDate)} <br/>{time2str(initatedDate)}
                        </div>
                    </div>
                </div>
                
                <div className="d-flex">
                    <div className="co-progress-label">Market buy</div>
                    <ProgressBarStatus total={protocolFund} value={marketBuy} unit="eth" />
                </div>
                
                <div className="d-flex">
                    <div className="co-progress-label">Lucky staker</div>
                    <ProgressBarStatus total={protocolFund} value={luckyStaker} unit="eth" />
                </div>

                <div className="d-flex">
                    <div className="co-progress-label">CyOp liquidity</div>
                    <ProgressBarStatus total={protocolFund} value={liquidity} unit="eth" />
                </div>
            </div>

            <div className="section-protocol-progress">
                <div className="protocol-progress-label px-2">Protocol progress</div>
                <ProgressBarProtocol progress={protocolProgress}/>
            </div>
        </div>
	)
}

export default StatusPanel