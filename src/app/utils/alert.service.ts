import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(private router: Router) {}

  public onSuccessAlert(
    title: string,
    detail: string = '',
    confirmText: string = 'ยืนยัน',
    comfirmFunction: any = () => {}
  ): void {
    Swal.fire({
      imageUrl: './assets/icons/CheckCircle.svg',
      title: '<span class="font-h2">' + title + '</span>',
      html: '<span class="font-body2">' + detail + '</span>',
      confirmButtonColor: '#F2C94C',
      confirmButtonText:
        '<span class="font-button font-onSurface">' + confirmText + '</span>',
      heightAuto: false,
    }).then((confirm) => {
      if (confirm.isConfirmed) {
        comfirmFunction();
      }
    });
  }

  public onLoadingAlert(): void {
    Swal.fire({
      html:
        '<div class="d-flex flex-column align-items-center"><img class="mb-5 w-50" id="spinning-circle" src="./assets/icons/Loading.svg"> <span class="font-h2 font-secondary-variant">' +
        'กำลังโหลด' +
        '</span></div>',
      allowOutsideClick: false,
      heightAuto: false,
      showConfirmButton: false,
    });
  }

  public onLoginLoadingAlert(): void {
    Swal.fire({
      html: '<img id="spinning-circle" src="./assets/icons/Loading.svg">',
      allowOutsideClick: false,
      showConfirmButton: false,
      heightAuto: false,
      background: 'rgba(0,0,0,.01)',
    });
  }

  public onErrorAlert(
    title: string,
    detail: string = '',
    confirmText: string = 'ปิด',
    comfirmFunction: any = () => {}
  ): void {
    Swal.fire({
      imageUrl: './assets/icons/XCircle.svg',
      title: '<span class="font-h2 font-error">' + title + '</span>',
      html: '<span class="font-body2">' + detail + '</span>',
      confirmButtonColor: '#F2C94C',
      confirmButtonText:
        '<span class="font-button font-onSurface">' + confirmText + '</span>',
      heightAuto: false,
    }).then((confirm) => {
      if (confirm.isConfirmed) {
        comfirmFunction();
      }
    });
  }

  public onConfirmAlert(
    title: string,
    detail: string = '',
    confirmText: string = 'ยืนยัน',
    cancelText: string = 'ยกเลิก',
    comfirmFunction: any = () => {},
    cancelFunction: any = () => {}
  ): void {
    Swal.fire({
      title: '<span class="font-h2">' + title + '</span>',
      html: '<span class="font-body2">' + detail + '</span>',
      showCancelButton: true,
      cancelButtonColor: '#FFFFFF',
      cancelButtonText:
        '<span class="font-button font-onSurface">' + cancelText + '</span>',
      confirmButtonColor: '#F2C94C',
      confirmButtonText:
        '<span class="font-button font-onSurface">' + confirmText + '</span>',
      heightAuto: false,
    }).then((confirm) => {
      if (confirm.isConfirmed) {
        comfirmFunction();
      } else if (confirm.dismiss) {
        cancelFunction();
      }
    });
  }
}
