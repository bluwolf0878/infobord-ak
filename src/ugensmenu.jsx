import { useEffect, useState } from "react";

export function Menu({className}) {
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
    
    return (<div className={className}>
        <h1>ugens menu</h1>
        {Array.isArray(Data.Days) && Data.Days.map (Days => (
            <h2 key={Days.DayName}>{Days.DayName}:{Days.Dish}</h2>
            
        ))}
    </div>)
    }; 