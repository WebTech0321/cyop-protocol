import React, { useState, useEffect }  from "react"
import ProgressBarStatus from "components/progressbar";
import { useLocation, useNavigate, Navigate } from "react-router-dom"
import { date2str } from "helpers/utils";

interface IPageRoute {
    link: string,
    label: string,
    path: string
}

const PAGES : IPageRoute[] = [
    {
        link: '/active-event',
        label: "Active event",
        path: '/active event'
    },
    {
        link: '/previous-event',
        label: "Previous event",
        path: '/previous event'
    },
    {
        link: '/void',
        label: "Void",
        path: '/void'
    },
    {
        link: '/staking',
        label: "Staking",
        path: '/staking'
    },
    {
        link: '/wallet',
        label: "Wallet",
        path: '/wallet'
    },
    {
        link: '/manual',
        label: "Manual",
        path: '/manual'
    }
]

export const NavPanel = () => {
	
    const location = useLocation();
	const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState<IPageRoute>()

    useEffect(() => {
        updateCurrentPage()
    }, [location])

	const updateCurrentPage = () => {
        PAGES.forEach((page) => {
            if(page.link === location.pathname)
                setCurrentPage(page)
        })
    }

	return (
        <div className="co-nav-panel">
            <div className="co-nav-status px-2">
                {`Browser - ${currentPage?.path}`}
            </div>
            {PAGES.map((page) => (
                <div 
                    className={`co-nav-link px-2 ${currentPage?.link === page.link ? "current" : ""}` }
                    onClick={() => navigate(page.link)}
                    key={`navlink-${page.link}`}
                >
                    {page.label}
                </div>
            ))}
        </div>
	)
}

export default NavPanel