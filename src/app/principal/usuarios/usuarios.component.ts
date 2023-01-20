import { Component } from '@angular/core';
import { UserservicesService } from 'src/app/services/userservices.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {


  // consumir un servico con metodo getall() del servicio

  cadena = "";
  listado = new Array;

  //para hacer uso del servicio, instanciarlo en el constructor

  constructor(private servicio: UserservicesService){  }//UserservicesService es el nombre del servicio

  ngOnInit(){
    this.servicio.getAll().subscribe({

      next:(userAll:string)=>{
        this.cadena=userAll;
        for (let n=0; n < userAll.length;n++){
          this.listado.push(userAll[n])
        }
      },

      error:(er)=>{console.error(er)}, //el param er o error no necesita un tipo

      complete:()=>{ console.info('proceso completado')}      
    });

    //las llaves despues de => pueden borrarse si solo hay un linea de codigo

  }

}
