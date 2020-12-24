import { Usuario } from '../../src/app/model/user';
import {connect} from '../mysql_Connect';
class UsuarioController{
    constructor(){
        //this.mostrar_usuario();
        //ipcMain.on('get-items',this.getUser);
    }
    public async getUser(){
        const conn=await connect();
        try {
            const [rows, fields] = await conn.query(`select * from usuario;`);
            return rows;
          } catch (err) {
            throw err;
          }
          conn.end();
    }
    
    async registrar_Usuario(event:any,user:Usuario){
        console.log('llega a mysql2',user)
        const conn=await connect();
        const [rows, fields]= await conn.execute(`call insertar_usuario("1","${user.ci}","${user.nombre}","${user.apellido}","${user.fecha_nac}","${user.dirrecion}","${user.telefono}","${user.celular}");`);
        conn.end();
        event.returnValue = rows;
    }
    async mostrar_usuario(event:any){
        const conn=await connect();
        const [rows, fields]= await conn.query(`select * from usuario;`);
        conn.end();
        event.returnValue = rows;
    }
}
const userController=new UsuarioController
export default userController;
