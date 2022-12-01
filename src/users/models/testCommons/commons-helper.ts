import * as faker from 'community-faker';

export function getRandomEmail(): string {
  return faker.internet.email();
}

export function getRandomUuid() {
  return faker.datatype.uuid();
}
