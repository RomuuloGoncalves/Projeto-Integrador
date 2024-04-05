import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConscientizacaoPage } from './conscientizacao.page';

describe('ConscientizacaoPage', () => {
  let component: ConscientizacaoPage;
  let fixture: ComponentFixture<ConscientizacaoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConscientizacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
