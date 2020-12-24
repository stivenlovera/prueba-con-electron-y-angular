DROP DATABASE IF EXISTS sistema_venta;
CREATE database sistema_venta  CHARACTER SET 'UTF8' COLLATE 'utf8_general_ci';
use sistema_venta;
/*Configuracion de sistema*/
CREATE TABLE cargo(
    id_cargo int auto_increment primary key,
    descripcion VARCHAR(50),
    estado CHAR(1) NOT NULL
);
CREATE TABLE usuario(
    id_usuario int auto_increment primary key,
    ci VARCHAR(13) NOT NULL,
    nombre VARCHAR(350) NOT NULL,
    apellido VARCHAR(350) NOT NULL,
    fecha_nac DATETIME NOT NULL,
    estado CHAR(1) NOT NULL,
    dirrecion VARCHAR(512) NOT NULL,
    telefono VARCHAR(12) NOT NULL,
    celular VARCHAR(10) NOT NULL,
    id_cargo int NOT NULL,
    FOREIGN KEY (id_cargo) REFERENCES cargo(id_cargo)
);

CREATE TABLE proveedor(
    id_proveedor int auto_increment primary key,
    empresa_proveedora VARCHAR(50),
    nit VARCHAR(50),
    promotor VARCHAR(50),
    dirrecion VARCHAR(50),
    telefono VARCHAR(50),
    celular VARCHAR(50),
    estado CHAR(1) NOT NULL
);
CREATE TABLE compra(
    id_compra int auto_increment primary key,
    fecha VARCHAR(50),
    monto DOUBLE NOT NULL,
    observacion VARCHAR(50),
    estado CHAR(1) NOT NULL,
    id_proveedor int NOT NULL,
    FOREIGN KEY (id_proveedor) REFERENCES proveedor(id_proveedor)
);

CREATE TABLE info_usuario(
    servidor_usuario VARCHAR(100) NOT NULL,
    id_usuario int NOT NULL,
    evento VARCHAR(50),
    fecha TIMESTAMP default now()
);
CREATE TABLE info_cargo(
    servidor_usuario VARCHAR(100) NOT NULL,
    id_cargo int NOT NULL,
    evento VARCHAR(50),
    fecha TIMESTAMP default now()
);
CREATE TABLE info_proveedor(
    servidor_usuario VARCHAR(100) NOT NULL,
    id_cargo int NOT NULL,
    evento VARCHAR(50),
    fecha TIMESTAMP default now()
);
CREATE TABLE info_compra(
    servidor_usuario VARCHAR(100) NOT NULL,
    id_cargo int NOT NULL,
    evento VARCHAR(50),
    fecha TIMESTAMP default now()
);
/*procedimiento almacenados*/
/*DROP PROCEDURE IF EXISTS insertar_usuario;
DELIMITER //
CREATE PROCEDURE insertar_usuario(in id_usuario int,ci VARCHAR(13),nombre VARCHAR(350),apellido VARCHAR(350),fecha_nac DATETIME,dirrecion VARCHAR(350),telefono VARCHAR(12),celular VARCHAR(10))
    BEGIN
    DECLARE buscar_id int;
    DECLARE resultado VARCHAR(100);
        SET @id_usuario = id_usuario;
        SET buscar_id=(SELECT usuario.ci FROM usuario WHERE usuario.ci=ci);
        IF ci=buscar_id THEN
            SET resultado='CI ya se encuentra registrado';
        ELSE
            INSERT INTO usuario(ci,nombre,apellido,fecha_nac,estado,dirrecion,telefono,celular,id_cargo) VALUES(ci,nombre,apellido,fecha_nac,'1',dirrecion,telefono,celular,'1');
            SET resultado='nuevo usuario registrado';
        END iF;
        SELECT resultado;
    END//*/
DROP PROCEDURE IF EXISTS insertar_usuario;
DELIMITER //
CREATE PROCEDURE insertar_usuario(in id_usuario int,ci VARCHAR(13),nombre VARCHAR(350),apellido VARCHAR(350),fecha_nac DATETIME,dirrecion VARCHAR(350),telefono VARCHAR(12),celular VARCHAR(10))
    BEGIN
        SET @id_usuario = id_usuario;
        INSERT INTO usuario(ci,nombre,apellido,fecha_nac,estado,dirrecion,telefono,celular,id_cargo) VALUES(ci,nombre,apellido,fecha_nac,'1',dirrecion,telefono,celular,'1');
    END//

DELIMITER //
CREATE trigger tr_insertar_usuario BEFORE INSERT ON usuario
   for each ROW
       INSERT INTO info_usuario(servidor_usuario,id_usuario,evento,fecha) VALUES (user(),@id_usuario,"usuario nuevo creado",now());
     //

/*view*/
DROP VIEW IF EXISTS usuario_view;
DELIMITER //
 CREATE VIEW usuario_view AS
 SELECT usuario.id_usuario,usuario.ci,usuario.nombre,usuario.apellido,usuario.fecha_nac,usuario.dirrecion,usuario.telefono,usuario.celular FROM usuario WHERE usuario.estado='1';
 //

/*llamadas*/
INSERT INTO cargo(id_cargo, descripcion, estado) VALUES ('1','admin','y');
call insertar_usuario("1","8963497","ali stiven","lovera huarachi","1991-09-01","barrio toborochi calle los pino Manz 47","","75679775");