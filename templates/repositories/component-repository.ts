import { Repository } from '@react3l/react3l/core/repository';

export class NamedRepository extends Repository {
  constructor() {
    super({});
  }
}

export const namedRepository: NamedRepository = new NamedRepository();
