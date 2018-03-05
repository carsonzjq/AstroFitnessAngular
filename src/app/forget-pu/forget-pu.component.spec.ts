import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetPuComponent } from './forget-pu.component';

describe('ForgetPuComponent', () => {
  let component: ForgetPuComponent;
  let fixture: ComponentFixture<ForgetPuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgetPuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetPuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
