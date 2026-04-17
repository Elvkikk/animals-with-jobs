//Använd fetch för att hämta datan i data/data.json
//Använd try/catch och om anropet lyckas, returnera datan. Annars, returnera "null"
//Typa upp funktionen med vad den returnerar


import { Animal } from "./IAnimal";

// async function retunerar inte datan direkt, utan en Promise som kommer att innehålla datan när den är tillgänglig.
export default async function fetchAnimals(): Promise<Animal[] | null> {
    try {
        const response = await fetch('/data/data.json') ;
        if (!response.ok) {
            throw new Error(`Request error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Karaktärerna har inte kunnat hämtas...:', error);
        return null;
    }
}

// Håller den här funktionen minimalistisk och fokuserad på att bara hämta data, så att den är lätt att återanvända och underhålla. 
// Ett exemppel från MDN: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#fetching_json_data    