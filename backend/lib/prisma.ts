// import { PrismaClient } from "../generated/prisma/client";
// import { PrismaMariaDb } from "@prisma/adapter-mariadb";

// const globalForPrisma = global as unknown as {
//     prisma: PrismaClient;
// };

// const adapter = new PrismaMariaDb(process.env.DATABASE_URL!);

// const prisma =
//     globalForPrisma.prisma ||
//     new PrismaClient({
//         adapter,
//     });

// if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

// export default prisma;

const { PrismaClient } = require("../generated/prisma/client");
const { PrismaMariaDb } = require("@prisma/adapter-mariadb");

const adapter = new PrismaMariaDb(process.env.DATABASE_URL);

const prisma =
  (global as any).prisma ||
  new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") {
  (global as any).prisma = prisma;
}

export default prisma;