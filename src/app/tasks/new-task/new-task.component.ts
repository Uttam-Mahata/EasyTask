import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";

interface NewTaskData {
  title: string;
  summary: string;
  date: string;

}

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
@Output() cancel= new EventEmitter();
@Output() addTask = new EventEmitter<NewTaskData>();
enteredTitle = '';
enteredSummary: string = '';
enteredDate:string = '';

onCancel() {
  this.cancel.emit();
}

onSubmit() {
  this.addTask.emit({
    title: this.enteredTitle,
    summary: this.enteredSummary,
    date: this.enteredDate
  });
  this.enteredTitle = '';
  this.enteredSummary = '';
  this.enteredDate = '';

}
}
