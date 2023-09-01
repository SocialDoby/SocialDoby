import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';

const ValidatedForm = () => {
    return (
        <div className='register-card'>
            <div className='logo-container'>
                <Logo />
            </div>
            <div className='login-input'>
                <h2>Validación</h2>
                <p>
                    Gracias por registrarse, active la cuenta a través del
                    correo de verificación.
                </p>
            </div>
            <div className='button-container'>
                <NavLink className='login-button' to='/login'>
                    Login
                </NavLink>
            </div>
        </div>
    );
};

export default ValidatedForm;
