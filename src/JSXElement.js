import React from 'react';

function JSXElement() {
  return (
    <div style={{margin:"1rem 25%"}}>
        {/* Hello World */}
        <div className="awesome" style={{border:"1px solid red"}}>
          <label htmlFor="name">Enter your name :</label>
          <input type="text" id="name" />
        </div>
        <p>Enter your HTML here</p>
    </div>
  )
}
export default JSXElement