"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("@api/user");
function apiRoutes(app) {
    let apiUserRoutes = express_1.Router();
    user_1.addUserAPI(apiUserRoutes);
    app.use('/api/user', apiUserRoutes);
}
exports.apiRoutes = apiRoutes;
