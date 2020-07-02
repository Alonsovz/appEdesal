import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { HttpClient, HttpHeaders, HttpEventType } from '@angular/common/http';
import { UsuarioService } from 'src/app/service/usuario.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor( private usuario : UsuarioService ,private chRef: ChangeDetectorRef,
    private http: HttpClient) { }

  ngOnInit() {
    
  }

}
