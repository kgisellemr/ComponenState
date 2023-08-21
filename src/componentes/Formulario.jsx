import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

const Formulario = (props) => {

    const [nameState, setNameState] = useState("");
    const [emailState, setEmailState] = useState("");
    const [passwordState, setPasswordState] = useState("");
    const [confirmPasswordState, setConfirmPasswordState] = useState("");

    const changeName = (e) => {
        setNameState(e.target.value);
    };

    const changeEmail = (e) => {
        setEmailState(e.target.value);
    };

    const changePassword = (e) => {
        setPasswordState(e.target.value);
    };

    const changeConfirmPassword = (e) => {
        setConfirmPasswordState(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (nameState.length === 0 || emailState.length === 0 || passwordState.length === 0 || confirmPasswordState.length === 0) {
            props.handleAlertMessage(true, "Completa todos los campos", "danger");
            return;
        }
        if (passwordState !== confirmPasswordState) {
            props.handleAlertMessage(true, "La contraseñas no coinciden", "danger");
            return;
        }
        if (validateEmail(emailState) === false) {
            props.handleAlertMessage(true, "Formato de email inválido", "danger");
            return;
        }
        props.handleAlertMessage(true, "Registro exitoso", "success");
    };

    const validateEmail = (email) => {
        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        let result = false;

        if (email.match(validRegex)) {
            result = true;
        }

        return result;
    };


    return (
        <>
            <Form>
                <Form.Group className="mb-3" >
                    <Form.Control type="text" placeholder="name" value={nameState} onChange={changeName} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Control type="email" placeholder="name@example.com" value={emailState} onChange={changeEmail} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Control type="password" placeholder="contraseña" value={passwordState} onChange={changePassword} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Control type="password" placeholder="Confirma tu contraseña" value={confirmPasswordState} onChange={changeConfirmPassword} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Button variant="success" type='submit' className='form-button' onClick={handleSubmit}>Registrarse</Button>
                </Form.Group>
            </Form>
        </>
    )
}

export default Formulario;