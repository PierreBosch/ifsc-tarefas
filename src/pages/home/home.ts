import { Component } from '@angular/core';
import {ActionSheetController, NavController} from 'ionic-angular';
import {TarefaProvider} from "../../providers/tarefa/tarefa";
import {Tarefa} from "../../models/tarefa";
import {VisualizarTarefaPage} from "../visualizar-tarefa/visualizar-tarefa";
import {CriarTarefaPage} from "../criar-tarefa/criar-tarefa";



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tarefas:any[] = [];
  tarefaPesquisada:string;

  constructor(public navCtrl: NavController, private _tarefaProvider:TarefaProvider) {

  }

  ionViewDidEnter(){
    this.buscarTodasTarefas();
  }


  public pesquisarTarefa(){
     this._tarefaProvider.pesquisarTarefa(this.tarefaPesquisada)
       .subscribe((tarefas:any[]) =>{
         this.tarefas = tarefas;
       });
  }

  public buscarTodasTarefas(){
    this._tarefaProvider.buscarTodasTarefas()
      .subscribe((tarefas) =>{
        this.tarefas = tarefas;
      });
  }

  public visualizarTarefa(tarefa:Tarefa){
    this.navCtrl.push(VisualizarTarefaPage, {tarefa:tarefa});
  }

  public irParaCriarTarefa(){
    this.navCtrl.push(CriarTarefaPage);
  }

}
