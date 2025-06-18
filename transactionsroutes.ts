import { Transaction, Category, Bank } from '../entities/transaction';

const category = new Category('Alimentação');
const bank = new Bank('Nubank');

const newTransaction: Transaction = new Transaction('Supermercado', 150, 'expense', category, bank);

console.log(newTransaction);
