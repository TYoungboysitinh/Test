import React, { Component } from 'react'

export default class JSXExpression extends Component {
  render() {
    const users = {
        name: "Đinh Ngọc Thái",
        age: 19,
        company: "UTT"
    }
    function formatName(user){
        return user.name + '' + user.age;
    }
    const element = (
        <div>
            <h1>Welcome to Devmaster, {formatName(users)}</h1>
            <h2>Tuổi: {users.age}</h2>
        </div>
    )
    const sayWelcome = (name)=>{
        if(name){
            return <h2>Welcome , {name}</h2>
        }     
        else{
            return <h2>Xin chào, Devmaster!</h2>
        }
    }
    var company ="Devmaster.edu.vn";

    return (
        <div>
            {element}
            {sayWelcome()}
            {sayWelcome("Đinh Ngọc Thái")}
            <hr />
            <p>Họ đệm : {users.name}</p>
            <p>Tuổi : {users.age}</p>
            <p>Học vấn : {users.company}</p>
        </div>
    )
    return (
      <div>
        {element}

      </div>
    )
  }
}
