import {React, Component} from "react";

class ClassCompDemo extends Component{

    render(){
        return(
            <div>
                <h1>Class Component Demo</h1>
                <h2>Welcome to , {this.props.company}</h2>
                <h2>Họ và tên : {this.props.user}</h2>
            </div>
        )
    }
}
export default ClassCompDemo;
