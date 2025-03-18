import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Form, FormGroup, ListGroup, Navbar, Row } from 'react-bootstrap';

function Todo() {
    const [todayTodos, setTodayTodos] = useState(() => {
        const savedTodayTodos = localStorage.getItem("todayTodos");
        return savedTodayTodos ? JSON.parse(savedTodayTodos) : [];
    });
    const [tomorrowTodos, setTomorrowTodos] = useState(() => {
        const savedTomorrowTodos = localStorage.getItem("tomorrowTodos");
        return savedTomorrowTodos ? JSON.parse(savedTomorrowTodos) : [];
    });
    const [nextWeekTodos, setNextWeekTodos] = useState(() => {
        const savedNextWeekTodos = localStorage.getItem("nextWeekTodos");
        return savedNextWeekTodos ? JSON.parse(savedNextWeekTodos) : [];
    });

    const [todayInputValue, setTodayInputValue] = useState('');
    const [tomorrowInputValue, setTomorrowInputValue] = useState('');
    const [nextWeekInputValue, setNextWeekInputValue] = useState('');

    useEffect(() => {
        localStorage.setItem("todayTodos", JSON.stringify(todayTodos));
        localStorage.setItem("tomorrowTodos", JSON.stringify(tomorrowTodos));
        localStorage.setItem("nextWeekTodos", JSON.stringify(nextWeekTodos));
    }, [todayTodos, tomorrowTodos, nextWeekTodos]);

    const handleTodayInputChange = (e) => {
        setTodayInputValue(e.target.value);
    };

    const handleTomorrowInputChange = (e) => {
        setTomorrowInputValue(e.target.value);
    };

    const handleNextWeekInputChange = (e) => {
        setNextWeekInputValue(e.target.value);
    };

    const handleAddTodayTodo = () => {
        if (todayInputValue.trim() !== '') {
            setTodayTodos([...todayTodos, { id: Date.now(), title: todayInputValue }]);
            setTodayInputValue('');
        }
    };

    const handleAddTomorrowTodo = () => {
        if (tomorrowInputValue.trim() !== '') {
            setTomorrowTodos([...tomorrowTodos, { id: Date.now(), title: tomorrowInputValue }]);
            setTomorrowInputValue('');
        }
    };

    const handleAddNextWeekTodo = () => {
        if (nextWeekInputValue.trim() !== '') {
            setNextWeekTodos([...nextWeekTodos, { id: Date.now(), title: nextWeekInputValue }]);
            setNextWeekInputValue('');
        }
    };

    const handleDeleteTodayTodo = (id) => {
        setTodayTodos(todayTodos.filter(todo => todo.id !== id));
    };

    const handleDeleteTomorrowTodo = (id) => {
        setTomorrowTodos(tomorrowTodos.filter(todo => todo.id !== id));
    };

    const handleDeleteNextWeekTodo = (id) => {
        setNextWeekTodos(nextWeekTodos.filter(todo => todo.id !== id));
    };

    const handleTodayKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleAddTodayTodo();
        }
    };

    const handleTomorrowKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleAddTomorrowTodo();
        }
    };

    const handleNextWeekKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleAddNextWeekTodo();
        }
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
                                        <Form.Control type='text' value={todayInputValue}
                                            onChange={handleTodayInputChange}
                                            onKeyDown={handleTodayKeyDown}
                                        />
                                    </FormGroup>
                                    <br />
                                   
                                    <Button variant='primary' onClick={handleAddTodayTodo}>Add</Button>
                                    
                                    <br/><br/>
                                </Form>
                                <ListGroup>
                                    {/* {todos.map((todo) => (
                                        <ListGroup.Item key={todo.id}>{todo.title}</ListGroup.Item>
                                    ))} */}
                                    {todayTodos.length > 0 ? (
                                        todayTodos.map((todo) => (
                                            <ListGroup.Item key={todo.id} className='d-flex justify-content-between align-items-center' >
                                                {todo.title}
                                                <Button
                                                    variant="danger"
                                                    onClick={() => handleDeleteTodayTodo(todo.id)}
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
                    <Col md={4}>
                        <Card >
                            <Card.Title className="text-center">Tommorow</Card.Title>
                            <Card.Body>
                                <Form>
                                    <FormGroup>
                                        <Form.Control type='text' value={tomorrowInputValue}
                                            onChange={handleTomorrowInputChange}
                                            onKeyDown={handleTomorrowKeyDown}
                                        />
                                    </FormGroup>
                                    <br />
                                    <Button variant='primary' onClick={handleAddTomorrowTodo}>Add</Button>
                                    <br /><br />
                                </Form>
                                <ListGroup>
                                    {tomorrowTodos.length > 0 ? (
                                        tomorrowTodos.map((todo) => (
                                            <ListGroup.Item key={todo.id} className='d-flex justify-content-between align-items-center' >
                                                {todo.title}
                                                <Button
                                                    variant="danger"
                                                    onClick={() => handleDeleteTomorrowTodo(todo.id)}
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
                    <Col md={4}>
                        <Card >
                            <Card.Title className="text-center">Next Week</Card.Title>
                            <Card.Body>
                                <Form>
                                    <FormGroup>
                                        <Form.Control type='text' value={nextWeekInputValue}
                                            onChange={handleNextWeekInputChange}
                                            onKeyDown={handleNextWeekKeyDown}
                                        />
                                    </FormGroup>
                                    <br />
                                    <Button variant='primary' onClick={handleAddNextWeekTodo}>Add</Button>
                                    <br /><br />
                                </Form>
                                <ListGroup>
                                    {/* {todos.map((todo) => (
                                        <ListGroup.Item key={todo.id}>{todo.title}</ListGroup.Item>
                                    ))} */}
                                    {nextWeekTodos.length > 0 ? (
                                        nextWeekTodos.map((todo) => (
                                            <ListGroup.Item key={todo.id} className='d-flex justify-content-between align-items-center' >
                                                {todo.title}
                                                <Button
                                                    variant="danger"
                                                    onClick={() => handleDeleteNextWeekTodo(todo.id)}
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