import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;
declare module globalThis {
	// eslint-disable-next-line no-var
	let prisma: PrismaClient | undefined;
}

if (process.env.NODE_ENV === "production") {
	prisma = new PrismaClient({
		errorFormat: "minimal",
	});
} else {
	globalThis.prisma =
		globalThis.prisma ||
		new PrismaClient({
			errorFormat: "pretty",
		});
	prisma = globalThis.prisma;
}
export * from "@prisma/client";
export {prisma}; 
