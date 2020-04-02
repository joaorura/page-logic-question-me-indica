import { apiUrlBase } from '../config';
import {HttpHeaders} from '@angular/common/http';

const username = 'joaorura';
const password = 'rura7090';

const logicQuestionApiUrlBase = apiUrlBase + 'logicQuestions/';
const httpHeaders = new HttpHeaders({
  'Content-Type': 'application/json',
  Accept: 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': 'true',
  'Access-Control-Allow-Methods': 'GET,OPTIONS,POST',
  Authorization: 'Basic' + btoa(username + ':' + password)
});


export { logicQuestionApiUrlBase, httpHeaders };
