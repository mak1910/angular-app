import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class CrudService<T> {
  records: T[];
  recordsCopy: T[];

  private announceUpdate = new Subject<string>();
  onUpdateAnnounce = this.announceUpdate.asObservable();

  private getRecordsObservable: Observable<T[]>;

  constructor(private httpClient: HttpClient) {}

  getMetaData() {}

  getRecords(): Observable<T[]> {
    if (this.getRecordsObservable) {
      return this.getRecordsObservable;
    }
    this.getRecordsObservable = of([]).pipe(
      tap(res => {
        if (!(res instanceof Array)) {
          Observable.throw('Array results expected');
        }
        let bool = false;
        res.forEach(row => {
          bool = bool || typeof row !== 'object' || row === null;
        });
        if (bool) {
          Observable.throw('Invalid data');
        }
      }),
      tap(res => {
        this.records = res;
        this.recordsCopy = JSON.parse(JSON.stringify(res));
        this.getRecordsObservable = null;
      })
    );
    return this.getRecordsObservable;
  }

  addRecord(record: T) {
    this.records ? this.records.push(record) : [record];
    this.announceUpdate.next('ADD');
  }

  deleteRecord(index) {
    if (!this.records[index]) {
      return;
    }
    this.records.splice(index, 1);
    this.announceUpdate.next('DELETE');
  }

  editRecord(index, newRecord: T) {
    if (!this.records[index]) {
      return;
    }
    this.records[index] = newRecord;
    this.announceUpdate.next('EDIT');
  }
}
