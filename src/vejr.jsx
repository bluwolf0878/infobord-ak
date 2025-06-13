import { useEffect, useState } from "react";

export function Vejr(className) {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const url = "https://api.openweathermap.org/data/2.5/weather?q=Aalborg&appid=4d58d6f0a435bf7c5a52e2030f17682d&units=metric";
            const response = await fetch(url);
            const jsonData = await response.json();
            setData(jsonData);
        };
        fetchData();
    }, []);

    if (!data) return <p>Henter vejrdata...</p>;

    const temperature = Math.round(data.main.temp);
    const description = data.weather[0].description;
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    const location = data.name;
    const cloudiness = data.clouds.all;


    return (
        <div className={className}>
            <h2>{location}</h2>
            <img src={iconUrl} alt={description} />
            <p>{temperature}°C – {description}</p>
            <p>Skydække: {cloudiness}%</p>
        </div>
    );
}