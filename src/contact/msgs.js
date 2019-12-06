const emptyMsg = {
    flag: false,
    title: '',
    content: ''
};
const successMsg = {
    flag: true,
    title: 'Mensaje Enviado',
    content: 'El mensaje ha sido enviado correctamente',
};
const errorMsg = {
    flag: true,
    title: 'Hubo un error en el envío',
    content: 'No se envió el mensaje correctamente, vuélvalo a intentar'
};

export {
    emptyMsg,
    successMsg,
    errorMsg
};