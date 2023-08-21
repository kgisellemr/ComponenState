import { useState } from "react";
import MessageAlert from "./Alert";
import Formulario from "./Formulario";
import SocialButton from "./SocialButton";
import Subtitle from "./Subtitle";
import Title from "./Title";

const Registro = (props) => {
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const [alertType, setAlertType] = useState("");

    const handleAlertMessage = (value, message, type) => {
        setShowAlert(value);
        setAlertMessage(message);
        setAlertType(type);
    };

    return (
        <>
            <div className="register-container">
                <Title text="Crea una Cuenta" />
                <div className="icon-social-media">
                    <SocialButton icon="facebook" />
                    <SocialButton icon="github" />
                    <SocialButton icon="instagram" />
                </div>
                <Subtitle text="O usa tu email para registrarte" />
                <Formulario handleAlertMessage={handleAlertMessage} />
                {showAlert && <MessageAlert message={alertMessage} type={alertType} />}
            </div>

        </>
    )
}

export default Registro;
