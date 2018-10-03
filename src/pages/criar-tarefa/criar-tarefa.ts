import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {Tarefa} from "../../models/tarefa";
import {TarefaProvider} from "../../providers/tarefa/tarefa";
import * as moment from "moment";

/**
 * Generated class for the CriarTarefaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-criar-tarefa',
  templateUrl: 'criar-tarefa.html',
})
export class CriarTarefaPage {

  public tarefa:Tarefa = {titulo:"", descricao: "", concluida:false, dataCriacao: moment().format(), dataAtualizacao: moment().format(), materia: "" };

  constructor(public navCtrl: NavController, public navParams: NavParams, private _loadingCtrl:LoadingController, private _tarefaProvider:TarefaProvider) {
    moment.locale('pt-BR');
  }

  public createTarefa(){
    this._tarefaProvider.createTarefa(this.tarefa)
      .subscribe((tarefa:Tarefa) => {
        let loader = this._loadingCtrl.create({content: "Criando nova tarefa...", dismissOnPageChange:true, duration:1000});

        loader.present()
          .then(() =>{
            this.navCtrl.pop();
          });
      });
  }

}
