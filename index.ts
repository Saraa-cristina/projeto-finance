import Fastify from 'fastify';
import userroutes from './routes/userroutes';




const app = Fastify();
const PORT = 3000;

app.register(userroutes, { prefix: '/api/users' });

app.listen({ port: PORT }, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
