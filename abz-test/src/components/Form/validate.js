const validate = values => {
    const errors = {};
    if (!values.name) {
        errors.name = 'Please enter a name'
    } else if (!/^[a-zA-Z]+ [a-zA-Z]+$/i.test(values.name)) {
        errors.name = 'Invalid name given.'
    }
    if (!values.email) {
        errors.email = 'Please enter a email'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (!values.phone) {
        errors.phone = 'Please enter a phone number'
    } else if (!/^\+?3?8?(0\d{9})$/i.test(values.phone)) {
        errors.phone = 'Invalid phone number'
    }
    if (!values.position_id || values.position_id === "default") {
        errors.position_id = 'Please select a position'
    }
    if (!values.photo) {
        errors.photo = 'Please upload a photo'
    }
    return errors
};

export default validate;