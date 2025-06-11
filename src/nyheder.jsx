import { useEffect, useState } from "react";

export function Nyheder() {
    const [Data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const url ="https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.dr.dk%2Fnyheder%2Fservice%2Ffeeds%2Fallenyheder%23";
            const response = await fetch(url);
            const jsonData = await response.json();
            setData(jsonData);
        }
        fetchData();
    }, [setData]);
    return (<div>
    <h1>nyheder</h1>
    {Array.isArray(Data) && Data.map(item => (
        <p key={item.id}>{item.title}</p>
    ))}
    </div>)
}