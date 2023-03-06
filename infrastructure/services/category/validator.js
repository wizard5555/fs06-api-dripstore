function validRequest(body) {
    let errors = [];

    if (body.name === "") {
        errors.push('name cannot be empty');
    }

    if (body.image === "") {
        errors.push('image must be jpg or png');
    }

    if (body.id === "") {
        errors.push('id must be an UUID format');
    }

    return errors;
}

module.exports = {
    validRequest
};
