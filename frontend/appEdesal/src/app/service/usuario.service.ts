import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from './global.service';
import { Observable } from 'rxjs';
import { usuario } from '../models/usuario';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient, private url: GlobalService) { }

  public prueba(): Observable<usuario[]> {
    return this.http.get(this.url.getUrlBackEnd() +'prueba').pipe(map(data => data as usuario[]));
  }
}
