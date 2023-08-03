import React from "react";
function FuncCompDemo(props){
    return(
        <div>
            <h2>Demo Function Component</h2>
            <h3>Welcome to , {props.name}</h3>
            <h3>Tài khoản : {props.userName}</h3>
        </div>
    )
}
export default FuncCompDemo;