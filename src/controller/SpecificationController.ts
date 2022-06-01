import { Request, Response } from 'express';

import { SpecificationService } from '../service/SpecificationService';

class SpecificationController {
  constructor(private specificationService: SpecificationService) {}

  create(request: Request, response: Response): Response {
    const { name, description } = request.body;

    const newSpecification = this.specificationService.create({
      name,
      description,
    });

    return response.status(201).send(newSpecification);
  }
}

export { SpecificationController };
