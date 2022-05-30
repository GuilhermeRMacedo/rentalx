import { Request, Response } from 'express';

import { CategoryService } from '../service/CategoryService';

class CategoryController {
  constructor(private categoryService: CategoryService) {}

  create(request: Request, response: Response): Response {
    const { name, description } = request.body;

    const newCategory = this.categoryService.create({ name, description });

    return response.status(201).send(newCategory);
  }

  readAll(request: Request, response: Response): Response {
    const categories = this.categoryService.readAll();

    return response.status(200).send(categories);
  }
}

export { CategoryController };
