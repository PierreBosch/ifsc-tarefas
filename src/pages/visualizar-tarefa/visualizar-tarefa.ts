import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {Tarefa} from "../../models/tarefa";
import {TarefaProvider} from "../../providers/tarefa/tarefa";
import {EditarTarefaPage} from "../editar-tarefa/editar-tarefa";

/**
 * Generated class for the VisualizarTarefaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-visualizar-tarefa',
  templateUrl: 'visualizar-tarefa.html',
})
export class VisualizarTarefaPage {

  tarefa:Tarefa;

  constructor(public navCtrl: NavController,private _toastController:ToastController, public navParams: NavParams, private _tarefaProvider:TarefaProvider, private _alertCtrl:AlertController) {

    this.tarefa = this.navParams.data.tarefa;

  }

  public removeTarefa(){
    this._alertCtrl.create({
      title: "Remover",
      subTitle: "Deseja excluir a tarefa?",
      buttons:[
        {
          text: "Sim",
          handler: () => {
            this._tarefaProvider.removeTarefa(this.tarefa)
              .subscribe(() => {
                this._toastController.create({message:"Tarefa excluída", duration: 1500}).present();
                this.navCtrl.pop();
              });
          }
        },
        {
          text: "Não",
          handler: () => {
            this._toastController.create({message:"Exclusão cancelada", duration: 1500}).present();
          }
        }
      ]
    }).present();
  }

  public editTarefa(){
    this.navCtrl.push(EditarTarefaPage, {tarefa:this.tarefa});
  }

  public changeStatus(){
    this.tarefa.concluida = !this.tarefa.concluida;
    this._tarefaProvider.editTarefa(this.tarefa)
      .subscribe((tarefa:Tarefa) => {
        this._toastController.create({message:"Status da tarefa alterado", duration: 1000}).present();
      });
  }


}
