import { useEffect, useState } from "react";

export function Busser() {
    const [Data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const url ="https://www.rejseplanen.dk/api/nearbyDepartureBoard?accessId=5b71ed68-7338-4589-8293-f81f0dc92cf2&originCoordLat=57.048731&originCoordLong=9.968186&format=json";
            const response = await fetch(url);
            const jsonData = await response.json();
            setData(jsonData);
        }
        fetchData();
    }, []);
    return (<div>
    <h1>liste over bustider</h1>
    {Array.isArray(Data) && Data.map(item => (
        <p key={item.id}>{item.title}</p>
    ))}
    </div>)
}