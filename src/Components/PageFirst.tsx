import WithProviders from './WithProviders'

const PageFirst = ({someProp} : {someProp: string}) => {
    return (
        <div>
            {someProp}
        </div>
    )
}

export default WithProviders(PageFirst);