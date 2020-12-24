import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import { SistemaService } from 'src/app/services/sistema/sistema.service';
import { Usuario } from '../../model/user';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
  providers:[NgbModalConfig, NgbModal,]
})
export class UsuarioComponent implements OnInit {
  users:any;
  user:Usuario={
    ci:'',
    nombre:'',
    apellido:'',
    dirrecion:'',
    fecha_nac:null,
    telefono:'',
    celular:''
  }
  reset(){
    this.user.ci='',
    this.user.nombre='',
    this.user.apellido='',
    this.user.dirrecion='',
    this.user.fecha_nac=null,
    this.user.telefono='',
    this.user.celular=''
  }
  constructor(private config: NgbModalConfig,private modalService: NgbModal,private service_sistema:SistemaService) {
    config.backdrop = 'static';
    config.keyboard = false;
   }
   
  ngOnInit() {
    this.consulta_inicial();
  }
  consulta_inicial(){
    /*this.service_sistema.getUser().subscribe(
      res=>{
        this.users=res;
      }
    );*/
    const aux=this.service_sistema.getUser();
    console.log(aux)
  }

  modal_nuevo(nuevo:any) {
    this.modalService.open(nuevo,{ centered: true });
  }
  modal_editar(editar:any,id_user:string) {
    this.user.id_user=id_user;
    this.modalService.open(editar,{ centered: true });
  }
  modal_eliminar(content) {
    this.modalService.open(content,{ centered: true });
  }
  guardar_modal_nuevo(){
    this.service_sistema.postUser(this.user).subscribe(
      res=>{
        console.log('save');
      }
    );
    this.modalService.dismissAll();
    this.consulta_inicial();
    //console.log(this.user)
    /*this.service_sistema.postUser(this.user).subscribe(
      res=>{
        console.log(res);
      }
    );
    this.reset();
    this.modalService.dismissAll();*/
  }
  guardar_modal_editar(){
    console.log(this.user);
    this.reset();
    this.modalService.dismissAll();
  }
  guardar_modal_eliminar(){
    console.log(this.user.ci)
    this.modalService.dismissAll();
  }

}
