"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_Controller_1 = require("./controller/user_Controller");
var electron_1 = require("electron");
var path = require("path");
var url = require("url");
var Principal = /** @class */ (function () {
    function Principal() {
        //ipcMain.on('get-items',this.getUser);
        //this.user.mostrar_usuario()
        electron_1.app.on('ready', this.Menu);
        electron_1.app.on('window-all-closed', this.cerrar);
        electron_1.ipcMain.on('get-items', user_Controller_1.default.mostrar_usuario);
        electron_1.ipcMain.on('post-items', user_Controller_1.default.registrar_Usuario);
    }
    Principal.prototype.Menu = function () {
        var win = new electron_1.BrowserWindow({ webPreferences: {
                nodeIntegration: true,
                nodeIntegrationInWorker: true
            }, width: 1280, height: 720 });
        win.loadURL(url.format({
            pathname: path.join(__dirname, '../../../dist/sistema-venta-inventario/index.html'),
            protocol: 'file:',
            slashes: true
        }));
        win.webContents.openDevTools();
    };
    Principal.prototype.cerrar = function () {
        electron_1.app.quit();
    };
    return Principal;
}());
var aplicacion = new Principal();
//# sourceMappingURL=main.js.map