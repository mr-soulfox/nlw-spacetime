import dotenv from 'dotenv';

import {router} from './routes';

dotenv.config();
const app = router;
const PORT = Number(process.env.PORT) || 3000;

app.listen({
	port: PORT,
}).then(() => {
	console.log(`(HTTP) Listening on port http://localhost:${PORT}`);
});
