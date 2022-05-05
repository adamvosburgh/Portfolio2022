// example Layout.js
import React from 'react'


export default ({ children }) => (

    <div
      style={{
        position: 'relative',
        padding: '50px',
        margin: 'auto',
        backgroundColor: 'OldLace',
        marginTop: '5%',
        width: '60%',
        fontFamily: 'Open Sans, Arial, Sans Serif',
        border: "solid #000000",
        
      }}>
      {children}
    </div>

)