import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-course-new',
  templateUrl: './course-new.page.html',
  styleUrls: ['./course-new.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CourseNewPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
