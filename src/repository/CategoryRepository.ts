import { Category } from '../model/Category';

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

class CategoryRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  create({ name, description }: ICreateCategoryDTO): Category {
    const newCategory = new Category();
    Object.assign(newCategory, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(newCategory);

    return newCategory;
  }
}

export { CategoryRepository };