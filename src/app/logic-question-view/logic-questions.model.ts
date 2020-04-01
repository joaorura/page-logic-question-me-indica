export class LogicQuestionsModel {
  constructor(public text: string, public imgs: string[], public alternatives: string[],
              public answer: number, public level: number, public time: number) {}
}
