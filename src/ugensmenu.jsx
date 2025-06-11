import { useEffect, useState } from "react";

export function Menu() {
    const [Data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const url = "https://infoskaerm.techcollege.dk/umbraco/api/content/getcanteenmenu/?type=json";
            const response = await fetch(url);
            const jsonData = await response.json();
            setData(jsonData);
        }
        fetchData();
        
        
    }, [setData]);
    console.log(Data);
    
    return (<div>
        <h1>ugens menu</h1>
        {Array.isArray(Data.Days) && Data.Days.map (Days => (
            <h2 key={Days.Days}>{Days.Date}</h2>
        ))}
    </div>)
};