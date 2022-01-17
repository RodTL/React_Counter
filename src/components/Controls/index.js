import React from "react";
import './index.css'

import Button from '../Button'
import InputMod from '../InputMod'


class Controls extends React.Component{

    //render
    render(){
        return(
            <div className='Control'>
                <Button modifyCounter={this.props.modifyCounter} modifier={this.props.modifier} operand={'-'}/>                
                <InputMod updateMod={this.props.updateMod}/>                
                <Button modifyCounter={this.props.modifyCounter} modifier={this.props.modifier} operand={'+'}/>  
            </div>
        );
    }
}

export default Controls;
