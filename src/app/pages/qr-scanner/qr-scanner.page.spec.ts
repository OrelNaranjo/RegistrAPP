import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { QrScannerPage } from './qr-scanner.page';

describe('QrScannerPage', () => {
  let component: QrScannerPage;
  let fixture: ComponentFixture<QrScannerPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(QrScannerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
