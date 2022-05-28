import { Specification } from '../model/Specification';
import { ISpecificationRepository } from '../repository/ISpecificationRepository';

interface ICreateSpecificationDto {
  name: string;
  description: string;
}

class SpecificationService {
  constructor(private specificationRepository: ISpecificationRepository) {}

  create({ name, description }: ICreateSpecificationDto): Specification {
    const specificationAlreadyExist =
      this.specificationRepository.findByName(name);

    if (specificationAlreadyExist) {
      throw new Error(`Specification with name ${name} already exist`);
    }

    return this.specificationRepository.create({ name, description });
  }
}
export { SpecificationService };
