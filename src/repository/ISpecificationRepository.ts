import { Specification } from '../model/Specification';

interface ICreateSpecificationDto {
  name: string;
  description: string;
}

interface ISpecificationRepository {
  create({ name, description }: ICreateSpecificationDto): Specification;
  findByName(name: string): Specification;
}

export { ISpecificationRepository, ICreateSpecificationDto };
