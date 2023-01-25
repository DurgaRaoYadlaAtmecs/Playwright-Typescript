interface DBOperations {
    execute(query: string, pool?:any,params?: string[] | Object): Promise<any>;
}

interface DBOperations {
    endConnection(): Promise<any>;
}