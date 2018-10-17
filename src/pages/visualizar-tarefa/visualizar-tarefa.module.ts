import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VisualizarTarefaPage } from './visualizar-tarefa';

@NgModule({
  declarations: [
    VisualizarTarefaPage,
  ],
  imports: [
    IonicPageModule.forChild(VisualizarTarefaPage),
  ],
})
export class VisualizarTarefaPageModule {}
