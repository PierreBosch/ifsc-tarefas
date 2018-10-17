import { Component } from '@angular/core';
import { LoadingController, NavController, NavParams} from 'ionic-angular';
import {Tarefa} from "../../models/tarefa";
import {TarefaProvider} from "../../providers/tarefa/tarefa";

@Component({
  selector: 'page-criar-tarefa',
  templateUrl: 'criar-tarefa.html',
})

export class CriarTarefaPage {

  private tarefa:Tarefa = {titulo:"", descricao: "", concluida:false, materia: "" };

  constructor(public navCtrl: NavController, public navParams: NavParams, private _loadingCtrl:LoadingController, private _tarefaProvider:TarefaProvider) {
  }

  public createTarefa(){
    this._tarefaProvider.criarTarefa(this.tarefa)
      .subscribe((tarefa:Tarefa) => {
            this.navCtrl.pop();
      });
  }

}
