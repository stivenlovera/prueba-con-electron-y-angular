import {createPool, createConnection} from 'mysql2/promise';
// Create the connection pool. The pool-specific settings are the defaults
export async function connect(){
    
    const Connection =await createPool({
        host: 'localhost',
        user: 'root',
        database: 'sistema_venta',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    });
    return Connection;
}