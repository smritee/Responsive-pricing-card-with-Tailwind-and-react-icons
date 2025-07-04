import { useEffect, useState } from "react";
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';

const Phones = () => {
    const [phones,setPhones]=useState([]);
    useEffect(()=>{
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res=>res.json())
        // .then(data=>setPhones(data.data))

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        //.then(data=>console.log(data.data.data))
        //.then(data=>setPhones(data.data.data)) 
        .then (data=>{
            const phoneData=data.data.data;
            const phonesWithFakeData=phoneData.map(phone=>{

              const obj={
                name:phone.phone_name,
                price:parseInt(phone.slug.split('-')[1])
              }  
              return obj;

            } )
            console.log(phonesWithFakeData);
            setPhones(phonesWithFakeData);
        }) ;
                
    },[]);
    return (
        <div>
            <h2 className="text-5xl">{phones.length}</h2>
            <BarChart width={900} height={300} data={phones}>
                <XAxis dataKey="name"  />
                <YAxis />                
                <Bar dataKey="price" barSize={30} fill="#8884d8" />
            </BarChart>            
        </div>
    );
};

export default Phones;