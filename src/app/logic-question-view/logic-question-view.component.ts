import {Component, OnInit} from '@angular/core';
import {LogicQuestionsModel} from './logic-questions.model';
import {LogicQuestionService} from './logic-question.service';
import {HttpClient} from '@angular/common/http';

import {httpHeaders, logicQuestionApiUrlBase} from './logic-questions.api.config';

@Component({
  selector: 'app-logic-question-view',
  templateUrl: './logic-question-view.component.html',
  styleUrls: ['./logic-question-view.component.css'],
  providers: [ LogicQuestionService ]
})
export class LogicQuestionViewComponent implements OnInit {
  private questions: LogicQuestionsModel[];
  actualElement = 0;
  private answers: number[] = [];
  private accepts: number[] = [];

  public alternatives: string[] = null;

  constructor(private logicQuestionService: LogicQuestionService,
              private http: HttpClient) {
    for (let i = 0;  i < 14; i++) { this.answers[i] = null; }
    for (let i = 0; i < 7; i++) { this.accepts[i] = 0; }
  }

  ngOnInit(): void {
    this.loadQuestions();
  }

  private setQuestions() {
    return (theQuestions: LogicQuestionsModel[]) => {
      this.questions = theQuestions;
    };
  }

  private setBoxIfExist(index: number) {
    const value = this.answers[index];
    if (value !== null) {
      const name = this.questions[index].alternatives[value] + index + value;
      const options = document.getElementById(name);
      if (options !== null) {
        options.setAttribute('checked', '1');
      }
      else {
        window.setTimeout(() => this.setBoxIfExist(index), 10);
      }
    }
  }

  private attComponent() {
    const theQuestion: LogicQuestionsModel = this.questions[this.actualElement];
    const div = document.getElementsByClassName('theQuestion')[0];
    div.innerHTML = '';
    let j = 0;
    theQuestion.text.split('\n').forEach((questionText: string) => {

      if (questionText === '') {
        div.innerHTML += '<br>';
      }
      else if (questionText === '{img}') {
        div.innerHTML += `<img src="${theQuestion.imgs[j]}" class="imgQuestion" alt="Imagem da Questão">`;
        j++;
      }
      else if (questionText.includes('{img}')){
        let allText = '';
        questionText.split('{img}').forEach((text: string) => {
          if (text === '') {
            allText += `<img src="${theQuestion.imgs[j]}" class="imgQuestion" alt="Imagem da Questão">`;
            j++;
          }
          else {
            allText += text;
          }
        });
        div.innerHTML += `<p>${allText}</p>`;
      }
      else {
        div.innerHTML += `<p>${questionText}</p>`;
      }
    });

    this.alternatives = theQuestion.alternatives;
    this.setBoxIfExist(this.actualElement);
  }

  private attComponentFunc() {
    return () => {
      this.attComponent();
    };
  }

  private loadQuestions() {
    const setQuestion = this.setQuestions();
    const attComponent = this.attComponentFunc();

    this.logicQuestionService.getQuestions().subscribe({
      next(input: LogicQuestionsModel[]) {
        setQuestion(input);
        attComponent();
      },
      error(msg) {
        console.log(msg);
        return;
      }
    });
  }

  private submitForm(): void {
    for (let i = 0; i < 14; i++) {
      const j = Math.floor(i / 2);
      this.accepts[j] += this.answers[i] === this.questions[i].answer ? 1 : 0;
    }
    console.log('send');

    this.http.post(logicQuestionApiUrlBase, { accepts: this.accepts },
      { headers: httpHeaders });
  }

  private changeActualElement(amount: number): void {
    if (this.actualElement === null) { return; }
    this.actualElement += amount;
    if (this.actualElement < 0) { this.actualElement = 0; }
    else if (this.actualElement === 14) {
      this.submitForm();
      this.actualElement = null;
    }
  }

  nextAction(): void {
    const options = document.querySelector('input[name="optionsQuestion"]:checked');
    if (options === null) { return; }

    this.answers[this.actualElement] = parseInt(options.getAttribute('value'), 10);
    this.changeActualElement(1);
    if (this.actualElement !== null) { this.attComponent(); }
  }

  previousAction(): void {
    this.changeActualElement(-1);
    if (this.actualElement !== null) { this.attComponent(); }
  }
}
