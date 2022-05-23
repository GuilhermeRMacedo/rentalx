import { Router } from 'express';

import { CategoryRepository } from '../repository/CategoryRepository';

const categoriesRoutes = Router();

const categoryRepository = new CategoryRepository();

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  const categoryAlreadyExist = categoryRepository.findByName(name);

  if (categoryAlreadyExist) {
    return response
      .status(400)
      .json({ errorMessage: `Category with name ${name} alreadyExist` });
  }

  const newCategory = categoryRepository.create({ name, description });

  return response.status(201).send(newCategory);
});

categoriesRoutes.get('/', (request, response) => {
  const categories = categoryRepository.readAll();

  return response.status(200).send(categories);
});

export { categoriesRoutes };
