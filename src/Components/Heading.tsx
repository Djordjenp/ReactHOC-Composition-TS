import React, {CSSProperties} from "react";


// Old JSX Transform
// const reactEl: ReactElement<{ className: string }, string> = React.createElement('h1', {className: 'greeting'}, 'Hello')
// console.log(reactEl)


type HeadingProps = {
    text: string,
    style: CSSProperties
}

// New JSX Transform
const Heading = ({text, style}: HeadingProps)  => {
    return <h1 style={style}>{text}</h1>
}

export default Heading

// This Works
// function Heading2({ name }: {name: string}): ReactElement<boolean, any> {
//     return React.createElement(
//         'h1',
//         {className: "container"},
//         `Hello ${name}`
//     );
// }

