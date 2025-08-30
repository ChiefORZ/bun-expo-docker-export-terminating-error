import { rootRouter } from "@/server/trpc/routers/_root";
import { createContext } from "@/server/trpc/trpc";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

const handler = (req: Request) =>
	fetchRequestHandler({
		endpoint: "/api/trpc",
		req,
		router: rootRouter,
		createContext,
	});

export { handler as GET, handler as POST };
