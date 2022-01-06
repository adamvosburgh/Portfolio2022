// example Layout.js
import React from 'react'


export default ({ children }) => (
  <div
    style={{
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '80%',
      imageWidth: '80%',
      backgroundColor: 'black',
      color: 'black',
    }}>
    {children}
  </div>
)