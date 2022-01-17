import React, {useState, useEffect, ReactNode} from "react"
import TreeNode from "components/tree-node";
import { commaValue } from "helpers/utils";

interface IEventNode {
    title: string,
    value: number,
    children?: ReactNode[]
}

const activeEvents : IEventNode[] = [
    {
        title: "CyOp",
        value: 1273,
        children: [
            <div className="co-button">vote</div>,
            (<>
                <span className="text-danger">description:\</span><span>CyOp is a disruptive, community governed event triggerted by the Protocaol and altering the tokenomics of a coin. </span>
            </>),
            (<>
                <span className="text-danger">input:\</span><span>etherscam / dextools / uniswap / slippage 12%</span>
            </>)
        ]
    },
    {
        title: "qnt",
        value: 1273,
        children: [
            <div className="co-button">vote</div>,
            (<>
                <span className="text-danger">description:\</span><span>CyOp is a disruptive, community governed event triggerted by the Protocaol and altering the tokenomics of a coin. </span>
            </>),
            (<>
                <span className="text-danger">input:\</span><span>etherscam / dextools / uniswap / slippage 12%</span>
            </>)
        ]
    },
    {
        title: "zinu",
        value: 1273
    },
    {
        title: "ewt",
        value: 1273
    },
    {
        title: "dxo",
        value: 1273
    }
]

export const ActiveEvent = () => {

    const [events, setEvents] = useState<IEventNode[]>([])

    const renderRootNode = (node: IEventNode) : ReactNode => (
        <div>
            <span>{node.title}</span><span className="ms-1 text-desc">[{commaValue(node.value)}]</span>
        </div>
    )

    const addEvent = (idx : number) => {
        if(idx >= activeEvents.length)
            return;
        let humanize = Math.round(Math.random() * 800 + 500);
        console.log(humanize)
        setTimeout(() => {
            if(idx < activeEvents.length) {
                const newEvents = activeEvents.slice(0, idx + 1)
                setEvents(newEvents)
            }
            
            addEvent(idx + 1)
        }, humanize)
    }

    useEffect(() => {
        addEvent(0)
    }, [])

	return (
		<>
            <div className="co-searchbar px-2 d-flex align-items-center">
                <div className="me-1">search</div>
                <div className="co-search-field-wrapper">
                    <input className="co-search-field" />
                </div>
                <div className="ms-auto pointer">add token</div>
            </div>
            <div className="co-main-content py-3 flex-1">
                <div className="co-treeview">
                    {events.map((event, idx) => (
                    <TreeNode key={`rootnode-${event.title}-${idx}`} title={renderRootNode(event)} defaultExpanded={idx === 0}>
                        {event.children?.map((node) => (
                            <TreeNode key={`child-${event.title}-${idx}`} title={node} />
                        ))}
                    </TreeNode>
                    ))}
                </div>
            </div>
		</>
	)
}

export default ActiveEvent