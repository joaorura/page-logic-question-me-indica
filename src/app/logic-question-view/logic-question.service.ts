import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {LogicQuestionsModel} from './logic-questions.model';

import { logicQuestionApiUrlBase, httpHeaders } from './logic-questions.api.config';

@Injectable()
export class LogicQuestionService {


  constructor(private http: HttpClient) {
  }

  // tslint:disable-next-line:ban-types
  getQuestions(): Observable<LogicQuestionsModel[]> {
    // return new Observable<LogicQuestionsModel[]>((subscriber: Subscriber<LogicQuestionsModel[]>) => {
    //   subscriber.next(logicQuestions);
    //   subscriber.complete();
    // });
    return this.http.post<LogicQuestionsModel[]>(logicQuestionApiUrlBase, {}, { headers: httpHeaders });
  }

}
