import { Router } from 'express';

import { CategoryRepository } from '../repository/CategoryRepository';

const categoriesRoutes = Router();

const categoryRepository = new CategoryRepository();

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  const newCategory = categoryRepository.create({ name, description });

  return response.status(201).send(newCategory);
});

categoriesRoutes.get('/', (request, response) => {
  const categories = categoryRepository.readAll();

  return response.status(200).send(categories);
});

export { categoriesRoutes };
