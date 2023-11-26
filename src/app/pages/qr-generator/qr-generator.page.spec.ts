import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { QrGeneratorPage } from './qr-generator.page';

describe('QrGeneratorPage', () => {
  let component: QrGeneratorPage;
  let fixture: ComponentFixture<QrGeneratorPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(QrGeneratorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
