import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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
  }
  constructor() { }

  ngOnInit(): void {
  }

  guardar(form: NgForm){
    console.log(form);
    console.log(form.value);
    

    if( form.invalid ) {
      
      Object.values( form.controls ).forEach ( control => {
        control.markAsTouched();
      })
      
      return;
    };

  }
}
