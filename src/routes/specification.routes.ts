import { Router } from 'express';

import { SpecificationController } from '../controller/SpecificationController';
import { SpecificationRepository } from '../repository/SpecificationRepository';
import { SpecificationService } from '../service/SpecificationService';

const specificationRoutes = Router();

const specificationRepository = new SpecificationRepository();
const specificationService = new SpecificationService(specificationRepository);
const specificationController = new SpecificationController(
  specificationService,
);

specificationRoutes.post('/', (request, response) => {
  return specificationController.create(request, response);
});

export { specificationRoutes };
