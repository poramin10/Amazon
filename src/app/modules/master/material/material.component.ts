import { Component, OnInit, TemplateRef } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss']
})
export class MaterialComponent implements OnInit {
  modalRef?: BsModalRef;
  materialForm!: FormGroup;

  constructor(
    private modalService: BsModalService,
    private formBuild: FormBuilder,
  ) {
    // ! Form
      this.materialForm = this.formBuild.group({
        material_code: new FormControl('', [Validators.required]),
        description: new FormControl('', [Validators.required]),
        material_type: new FormControl('', [Validators.required]),
        unit: new FormControl('', [Validators.required]),
      })

  }

  ngOnInit(): void {
  }

  openModal(createForm: TemplateRef<any>) {
    this.modalRef = this.modalService.show(createForm,{
      class: 'modal-dialog-centered ; modal-lg',
    });
  }

  creatMaterial(){
    console.log('เข้า')
    if(this.materialForm.valid){
      console.log(this.materialForm.controls['material_code'].value,)
      console.log(this.materialForm.controls['description'].value,)
      console.log(this.materialForm.controls['material_type'].value,)
      console.log(this.materialForm.controls['unit'].value,)
    }

  }

  getFormControlByKey(key: string) {
    return this.materialForm.get(key) as FormControl;
  }

}
