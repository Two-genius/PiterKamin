import Prisma from "@prisma/client";

const { PrismaClient } = Prisma;

const prisma = new PrismaClient();

const getAllUsers = async () => {
    return prisma.user.findMany()
};

export { getAllUsers }