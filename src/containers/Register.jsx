import React, { useState } from 'react';
import { connect } from 'react-redux';
import {registerRequest} from '../actions';
import {Link} from 'react-router-dom';
import '../assets/styles/components/Register.scss';


const Register = props => {
    const [form, setValues] = useState({
        email: '',
        name: '',
        password: '',

    });

    const handleInput = event => {
        setValues({
            ...form,
            [event.target.name]: event.target.value
        })
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.log(registerRequest(form));
        // props.registerRequest(form);
        // registerRequest(form);
        props.history.push('/');
    }
    
    return (
        <section className="register">
            <section className="register__container">
                <h2>Regístrate</h2>
                <form className="register__container--form" onSubmit={handleSubmit}>
                    <input 
                        name="name"
                        type="text" 
                        className="input" 
                        placeholder="Nombre" 
                        onChange={handleInput}
                    />
                    <input 
                        name="email"
                        type="text" 
                        className="input" 
                        placeholder="Correo" 
                        onChange={handleInput}

                    />
                    <input 
                        name="password"
                        type="password" 
                        className="input" 
                        placeholder="Contraseña" 
                        onChange={handleInput}

                    />
                    <button className="button">Registrarme</button>
                </form>            
                <Link to="/login">
                    Iniciar sesión
                </Link>
            </section>
        </section>

);
}
// export default  Register;
export default  connect(null, null)(Register);
