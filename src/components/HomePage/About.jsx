import React from 'react';

const About = () => {
    return (
        <div className='text-slate-400 h-screen '>
            <div className='container '>
                <div className='grid grid-cols-1 lg:grid-cols-2 h-screen'>
                    <div>
                        image
                    </div>
                    <div className=' h-screen'>
                       <h1 className='text-primary'>About Us</h1>
                       <h1 className='text-5xl'>We are qualified & of experience in this field</h1>
                       <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                       <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                       <button className='btn btn-primary'>Get More Info</button>
                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default About;