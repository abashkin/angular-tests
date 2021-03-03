import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cp18',
  templateUrl: './cp18.component.html',
  styleUrls: ['./cp18.component.scss']
})
export class Cp18Component implements OnInit {

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
