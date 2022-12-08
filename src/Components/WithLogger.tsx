import React, {useEffect} from "react";

const WithLogger = (WrappedComponent: React.FC<any>) => {
    return function LoggingProvider ({...props}){

        useEffect(() => {
            console.log("LOG")
        }, [])

        return <WrappedComponent {...props} />
    }
}

export default WithLogger;