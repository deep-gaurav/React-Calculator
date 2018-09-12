import React, {Component} from 'react';
import './calculator.css'

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
                <div className="outputbox">
                    {fvalue}

                </div>
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
                        {actions.map(value => (<button className="buttons" onClick={event => this.concatf({value})}>{value}</button>))}
                    </div>
                </div>
            </div>
        );
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
        try {
            this.state.calvalue=eval(this.state.fvalue).toString()
        }
        catch (e) {
            this.state.calvalue=''
        }
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

}
export default Body