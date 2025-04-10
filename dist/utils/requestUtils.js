"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setReqContext = setReqContext;
exports.getReqContext = getReqContext;
function setReqContext(req, contextParts) {
    req.context = Object.assign(Object.assign({}, req.context), contextParts);
}
function getReqContext(req) {
    return req.context;
}
//# sourceMappingURL=requestUtils.js.map