import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  usuario = {
    nombre: 'Carlos ',
    apellido: 'Abanto Moreno',
    correo: 'carlos96@gmail.com',
    pais: 'DOM',
    genero: 'M'
  }

  paises: any[] = [];

  constructor(
    private _paisService: PaisService
  ) { }

  ngOnInit(): void {
    this._paisService.getPaises().subscribe(paises => {
      this.paises = paises;

      this.paises.unshift({
        nombre: '[Seleccione un Pais]',
        codigo: ''
      }) ;
    }
    )
  }

  guardar(form: NgForm) {
    console.log(form);
    console.log(form.value);


    if (form.invalid) {

      Object.values(form.controls).forEach(control => {
        control.markAsTouched();
      })

      return;
    };

  }
}
