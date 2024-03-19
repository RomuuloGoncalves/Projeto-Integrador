import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GradeCurricularPage } from './grade-curricular.page';

describe('GradeCurricularPage', () => {
  let component: GradeCurricularPage;
  let fixture: ComponentFixture<GradeCurricularPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GradeCurricularPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
