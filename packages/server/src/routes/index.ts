import fastify from 'fastify';
import {PrismaClient} from '@prisma/client';

export const router = fastify();
const prisma = new PrismaClient();

router.get('/health', async () => {
	const users = await prisma.user.findMany();

	return {
		status: 'ok',
		message: 'Healthy',
		users,
	};
});
