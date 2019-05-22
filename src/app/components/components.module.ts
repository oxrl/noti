import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticiasComponent } from './noticias/noticias.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { IonicModule } from '@ionic/angular';
@NgModule({
  declarations: [
    NoticiaComponent,
    NoticiasComponent
  ],
  exports: [
    NoticiasComponent /*Lo exporto para pueda ser usado por todas las demas paginas o
                          componentes de este modulo */
  ],
  imports: [
    CommonModule,
    IonicModule /*Con esto puedo utilizar los componente de Ionic en este modulo*/
  ]
})
export class ComponentsModule { }
