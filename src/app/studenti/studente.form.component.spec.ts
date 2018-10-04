import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Studente } from './studente';

describe('StudenteComponent', () => {
  let component: Studente;
  let fixture: ComponentFixture<Studente>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Studente ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Studente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});