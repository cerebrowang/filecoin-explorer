import React from 'react'
import blockIcon from './filecoin-block.svg'
import Stat from './stat'

const EmptyTipset = ({height}) => {
  return (
    <div
      style={{ background: '#EDF0F4', width: '189px' }}
      className="dib link ba b--black-10 focus-outline mt3 mw7 relative sans-serif"
    >
      <img
        src={blockIcon}
        alt=""
        className="absolute"
        style={{ left: -31, top: -18, width: 60 }}
      />
      <span
        style={{ paddingLeft: 40, paddingBottom: 7 }}
        className="tl db pt2 pr3 mb3 bg-snow-muted monospace mid-gray f7 bb b--black-10 lh-copy"
      >
        No blocks
      </span>
      <span className="db pb1 lh-copy" style={{ paddingLeft: 24 }}>
        <Stat label="Height" bg="#1CA4FC">
          {height}
        </Stat>
      </span>
    </div>
  )
}

export default EmptyTipset
