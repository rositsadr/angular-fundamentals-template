import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent {
  @Input() courses:[] = [];
  @Input() editable:boolean = false;

  @Output() showCourse(){};
  @Output() editCourse():void{};
  @Output() deleteCourse():void{};
}
