export class PageDocuments {
  constructor(public page: number,
              public pages: number,
              public show: number,
              public total: number,
              public documents: Array<Document>) {
  }
}
