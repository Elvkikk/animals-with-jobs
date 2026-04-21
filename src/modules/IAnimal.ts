export interface Animal {
    name: string;
    kindOfAnimal: string;
    job: string;
    skills: string[] | string; // Det får bli en array av strängar i fall karaktären har flera skills
    birthYear: number;
    imageURL: string; // En bild av karaktären
    employmentStartDate: string; // Startdatum 
    employmentEndDate: string; // Slutdatum 
}
