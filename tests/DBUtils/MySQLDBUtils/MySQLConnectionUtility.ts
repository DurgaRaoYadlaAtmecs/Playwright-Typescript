import { MYSQLDBCONNECTIONOBJECT } from "../../environment/MySqlConfig.env";
import { createPool, Pool } from 'mysql2';


export class MySQLConnectionUtility implements DBOperations {

    constructor() {
     this.initializeThePool()
    }

    private mySqlConfig =  MYSQLDBCONNECTIONOBJECT;
    pool: Pool;

    /**
     * It will init the pool connection.
     * @returns pool
     */
    public async initializeThePool(){
        try {
            this.pool = createPool(this.mySqlConfig);
            console.debug('MySql Adapter Pool generated successfully');
        } catch (error) {
            console.error('[mysql.connector][init][Error]: ', error);
            throw new Error('failed to initialized pool');
        }
        return this.pool
    }

    

  
    public execute = (query: string, params?: string[] | Object): Promise<any>=> {
        try {
            if (!this.pool) throw new Error('Pool was not created. Ensure pool is created when running the app.');
            return new Promise<any>(async (resolve, reject) => {
                this.pool.query(query, params, async (error, results) => {
                    console.log("chk results---->",results)
                    if (error) reject(error);
                    else resolve(results);
                });
            });
        } catch (error) {
            console.error('[mysql.connector][execute][Error]: ', error);
            throw new Error('failed to execute MySQL query');
        } 
    }

     /**
     * It will End the connection from the MySql database.
     * @param pool 
     */
     public endConnection = async (): Promise<any>=> {
         this.pool.end();
    }

}