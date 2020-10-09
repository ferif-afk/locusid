import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

export enum SearchType {
  all = '',
  nama_member = 'nama_member',
  profesi_member = 'profesi_member'
}

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};


@Injectable({
  providedIn: 'root'
})
export class ListmemberServiceService {
  apiUrl = "http://elecompindonesia.com/locusid/apilocus/data/index.php/getMember";
  url = "https://locusid.000webhostapp.com/api/data/index.php/getDetailMember";

  constructor(private http: HttpClient) {}

  searchData(nama_member: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?s=${encodeURI(nama_member)}`)
    .pipe(
      map(results => {
        console.log('RAW:', results);
        return results['Search'];
      })
    );
    }

  Post_Data(type, credentials): Observable<any> {
    return this.http.post(`${this.apiUrl}/${type}`, credentials, httpOptions);
  }

  getDetails(id) {
    return this.http.get(`${this.url}/${id}`);
  }

}
