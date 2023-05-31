import { Model, Document } from 'mongoose';

interface IService<T extends Document> {
  create(data: Partial<T>): Promise<T>;
  getById(id: string): Promise<T | null>;
  getAll(): Promise<T[]>;
  update(id: string, data: Partial<T>): Promise<T | null>;
  delete(id: string): Promise<boolean>;
}

class CRUDService<T extends Document> implements IService<T> {
  protected model: Model<T>;

  constructor(model: Model<T>) {
    this.model = model;
  }

  async create(data: Partial<T>): Promise<T> {
    return this.model.create(data);
  }

  async getById(id: string): Promise<T | null> {
    return this.model.findById(id);
  }

  async getAll(): Promise<T[]> {
    return this.model.find();
  }

  async update(id: string, data: Partial<T>): Promise<T | null> {
    return this.model.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.model.findByIdAndDelete(id);
    return result !== null;
  }
}

export { CRUDService };
