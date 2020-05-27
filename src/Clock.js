import React from 'react';
import Spinner from './Spinner';
class Clock extends React.Component {
    state ={time:null};
    componentDidMount() {
        setInterval(() => {
            this.setState({time:new Date().toLocaleTimeString()});    
        }, 1000)
    }
        
    render() {
        if(this.state.time==null){
            return <Spinner/>  
        }else{
            return (
                <div className="time">
                    The time is: {this.state.time}
                </div>
            );
        }
        
    }
}
export default Clock;




