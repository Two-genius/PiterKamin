"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const user_1 = require("./user");
const routes = async (fastify) => {
    fastify.register(user_1.userRoute, { prefix: "/user" });
};
exports.routes = routes;
//# sourceMappingURL=index.js.map