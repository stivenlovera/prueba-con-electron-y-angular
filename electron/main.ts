import userController from './controller/user_Controller';
import { app, BrowserWindow,ipcMain } from 'electron';
import * as path from 'path';
import * as url from 'url';
class Principal {

    constructor() {
        //ipcMain.on('get-items',this.getUser);
        //this.user.mostrar_usuario()
        app.on('ready',this.Menu);
        app.on('window-all-closed',this.cerrar);
        
        ipcMain.on('get-items',userController.mostrar_usuario);
        ipcMain.on('post-items', userController.registrar_Usuario);
    }
    public Menu():void{
        let win = new BrowserWindow({webPreferences:{
           nodeIntegration:true,// integracion con node false
           nodeIntegrationInWorker:true 
        },width:1280,height:720});
        win.loadURL(url.format({
            pathname:path.join(__dirname,'../../../dist/sistema-venta-inventario/index.html'),
            protocol:'file:',
            slashes:true
        }));
        win.webContents.openDevTools();
        
    }
    public cerrar(){
        app.quit();
    }

}
let aplicacion=new Principal();