import React from 'react';
import {
	Container,
	Row,
	Media,
	Modal,
	Button,
	Col,
	Accordion,
	Card,
} from 'react-bootstrap';
// import Comentarios from './components/Comentarios';
// import AddReceta from './components/AddReceta';

function Recetas(props) {
	const [modalShow, setModalShow] = React.useState(false);

	const recipes = props.recetas.items.map((receta) => (
		<Media as="li">
			<img
				width={200}
				width={200}
				className="align-self-start mr-3"
				src={receta.img}
				alt={receta.title}
			/>
			<Media.Body className="m-3">
				<h5>{receta.title}</h5>
				<p>{receta.description}</p>
				<Accordion defaultActiveKey="0">
					<Card>
						<Card.Header>
							<Accordion.Toggle as={Card.Header} eventKey="0">
								Comentarios:
							</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey="0">
							<Card.Body>
								{/* <Comentarios comentarios={props.comentariosRecetas} setComentariosRecetas={props.setComentariosRecetas}/> */}
							</Card.Body>
						</Accordion.Collapse>
					</Card>
				</Accordion>
			</Media.Body>
		</Media>
	));
	return (
		<Container fluid>
			<Row>
				<Col sm={9}>
					<h1>Recetas</h1>
				</Col>
				<Col sm={3}>
					<Button onClick={() => setModalShow(true)}>New</Button>
				</Col>
			</Row>
			<Row>
				<Col>{recipes}</Col>
			</Row>
			<Modal
				show={modalShow}
				onHide={() => setModalShow(false)}
				backdrop="static"
				keyboard={false}
			>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">
						Nueva Receta
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{/* <AddReceta setRecetas={props.setRecetas}/> */}
				</Modal.Body>
			</Modal>
		</Container>
	);
}

export default Recetas;
