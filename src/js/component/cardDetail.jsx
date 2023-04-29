import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import { Context } from "../store/appContext";

export default function CardDetail() {
    const { store, actions } = useContext(Context);
    const { id } = useParams();
    const item = store.listCharacters[id];
   

    return (

        <div className="container d-flex justify-content-center mb-5">

            <div  className="d-flex flex-column gap-3">

                <h1 className="text-center text-white">{item?.name}</h1>

                <img className="img-fluid" src={item?.image} alt="" />

                {(() => {
                    if (item?.status === "Dead") {
                        return <div className="badge bg-danger fs-3">{item?.status}</div>; 
                    } else if (item?.status === "Alive") {
                        return <div className=" badge bg-success fs-3">{item?.status}</div>;
                    } else {
                        return <div className="badge bg-secondary fs-3">{item?.status}</div>;
                    }
                })()}

                <div className="content">
                    <div className="text-white  fw-bold fs-4 text bg-light bg-gradient bg-opacity-10">
                        <span className="text-white fw-bold">Gender : </span>
                            {item?.gender}
                    </div>

                    <div className="text-white  fw-bold fs-4 text bg-light bg-gradient bg-opacity-10">
                        <span >Species: </span>
                            {item?.species}
                    </div>

                    <div className="text-white  fw-bold fs-4 text bg-light bg-gradient bg-opacity-10">
                        <span className="text-white fw-bold">Origin: </span>
                             {item?.origin?.name}
                    </div>


                    <div className="text-white  fw-bold fs-4 text bg-light bg-gradient bg-opacity-10">
                        <span className="text-white fw-bold">Location: </span>
                              {item?.location?.name}
                    </div>
                    
                    
                </div>
            </div>
           
           
        </div>


    );
};