
import React, { Component } from 'react';
class Counter extends Component{
    constructor(props) {
        super(props)
        const{from,to,fps} = this.props

        this.state = {
            fps,
            from,
            to,
            countUp:0,
            frame:false
        }
    }

    startLoop = () => {
        const{frame} = this.state

        if(!frame){
            console.log("1")
            this.frameId = window.requestAnimationFrame( this.loop );
            console.log("2")
        }
    }

    loop = () => {
        const{to, from} = this.state;
        const {fps} = this.props;

        setTimeout(()=> {
            if ( this.frameId ) {
                this.frameId = window.requestAnimationFrame( this.loop );
                this.counter()
                this.setState({
                    frame: this.frameId
                })
            }
            if(from >= to *0.01 && this.state.from <=this.state.to *0.8) {
                this.setState({fps:fps})
            }
            if(from >=to *0.7 && this.state.from <=to *0.8) {
                this.setState({fps:50})

            }
            if(from >= to *0.8 && from <=to *0.9) {
                this.setState({fps:30})

            }
            if(from >=to *0.95 && from <=to *0.98) {
                this.setState({fps:15})

            }
            if(from >=to*0.98 && this.state.from <=to *0.9) {
                this.setState({fps:10})

            }
            else if (to > 0 && this.state.to < 101){
                this.setState({countUp: 1})
            }
            else if(this.state.to > 100 && this.state.to < 1001){
                this.setState({countUp: 10})
            }
            else if(this.state.to > 1000 && this.state.to < 10001){
                this.setState({countUp: 100})
            }
            else if(this.state.to > 10000 && this.state.to < 10000001){
                this.setState({countUp: 1223})}
        }, 1000/this.state.fps)
    }

    counter = () => {
        const {from, to, countUp} = this.state;

        if(from < to) {
            this.setState(prevState=>({from: prevState.from + countUp}))}
        else {
            this.stopLoop();
            this.setState({from: this.state.to})
        }
    }
    stopLoop = () => {
        cancelAnimationFrame(this.frameId)
    }

    activateCounter = () => {
        this.startLoop()
    }
    resetCounter = () => {
        this.stopLoop();
        this.setState({
            from:0,
            frame:0,
        })
    }
    render() {
        return (
            <div className="counter-container">
                <div className="show-count">
                    <p>{this.state.from}</p>
                </div>
                <button onClick={this.activateCounter}>
                    Activate Counter
                </button>
                <button onClick={this.resetCounter}>
                    Reset Counter
                </button>
            </div>
        )
    }
}

export default Counter