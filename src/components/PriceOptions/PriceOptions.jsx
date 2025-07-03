import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const PriceOptions = () => {

    const priceOptions=[
        {
            "id": 1,
            "name": "Basic Plan",
            "features": [
            "Access to gym equipment",
            "Locker facility",
            "1 personal training session/month"
            ],
            "price": 100 
            // "priceOptions": [
            // { "duration": "Monthly", "price": 30 },
            // { "duration": "Quarterly", "price": 85 },
            // { "duration": "Yearly", "price": 300 }
            // ]
        },
        {
            "id": 2,
            "name": "Standard Plan",
            "features": [
            "All Basic Plan features",
            "Unlimited group classes",
            "3 personal training sessions/month"
            ],
            "price": 100
            // "priceOptions": [
            // { "duration": "Monthly", "price": 50 },
            // { "duration": "Quarterly", "price": 140 },
            // { "duration": "Yearly", "price": 500 }
            // ]
        },
        {
            "id": 3,
            "name": "Premium Plan",
            "features": [
            "All Standard Plan features",
            "Unlimited personal training",
            "Nutrition consultation",
            "Sauna access"
            ],
            "price": 80,
            // "priceOptions": [
            // { "duration": "Monthly", "price": 80 },
            // { "duration": "Quarterly", "price": 230 },
            // { "duration": "Yearly", "price": 850 }
            // ]
        }
    ]

    return (
        <div className='m-12'>
            <h2 className='text-5xl'>Best Price</h2>
            <div className='grid grid-cols-3 gap-6'>
                {
                
                    priceOptions.map(option=><PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>

    );
};

export default PriceOptions;