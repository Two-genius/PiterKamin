import Prisma from "@prisma/client";
declare const getAllUsers: () => Promise<Prisma.User[]>;
export { getAllUsers };
