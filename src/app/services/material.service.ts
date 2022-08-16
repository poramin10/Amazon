import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Result } from '../interfaces/base/result';
import { Material } from '../interfaces/material';
import { URL_API } from './url/api-url';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  constructor(private httpClient: HttpClient) {}

  // ! Create Material
  createMaterial(material: Material): Observable<Result<Material[]>> {
    var uri = environment.baseApi+URL_API.MATERIAL.material;
    return this.httpClient.post<Result<Material[]>>(uri, material);
  }

  // ! Get Material
  getMaterial(): Observable<Result<Material[]>>{
    var uri = environment.baseApi+URL_API.MATERIAL.material;
    return this.httpClient.get<Result<Material[]>>(uri);
  }
  
}
