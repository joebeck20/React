import React from 'react'



class Click extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            count: 0
        };
        }

    updateclick = () =>{
        this.setState({count:this.state.count +1});
    };
    

    render(){
        const {count} = this.state;
        return (
            <div>
                <button onClick= {this.updateclick}>clicked {count} time</button>
            </div>
        );
    }
}

export default Click;