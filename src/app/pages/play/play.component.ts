import { Component, OnInit } from '@angular/core';

export type CardAnswerType = 'zap' | 'almost' | 'failed';
export type CardAnswer = {
  type: CardAnswerType;
  teste?: string;
}

export type Card = {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {
  //todo pegar uma API, ter múltiplos decks
  cards = [
    { question: 'O que é JSX?', answer: 'Uma extensão de linguagem do JavaScript', },
    { question: 'O React é __', answer: 'uma biblioteca JavaScript para construção de interfaces', },
    { question: 'Componentes devem iniciar com __', answer: 'letra maiúscula', },
    { question: 'Podemos colocar __ dentro do JSX', answer: 'expressões', },
    { question: 'O ReactDOM nos ajuda __', answer: 'interagindo com a DOM para colocar componentes React na mesma', },
    { question: 'Usamos o npm para __', answer: 'gerenciar os pacotes necessários e suas dependências', },
    { question: 'Usamos props para __', answer: 'passar diferentes informações para componentes ', },
    { question: 'Usamos estado (state) para __', answer: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente', }
  ];

  cardsAnswers: CardAnswer[] = [];

  constructor() { }

  addAnswer(answer: CardAnswerType) {
    //mesmo problema de referência do react setState. Quando trabalhando com arrays ou objetos, é necessário recriar o objeto pra disparar um evento de update
    this.cardsAnswers = [...this.cardsAnswers, { type: answer }];
  }

  ngOnInit(): void {
  }

}
