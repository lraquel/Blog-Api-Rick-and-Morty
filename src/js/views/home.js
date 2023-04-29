import React from "react";

import "../../styles/home.css";
import MediaCard from "../component/card.jsx";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from "react-bootstrap";
import Paginacion from "../component/pagination.jsx";


export const Home = () => {

	

	return (
		<Container className="mt-5 mb-4">
			<Paginacion/>

			<Row>
					<Col className="">
						<MediaCard />
					</Col> 
			</Row>
		</Container>






	)
};