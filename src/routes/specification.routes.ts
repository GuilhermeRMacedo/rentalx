import { Router } from 'express';

import { SpecificationRepository } from '../repository/SpecificationRepository';
import { SpecificationService } from '../service/SpecificationService';

const specificationRoutes = Router();

const specificationRepository = new SpecificationRepository();
const specificationService = new SpecificationService(specificationRepository);

specificationRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  const newSpecification = specificationService.create({ name, description });

  return response.status(201).send(newSpecification);
});

export { specificationRoutes };
