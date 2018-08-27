import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ApiProvider} from "../api/api";
import {Observable} from "rxjs";
import {Tarefa} from "../../models/tarefa";
import * as moment from "moment";
import "rxjs/add/operator/map";

@Injectable()
export class TarefaProvider {

  constructor(private _http: HttpClient, private _api:ApiProvider) {

  }

  public getTarefas(start = 0, filter): Observable<any>{

    if(filter !== ""){
      filter = "&concluida=" + filter;
    }

    return this._http.get<any>(this._api.apiUrl + "tarefas?_sort=dataAtualizacao&_order=desc&_start="+ start +"&_limit=10" + filter, {observe: 'response'});
  }

  public createTarefa(tarefa:Tarefa){
    return this._http.post(this._api.apiUrl + "tarefas", tarefa);
  }

  public editTarefa(tarefa:Tarefa){
    tarefa.dataAtualizacao = moment().format();
    return this._http.put(this._api.apiUrl + "tarefas/" + tarefa.id, tarefa);
  }

  public removeTarefa(tarefa:Tarefa){
    return this._http.delete(this._api.apiUrl + "tarefas/" + tarefa.id);
  }

  public searchTarefa(tarefa){
    return this._http.get(this._api.apiUrl + "tarefas?titulo_like=" + tarefa);
  }

}
