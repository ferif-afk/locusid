import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};
const apiUrl = "http://elecompindonesia.com/locusid/apilocus/data/index.php";

@Injectable({
  providedIn: "root",
})
export class ArtikelService {
  url = "https://locusid.000webhostapp.com/api/data/index.php/getDetailArtikel";

  constructor(private http: HttpClient) {}

  Get_Article(type): Observable<any> {
    return this.http.get(`${apiUrl}/${type}`);
  }

  Post_Data(type, credentials): Observable<any> {
    return this.http.post(`${apiUrl}/${type}`, credentials, httpOptions);
  }

  getDetails(id) {
    return this.http.get(`${this.url}/${id}`);
  }
}
