
import { useNavigate } from 'react-router-dom';

const NavbarElement = ({text, path}) => {
    const navigate = useNavigate();

    function handleClick() {
        navigate(path)
    }
    
    return (
        <div>
            <p className="nav" onClick={handleClick}>{text}</p>
        </div>
    );
}
 
export default NavbarElement;