import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscursoPalarmentarComponent } from './discurso-palarmentar.component';

describe('DiscursoPalarmentarComponent', () => {
  let component: DiscursoPalarmentarComponent;
  let fixture: ComponentFixture<DiscursoPalarmentarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscursoPalarmentarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscursoPalarmentarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
