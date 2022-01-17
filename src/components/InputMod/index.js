import React from "react";
import './index.css'


class InputMod extends React.Component{


    changeModifier = (mod) =>{
        this.props.updateMod(mod.target.value);
    }

    //render
    render(){
        return(
            <div>
                <input type='number' defaultValue={1} min='1' max='99' onChange={this.changeModifier}></input>
            </div>
        );
    }
}

export default InputMod;