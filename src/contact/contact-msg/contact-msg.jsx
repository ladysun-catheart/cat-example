import React from 'react';
import PropTypes from 'prop-types';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container'

const ContactMsg = ({msgTitle, msgContent}) => {
    return(
        <Jumbotron fluid>
            <Container>
                <h1>{msgTitle}</h1>
                <p>{msgContent}</p>
            </Container>
        </Jumbotron>
    );
};

ContactMsg.propTypes = {
    msgTitle: PropTypes.string,
    msgContent: PropTypes.string
};

export default ContactMsg;