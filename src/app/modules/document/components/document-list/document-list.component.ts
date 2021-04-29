import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoginService } from './../../../../services/login/login.service';
import { User } from './../../../../models/user.model';
import { DocumentService } from './../../../../services/document/document.service';
import { Document } from './../../../../models/document.model';
import { PageDocuments } from './../../../../models/page-documents.model';

@Component({
  selector: 'app-login',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss']
})
export class DocumentListComponent implements OnInit {

  @ViewChild('closeDocumentModal') closeDocumentModal: ElementRef;
  @ViewChild('openDocumentModal') openDocumentModal: ElementRef;

  @ViewChild('closeDeleteModal') closeDeleteModal: ElementRef;
  @ViewChild('openDeleteModal') openDeleteModal: ElementRef;

  public title: string;
  public pageDocuments: PageDocuments;
  public document: Document;
  public errorMessage: string;
  public pages: number[];
  public currentPage: number;

  constructor(private documentService: DocumentService) {

    this.title = 'Sign In';
   }

  ngOnInit(): void {
    this.clearFields();
    this.getDocuments(0);
  }

  clearFields(): void {
    this.document = new Document(null, '', '', '');
    this.errorMessage = null;
  }

  getDocuments(page: number = 0): void {
    this.documentService.getDocuments(page)
    .subscribe(
        (result) => {
            console.log(result);
            this.pageDocuments = result;
            this.pages =  Array(this.pageDocuments.pages).fill(0).map((x, i) => i);
            this.currentPage = this.pageDocuments.page;
        },
        (error) => {
          console.log(error);
        }
    );

  }

  openAddDocumentModal(): void {
    this.clearFields();
    this.openDocumentModal.nativeElement.click();
  }

  openEditDocumentModal(document: Document): void {
    this.clearFields();
    this.document = document;
    this.openDocumentModal.nativeElement.click();
  }

  onSubmit(): void {
    this.documentService.saveDocument(this.document)
    .subscribe(
        (result) => {
            console.log(result);
            this.closeDocumentModal.nativeElement.click();
            this.getDocuments();
        },
        (error) => {
          console.log(error);
          this.errorMessage = 'Fields must be filled in or this document already exists.';
        }
    );
  }

  openDeleteDocumentModal(document: Document): void {
     this.document = document;
     this.openDeleteModal.nativeElement.click();
  }

  deleteDocument(): void {
    this.documentService.deleteDocument(this.document)
    .subscribe(
        (result) => {
            console.log(result);
            this.closeDeleteModal.nativeElement.click();
            this.getDocuments();
        },
        (error) => {
          console.log(error);
        }
    );
  }
}
