import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cp6',
  templateUrl: './cp6.component.html',
  styleUrls: ['./cp6.component.scss']
})
export class Cp6Component implements OnInit {

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
