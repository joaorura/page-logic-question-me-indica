import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {LogicQuestionsModel} from './logic-questions.model';

import { logicQuestionApiUrlBase, httpHeaders } from './logic-questions.api.config';

@Injectable()
export class LogicQuestionService {


  constructor(private http: HttpClient) {
  }

  getQuestions(): Observable<LogicQuestionsModel[]> {
    return this.http.post<LogicQuestionsModel[]>(logicQuestionApiUrlBase, {},
      { headers: httpHeaders });
  }

  sendNote(theNote: number): Observable<any> {
    return this.http.post(logicQuestionApiUrlBase, { note: theNote },
      { headers: httpHeaders });
  }
}
