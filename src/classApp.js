import React from "react";

export default class App extends Component{
    constructor(props)



componentDidMount(){
    //Lifecycle function- when component mounts/loads
    console.log('The app component loaded')
}
componentDidUpdate(prevProps){
    //Lifecycle func- when component props change
}

componentWillUnmount(){
    //Lifecycle func- when component unmounts/cleanupfunction
}


render(){
    return(
        <div>

        </div>
    )
}
}
