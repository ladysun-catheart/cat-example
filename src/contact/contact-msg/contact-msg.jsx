import React from 'react';
import PropTypes from 'prop-types';
import {
    Jumbotron,
    Container,
    Table,
    Button
} from 'react-bootstrap';

const ContactMsg = ({ msgTitle, msgContent, formContent, reloadForm }) => (
    <Jumbotron fluid>
        <Container>
            <h1>{msgTitle}</h1>
            <p>{msgContent}</p>
            <ContactValueForm contact={formContent} />
            <Button onClick={reloadForm}>Enviar otro mensaje</Button>
        </Container>
    </Jumbotron>
);

ContactMsg.propTypes = {
    msgTitle: PropTypes.string,
    msgContent: PropTypes.string,
    formContent: PropTypes.object,
    reloadForm: PropTypes.func
};

const ContactValueForm = ({ contact }) => (
    <Table>
        {Object.keys(contact).map(key => (
            <tr>
                <td><strong>{key}</strong></td>
                <td>{contact[key]}</td>
            </tr>
        ))}
    </Table>
);

ContactValueForm.propTypes = {
    contact: PropTypes.object
}

export default ContactMsg;