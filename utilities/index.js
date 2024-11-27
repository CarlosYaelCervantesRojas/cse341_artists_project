handleErrors = fn => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);

const statusCodes = {
    OK: 200,
    Created: 201,
    NoContent: 204,
    BadRequest: 400,
    NotFound: 404,
    InternalServerError: 500 
};

class CustomError extends Error {
    constructor(message, errors = {}, name, status) {
        super();
        this.message = message;
        this.name = name;
        this.errors = errors;
        this.status = status;
    }
}


module.exports = {
    handleErrors,
    statusCodes,
    CustomError
};