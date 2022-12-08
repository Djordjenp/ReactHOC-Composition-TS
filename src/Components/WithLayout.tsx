import React, {useEffect} from "react";

const WithLayout = (WrappedComponent: React.FC<any>) => {
    return function LoggingProvider ({...props}){

        useEffect(() => {
            console.log("Layout Used")
        }, [])

        return <WrappedComponent {...props} />
    }
}

export default WithLayout;