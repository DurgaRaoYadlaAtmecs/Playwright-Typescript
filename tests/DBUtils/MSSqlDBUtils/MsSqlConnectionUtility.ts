import { MSSQLDBCONNECTIONOBJECT } from "../../environment/MsSqlConfig.env";
import * as sql from 'mssql/msnodesqlv8';
import { Pool } from "mssql/msnodesqlv8";


export class MsSQLConnectionUtility implements DBOperations {

    constructor() {
     this.initializeThePool()
    }

    private msSqlConfig =  MSSQLDBCONNECTIONOBJECT;
    pool: Pool;

    /**
     * It will init the pool connection.
     * @returns pool
     */
    public async initializeThePool(){
        try {
            this.pool = await new sql.ConnectionPool(this.msSqlConfig);
            console.debug('MsSql Adapter Pool generated successfully');
        } catch (error) {
            console.error('[mssql.connector][init][Error]: ', error);
            throw new Error('failed to initialized pool');
        }
        return this.pool
    }

    

  
    public execute = async (query: string, params?: string[] | Object): Promise<any>=> {
        try {
            if (!this.pool) throw new Error('Pool was not created. Ensure pool is created when running the app.');
                await this.pool.connect();
                const request = new sql.Request(this.pool);
                const result = await request.query(query);
            
              console.log("----------chk result---------", JSON.stringify(result));
                return(result);
        }catch (error) {
            console.error('[mssql.connector][execute][Error]: ', error);
            throw new Error('failed to execute MsSQL query');
        } 
    }

     /**
     * It will End the connection from the MySql database.
     * @param pool 
     */
     public endConnection = async (): Promise<any>=> {
        this.pool.close();
    }

}