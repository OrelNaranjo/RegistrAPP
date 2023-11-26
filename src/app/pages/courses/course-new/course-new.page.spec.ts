import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CourseNewPage } from './course-new.page';

describe('CourseNewPage', () => {
  let component: CourseNewPage;
  let fixture: ComponentFixture<CourseNewPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(CourseNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
