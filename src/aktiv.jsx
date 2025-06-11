import { useEffect, useState } from "react";

export function Aktiv() {
    const [Data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const url ="https://iws.itcn.dk/techcollege/schedules?departmentcode=smed";
            const response = await fetch(url);
            const jsonData = await response.json();
            setData(jsonData);
        }
        fetchData();
    }, []);
    return (<div>
    <h1>liste over aktiviteter</h1>
    {Array.isArray(Data) && Data.map(item => (
        <p key={item.id}>{item.title}</p>
    ))}
    </div>)
}