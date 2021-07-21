import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Container, Form, Button, Row, Col } from "react-bootstrap";
import "./login.css";

export default function Login() {
	const [email, setemail] = useState("");

	// my code
	const [password, setpassword] = useState("");

	//componentDidMount
	useEffect(() => {
		console.log("The function useEffect executes");
	}, []);

	//componentDidUpdate
	useEffect(() => {
		console.log("Executed when email is updated");
		console.log(email);
	}, [email]);

	useEffect(() => {
		console.log("Executed when password is updated");
		console.log(password);
	}, [password]);


	//componentWillUnmount
	useEffect(() => {
		return () => {
			console.log("Component unmounts");
		};
	}, []);

	return (
		<Container className="container">
			<Row className="align-middle">
				<Col md={{ span: 6, offset: 3 }}>
					<Card className="card-background">
						<Card.Body className="card-background">
							<Card.Title className="center-text fonts"><h1>Login Form</h1></Card.Title>
							<Form>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label className="fonts"><h4>Email address</h4></Form.Label>
									<Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => {setemail(e.target.value)} }/>
									<Form.Text className="text-muted" className="fonts">We'll never share your email with anyone else.</Form.Text>
								</Form.Group>
								<Form.Group className="mb-3" controlId="formBasicPassword">
									<Form.Label className="fonts"><h4>Password</h4></Form.Label>
									<Form.Control type="password" placeholder="Password" value={password} onChange={(e) => {setpassword(e.target.value)} }/>
								</Form.Group>
								<Link to="/register" className="fonts">
									<Form.Text className="text-muted" className="fonts">Don't have an account?</Form.Text>
								</Link>
								<br />
								<Button type="submit" className="button button-rework">
									Submit
								</Button>
							</Form>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}
