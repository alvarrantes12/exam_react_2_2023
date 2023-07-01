import React from "react";

function WithLoadingState(Component) {
    return function WithLoadingState({isLoading, ...props}) {
        if(!isLoading) return <Component {...props}/>;
        return (
            <p>Loading countries...</p>
        );
    }
}

export default WithLoadingState;