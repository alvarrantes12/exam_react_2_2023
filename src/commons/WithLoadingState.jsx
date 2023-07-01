import React from "react";

function WithLoadingState(Component) {
    return function WithLoadingState({ isloading, ...props }) {
        if (!isloading) return <Component {...props} />;
        return (
            <div>
                <p>Loading...</p>
            </div>
        );
    };
};

export default WithLoadingState;