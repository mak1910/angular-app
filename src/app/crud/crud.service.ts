import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { of, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class CrudService<T> {
    records: T[];
    recordsCopy: T[];

    constructor(
        private httpClient: HttpClient
    ) {}

    getRecords(): Observable<T[]> {
        return of([])
            .pipe(
                tap(res => {
                    if (!(res instanceof Array)) {
                        Observable.throw('Array results expected');
                    }
                    let bool = false;
                    res.forEach(row => {
                        bool = bool || typeof row !== 'object' || row === null
                    })
                    if (bool) {
                        Observable.throw('Invalid data');
                    }
                }),
                tap(res => {
                    this.records = res;
                    this.recordsCopy = JSON.parse(JSON.stringify(res));
                })
            );
    }

    addRecord(record: T) {
        this.records ? this.records.push(record) : [record];
    }

    deleteRecord(field: string, value: any) {
        const record = this.findRowByIdentifier(field, value);
    }

    private findRowByIdentifier(field: string, value: any) {
        if (!this.recordsValid()) { return; }
        return this.records.find(record => record[field] === value);
    }

    private recordsValid() {
        return (this.records instanceof Array);
    }

}