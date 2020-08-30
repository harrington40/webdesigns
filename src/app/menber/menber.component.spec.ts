import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenberComponent } from './menber.component';

describe('MenberComponent', () => {
  let component: MenberComponent;
  let fixture: ComponentFixture<MenberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
