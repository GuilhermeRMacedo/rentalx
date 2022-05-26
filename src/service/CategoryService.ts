import { Category } from '../model/Category';
import { CategoryRepository } from '../repository/CategoryRepository';

interface ICreateCategoryDto {
  name: string;
  description: string;
}

class CategoryService {
  constructor(private categoryRepository: CategoryRepository) {}

  create({ name, description }: ICreateCategoryDto): Category {
    const categoryAlreadyExist = this.categoryRepository.findByName(name);

    if (categoryAlreadyExist) {
      throw new Error(`Category with name ${name} alreadyExist`);
    }

    return this.categoryRepository.create({ name, description });
  }
}

export { CategoryService };
