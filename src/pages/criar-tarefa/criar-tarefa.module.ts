import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CriarTarefaPage } from './criar-tarefa';

@NgModule({
  declarations: [
    CriarTarefaPage,
  ],
  imports: [
    IonicPageModule.forChild(CriarTarefaPage),
  ],
})
export class CriarTarefaPageModule {}
