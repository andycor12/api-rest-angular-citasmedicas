import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiciousuarioService {

  servidor="http://127.0.0.1:3000";

  constructor(private servicio:HttpClient) { }

  consultarUsuario():Observable<any>{
    return this.servicio.get(`${this.servidor}/api/usuarios`);

  }
}
