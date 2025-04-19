import { Injectable } from '@angular/core';
import { Classwork } from '../../interfaces/classwork';

@Injectable({
  providedIn: 'root',
})
export class ClassworkService {
  constructor() {}

  classworkList: Classwork[] = [
    {
      title: 'Activity 1',
      description:
        'The importance of studying the life, works, and writings of Dr. Jose Rizal',
      date: '02/05/2025',
      file: 'classworks/Activity1.pdf',
    },
    {
      title: 'Activity 2',
      description: 'Rizal Law',
      date: '02/19/2025',
      file: 'classworks/Activity2.pdf',
    },
    {
      title: 'Activity 3',
      description: 'Concept of a Hero',
      date: '02/26/2025',
      file: 'classworks/Activity3.pdf',
    },
  ];

  getAllClassworks(): Classwork[] {
    return this.classworkList;
  }
}
