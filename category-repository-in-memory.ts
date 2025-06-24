
import { Category } from "../src/entities/category";

import { CategoryInterfaceRepository, CreateCategoryDTO } from "./category-interface-repository.ts";

export class CategoryRepositoryInMemory implements CategoryInterfaceRepository {
  categories: Category[] = [];

  async findById(id: string): Promise<Category | null> {
    const category = this.categories.find(category => category.id === id);
    return category  || null;
  }
  async findByName(name: string): Promise<Category | null> {
    const category = this.categories.find(category => category.name === name);
    return category || null;
  }
  findAll(): Promise<Category[]> {
    throw new Error("Method not implemented.");
  }
  async create(category: CreateCategoryDTO): Promise<Category> {
    const newCategory = new Category(category.name, category.icon);
    this.categories.push(newCategory);
    return newCategory;
  }
  update(category: Category): Promise<Category> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}