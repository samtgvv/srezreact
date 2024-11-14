import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

export function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container className='header-container'>
                <Navbar.Brand className='header-brand'>Ковры.ру</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className="header-link" to="/">Главная</NavLink>
                        <NavLink className="header-link" to="/catalog">Каталог ковров</NavLink>
                    </Nav>
                    <Nav>
                        <Nav.Link className='header-btn' href="#deets">Войти</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
