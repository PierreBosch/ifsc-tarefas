import { Component } from '@angular/core';
import {ActionSheetController, AlertController, NavController} from 'ionic-angular';
import {TarefaProvider} from "../../providers/tarefa/tarefa";
import {Tarefa} from "../../models/tarefa";
import {VisualizarTarefaPage} from "../visualizar-tarefa/visualizar-tarefa";
import {CriarTarefaPage} from "../criar-tarefa/criar-tarefa";
import {FormControl} from "@angular/forms";
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tarefas:any[] = [];
  filter:string = "false";
  searching:boolean = false;
  searchControl:FormControl;
  searchTerm:string;
  totalRegistros:any;

  constructor(public navCtrl: NavController, private _tarefaProvider:TarefaProvider, private _actionSheetCtrl:ActionSheetController) {
    this.searchControl = new FormControl();
  }

  ionViewDidEnter(){
    this.tarefas = [];
    this.getTarefas();
  }

  ionViewDidLoad(){
    this.searchTarefa();

    this.searchControl.valueChanges.debounceTime(700)
      .subscribe(() => {
        this.searching = false;
        this.searchTarefa();
    });
  }

  onSearchInput(){
    this.searching = true;
  }

  public searchTarefa(){
     this._tarefaProvider.searchTarefa(this.searchTerm)
       .subscribe((tarefas:any[]) =>{
         this.tarefas = tarefas;
       });
  }

  public getTarefas(infiniteScroll?){

    this._tarefaProvider.getTarefas(this.tarefas.length, this.filter)
      .map(res => {
        this.totalRegistros = res.headers.get('x-total-count');
        return res.body;
      })
      .subscribe((tarefas) =>{

        for(let t of tarefas){
          this.tarefas.push(t);
        }

        if(infiniteScroll){
          infiniteScroll.complete();
        }
      });

  }

  public viewTarefa(tarefa:Tarefa){

    this.navCtrl.push(VisualizarTarefaPage, {tarefa:tarefa});

  }

  public presentFiltro(){
    this._actionSheetCtrl.create({
      title: "Filtrar tarefas por:",
      buttons: [
        {
          text:"Todas",
          icon:"apps",
          cssClass: "btn-primary",
          handler: () =>{
            this.tarefas = [];
            this.filter = "";
            this.getTarefas();
            }
        },
        {
          text:"Concluídas",
          icon:"checkmark-circle",
          cssClass:"btn-success",
          handler: () =>{
            this.tarefas = [];
            this.filter = "true";
            this.getTarefas();
          }
        },
        {
          text:"Não concluídas",
          icon:"remove-circle",
          cssClass:"btn-danger",
          handler: () =>{
            this.tarefas = [];
            this.filter = "false";
            this.getTarefas();
          }
        }
      ]
    }).present();
  }

  public goToCreateTarefa(){
    this.navCtrl.push(CriarTarefaPage);
  }

  public loadMore(infiniteScroll) {
    setTimeout(() => {
      this.getTarefas(infiniteScroll);
    }, 500);
  }

}
