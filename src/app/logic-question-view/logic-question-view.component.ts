import {Component, OnInit} from '@angular/core';
import {LogicQuestionsModel} from './logic-questions.model';
import {LogicQuestionService} from './logic-question.service';


@Component({
  selector: 'app-logic-question-view',
  templateUrl: './logic-question-view.component.html',
  styleUrls: ['./logic-question-view.component.css'],
  providers: [ LogicQuestionService ]
})
export class LogicQuestionViewComponent implements OnInit {
  private questions: LogicQuestionsModel[];
  private answers: number[] = [];
  private note = 0;

  private actualElement = 0;

  formControl = false;

  constructor(private logicQuestionService: LogicQuestionService) {
    for (let i = 0;  i < 14; i++) { this.answers[i] = null; }
  }

  ngOnInit(): void {
    this.loadQuestions();
  }

  private setFormControl(formAux: boolean): void {
    this.formControl = formAux;
  }

  private setQuestions(theQuestions: LogicQuestionsModel[]) {
    this.questions = theQuestions;
  }
  private attRadios(alternatives: string[]) {
    try {
      for (let i = 0; i < 5; i++) {
        const theElement = document.getElementById('optionQuestion' + i) as HTMLInputElement;
        const theDiv = document.getElementById('divOptionQuestion' + i);
        const label = document.getElementById('labelOptionQuestion' + i);

        if (alternatives[i] === undefined) {
          theDiv.setAttribute('class', 'form-check optionNotUsed');
          continue;
        }

        theDiv.setAttribute('class', 'form-check');
        let allText = '';
        if (alternatives[i].includes('{img}')) {
          alternatives[i].split('{img}').forEach((text: string) => {
            if (text.includes('http')) {
              allText += `<img src="${text}" alt="Foto da Alternativas">`;
            } else {
              allText += text;
            }
          });

          label.textContent = allText;
        } else {
          label.textContent = alternatives[i];
        }

        theElement.checked = this.answers[this.actualElement] === i;
      }
    }
    catch (e) {
      window.setTimeout(() => this.attRadios(alternatives), 1);
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

        questionText.replace('{img}', '|||{img}|||').split('|||').forEach((text: string) => {
          if (text === '{img}') {
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

    this.attRadios(theQuestion.alternatives);
  }

  private loadQuestions() {
    const setQuestion = (a) => this.setQuestions(a);
    const attComponent = () => this.attComponent();
    const formControl = (a) => this.setFormControl(a);
    this.logicQuestionService.getQuestions().subscribe({
      next(input: LogicQuestionsModel[]) {
        formControl(true);
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
      if (this.answers[i] === this.questions[i].answer) {
        this.note +=  this.questions[i].level;
      }
    }
    console.log('send');

    this.logicQuestionService.sendNote(this.note).subscribe({
      complete() {},
      error(error: Error) {
        console.log(error);
      },
      next(answer: any) {
        console.log(answer);
      }
    });
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
