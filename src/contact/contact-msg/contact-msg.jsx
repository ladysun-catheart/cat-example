import React from 'react';
import TestIds from '../../core/config/test-ids'
import PropTypes from 'prop-types';
import {
    Jumbotron,
    Container,
    Table,
    Button
} from 'react-bootstrap';

const ContactMsg = ({ msgTitle, msgContent, formContent, reloadForm }) => (
    <Jumbotron fluid>
        <Container data-testid={TestIds.msgContactForm}>
            <h1>{msgTitle}</h1>
            <p>{msgContent}</p>
            {formContent && <ContactValueForm contact={formContent} />}
            <Button
                data-testid={TestIds.btnSendMsgContactForm}
                onClick={reloadForm}
            >Enviar otro mensaje</Button>
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