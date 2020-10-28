import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  url = 'http://laravel.tinhocdongian.com/api'
  groups = [
    {
      id : 1,
      name: "C0520G1"
    }
  ]

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.groups;
  }

  getAllGroup(): Observable<any> {
    return this.http.get(this.url+ '/groups');
  }

  delete(id) : Observable<any>{
    return this.http.delete(this.url+ '/groups/' + id + '/delete');
  }

  findById(id): Observable<any>{
    return this.http.get(this.url+ '/groups/' + id );
  }

  update(data, id): Observable<any> {
    return this.http.put(this.url+ '/groups/' + id, data);
  }

  getGroupNameById(id: number): string{
    for (const g of this.groups){
      if (g.id == id){
        return g.name;
      }
    }
    return "khong ton tai";
  }
}
