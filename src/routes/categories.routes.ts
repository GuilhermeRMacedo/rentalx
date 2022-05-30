import { Router } from 'express';

import { CategoryController } from '../controller/CategoryController';
import { CategoryRepository } from '../repository/CategoryRepository';
import { CategoryService } from '../service/CategoryService';

const categoriesRoutes = Router();

const categoryRepository = new CategoryRepository();
const categoryService = new CategoryService(categoryRepository);
const categoryController = new CategoryController(categoryService);

categoriesRoutes.post('/', (request, response) => {
  return categoryController.create(request, response);
});

categoriesRoutes.get('/', (request, response) => {
  const categories = categoryRepository.readAll();

  return response.status(200).send(categories);
});

export { categoriesRoutes };
