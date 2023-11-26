import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'qr-scanner',
    loadComponent: () => import('./pages/qr-scanner/qr-scanner.page').then( m => m.QrScannerPage)
  },
  {
    path: 'qr-generator',
    loadComponent: () => import('./pages/qr-generator/qr-generator.page').then( m => m.QrGeneratorPage)
  },
  {
    path: 'profile',
    loadComponent: () => import('./pages/profile/profile.page').then( m => m.ProfilePage)
  },
  {
    path: 'course-list',
    loadComponent: () => import('./pages/courses/course-list/course-list.page').then( m => m.CourseListPage)
  },
  {
    path: 'course-new',
    loadComponent: () => import('./pages/courses/course-new/course-new.page').then( m => m.CourseNewPage)
  },
  {
    path: 'user-list',
    loadComponent: () => import('./pages/users/user-list/user-list.page').then( m => m.UserListPage)
  },
  {
    path: 'user-new',
    loadComponent: () => import('./pages/users/user-new/user-new.page').then( m => m.UserNewPage)
  },
];