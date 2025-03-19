import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, FormGroup, ListGroup, Navbar, Row } from 'react-bootstrap';

function Todo() {
    const [todos,setTodos] = useState([])
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
        console.log(e.target.value)
    }

    const handleAddTodo = () => {
        if (inputValue.trim() !== '') {
            console.log("add button:" + inputValue.trim())
            setTodos([...todos, { id: Date.now(), title: inputValue }])
            console.log(todos)
            setInputValue('')
        }
    }
    

    //   const handleKeyDown = (e) => {
    //     console.log(todos)
    //     if (e.key === 'Enter') {
    //       handleAddTodo()
    //     }
    //   }

        const handleDeleteTodo = (id) => {
            setTodos(todos.filter(todo => todo.id !== id));
        };

    return (
        <>
            <Container fluid md>
                <Row>
                    <Col>
                        <Navbar bg="primary" variant="dark">
                            <Navbar.Brand  ><h1>TODO</h1></Navbar.Brand>
                        </Navbar>
                    </Col>
                </Row>
                <br />
                <Row >
                    <Col md={4}>
                        <Card >
                            <Card.Title className="text-center">Today</Card.Title>
                            <Card.Body>
                                <Form>
                                    <FormGroup>
                                        <Form.Control type='text' value={inputValue}
                                            onChange={handleInputChange}
                                            // onKeyDown={handleKeyDown}
                                        />
                                    </FormGroup>
                                    <br />

                                    <Button variant='primary'
                                        onClick={handleAddTodo}
                                    >Add Task</Button>

                                    <br /><br />
                                </Form>
                                <ListGroup>
                                    {/* <ListGroup.Item className="text-muted">todos</ListGroup.Item> */}
                                    {/* {todos.map((todo) => (
                                        <ListGroup.Item key={todo.id}>{todo.title}</ListGroup.Item>
                                    ))} */}
                                    {todos.length > 0 ? (
                                        todos.map((todo) => (
                                            <ListGroup.Item key={todo.id} className='d-flex justify-content-between align-items-center' >
                                                {todo.title}
                                                <Button
                                                    variant="danger"
                                                    onClick={() => handleDeleteTodo(todo.id)}
                                                    size="sm"
                                                >
                                                    Delete
                                                </Button>
                                            </ListGroup.Item>
                                        ))
                                    ) : (
                                        <ListGroup.Item className="text-muted">No tasks yet</ListGroup.Item>
                                    )}
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </>
    );
}

export default Todo;