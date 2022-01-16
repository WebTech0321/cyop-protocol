import React, { useState, useEffect }  from "react"
import useTyped from "hooks/typed";
import { Routes, Route, useLocation } from "react-router-dom"
import StatusPanel from "./status-panel";
import CommandPanel from "components/command-panel";
import NavPanel from "./nav-panel";
import ActiveEvent from "pages/active-event";
import ScreenError from "components/screen-error";

export const AppLayout = () => {
	
    const location = useLocation();
	const [isCmdVisible, setCmdVisible] = useState(false)

	const onCompleteCmd = () => {
		setCmdVisible(true)
	}

	return (
		<div className="co-main d-flex flex-column">
			<ScreenError />

			<div className="d-flex h-100">
				<div className="co-left-panel d-flex flex-column">
					<div className="d-flex flex-column flex-1 pe-2 overflow-hidden">
						{isCmdVisible &&
						<Routes>				
							<Route path={`/active-event`} element={<ActiveEvent/>} />
						</Routes>
						}
					</div>
					<CommandPanel onComplete={onCompleteCmd} />
				</div>
				
				<div className="co-right-panel">
					<StatusPanel isStart={isCmdVisible} />
					<NavPanel />
				</div>
			</div>
			<div className="co-footer-panel">
				<span className="fw-900">•</span><span>wallet connected</span>
			</div>
		</div>
	)
}

export default AppLayout