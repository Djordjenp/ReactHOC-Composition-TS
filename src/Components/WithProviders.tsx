import withLogger from "./WithLogger";
import withLayout from "./WithLayout";
import React from "react";

const compose2  = (...fns: Function[]) => (startingVal: any) => fns.reduceRight((acc,curr) => curr(acc) ,startingVal)

const WithProviders = compose2(
    withLogger,
    withLayout
)

export default WithProviders;