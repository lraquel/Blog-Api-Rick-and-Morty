import React, { Component } from "react";
import Pagination from 'react-bootstrap/Pagination';
import { Context } from "../store/appContext";
import { useContext } from "react";

function Paginacion({props}) {

    const { store, actions } = useContext(Context);
     

  return (
    <Pagination>
    
        <div className="justify-content-start mb-4">
            <Pagination.Prev onClick={()=>actions.fectCharacters(store.pagina.prev)} />
        </div>
       
        <div className=" justify-content-end">
             <Pagination.Next onClick={()=>actions.fectCharacters(store.pagina.next)}  />
        </div>

    </Pagination>
  );
}

export default Paginacion;