import React from 'react'
                            

    const $AutoGatorPage = () =>{
        return(
        <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-8">
                <h1 className="text-4xl font-bold text-center text-slate-700 mb-4">
                    AutoGator
                </h1>
                <h2 className="text-xl font-bold text-center text-slate-600 mb-4">
                    
                </h2>
            <div className="h-1 bg-slate-500 rounded-full w-24 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 text-center leading-relaxed">
                The purpose of the Auto Gator club is to provide students at the University of Florida with a hands-on learning environment focused on automotive knowledge, maintenance, and safety. We aim to empower members with practical skills, from basic car care to advanced automotive techniques, while fostering a passion for cars and vehicle maintenance. Through workshops, events, and community outreach, the club strives to create a supportive space for car enthusiasts of all experience levels to...
            </p>
            <div className="flex justify-center">
                <button className="m-2 bg-slate-200 active:bg-black hover:bg-slate-400">Add</button>
            </div>
        </div>
        )
    }

    export default  $AutoGatorPage;
    