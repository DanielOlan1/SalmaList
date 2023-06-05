import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TraficoPage } from './trafico.page';

describe('TraficoPage', () => {
  let component: TraficoPage;
  let fixture: ComponentFixture<TraficoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TraficoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
