// Utils for first level form
// Todo nested form
import * as yup from 'yup';

const createSchemaForm = (schema) => {
    const schemaForm = {};
    for (const key in schema) {
        schemaForm[key] = { value: '', msgError: '' }
    };
    return schemaForm;
};

const createSchemaValidationForm = (schemaForm) => {
    const schemaValidationForm = {};
    for (const key in schemaForm) {
        schemaValidationForm[key] = yup.object().shape({
            msgError: yup.string(),
            value: schemaForm[key]
        });
    };
    return yup.object().shape(schemaValidationForm);
}

const setValueForm = (value, name, stateForm, setStateForm) => {
    const contactInfoAux = {
        ...stateForm,
        [name]: { ...stateForm[name], value }
    };
    setStateForm(contactInfoAux);
};

// Todo Refactor handleSubmitForm
const handleSubmitForm = (event, submitFunc, validationSchema, stateForm, setStateForm) => {
    event.preventDefault();
    event.stopPropagation();
    // utils rewind
    for (const key in stateForm) {
        stateForm[key].msgError = '';
    }
    // utils validation
    validationSchema.validate(stateForm, { abortEarly: false })
    .then(() => {
        const formValues = {};
        for (const key in stateForm)
            formValues[key] = stateForm[key].value;
        submitFunc(formValues);
    })
    .catch(valid => {
        const stateFormAux = { ...stateForm };
        valid.inner.forEach(rawVal => {
            const key = rawVal.path.split('.')[0];
            stateFormAux[key].msgError = rawVal.message;
        });
        setStateForm(stateFormAux);
    });
};

export {
    createSchemaForm,
    createSchemaValidationForm,
    setValueForm,
    handleSubmitForm
};