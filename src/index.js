import React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component{
    //This is only time we are direct assignment to the state as this.state 
    state ={lat:null,errorMessage:''};  //This is equilant to same as we define in constructor
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat:position.coords.latitude}), //we called setstate from react component
            err=>this.setState({errorMessage:err.message})
        );
    }
    componentDidUpdate(){
        console.log("component did update will work when state will get updated")
    }
    componentWillMount(){

    }
    //React says we have to define render 
    render() {
                if(!this.state.errorMessage && this.state.lat){
                   return <SeasonDisplay lat={this.state.lat} />
                }
                
                if(this.state.errorMessage && !this.state.lat){
                    return  <div> Error: {this.state.errorMessage}</div>;
                }

                //here it is outside because by default loading will come until dom will rerender 
                return <div>Loading!</div>
    }
}
ReactDom.render(
    <App/>,document.querySelector("#root")
)