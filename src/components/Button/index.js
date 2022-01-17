import React from "react";
import './index.css'


class Button extends React.Component{


    modifyCounterA = () =>{
        this.props.modifyCounter(this.props.modifier, this.props.operand);
    }

    //render
    render(){
        return(
            <div>
                <button type='button' onClick={this.modifyCounterA}> {this.props.operand} </button>
            </div>
        );
    }
}

export default Button;