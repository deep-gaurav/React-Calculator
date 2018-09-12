import React, {Component} from 'react';
import './calculator.css'
import math from 'mathjs'

class Body extends Component{

    constructor(props){
        super(props);
        this.state={
            on:props.on,
            fvalue:'0',
            calvalue:''
        };
    }

    render(){
        var buttons=[9,8,7,6,5,4,3,2,1];
        var lastrow=['.',0]
        var actions = ['+','-','*','/']
        let fvalue=this.state.fvalue;
        let windowwidth=window.innerWidth;
        return(
            <div className='body'>
                <input className="outputbox" type="text" value={fvalue} onInput={event => this.directinput(event.target.value)}>
                </input>
                <div className="rt">
                    {this.state.calvalue}
                </div>
                <br></br>
                <div className="Calpad" >
                    <div className="Numpad">
                        {buttons.map(value => (<button className="buttons" onClick={event => this.concatf({value})}>{value}</button>))}
                        {lastrow.map(value => (<button className="buttons" onClick={event => this.concatf({value})}>{value}</button>))}
                        <button className="buttons" onClick={event => this.evaluate()}>=</button>
                    </div>
                    <div className="ActionPad">
                        <button className="actionbuttons" onClick={event => this.clearlast()} >DEL</button>
                        {actions.map(value => (<button className="actionbuttons" onClick={event => this.concatf({value})}>{value}</button>))}
                    </div>
                </div>

            </div>
        );
    }
    clearlast(){
        this.state.fvalue=this.state.fvalue.substr(0,this.state.fvalue.length-1)
        this.setState(this.state)
        this.updatecval()
    }

    directinput(value)
    {
        this.state.fvalue=value;

        this.updatecval()

        this.setState(this.state)
    }
    increment(num) {
        this.setState(state => (
            {on: state.on+num}
        ));
    }

    concatf(val){
        if (this.state.fvalue=='0')
            this.state.fvalue=''
        this.state.fvalue= this.state.fvalue.concat(val.value)
        this.updatecval()
        if (this.state.fvalue=='')
            this.state.fvalue='0'
        this.setState(this.state)

    }
    evaluate(){
        try {
            this.state.fvalue=eval(this.state.fvalue).toString()
        }
        catch (e) {
            console.log(e)
        }
        this.setState(this.state)
    }
    decrement(){
        this.setState(state => (
            {
                on:state.on-1
            }
        ))
    }

    updatecval(){
        try {
            this.state.calvalue=math.eval(this.state.fvalue).toString()
        }
        catch (e) {
            this.state.calvalue=''
        }
    }
}
export default Body