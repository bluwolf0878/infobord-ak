import React, { useEffect, useState } from "react";

// Hent busdata
async function fetchAPIConfigsbusser() {
    try {
        const response = await fetch('https://www.rejseplanen.dk/api/nearbyDepartureBoard?accessId=5b71ed68-7338-4589-8293-f81f0dc92cf2&originCoordLat=57.048731&originCoordLong=9.968186&format=json');
        if (!response.ok) {
            throw new Error(`Failed to fetch bus times: ${response.statusText}`);
        }

        const apiConfigs = await response.json();
        return apiConfigs;
    } catch (error) {
        console.error("Error fetching bus times:", error);
        return { MultiDepartureBoard: { Departure: [] } }; // fallback struktur
    }
}

// Filtrering og sortering
function filterAndSortBusTimes(busData, specificStops) {
    if (!busData?.MultiDepartureBoard?.Departure) return [];

    const allDepartures = busData.MultiDepartureBoard.Departure;

    const filtered = allDepartures.filter(bus =>
        specificStops.includes(bus.stop)
    );

    return filtered.sort((a, b) =>
        new Date(`${a.date}T${a.time}`) - new Date(`${b.date}T${b.time}`)
    );
}

const specificStops = ['Øster Sundby Vej', 'Øster Uttrup Vej'];

export function BusSchedule() {
    const [busTimes, setBusTimes] = useState([]);

    useEffect(() => {
        const loadBusData = async () => {
            const data = await fetchAPIConfigsbusser();
            const sorted = filterAndSortBusTimes(data, specificStops);
            setBusTimes(sorted);
        };

        loadBusData();
        const interval = setInterval(loadBusData, 60 * 1000); // Opdater hvert minut

        return () => clearInterval(interval); // Ryd op
    }, []);

    return (
        <div>
            <h1>Busafgange</h1>
            {busTimes.length === 0 ? (
                <p>Ingen busdata tilgængelig</p>
            ) : (
                <ul>
                    {busTimes.map((bus, index) => (
                        <li key={`${bus.name}-${bus.time}-${index}`}>
                            <strong>{bus.name}</strong> mod {bus.direction} – {bus.time}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}