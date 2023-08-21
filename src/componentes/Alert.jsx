import Alert from 'react-bootstrap/Alert';

const MessageAlert = (props) => {
    return (
        <>
            <Alert variant={props.type}>
                {props.message}
            </Alert>
        </>
    )
}

export default MessageAlert;