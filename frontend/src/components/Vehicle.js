import { useEffect } from "react";

const Vehicle = (props) => {
    useEffect(() => {
        console.log(props.vehicle);
    }, [])

    return (<div>{JSON.stringify(props.vehicle)}</div>)
}

export default Vehicle;