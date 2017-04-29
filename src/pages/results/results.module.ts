import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResultsPage } from './results';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ResultsPage,
  ],
  imports: [
    IonicPageModule.forChild(ResultsPage),
    ComponentsModule
  ],
  exports: [
    ResultsPage
  ]
})
export class ResultsPageModule {}
