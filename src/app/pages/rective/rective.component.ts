import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rective',
  templateUrl: './rective.component.html',
  styleUrls: ['./rective.component.scss']
})
export class RectiveComponent implements OnInit {

  form: FormGroup;

  constructor( 
    private fb: FormBuilder  // FormBuilder, es un servicio que cotiene metodos que nos ayuda a crear formularios reactivos facilmente
  ) {
    this.crearFormulario();
   }

  ngOnInit(): void {
  }

  crearFormulario() {

    // nombre: ['', , ]

    this.form = this.fb.group({
      nombre  : ['', [Validators.required,Validators.minLength(5)] ],
      apellido: ['', [Validators.required] ],
      correo  : ['', [Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{3,3}$'), Validators.required] ]
    })
  }

  guardar() {
    console.log(this.form);
    
  }

}
