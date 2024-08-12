import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UndoRedoService } from './undo-redo.service';

@Component({
  selector: 'app-undo-redo',
  templateUrl: './undo-redo.component.html',
  styleUrls: ['./undo-redo.component.scss'],
})
export class UndoRedoComponent {
  myForm: FormGroup;

  constructor(private undoRedoService: UndoRedoService) {
    this.myForm = new FormGroup({
      myFormInput: new FormControl('', Validators.required),
    });
  }
  ngOnInit(): void {}

  save(): void {
    const elem = <HTMLInputElement>document.getElementById('myFormInputId');
    this.undoRedoService.setState(elem.value);
    this.myForm.reset();
  }

  undo() {
    const elem = <HTMLInputElement>document.getElementById('myFormInputId');
    this.undoRedoService.undo();
    elem.value = this.undoRedoService.getState();
  }

  redo() {
    const elem = <HTMLInputElement>document.getElementById('myFormInputId');
    this.undoRedoService.redo();
    elem.value = this.undoRedoService.getState();
  }

  canUndo(): boolean {
    return this.undoRedoService.canUndo();
  }

  canRedo(): boolean {
    return this.undoRedoService.canRedo();
  }
}
