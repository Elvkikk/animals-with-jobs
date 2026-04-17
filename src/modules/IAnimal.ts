export interface Animal {
    name: string;
    kindOfAnimal: string;
    job: string;
    skills: string[]; // Det får bli en array av strängar som beskriver karaktärens färdigheter
    birthYear: number;
    imageURL: string; // En bild av karaktären
    employmentStartDate: string; // Startdatum 
    employmentEndDate: string; // Slutdatum 
}
