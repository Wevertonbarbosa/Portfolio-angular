import { Component,TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
 
@Component({
  selector: 'app-curriculo',
  templateUrl: './curriculo.component.html',
  styleUrls: ['./curriculo.component.css']
})
export class CurriculoComponent {
  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}
 
  openModalWithClass(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray modal-lg' })
    );
  }

}
