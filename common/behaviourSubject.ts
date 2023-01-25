import { BehaviorSubject } from 'rxjs';


export class BehaviourSubject {

     /**
      * for storing pool of MySql
      */
    private updatePoolMySql = new BehaviorSubject<any>(null)
    getPoolMySql = this.updatePoolMySql.asObservable();

    updateMySqlPoolValue(value: any) {
        this.updatePoolMySql.next(value)
    }

    /**
      * for storing pool of MsSql
      */
    private updatePoolMsSql = new BehaviorSubject<any>(null)
    getPoolMsSql = this.updatePoolMsSql.asObservable();

    updateMsSqlPoolValue(value: any) {
        this.updatePoolMsSql.next(value)
    }
}