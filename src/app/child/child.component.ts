import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit ,OnDestroy {
  constructor() {
    console.log('Child constructor is called');
   }

  CopyText= "";

  ngOnInit(): void {
    console.log('Child OnInit is called');

  }
  ngOnDestroy(): void {
      console.log('Child OnDestroy is called');
  }

}
