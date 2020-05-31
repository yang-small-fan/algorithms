import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-algorithms',
  templateUrl: './algorithms.component.html',
  styleUrls: ['./algorithms.component.css']
})
export class AlgorithmsComponent implements OnInit {

  constructor() { }

  sessions = [
    { title: 'session-one', path: 'session-one' },
    { title: 'session-two', path: 'session-two' },
  ];

  ngOnInit(): void {
  }

}
