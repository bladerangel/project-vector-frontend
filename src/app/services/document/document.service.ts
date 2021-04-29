import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Document } from './../../models/document.model';
import { LoginService } from '../login/login.service';
import { PageDocuments } from 'src/app/models/page-documents.model';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private url: string;

  constructor(private http: HttpClient, private loginService: LoginService) {
    this.url = 'http://localhost:8080/document';
}


getDocuments(page: number): Observable<PageDocuments> {
  const headers = { Authorization: 'Bearer ' + this.loginService.getAuthUser().token};
  return this.http.get<PageDocuments>(this.url + '?page=' + page, {headers});

}

saveDocument(document: Document): Observable<any> {
  const headers = { Authorization: 'Bearer ' + this.loginService.getAuthUser().token};
  if (document.id){
    return this.http.put<any>(this.url + '/' + document.id, document, {headers});
  }
  return this.http.post<any>(this.url, document, {headers});

}

deleteDocument(document: Document): Observable<any>{
  const headers = { Authorization: 'Bearer ' + this.loginService.getAuthUser().token};
  return this.http.delete<any>(this.url + '/' + document.id, {headers});

}

}
