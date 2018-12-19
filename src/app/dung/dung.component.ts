import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dung',
  templateUrl: './dung.component.html',
  styleUrls: ['./dung.component.scss']
})
export class DungComponent implements OnInit {
  names = ['Trinh', 'L', 'H', 'D', 'T', 'l', 'D'];
  constructor() { }

  ngOnInit() {
  }

}
