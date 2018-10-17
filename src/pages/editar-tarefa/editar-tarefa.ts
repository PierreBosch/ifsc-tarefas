import { Component } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {Tarefa} from "../../models/tarefa";
import {TarefaProvider} from "../../providers/tarefa/tarefa";



@IonicPage()
@Component({
  selector: 'page-editar-tarefa',
  templateUrl: 'editar-tarefa.html',
})
export class EditarTarefaPage {

  private tarefa:Tarefa;

  constructor(public navCtrl: NavController,private _loadingCtrl:LoadingController, public navParams: NavParams, private _tarefaProvider:TarefaProvider) {
    this.tarefa = this.navParams.data.tarefa;
  }

  public atualizarTarefa(){
    this._tarefaProvider.editarTarefa(this.tarefa)
      .subscribe((tarefa:Tarefa) => {
        this.navCtrl.pop();
      });
  }

}
