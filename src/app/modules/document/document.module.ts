import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentRoutingModule } from './document-routing.module';
import { DocumentListComponent } from './components/document-list/document-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [DocumentListComponent],
  imports: [
    CommonModule,
    DocumentRoutingModule,
    FormsModule
  ]
})
export class DocumentModule { }
