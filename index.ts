
import express from 'express';
import categoryRoutes from './routes/categoryroutes.ts';
import transactionRoutes from './routes/transactionsroutes.ts';
import bankRoutes from './routes/bankroutes.ts';

const app = express();
app.use(express.json());

// Rotas separadas
app.use('/categories', categoryRoutes);
app.use('/transactions', transactionRoutes);
app.use('/banks', bankRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

