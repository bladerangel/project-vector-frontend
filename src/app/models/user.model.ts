import { Document } from './document.model';

export class User {
  constructor(public id: number,
              public username: string,
              public password: string,
              public token: string,
              public documents: Array<Document>) {
  }
}
