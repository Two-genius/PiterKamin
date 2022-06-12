import { userRoute } from "./user";

const routes = async (fastify: any) => {
    fastify.register(userRoute, {prefix: "/user"})
}

export { routes }