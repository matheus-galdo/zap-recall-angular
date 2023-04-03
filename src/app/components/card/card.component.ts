import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardAnswerType } from 'src/app/pages/play/play.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  @Input() cardContent = { question: '', answer: '' };
  @Input() indice: number = 0;
  @Output() answerEvent = new EventEmitter<CardAnswerType>(); // criando o evento que vai ser disparado pra notificar o componente pai
  answer: string = '';


  isFlipped = false;
  isOpen = false;
  isAnswered = false;

  constructor() { }

  ngOnInit(): void {
  }

  flipCard() {
    this.isFlipped = true;
  }

  openCard() {
    if (!this.isAnswered) {
      this.isOpen = true;
    }
  }

  answerCard(answerType: CardAnswerType) {
    this.answerEvent.emit(answerType);
    this.answer = answerType;
    this.isOpen = false;
    this.isAnswered = true;
  }
}
