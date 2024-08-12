import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UndoRedoComponent } from './undo-redo.component';

describe('UndoRedoComponent', () => {
  let component: UndoRedoComponent;
  let fixture: ComponentFixture<UndoRedoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UndoRedoComponent]
    });
    fixture = TestBed.createComponent(UndoRedoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
