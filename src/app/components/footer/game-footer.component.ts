import { ChangeDetectionStrategy, Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { CardAnswer } from 'src/app/pages/play/play.component';

@Component({
  selector: 'app-game-footer',
  templateUrl: './game-footer.component.html',
  styleUrls: ['./game-footer.component.scss'],
})
export class GameFooterComponent implements OnInit {

  @Input() answers: CardAnswer[] = [];
  @Input() totalCards: number = 0;
  gameIsFinished = false;



  constructor() { }

  ngOnInit(): void {
  }

  //parecido com um useEffect, principalmente com o evento componentDidMount do life cicle do react
  ngOnChanges(changes: SimpleChanges) {
    if (changes['answers'].currentValue.length === this.totalCards) {
      this.gameIsFinished = true;
    }
    console.log('mudei', changes['answers']);
  }

}
