import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../pages/interfaces/interfaces';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss'],
})
export class NoticiasComponent implements OnInit {

  @Input() noticias: Article[] = []; /* noticias tipo Article[] y se lo declara vacio 
                                        se lo declara @Input para que puede usarse y 
                                        sirva de entrada de informacion de otro componente    */
  @Input() enFavoritos = false;
  
  constructor() { }

  ngOnInit() {}

}
