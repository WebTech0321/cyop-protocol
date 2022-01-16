import React, { useState, useEffect, FC, ReactNode }  from "react"
import useIncrease from "hooks/increase";

interface ITreeNode {
    title: string | ReactNode,
}

export const TreeNode : FC<ITreeNode> = ({title, children}) => {
	
    const [expanded, setExpanded] = useState(true)

	return (
		<div className="co-treenode">
            <div className="co-treenode-title" onClick={() => setExpanded(!expanded)}>{title}</div>
            {expanded &&
            <div className="co-node-childs">
                {children}
            </div>
            }
		</div>
	)
}

export default TreeNode