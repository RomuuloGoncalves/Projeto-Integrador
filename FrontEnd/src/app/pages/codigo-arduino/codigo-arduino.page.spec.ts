import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CodigoArduinoPage } from './codigo-arduino.page';

describe('CodigoArduinoPage', () => {
  let component: CodigoArduinoPage;
  let fixture: ComponentFixture<CodigoArduinoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CodigoArduinoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
