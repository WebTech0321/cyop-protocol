import React, {useState, useCallback} from "react"
import ProgressBar from "components/progressbar";
import TreeNode from "components/tree-node";
import { commaValue } from "helpers/utils";

export const ActiveEvent = () => {

    const rootNode01 = (
        <div>
            <span>CyOp</span><span className="ms-1 text-desc">[{commaValue(1273)}]</span>
        </div>
    )

    const rootNode02 = (
        <div>
            <span>qnt</span><span className="ms-1 text-desc">[{commaValue(1133)}]</span>
        </div>
    )

    const rootNode03 = (
        <div>
            <span>zinu</span><span className="ms-1 text-desc">[{commaValue(1043)}]</span>
        </div>
    )

    const rootNode04 = (
        <div>
            <span>ewt</span><span className="ms-1 text-desc">[{commaValue(913)}]</span>
        </div>
    )

    const rootNode05 = (
        <div>
            <span>dxo</span><span className="ms-1 text-desc">[{commaValue(872)}]</span>
        </div>
    )

    const childNode01 = (
        <div className="co-button">vote</div>
    )

    const childNode02 = (
        <>
            <span className="text-danger">description:\</span><span>CyOp is a disruptive, community governed event triggerted by the Protocaol and altering the tokenomics of a coin. </span>
        </>
    )

    const childNode03 = (
        <>
            <span className="text-danger">input:\</span><span>etherscam / dextools / uniswap / slippage 12%</span>
        </>
    )

	return (
		<>
            <div className="co-searchbar px-2 d-flex align-items-center">
                <div className="me-1">search</div>
                <div style={{width: '320px'}}>
                    <ProgressBar progress={20} />
                </div>
                <div className="ms-auto pointer">add token</div>
            </div>
            <div className="co-main-content py-3 flex-1">
                <div className="co-treeview">
                    <TreeNode title={rootNode01}>
                        <TreeNode title={childNode01} />
                        <TreeNode title={childNode02} />
                        <TreeNode title={childNode03} />
                    </TreeNode>
                    <TreeNode title={rootNode02}>
                        <TreeNode title={childNode01} />
                        <TreeNode title={childNode02} />
                        <TreeNode title={childNode03} />
                    </TreeNode>
                    <TreeNode title={rootNode03}>
                    </TreeNode>
                    <TreeNode title={rootNode04}>
                    </TreeNode>
                    <TreeNode title={rootNode05}>
                    </TreeNode>
                </div>
            </div>
		</>
	)
}

export default ActiveEvent