import{AccountMain} from"./account";

export const ACCOUNTSAMP:AccountMain[]=[
    {
        id: 1,
        fname:'Hannah ',
        lname:'Montana',
        email:'Hanamontana@gmail.com',
        mobile:'09463186644',
        gender:'female',
        marital:'Married',
        dateb:'11/1/1985',
        imgPath: '',
        add:{
            street:'New street',
            apt:'111',
            barangay:'New Barangay',
            city:'Newyork City',
            province:'Secret', 
        } 
    },
    {
        id: 2,
        fname:'Flash',
        lname:'Barry',
        email:'FlashBarry@gmail.com',
        mobile:'0989381291',
        gender:'male',
        marital:'Single',
        dateb:'08/30/1855',
        imgPath: 'assets/account_image/Capture.JPG',
        add:{
            street:'Naruto',
            apt:'1',
            barangay:'kumuha',
            city:'hidden leaf',
            province:'hidden water', 
        } 
    }
    
]