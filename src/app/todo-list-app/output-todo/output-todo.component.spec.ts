import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputTodoComponent } from './output-todo.component';

describe('OutputTodoComponent', () => {
  let component: OutputTodoComponent;
  let fixture: ComponentFixture<OutputTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputTodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
