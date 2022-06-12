"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoute = void 0;
const userController_1 = require("src/controllers/userController");
const userRoute = async (fastify) => {
    fastify.get("/", async () => (0, userController_1.getAllUsers)());
};
exports.userRoute = userRoute;
//# sourceMappingURL=user.js.map