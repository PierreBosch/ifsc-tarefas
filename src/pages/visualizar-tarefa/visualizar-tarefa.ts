import { Component } from '@angular/core';
import {AlertController, NavController, NavParams, ToastController} from 'ionic-angular';
import {Tarefa} from "../../models/tarefa";
import {TarefaProvider} from "../../providers/tarefa/tarefa";
import {EditarTarefaPage} from "../editar-tarefa/editar-tarefa";

@Component({
  selector: 'page-visualizar-tarefa',
  templateUrl: 'visualizar-tarefa.html',
})
export class VisualizarTarefaPage {

  private tarefa:Tarefa;

  constructor(public navCtrl: NavController,private _toastController:ToastController, public navParams: NavParams, private _tarefaProvider:TarefaProvider, private _alertCtrl:AlertController) {

    this.tarefa = this.navParams.data.tarefa;

  }

  public removerTarefa(){
    this._alertCtrl.create({
      title: "Remover",
      subTitle: "Deseja excluir a tarefa?",
      buttons:[
        {
          text: "Sim",
          handler: () => {
            this._tarefaProvider.removerTarefa(this.tarefa)
              .subscribe(() => {
                this.navCtrl.pop();
              });
          }
        },
        {
          text: "Não",
          handler: () => {

          }
        }
      ]
    }).present();
  }

  public editarTarefa(){
    this.navCtrl.push(EditarTarefaPage, {tarefa:this.tarefa});
  }

  public mudarStatus(){
    this.tarefa.concluida = !this.tarefa.concluida;

    this._tarefaProvider.editarTarefa(this.tarefa)
      .subscribe((tarefa:Tarefa) => {

      });
  }


}
