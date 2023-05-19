import { Injectable } from '@angular/core';
import {InMemoryDbService} from'angular-in-memory-web-api';
import{AccountMain} from"./Accounts/account";
@Injectable({
    providedIn:'root'
})
export class InMemoryDataService implements InMemoryDbService{
createDb(){
    const accounts=[{
        id: 1,
        fname:'Puss',
        lname:'Banders',
        email:'GomezSantos@gmail.com',
        mobile:'094631878316',
        gender:'male',
        marital:'Married',
        dateb:'11/1/1975',
        SSS:'0024-164463-8',
        tin:'005-893-739-750',
        imgPath: 'assets/account_image/2r8c.jpg',
        add:{
            street:'Quirino',
            apt:'14',
            barangay:'Lualhati',
            city:'Baguio City',
            province:'Benguet', 
        } 
    },
    {
        id: 2,
        fname:'Speedy',
        lname:'Gonzales',
        email:'Gonzales@gmail.com',
        mobile:'094621471316',
        gender:'male',
        marital:'Single',
        dateb:'02/16/1955',
        SSS:'0024-164463-8',
        tin:'015-093-239-120',
        imgPath: 'assets/account_image/Capture.JPG',
        add:{
            street:'Gov Pack',
            apt:'1',
            barangay:'Atok Trail',
            city:'Baguio City',
            province:'Benguet', 
        } 
    },
    {
        id: 3,
        fname:'Donkey',
        lname:'William',
        email:'Donkey@gmail.com',
        mobile:'094631878316',
        gender:'male',
        marital:'Married',
        dateb:'11/19/1985',
        SSS:'0124-163243-08',
        tin:'015-113-209-210',
        imgPath: 'assets/account_image/donkey.jpg',
        add:{
            street:'Loakan Road',
            apt:'14',
            barangay:'Apugan-Loakan',
            city:'Baguio City',
            province:'Benguet', 
        } 
    },
    {
        id: 4,
        fname:'Sylvester',
        lname:'The Cat',
        email:'Sylvester@gmail.com',
        mobile:'094631878316',
        gender:'male',
        marital:'Married',
        dateb:'01/1/1985',
        SSS:'004-123461-8',
        tin:'025-803-709-150',
        imgPath: 'assets/account_image/download .jpg',
        add:{
            street:'Assumption Road',
            apt:'02',
            barangay:'Ambiong',
            city:'Baguio City',
            province:'Benguet', 
        } 
    },
    {
        id: 5,
        fname:'Gomez',
        lname:'Santos',
        email:'GomezSantos@gmail.com',
        mobile:'094631878316',
        gender:'male',
        marital:'Married',
        dateb:'04/02/1995',
        SSS:'0124-135263-1',
        tin:'005-823-701-100',
        imgPath: 'assets/account_image/5.jpg',
        add:{
            street:'Bayan Park Road',
            apt:'18',
            barangay:'Alfonso Tabora',
            city:'Baguio City',
            province:'Benguet', 
        } 
    },
    {
        id: 6,
        fname:'Ipin',
        lname:'Salam',
        email:'IpinSalam@gmail.com',
        mobile:'094631878316',
        gender:'Male',
        marital:'single',
        dateb:'12/02/1999',
        SSS:'0014-130153-2',
        tin:'001-103-730-250',
        imgPath: 'assets/account_image/ipin.JPG',
        add:{
            street:'Brower Road',
            apt:'23',
            barangay:'Asin Road',
            city:'Baguio City',
            province:'Benguet', 
        } 
    },
    {
        id: 7,
        fname:'Ping',
        lname:'Xiao Po',
        email:'Panda@gmail.com',
        mobile:'094631878316',
        gender:'male',
        marital:'Single',
        dateb:'10/06/1991',
        SSS:'0010-103421-7',
        tin:'001-810-720-700',
        imgPath: 'assets/account_image/panda.jpg',
        add:{
            street:'Bakakeng Norte Road',
            apt:'20',
            barangay:'General Luna',
            city:'Baguio City',
            province:'Benguet', 
        } 
    },
    {
        id: 8,
        fname:'Ichi',
        lname:'Ni San',
        email:'Ichigo@gmail.com',
        mobile:'094631878316',
        gender:'male',
        marital:'Single',
        dateb:'08/16/1997',
        SSS:'0104-112453-6',
        tin:'001-830-729-100',
        imgPath: 'assets/account_image/q123.JPG',
        add:{
            street:'Ferguson Road',
            apt:'11',
            barangay:'Outlook',
            city:'Baguio City',
            province:'Benguet', 
        } 
    },
    {
        id: 9,
        fname:'Sir',
        lname:'Shrek',
        email:'GomezSantos@gmail.com',
        mobile:'094631878316',
        gender:'male',
        marital:'Married',
        dateb:'12/19/1891',
        SSS:'0020-163061-8',
        tin:'015-233-709-710',
        imgPath: 'assets/account_image/shrek.JPG',
        add:{
            street:'Gladiola',
            apt:'10',
            barangay:'Lucnab',
            city:'Baguio City',
            province:'Benguet', 
        } 
    },
    {
        id: 10,
        fname:'Upin',
        lname:'Salam',
        email:'UpinSalam@gmail.com',
        mobile:'094631878316',
        gender:'male',
        marital:'Single',
        dateb:'03/1/1945',
        SSS:'0028-261420-5',
        tin:'000-003-139-000',
        imgPath: 'assets/account_image/upin.JPG',
        add:{
            street:'Happy Hollow',
            apt:'21',
            barangay:'Gibraltar',
            city:'Baguio City',
            province:'Benguet', 
    

}

},];
const orders=[{
    id: 1,
    item:{
        name:'Ethyl Alcohol',
        description:'Ethanol is an organic compound. It is a simple alcohol with the chemical formula C₂H₆O. Its formula can be also written as CH₃−CH₂−OH or C₂H₅OH. Ethanol is a volatile, flammable, colorless liquid with a characteristic wine-like odor and pungent taste. ',
        unit_price:50,
        qty:2,
    },
    cname:'Juan',
    ccontact:{
        email:'Juan@gmail.com',
        phone:'09682641542',
    },
    shipadd: {
        street:'Bakakeng Norte Road',
        barangay:'General Luna',
        city:'Baguio City',
        province:'Benguet', 
    }
},
{
    id: 2,
    item:{
        name:'Inplay Web Camera',
        description:'inplay web cam. nikom camera. Specifications: 720p HD video calling video recording capability 1920x720. Built-in Noise Isolating Microphone. USB 2.',
        unit_price:600,
        qty:10,
    },
    cname:'Gonzales',
    ccontact:{
        email:'Gonzales@gmail.com',
        phone:'094621471316',
    },
    shipadd: {
        street:'Gov Pack',
        barangay:'Atok Trail',
        city:'Baguio City',
        province:'Benguet', 
    }
},
{
    id: 3,
    item:{
        name:'Coca-Cola',
        description:'Coca-Cola, informally known as Coke, is a carbonated soft drink manufactured by the Coca-Cola Company. Originally marketed as a temperance drink and intended as a patent medicine, it was invented in the late 19th century by John Stith Pemberton in Atlanta, Georgia.',
        unit_price:70,
        qty:100,
    },
    cname:'Donkey',
    ccontact:{
        email:'Donkey@gmail.com',
        phone:'094631878316',
    },
    shipadd: {
        street:'Loakan Road',
        barangay:'Apugan-Loakan',
        city:'Baguio City',
        province:'Benguet', 

    }
},    {
    id: 4,
    item:{
        name:'Screw Driver',
        description:'Screwdriver featuring a single flat blade that is designed to be used with a screw that has a straight slot across its top compare phillips screwdriver. ',
        unit_price:150,
        qty:20,
    },
    cname:'Sylvester',
    ccontact:{
        email:'Sylvester@gmail.com',
        phone:'094631878316',
    },
    shipadd: {
        street:'Assumption Road',
        barangay:'Ambiong',
        city:'Baguio City',
        province:'Benguet', 
    }
},
{
    id: 5,
    item:{
        name:'ei8ht',
        description:'Eight Body Spray 100ml ; Place of Origin. Philippines ; Directions. Hold bottle upright and spray all over the body. ; Ingredients. Alcohol Denat. ',
        unit_price:170,
        qty:32,
    },
    cname:'Gomez',
    ccontact:{
        email:'Gomez@gmail.com',
        phone:'094631878316',
    },
    shipadd: {
        street:'Bayan Park Road',
        barangay:'Alfonso Tabora',
        city:'Baguio City',
        province:'Benguet', 
    }
},    {
    id: 6,
    item:{
        name:'IMARI',
        description:'This intriguing aerosol body spray combines radiant Italian mandarin and spicy pink pepper with a rich and intense jasmine sambac. A rich caramelized hazelnut is layered with smooth cashmere wood for a truly exquisite sensorial experience! ',
        unit_price:175,
        qty:12,
    },
    cname:'Ipin',
    ccontact:{
        email:'Ipin@gmail.com',
        phone:'094631878316',
    },
    shipadd: {
        street:'Brower Road',
        barangay:'Asin Road',
        city:'Baguio City',
        province:'Benguet', 
    }
},    {
    id: 7,
    item:{
        name:'Dove MEN + CARE',
        description:'Designed specifically for mens skin, our body wash helps lock in your skins natural moisture leaving it feeling hydrated, healthy, and protected against dryness. Dove Men+Care Extra Fresh Body Wash contains menthol to deliver cooling refreshment and its lather rinses cleanly away leaving skin feeling refreshed. ',
        unit_price:125,
        qty:29,
    },
    cname:'Ichi',
    ccontact:{
        email:'Ichi@gmail.com',
        phone:'094631878316',
    },
    shipadd: {
        street:'Ferguson Road',
        barangay:'Outlook',
        city:'Baguio City',
        province:'Benguet', 
    }
},    {
    id: 8,
    item:{
        name:'OPPO a57 ',
        description:'Oppo A57 Android smartphone. Announced Apr 2022. Features 6.56″ display, MediaTek MT6833P Dimensity 810 chipset, 5000 mAh battery, 128 GB storage, 8 GB RAM.',
        unit_price:10999,
        qty:10,
    },
    cname:'Shrek',
    ccontact:{
        email:'Shrek@gmail.com',
        phone:'094631878316',
    },
    shipadd: {
        street:'Gladiola',
        barangay:'Lucnab',
        city:'Baguio City',
        province:'Benguet', 
    }
},
{
    id: 9,
    item:{
        name:'5D KN95',
        description:'KN 95 5D 10pcs/ pack Disposable, Breathable, Safe, Soft, Lightweight Ventilated, Dustproof, Anti-Bacterial Filtration Five-layer Nanofiber Filter Ergonomi ',
        unit_price:35,
        qty:200,
    },
    cname:'Upin',
    ccontact:{
        email:'Upin@gmail.com',
        phone:'094631878316',
    },
    shipadd: {
        street:'Happy Hollow',
            barangay:'Gibraltar',
            city:'Baguio City',
            province:'Benguet', 
    }
},
{
    id: 10,
    item:{
        name:'Galaxy Buds',
        description:'The Samsung Galaxy Buds are a line of wireless Bluetooth earbuds designed by Samsung Electronics. They were first released on March 9, 2019 as the successor to the Samsung Gear IconX. Galaxy Buds.',
        unit_price:1785,
        qty:5,
    },
    cname:'Judy',
    ccontact:{
        email:'Judy@gmail.com',
        phone:'09682641542',
    },
    shipadd: {
        street:'Siapno',
        barangay:'Pacdal',
        city:'Baguio',
        province:'Benguet',
    }

},];
    return{accounts,orders}
  }
  
  generateId(accounts:AccountMain[]):number{
    return accounts.length >0? Math.max(...accounts.map(account=>account.id)) + 1 :101;
  }

}