import { ChangeDetectionStrategy, Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { CardAnswer } from 'src/app/pages/play/play.component';

@Component({
  selector: 'app-game-footer',
  templateUrl: './game-footer.component.html',
  styleUrls: ['./game-footer.component.scss'],
})
export class GameFooterComponent implements OnInit {

  @Input() answers: CardAnswer[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  //parecido com um useEffect, principalmente com o evento componentDidMount do life cicle do react
  ngOnChanges(changes: SimpleChanges){
    console.log('mudei', changes['answers']);
  }

}
