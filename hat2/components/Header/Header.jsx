import Contact from './Contact/Contact';
import './Header.module.css';
import Nav from './Nav/Nav';
import Navigation from './Navigation/Navigation';

const Header = () => {
    return (
        <div>
            <Contact />
            <Nav />
            <Navigation />
        </div>
    )
}

export default Header
