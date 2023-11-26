import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.page.html',
  styleUrls: ['./user-new.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class UserNewPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
