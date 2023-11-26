import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { UserNewPage } from './user-new.page';

describe('UserNewPage', () => {
  let component: UserNewPage;
  let fixture: ComponentFixture<UserNewPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(UserNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
