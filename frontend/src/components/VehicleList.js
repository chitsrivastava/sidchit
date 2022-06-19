import { useEffect, useState } from "react";
import { getVehicles } from "../services/apiCalls";
import Vehicle from "./Vehicle";

const VehicleList = () => {

    const [vehicles, setVehicles] = useState([]);
    const [vehicle, setVehicle] = useState(null);

    const onVehicleClickHandler = (vehicle) => {
        setVehicle(vehicle)
    }

    useEffect(() => {
        getVehicles().then(vechiles => { setVehicles(vechiles) })
    }, [])

    return (<div>
        <div>{
            vehicles.map(vehicle => (<div key={vehicle.vehicleId} onClick={() => onVehicleClickHandler(vehicle)}>{vehicle.vehicleId}</div>))
        }</div>
        {vehicle && <Vehicle vehicle={vehicle} />}
    </div >);
}

export default VehicleList;