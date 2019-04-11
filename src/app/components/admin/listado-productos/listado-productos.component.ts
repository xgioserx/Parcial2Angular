import { Component, OnInit } from '@angular/core';
import {AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.sass']
})
export class ListadoProductosComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

}
