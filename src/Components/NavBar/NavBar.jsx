import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CardWidget from '../CarWidget/CardWidget';
import Logo from '../Logo/Logo';

function NavBar() {
    return (
    <>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
            <Navbar.Brand href="#home"><Logo /></Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#consoles">Consoles</Nav.Link>
            <Nav.Link href="#games">Games</Nav.Link>
            <Nav.Link href="#accessories">Accessories</Nav.Link>
            <Nav.Link href="#cartwidget"><CardWidget /></Nav.Link>
            </Nav>
        </Container>
        </Navbar>

    </>
);
}

export default NavBar;