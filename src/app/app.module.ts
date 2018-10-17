import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TarefaProvider } from '../providers/tarefa/tarefa';
import {HttpClientModule} from "@angular/common/http";
import {VisualizarTarefaPage} from "../pages/visualizar-tarefa/visualizar-tarefa";
import {CriarTarefaPage} from "../pages/criar-tarefa/criar-tarefa";
import {EditarTarefaPage} from "../pages/editar-tarefa/editar-tarefa";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    VisualizarTarefaPage,
    CriarTarefaPage,
    EditarTarefaPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    VisualizarTarefaPage,
    CriarTarefaPage,
    EditarTarefaPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TarefaProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TarefaProvider
  ]
})
export class AppModule {}
