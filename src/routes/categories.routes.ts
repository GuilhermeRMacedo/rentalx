import { Router } from 'express';
import multer, { Multer } from 'multer';

import { CategoryController } from '../controller/CategoryController';
import { CategoryRepository } from '../repository/CategoryRepository';
import { CategoryService } from '../service/CategoryService';

const categoriesRoutes = Router();

const upload = multer({
  dest: './tmp',
});

const categoryRepository = new CategoryRepository();
const categoryService = new CategoryService(categoryRepository);
const categoryController = new CategoryController(categoryService);

categoriesRoutes.post('/', (request, response) => {
  return categoryController.create(request, response);
});

categoriesRoutes.get('/', (request, response) => {
  return categoryController.readAll(request, response);
});

categoriesRoutes.post('/import', upload.single('file'), (request, response) => {
  const { file } = request;
  console.log(file);
  return response.send();
});

export { categoriesRoutes };
