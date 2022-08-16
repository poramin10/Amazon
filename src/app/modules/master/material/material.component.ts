import { Component, OnInit, TemplateRef } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Material } from 'src/app/interfaces/material';
import { MaterialService } from 'src/app/services/material.service';
import { AlertService } from 'src/app/utils/alert.service';
import Swal from 'sweetalert2';
import { MasterState } from '../master-state';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss']
})
export class MaterialComponent implements OnInit {
  modalRef?: BsModalRef;
  materialForm!: FormGroup;
  materialList : Material[] = []
  materialDetail?: Material;

  constructor(
    private modalService: BsModalService,
    private formBuild: FormBuilder,
    private materialService: MaterialService,
    private readonly alertServect : AlertService,
    private masterState : MasterState
  ) {
      // ! Form
      this.materialForm = this.formBuild.group({
        code: new FormControl('', [Validators.required]),
        description: new FormControl('', [Validators.required]),
        type: new FormControl('', [Validators.required]),
        unit: new FormControl('', [Validators.required]),
        active: new FormControl('',[Validators.required])
      })
  }

  ngOnInit(): void {
    this.masterState.MaterialListAsObservable().subscribe((res) => {this.materialList = res;})
  }

  modalCreateMaterial(createForm: TemplateRef<any>) {

    // Clear ค่าใน
    // this.materialForm.reset()
    // this.materialForm.setValidators(Validators.required)


    this.materialForm = this.formBuild.group({
      code: [null , Validators.required],
      description: [null, Validators.required],
      type: [null, Validators.required],
      unit: [null, Validators.required],
      active: [null, Validators.required]
    })

    this.modalRef = this.modalService.show(createForm,{
      class: 'modal-dialog-centered ; modal-lg',
    });
  }

  modalEditMaterial(editForm: TemplateRef<any> ,  materialData: Material) {
    this.materialDetail = materialData;
    this.materialForm = this.formBuild.group({
      code: [this.materialDetail?.code],
      description: [this.materialDetail?.description],
      type: [this.materialDetail?.type],
      unit: [this.materialDetail?.unit],
      active: [this.materialDetail?.active]
    })

    this.modalRef = this.modalService.show(editForm,{
      class: 'modal-dialog-centered ; modal-lg',
    });

  }

  creatMaterial(){
    console.log('Data:: ',this.materialForm.controls['active'].value)
    if(this.materialForm.valid){
      this.alertServect.onLoginLoadingAlert();
      var formMaterial : Material = {
          id: 0,
          code: this.materialForm.controls['code'].value,
          description: this.materialForm.controls['description'].value,
          type: this.materialForm.controls['type'].value,
          unit: this.materialForm.controls['unit'].value,
          active: this.materialForm.controls['active'].value,
          createdDate: new Date(),
          modifiedDate: new Date(),
          createdBy: {
            id: 1,
          },
          modifiedBy: {
            id: 1
          }
      }

      this.materialService.createMaterial(formMaterial).subscribe((res)=>{
        if(res.success){
          this.masterState.getMaterial();
          Swal.close();
          this.alertServect.onSuccessAlert('เพิ่ม Material สำเร็จ');

          this.modalRef?.hide()

          // ล้างค่า
          this.materialForm = this.formBuild.group({
            code: new FormControl('', [Validators.required]),
            description: new FormControl('', [Validators.required]),
            type: new FormControl('', [Validators.required]),
            unit: new FormControl('', [Validators.required]),
            active: new FormControl('', [Validators.required]),
          })

        }
      })
    }else{
      console.log('Form ไม่ครบ')
    }

  }

  getFormControlByKey(key: string) {
    return this.materialForm.get(key) as FormControl;
  }

  // ? รับ Data มาจากฝั่ง Dropdown
  selectedValue(value:string){
    console.log("Data ==> ",value)
  }

}
