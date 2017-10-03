import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {
  secretPassword = false;
  log = [];

  constructor() {
  }

  ngOnInit() {
  }

  onToggleDisplay() {
    this.secretPassword = !this.secretPassword;
    this.log.push(this.log.length + 1);
  }
}
