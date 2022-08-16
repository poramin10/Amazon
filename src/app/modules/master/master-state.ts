import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Material } from "src/app/interfaces/material";
import { MaterialService } from "src/app/services/material.service";


@Injectable ()
export class MasterState {

  materialList: BehaviorSubject<Material[]> = new BehaviorSubject<Material[]>([]);

  constructor(
    private materialService: MaterialService,
  ){
    this.getMaterial()
  }

  MaterialListAsObservable(){
    return this.materialList.asObservable()
  }

  getMaterial(){
    this.materialService.getMaterial().subscribe((res)=>{
      this.materialList.next(res.data)
    })
  }

}
