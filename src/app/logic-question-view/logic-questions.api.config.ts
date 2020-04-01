import { apiUrlBase } from '../config';
import {HttpHeaders} from '@angular/common/http';

const logicQuestionApiUrlBase = apiUrlBase + 'logicQuestions/';
const httpHeaders = new HttpHeaders({
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': 'true',
  'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
  'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
});

export { logicQuestionApiUrlBase, httpHeaders };