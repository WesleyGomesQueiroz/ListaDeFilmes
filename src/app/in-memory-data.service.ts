import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let movies = [
      { id: 1, title: "Título do filme", obs: "Descrição do filme", rating: 3, toWatchNext: true },
    ];
    return { movies };
  }
}