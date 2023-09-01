import React from "react";

class ClassComp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
         count :1,
         count1:2
        };
    }
    render() {
        return (
            <>
                <h1>Class BAsed component </h1>
                <h2>For Passing props</h2>
                <h4>Count:{this.state.count}</h4>
                <h4>Count1:{this.state.count1}</h4>

                <h4>Name:{this.props.name}</h4>
                <button onClick={()=>{
                    this.setState({
                        count:2,
                        count1:0,

                })}
                }>Click Me</button>

            </>
        );
    };
}

export default ClassComp;