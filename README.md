# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)





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