import React from 'react';
import {ErrorImageContainer, ErrorImageOverlay, ErrorImageText} from './ErrorBoundary.styles';


class ErrorBoundary extends React.Component {

    constructor(){
        super();

        this.state = {
            hasErrored: false
        }
    }

    static getDerivedStateFromError(error) {
        return{hasErrored:true}
    }

    componentDidCatch(error, info) {
         // proccess the error, later sending the error to our ErrorLogger
         console.log(error)
         console.log(info)
    }

    render() {
        if(this.state.hasErrored) {
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl='https://i.imgur.com/WvEu0cO.png' />
                    <ErrorImageText> Sorry, looks like we cooked this page a little too long</ErrorImageText>
                </ErrorImageOverlay>
            )
        }
        return this.props.children;
    }
    
};

export default ErrorBoundary;




