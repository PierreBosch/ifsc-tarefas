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

  tarefa:Tarefa;

  constructor(public navCtrl: NavController,private _loadingCtrl:LoadingController, public navParams: NavParams, private _tarefaProvider:TarefaProvider) {
    this.tarefa = this.navParams.data.tarefa;
  }

  public atualizarTarefa(){
    this._tarefaProvider.editTarefa(this.tarefa)
      .subscribe((tarefa:Tarefa) => {
        let loader = this._loadingCtrl.create({content: "Atualizando tarefa...", dismissOnPageChange:true, duration:1000});

        loader.present()
          .then(() =>{
            this.navCtrl.pop();
          });
      });
  }

}
