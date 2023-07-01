import React from "react";

function WithLoadingState(Component) {
    return function WithLoadingState({isLoading, ...props}) {
        if (!isLoading) return <Component {...props} />

        return (
            <p>Comprobando informacion de los paises, un momento!!!</p>
        )
    }
}

export default WithLoadingState;