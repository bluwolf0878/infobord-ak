import React, { useEffect, useState } from "react";

// Hent skemaer
async function fetchAPIConfigsklasser() {
    try {
        const response = await fetch('https://iws.itcn.dk/techcollege/schedules?departmentcode=smed');
        if (!response.ok) {
            throw new Error(`Failed to fetch class schedules: ${response.statusText}`);
        }

        const apiConfigs = await response.json();
        return apiConfigs;
    } catch (error) {
        console.error("Error fetching class schedules:", error);
        return [];
    }
}

// Filtrér og sorter efter startdato + starttid
function filterUpcomingClasses(classData) {
    const relevantPrograms = [
        "AMU indmeld",
        "Brobyg teknisk",
        "Data/komm.udd.",
        "Grafisk Tekniker",
        "Grafisk teknik.",
        "Mediegrafiker",
        "Webudvikler",
    ];

    if (!classData?.value) return [];

    const now = new Date();

    return classData.value
        .filter(classItem => {
            const isRelevant = relevantPrograms.includes(classItem.Education);
            const startDateTime = new Date(`${classItem.StartDate}T${classItem.StartTime || "00:00"}`);
            return isRelevant && startDateTime > now;
        })
        .sort((a, b) => {
            const aDate = new Date(`${a.StartDate}T${a.StartTime || "00:00"}`);
            const bDate = new Date(`${b.StartDate}T${b.StartTime || "00:00"}`);
            return aDate - bDate;
        })
        .slice(0, 10);
}

// React-komponent
export function ClassSchedule(className) {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            const data = await fetchAPIConfigsklasser();
            const filtered = filterUpcomingClasses(data); // ✅ korrekt funktion
            setClasses(filtered);
        };

        loadData();
    }, []);

    return (
        <div className={className}>
            <h1>Kommende hold</h1>
            {classes.length === 0 ? (
                <p>Ingen skemaer fundet...</p>
            ) : (
                <ul>
                    {classes.map((cls, index) => {
                        const start = new Date(`${cls.StartDate}T${cls.StartTime || "00:00"}`);
                        const end = new Date(`${cls.EndDate}T${cls.EndTime || "00:00"}`);

                        return (
                            <li key={index}>
                                <strong>{cls.Team}</strong> – {cls.Education}<br />
                                {start.toLocaleString("da-DK")} til {end.toLocaleString("da-DK")}
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
}
