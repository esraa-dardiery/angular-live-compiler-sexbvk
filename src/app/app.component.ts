import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  dataCurrentArray: Array<any> = [];
  myForm: FormGroup;
  showUndoValue: boolean = false;
  undoArray: Array<any> = [];
  redoArray: Array<any> = [];
  showUndo: boolean = false;
  showRedo: boolean = false;
  constructor() {
    this.myForm = new FormGroup({
      myFormInput: new FormControl('', Validators.required),
    });
  }
  ngOnInit(): void {}
  save(): void {
    this.showUndo = true;
    const elem = <HTMLInputElement>document.getElementById('myFormInputId');
    this.dataCurrentArray.push(elem.value);
    this.undoArray.push(
      this.dataCurrentArray[this.dataCurrentArray.length - 1]
    );
    elem.value = '';
  }
  undo() {
    this.showRedo = true;

    const elem = <HTMLInputElement>document.getElementById('myFormInputId');
    if (this.undoArray.length != 0) {
      this.redoArray.push(this.undoArray.pop());
    }
    elem.value = this.redoArray[this.redoArray.length - 1];

    if (this.undoArray.length == 0) this.showUndo = false;
    else {
      this.showUndo = true; 
    }
  }
  redo() {
    this.showUndo = true;
    const elem = <HTMLInputElement>document.getElementById('myFormInputId');
    if (this.redoArray.length != 0) {
      this.undoArray.push(this.redoArray.pop());
    }
    elem.value = this.undoArray[this.undoArray.length - 1];
    if (this.redoArray.length == 0) {
      this.showRedo = false;
    } else {
      this.showRedo = true;
    }
  }
}
