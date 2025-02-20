import React from 'react';

const Banner = () => {
    return (
        <div className='container mx-auto'>
       
            <div className="carousel w-full  mx-auto">
        {
            bannerItems.map((banner, index)=>(

                <div 
                style={{
                     backgroundImage: `linear-gradient(45deg, rgba(7,25,82,0.7), rgba(0,0,0,0.3)), url(/images/banner/${index+1}.jpg)`,
                }}
                key={index}
                id={`slide${index+1}`}
                className="carousel-item relative w-full h-[90vh] bg-top bg-no-repeat bg-cover">

               <div className='h-full w-full flex items-center pt-16'>
                <div  className='space-y-6'>
                <h1 className='text-4xl font-bold'>{banner.title}</h1>
               <p>{banner.descripton}</p>
               <button className='btn btn-primary mr-4'>Latest Project</button>
               <button className='btn btn-primary btn-outline'>Descover More</button>
              
                </div>
               </div>
                 <div className="absolute flex justify-between transform bottom-12 right-12">
                   <a href={banner.prev} className="btn btn-circle mr-6">❮</a>
                   <a href={banner.next} className="btn btn-circle">❯</a>
                 </div>
               </div>
             
            ))
        }
</div>
</div>
    );
};

const bannerItems = [
    {
        title : "Affordable Price For Car Servicing",
        descripton : "There are many variations of passages of  available, but the majority have suffered alteration in some form",
        prev : "#slide4",
        next : "#slide2"
    },
    {
        title : "Affordable Price For Car Servicing",
        descripton : "There are many variations of passages of  available, but the majority have suffered alteration in some form",
        prev : "#slide1",
        next : "#slide3"
    },
    {
        title : "Affordable Price For Car Servicing",
        descripton : "There are many variations of passages of  available, but the majority have suffered alteration in some form",
        prev : "#slide2",
        next : "#slide4"
    },
    {
        title : "Affordable Price For Car Servicing",
        descripton : "There are many variations of passages of  available, but the majority have suffered alteration in some form",
        prev : "#slide3",
        next : "#slide1"
    },
]

export default Banner;