import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CourseListPage } from './course-list.page';

describe('CourseListPage', () => {
  let component: CourseListPage;
  let fixture: ComponentFixture<CourseListPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(CourseListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
