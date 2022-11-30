import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-primerapantalla',
  templateUrl: './primerapantalla.component.html',
  styleUrls: ['./primerapantalla.component.css']
})
export class PrimerapantallaComponent implements OnInit{

  
  titulo: string = ''
  tituloPantalla: string = 'Esta es la Primera Pantalla '

  constructor(
    private route: ActivatedRoute,
  ){}

  ngOnInit(): void {

    this.route.queryParams.subscribe(params =>{
      this.titulo = params['titulo']
    });
      
  }

}
