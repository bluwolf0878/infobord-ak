import { useEffect, useState } from "react";

export function Vejr() {
    const [Data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const url ="https://api.openweathermap.org/data/2.5/weather?q=Aalborg&appid=4d58d6f0a435bf7c5a52e2030f17682d&units=metric";
            const response = await fetch(url);
            const jsonData = await response.json();
            setData(jsonData);
        }
        fetchData();
    }, []);
    return (<div>
    <h1>vejr</h1>
    {Array.isArray(Data) && Data.map(item => (
        <p key={item.id}>{item.title}</p>
    ))}
    </div>)
}