import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'demo-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  constructor(public infoCmpElement: ElementRef) {
  }

  ngOnInit() {
  }

}