import React, { useState, useEffect, FC, ReactNode }  from "react"
import useIncrease from "hooks/increase";

interface ITreeNode {
    title: string | ReactNode,
    defaultExpanded?: boolean,
}

export const TreeNode : FC<ITreeNode> = ({title, defaultExpanded, children}) => {
	
    const [expanded, setExpanded] = useState<boolean>(defaultExpanded || false)

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