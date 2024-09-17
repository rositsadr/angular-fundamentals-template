import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent {
  title: string = "";
  description: string = "";
  creationDate: Date = new Date();
  duration: number = 0;
  authors: string[] = [];

  @Input() editable:boolean = false;
  @Output() clickOnShow(){}
}
