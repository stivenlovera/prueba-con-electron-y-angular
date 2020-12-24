import { environment } from './../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Usuario } from '../../model/user';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SistemaService {
  headers : HttpHeaders= new HttpHeaders({
    "Content-type":"application/json",
    "Cache-Control":"no-cache",
    "Access-Control-Allow-Origin": "*",
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
  });
  //api_anime_url:string = environment.backend.sistema;
  api_sistema:string = environment.backend.sistema;
  constructor(
    private service_electron:ElectronService,
    private http:HttpClient
    ) { }
    /*getUser(){
      return this.http.get(`${this.api_sistema}user`,{headers:this.headers});
    }*/
    postUser(usuario:Usuario){
      return this.http.post(`${this.api_sistema}user`,usuario,{headers:this.headers});
    }
    putUser(){
      return this.http.get(`${this.api_sistema}user`,{headers:this.headers});
    }



  getUser(){
    if(this.service_electron.isElectronApp) {
      return this.service_electron.ipcRenderer.sendSync('get-items');
    }
    console.log(this.service_electron.shell);
  }
  /*apostUser(user:Usuario){
    console.log(user)
    if(this.service_electron.isElectronApp) {
      return this.service_electron.ipcRenderer.sendSync('post-items',user);
    }
  }*/
  /*postUser(user: Usuario): Observable<any[]> {
    console.log('service user')
    return of(
      this.service_electron.ipcRenderer.sendSync('post-items', user)
    ).pipe(catchError((error: any) => Observable.throw(error.json)));
  }*/
  

}
