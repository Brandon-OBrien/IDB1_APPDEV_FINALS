export interface AccountMain{
    id: number;
    fname:string;
    lname:string;
    email:string;
    mobile:string;
    gender:string;
    marital:string;
    dateb:string;
    imgPath: string;
    add:{
        street:string | null;
        apt:string | null;
        barangay:string | null;
        city:string | null;
        province:string | null; 
    }
}



