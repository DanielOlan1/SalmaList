import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnidadesPage } from './unidades.page';

describe('UnidadesPage', () => {
  let component: UnidadesPage;
  let fixture: ComponentFixture<UnidadesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UnidadesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
