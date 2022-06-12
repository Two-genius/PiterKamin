import { getAllUsers } from "src/controllers/userController";

const userRoute = async (fastify: any) => {
  fastify.get("/", async () => getAllUsers());
};

export { userRoute }