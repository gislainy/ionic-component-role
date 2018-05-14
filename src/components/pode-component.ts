
import { NavController } from 'ionic-angular';
import { Component, Input, OnInit } from '@angular/core';

const HTML_TEMPLATE = `
<!-- Generated template for the PodeComponent component -->
<div *ngIf="pode_fn()">
<ng-content></ng-content>
</div>
`;


@Component({
  selector: 'academy-component',
  template: HTML_TEMPLATE,
})
export class PodeComponent {
  private _rules: string;
  private _rules_arr: Array<string>;
  constructor() {
    // debugger
    // this.text = text;
    // this.rules = "administrador";
    // console.log('Hello PodeComponent Component');
  }
  ngOnInit() {}

  @Input('rules')
  get rules(): string {
    return this.rules;
  }
  set rules(rules: string) {
    this._rules = rules;
    this._rules_arr = this._rules.split(', ');
  }
  // pode_fn() {
  //   debugger
  //   return pode('teste', this._rules_arr);
  // }
  pode_fn() {
    return true;
    // return pode('teste', this._rules_arr);
  }
}