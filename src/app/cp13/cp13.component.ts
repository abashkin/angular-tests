import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cp13',
  templateUrl: './cp13.component.html',
  styleUrls: ['./cp13.component.scss']
})
export class Cp13Component implements OnInit {

  public items: Array<number> = [];

  constructor() { }

  ngOnInit(): void {
    this.items = (new Array(10000)).map((v, indx) => v = indx);
  }

  public isH5Item(item: number): boolean {
    const rnd = Math.random() * 1000;

    return item > rnd;
  }
}
