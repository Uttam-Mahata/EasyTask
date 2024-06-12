import {Component, EventEmitter, Input, Output, inject} from '@angular/core';
import {FormsModule} from "@angular/forms";
import { TasksService } from '../tasks.service';

interface NewTaskData {
  title: string;
  summary: string;
  date: string;

}

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [
    FormsModule,
    
  ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
@Input({required: true}) userId!: string;
@Output() cancel= new EventEmitter();
@Output() addTask = new EventEmitter<NewTaskData>();
enteredTitle = '';
enteredSummary: string = '';
enteredDate:string = '';
private tasksService= inject(TasksService);



onCancel() {
  this.cancel.emit();
}

onSubmit() {
  this.tasksService.addTask({
    title: this.enteredTitle,
    summary: this.enteredSummary,
    date: this.enteredDate
  },this.userId );
  // this.addTask.emit({
  //   title: this.enteredTitle,
  //   summary: this.enteredSummary,
  //   date: this.enteredDate
  // });
  this.enteredTitle = '';
  this.enteredSummary = '';
  this.enteredDate = '';
this.cancel.emit();
}
}
