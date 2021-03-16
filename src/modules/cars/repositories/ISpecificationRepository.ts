import { Specification } from "../model/Specification";

class ICreateSpecificationDTO {
    name: string;
    description: string;
}

interface ISpecificationRepository {
    create({ description, name }: ICreateSpecificationDTO): void;
    findByName(name: string): Specification;
}

export { ISpecificationRepository, ICreateSpecificationDTO };