import React from 'react'
                            

    const $Creative_Writing_ClubPage = () =>{
        return(
        <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-8">
                <h1 className="text-4xl font-bold text-center text-slate-700 mb-4">
                    Creative Writing Club
                </h1>
                <h2 className="text-xl font-bold text-center text-slate-600 mb-4">
                    Academic/Research-Arts
                </h2>
            <div className="h-1 bg-slate-500 rounded-full w-24 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 text-center leading-relaxed">
                The purpose of the Creative Writing Club is to develop creative writing skills in novice writers and to aid experienced writers in their writing process through peer evaluations and critique. We strive to cultivate an environment where writers can hone in on their creative abilities and showcase their work on our website or through competitions.
            </p>
            <div className="flex justify-center">
                <button className="m-2 bg-slate-200 active:bg-black hover:bg-slate-400">Add</button>
            </div>
        </div>
        )
    }

    export default  $Creative_Writing_ClubPage;
    