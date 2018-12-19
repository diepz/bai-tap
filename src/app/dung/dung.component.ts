import { TamService } from './../tam.service';
import { User } from './../user';
import { Component, OnInit } from '@angular/core';
// import { error } from 'util';

@Component({
  selector: 'app-dung',
  templateUrl: './dung.component.html',
  styleUrls: ['./dung.component.scss']
})
export class DungComponent implements OnInit {
  userList: User[] = [];
  constructor(private tamService: TamService) { }

  ngOnInit() {
    this.tamService.getUsers().subscribe(data => {
      this.userList = data;
    });
  }

}
