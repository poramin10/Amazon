import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  setupJwt(jwtString: string): void {
    sessionStorage.setItem('jwt', jwtString);
  }
  get jwt(): string {
    return sessionStorage.getItem('jwt') ?? '';
  }
  set jwt(jwtString: string) {
    sessionStorage.setItem('jwt', jwtString);
  }

  get isLogin(): boolean {
    try {
      let expireDate = new Date(this.decodeJwt().get('exp') * 1000);
      let currentDate = new Date();
      return (
        this.jwt !== '' &&
        expireDate > currentDate &&
        this.decodeJwt().get('role').includes(environment.userStatus.or)
      );
    } catch {
      return false;
    }
  }

  clearJwt(): void {
    sessionStorage.clear();
  }

  decodeJwt(): Map<string, any> {
    let tokenMap: Map<string, any> = new Map<string, any>();
    let tokenResult: string[] = jwt_decode(this.jwt);
    let tokenKeys = Object.keys(tokenResult);
    let tokenValues = Object.values(tokenResult);
    for (let index = 0; index < tokenKeys.length; index++) {
      tokenMap.set(tokenKeys[index], tokenValues[index]);
    }
    return tokenMap;
  }
}
