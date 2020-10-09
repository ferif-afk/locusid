import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};
const apiUrl = "http://elecompindonesia.com/locusid/apilocus/data/index.php";
// const apiUrl = "http://localhost/webservice-ionic";
// const apiUrl = "http://localhost/apilocus/data/index.php";

@Injectable({
  providedIn: "root",
})
export class AuthServiceService {
  type: any;

  constructor(private http: HttpClient) {}

  Get_Data(type): Observable<any> {
    return this.http.get(`${apiUrl}/${type}`);
  }

  Post_Data(type, credentials): Observable<any> {
    return this.http.post(`${apiUrl}/${type}`, credentials, httpOptions);
  }
}
