import React from "react";
import './index.css'

import Display from '../Display'
import Controls from '../Controls'

class MainContainer extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            counter: 0,
            modifier: 1
        }
    }

    //Methods
    modifyCounter = (modifier, operand) =>{
        if (operand === '+' && this.state.counter+this.state.modifier <= 100){
            this.setState((prevState) => ({
                counter: parseInt(prevState.counter) + parseInt(modifier)
            }));
        }else if (operand === '-' && this.state.counter-this.state.modifier >= 0) {
            this.setState((prevState) => ({
                counter: parseInt(prevState.counter) - parseInt(modifier)
            }));
        }
    }

    updateMod = (newMod) =>{
        this.setState({ modifier: parseInt(newMod)});
    }

    //render
    render(){
        return(
            <div className='Mcontainer'>
                <Display counter={this.state.counter}/>
                <Controls modifyCounter={this.modifyCounter} updateMod={this.updateMod} modifier={this.state.modifier} btnBckColor={'grey'}/>
            </div>
        );
    }
}

export default MainContainer;