/*************************************************
 * Medbot Microservices - Doctor
 * apiError.ts
 * Created by Maniratnam on 26/03/2024
 * Copyright
 *************************************************/

// class
class ApiError extends Error {
    statusCode: string | number;
    isOperational: boolean;

    constructor(statusCode: string | number, message: string, isOperational: boolean = true, stack: string = "") {
        super(message);

        this.statusCode = statusCode;
        this.isOperational = isOperational

        if (stack) {
            this.stack = stack
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

// exports
export default ApiError
