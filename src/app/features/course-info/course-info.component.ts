import { Component } from '@angular/core';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.scss']
})
export class CourseInfoComponent {
  title: string = "";
  description: string = "";
  id: string = "";
  creationDate: Date = new Date();
  duration: number = 0;
  authors: string[] = [];
  // Use the names for the input `course`.
}
