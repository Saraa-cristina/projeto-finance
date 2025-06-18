

import { randomUUID } from "node:crypto";

type TransactionType = 'income' | 'expense';

export class Entity {
  id: string;

  constructor() {
    this.id = randomUUID();
  }
}

export class Category extends Entity {
  name: string;

  constructor(name: string) {
    super();
    this.name = name;
  }
}

export class Bank extends Entity {
  name: string;

  constructor(name: string) {
    super();
    this.name = name;
  }
}

export class Transaction {
  constructor(
    public title: string,
    public amount: number,
    public type: 'income' | 'expense',
    public category: Category,
    public bank: Bank
  ) {}
}
