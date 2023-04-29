import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext, useEffect } from "react";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';



export default function MediaCard({ characters }) {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.fectCharacters();

    }, []);


    return (

        <div className="container">
            <div className="row">
                {store.listCharacters.map((item, index) => (
                    <div key={index} className="col-lg-3 col-md-6 col-sm-12 mb-4">
                        <div className="card" style={{ minWidth: "200px" }}>
                            <img className="card-img-top" src={item.image} alt="character" />
                            <div className="card-body">
                                <h2 className="card-title">{item.name}</h2>
                                <h5 className="card-text"> {item.species} 
                                    <Button 
                                        size="small" 
                                        color={item.status == "Alive" ? "success" : item.status == "Dead" ? "error" : "secondary"} variant="contained">
                                          {item.status}
                                    </Button>
                                </h5>
                                <span>
                                    {store.favorites.includes(item.name) ? (
                                        <FavoriteIcon color="warning" />
                                    ) : <IconButton
                                        onClick={() => actions.setFavorites(item.name)}
                                        className="btn btn-outline-danger" aria-label="add to favorites" >
                                        <FavoriteBorderSharpIcon />
                                    </IconButton>
                                    }

                                </span>
                                <Link to={"/demo/"+index}>
                                    <Button className="styles.button" size="small">Learn More</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>




        </div>


    );
}




