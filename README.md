# ReactHOC-Composition-TS

Imagine you’re building a React application. There are a number of things you want to do on just about every page view of the application.

* Check and update user authentication status
* Check currently active features to decide which features to render (needed for continuous delivery)
* Log each page component mount
* Render a standard layout (navigation, sidebars, etc)

Things like this are commonly called cross-cutting concerns. Good solution is to use a higher-order component (HOC) to wrap our page component. This is a function that takes a component and returns a new component. The new component will render the original component, but with some additional functionality. We can use this to wrap our page component with all the providers we need.


To get all our providers working together, we can use function composition to combine them into a single HOC. Function composition is the process of combining two or more functions to produce a new function. It’s a very powerful concept that can be used to build complex applications.
