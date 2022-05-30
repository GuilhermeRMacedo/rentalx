import { Category } from '../model/Category';
import { ICategoryRepository } from '../repository/ICategoryRepository';

interface ICreateCategoryDto {
  name: string;
  description: string;
}

class CategoryService {
  constructor(private categoryRepository: ICategoryRepository) {}

  create({ name, description }: ICreateCategoryDto): Category {
    const categoryAlreadyExist = this.categoryRepository.findByName(name);

    if (categoryAlreadyExist) {
      throw new Error(`Category with name ${name} already exist`);
    }

    return this.categoryRepository.create({ name, description });
  }

  readAll(): Category[] {
    return this.categoryRepository.readAll();
  }
}

export { CategoryService };
