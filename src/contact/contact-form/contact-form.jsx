import React from 'react';
import ContactFormLogic from './contact-form-logic';
import ContactFormStructure from './contact-form-structure';

const ContactForm = props => (
    <ContactFormLogic {...props} >
        <ContactFormStructure />
    </ContactFormLogic>
);

export default ContactForm;
