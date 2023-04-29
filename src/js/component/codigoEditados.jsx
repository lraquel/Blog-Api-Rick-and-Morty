{/* export const Home = () => {

	const { store, actions } = useContext(Context);

	const [characters, setCharacters] = useState([]);

	const getCharacters = () => {
			

		fetch("https://rickandmortyapi.com/api/character", {
			headers: {
				"Content-Type": "application/json",

			},
			method: "GET",
		})
			.then((res) => res.json())
			.then((data) => {
				setCharacters(data.results);
				

			})
			.catch(error => console.log(error));

	};

    useEffect(() => {
        getCharacters();
		
    }, []);
	

	return (

		<Container className="mt-5 mb-4">

			<Row>
					<Col className="">
						<MediaCard 
							characters={characters}
						/>
					</Col> 
			</Row>
		</Container>






	)
};*/}

{/* flux
getPersonajes: () => {
			

                fetch("https://rickandmortyapi.com/api/character", {
                    headers: {
                        "Content-Type": "application/json",

                    },
                    method: "GET",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        setStore({ characters: data.results });
						console.log("caracteres",getStore().characters)

                    })
                    .catch(error => console.log(error));

            },

			addFavoritos: (name) => {
                const { favoritos } = getStore();
                if (!favoritos.includes(name)) {
                    const newFavoritos = [...favoritos, name]
                    setStore({ 
                        favorite: newFavoritos, 
                    })
                }
            },

			delFavoritos: (name) => {
                const store = getStore();
                const newFavoritos = store.favoritos.filter (item => item !== name) ;
                setStore({ favoritos: newFavoritos })
            } */}

            {/*navbar
        <export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-black">
			<Link to="/">
				<span className="navbar-brand mx-3 rounded-circle">
					<Image src="https://i.pinimg.com/564x/9e/fd/8d/9efd8d7d411a744b0c62ac5008566a4a.jpg" height="80px" roundedCircle />
				</span>
			</Link>
			<h1 className="d-flex justify-content-center fw-bold ">
				<Image src="https://www.freepnglogos.com/uploads/rick-and-morty-png/list-rick-and-morty-episodes-wikipedia-24.png" width="250" alt="list rick and morty episodes wikipedia" />
			</h1>

			<div className="dropdown">
				<div className="dropdown-item-text mx-3">
					<Button variant="outline-warning"
						type="button" data-bs-toggle="dropdown"
						aria-expanded="false">
						Favorites
						<span className="badge text-bg-secondary">
							{store.favoritos.length}{store.favoritos.length === 1 ? "" : ""}
						</span>
					</Button>

					<ul className="dropdown-menu p-2">
						{store.favoritos.length > 0 ? (
							store.favoritos.map((item, index) => (
								<ul key={index}
									className="list-group-item d-flex justify-content-between align-items-center p-1">
									<li className="dropdown-item-text">
										{item}
									</li>
									<span>
										<button type="button" className="btn btn-outline-danger" 
											onClick={() => actions.delFavoritos(item)}>
												<i className="bi bi-trash"></i>
										</button>
									</span>

								</ul>
							))
						) : (
							<li className="dropdown-item" disabled > No Hay favoritos </li>

						)}
					</ul>
				</div>
			</div>

		</nav>
	);
};
*/}

{/*card 
export default function MediaCard({ characters }) {
    const { store, actions } = useContext(Context);
    const [favorito, setFavorito] = useState (
         store.favoritos.includes(characters.name)
    )

    const handleSubmit = () => {
        if (favorito){
            actions.addFavoritos(characters.name);
        } else {
            actions.delFavoritos(characters.name);
        }
       
    };
    console.log(store.favoritos);

    useEffect (() => {
        setFavorito(store.favoritos.includes(characters.name));
    }, [store.favoritos, characters.name]);

    return (

        <div className="container">
            <div className="row">
                {characters.map((item, index) => (
                    <div key={index} className="col-lg-3 col-md-6 col-sm-12 mb-4">
                        <div className="card" style={{ minWidth: "200px" }}>
                            <img className="card-img-top" src={item.image} alt="character" />
                            <div className="card-body">
                                <h2 className="card-title">{item.name}</h2>
                                <h5 className="card-text">Species: {item.species}</h5>
                                
                                <IconButton className="btn btn-outline-danger" onClick={handleSubmit} aria-label="add to favorites" >
                                    <FavoriteIcon />
                                </IconButton>
                                <Link to="/demo">
                                <Button className="styles.button" size="small">Learn More</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>




        </div>


    );
}*/}


