import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Tarefa} from "../../models/tarefa";
import "rxjs/add/operator/map";

@Injectable()
export class TarefaProvider {

  constructor(private _http: HttpClient) {

  }

  public buscarTodasTarefas(){
    return this._http.get<any>( "http://localhost:3000/tarefas" );
  }

  public criarTarefa(tarefa:Tarefa){
    return this._http.post( "http://localhost:3000/tarefas", tarefa);
  }

  public editarTarefa(tarefa:Tarefa){
    return this._http.put("http://localhost:3000/tarefas/" + tarefa.id, tarefa);
  }

  public removerTarefa(tarefa:Tarefa){
    return this._http.delete("http://localhost:3000/tarefas/" + tarefa.id);
  }

  public pesquisarTarefa(tarefaPesquisada){
    return this._http.get( "http://localhost:3000/tarefas?titulo_like=" + tarefaPesquisada);
  }

}
