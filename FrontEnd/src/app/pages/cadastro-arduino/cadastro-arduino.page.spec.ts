import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroArduinoPage } from './cadastro-arduino.page';

describe('CadastroArduinoPage', () => {
  let component: CadastroArduinoPage;
  let fixture: ComponentFixture<CadastroArduinoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CadastroArduinoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
