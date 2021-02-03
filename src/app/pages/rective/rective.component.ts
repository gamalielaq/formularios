import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rective',
  templateUrl: './rective.component.html',
  styleUrls: ['./rective.component.scss']
})
export class RectiveComponent implements OnInit {

  form: FormGroup;

  paises: any = [
    {
      nombre: 'Perú',
      codigo: 'PE'
    },
    {
      nombre: 'Argentina',
      codigo: 'AR'
    },
    {
      nombre: 'Italia',
      codigo: 'IT'
    }
  ]

  constructor(
    private fb: FormBuilder  // FormBuilder, es un servicio que cotiene metodos que nos ayuda a crear formularios reactivos facilmente
  ) { }

  ngOnInit(): void {
    this.paises.unshift({
      nombre: '--- Seleccionar Pais ---',
      codigo: ''
    });
    this.crearFormulario();
    this.cargarData();
  }

  get pasatiempos() {
    return this.form.get('pasatiempos') as FormArray;
  };
  
  get nombreNoValido() {
    return this.form.get('nombre')?.invalid && this.form.get('nombre')?.touched
  };
  get apellidoNoValido() {
    return this.form.get('apellido')?.invalid && this.form.get('apellido')?.touched
  };
  get correoNoValido() {
    return this.form.get('correo')?.invalid && this.form.get('correo')?.touched
  };

  get distritoNoValido() {
    return this.form.get('direccion.distrito')?.invalid && this.form.get('direccion.distrito')?.touched
  };

  get ciudadNoValido() {
    return this.form.get('direccion.ciudad')?.invalid && this.form.get('direccion.ciudad')?.touched
  };

  get paisNovalido() {
    return this.form.get('pais')?.invalid && this.form.get('pais')?.touched
  };

  validatorControl(parent: string) {
    return this.form.get(parent)?.invalid && this.form.get(parent)?.touched
  };

   crearFormulario() {
     this.form = this.fb.group({
       nombre  : ['', [Validators.required,Validators.minLength(5)] ],
       apellido: ['', [Validators.required] ],
       correo  : ['', [Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{3,3}$'), Validators.required] ],
       direccion: this.fb.group({
         distrito: ['', Validators.required],
         ciudad: ['', Validators.required]
        }),
        pais : ['', Validators.required ],
        pasatiempos: this.fb.array([])
      })
    }

    cargarData() {
      // this.form.setValue(
        this.form.reset
        ({
          nombre: "Fernando",
          apellido: "Perez",
          correo: "juanperez.96@gmail.com",
          direccion: {
            distrito: "Otario",
            ciudad: "Cascacén"
          },
          pais: ''
        });

        ['comer', 'Dormir'].forEach( valor => this.pasatiempos.push( this.fb.control(valor)));
      }


      agregarPasatiempo() {
        this.pasatiempos.push(this.fb.control( '', Validators.required ))
      }

      borrarPasatiempo(i : number) {
        this.pasatiempos.removeAt(i);
      }

      guardar() {
        // markAsTouched > controls manuipulados
    
        //1° Forma
        
        if (!this.form.valid) {
          this.form.markAllAsTouched()
        } else {
          //Posteo de la información
          this.form.reset({
            //  limpiar los campos despues de enviarlos al servidor
            nombre: 'Sin Nombre',
            pais: ''
          })
        }
      
    
        //2° Forma
    
        // if (this.form.invalid) {
        //   return Object.values( this.form.controls ).forEach(control => {
        //      if( control instanceof FormGroup ) {
        //       Object.values( control.controls ).forEach( control => control.markAsTouched() );
        //      } else {
        //        control.markAsTouched(); 
        //      }
        //   })
        // };
        
      }
}
