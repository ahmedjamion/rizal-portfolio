import { Component, inject } from '@angular/core';
import { Classwork } from '../../interfaces/classwork';
import { ClassworkService } from '../../services/classwork/classwork.service';
import { DatePipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-my-classworks',
  imports: [NgFor, DatePipe],
  templateUrl: './my-classworks.component.html',
  styleUrl: './my-classworks.component.css',
})
export class MyClassworksComponent {
  classWorkList: Classwork[] = [];
  classworkService: ClassworkService = inject(ClassworkService);

  constructor() {
    this.classWorkList = this.classworkService.getAllClassworks();
  }
}
