import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext } from "react";
import Image from 'react-bootstrap/Image';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export const Navbar = () => {
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

			<DropdownButton id="dropdown-basic-button" variant="outline-warning" className="mx-3"
				title={`Favorites ${store.favorites.length}`}>
				{store.favorites.map((item, index) => {
					return (

						<Dropdown.Item key={index} href="#/action-1">
							{item}
							<span>
								
								<DeleteOutlineIcon onClick={()=>actions.delFavorites(index)} color="warning" />
								
							</span>

						</Dropdown.Item>

					);
				})}
			</DropdownButton>


		</nav>
	);
};
