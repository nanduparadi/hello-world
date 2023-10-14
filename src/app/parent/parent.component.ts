import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
{FormsModule}
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  template:`<button type="button">click me</button>`,
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  isChild = false;
  clickMessage :any
  selectedFiles: any[] = [];
  click(msg : any){
    console.log(msg)
    // console.log(this.msg.value)

  }
  onFileSelection() {
    if (this.selectedFiles.length > 0) {
      console.log('Files selected!');
      // Perform actions with the selected file(s)
    }
  }
  ngOnInit(): void {
    console.log('Parent OnInit is called');

  }
  constructor() {
    console.log('Parent constructor is called');

  }
  toggleChild(){
    this.isChild =!this.isChild;
  }
  box(event: Event){
    console.log((event.target as HTMLInputElement).files )
    console.log((event.target as HTMLInputElement).value);
  }
}
