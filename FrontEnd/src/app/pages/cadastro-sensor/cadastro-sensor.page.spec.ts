import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroSensorPage } from './cadastro-sensor.page';

describe('CadastroSensorPage', () => {
  let component: CadastroSensorPage;
  let fixture: ComponentFixture<CadastroSensorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CadastroSensorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
