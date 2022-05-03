import { Component, OnInit } from '@angular/core';
import { fact } from '../facts/facts';


@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.css']
})

export class factComponent implements OnInit {
  fact: fact = {
    id: 1,
    name: 'Windstorm'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
