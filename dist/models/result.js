"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.success = success;
exports.failure = failure;
function success(result) {
    return {
        result,
        isSuccess: true,
    };
}
function failure(error) {
    return {
        error,
        isSuccess: false,
    };
}
//# sourceMappingURL=result.js.map