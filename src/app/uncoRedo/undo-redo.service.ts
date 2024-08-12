import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UndoRedoService {
  private undoArray: Array<string> = [];
  private redoArray: Array<string> = [];
  private current: Array<string> = [];

  setState(newInput: string) {
    this.current.push(newInput);
    this.undoArray.push(newInput);
    //s this.redoArray = []; // Clear redo history on new input
  }

  getState(): string {
    return this.current[this.current.length - 1] || '';
  }

  undo() {
    if (this.undoArray.length > 0) {
      const lastState = this.undoArray.pop();
      this.redoArray.push(lastState!);
      this.current.push(lastState!);
    }
  }

  redo() {
    if (this.redoArray.length > 0) {
      const lastRedoState = this.redoArray.pop();
      this.undoArray.push(lastRedoState!);
      this.current.push(lastRedoState!);
    }
  }

  canUndo(): boolean {
    return this.undoArray.length;
  }

  canRedo(): boolean {
    return this.redoArray.length > 0;
  }
}
