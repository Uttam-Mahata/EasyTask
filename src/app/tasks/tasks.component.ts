import { Component , Input} from '@angular/core';
import {TaskComponent} from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import {TasksService} from "./tasks.service";

@Component({
    selector: 'app-tasks',
    standalone: true,
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
    imports: [
        TaskComponent,
        NewTaskComponent,
    ]
})
export class TasksComponent {
  @Input({required:true}) userId!: string;
  @Input({required:true}) name?: string;
  isAddingTask = false;
  // private taskService: TasksService;
  // private taskService = new TasksService();

  constructor(
   private taskService: TasksService
  ) {
    // this.taskService = taskService;
  }



  get SelectedUserTasks() {
    return this.taskService.getUserTasks(this.userId);
    // return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(id:string) {
    this.taskService.removeTask(id);
// this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onStartAddTask() {

this.isAddingTask = true;
}
onCancelAddTask() {
this.isAddingTask = false;

}

onAddTask(taskData: {title: string, summary: string, date: string}) {
this.taskService.addTask(taskData, this.userId);
// this.tasks.push({
//   id: Math.random().toString(),
//   userId: this.userId,
//   title: taskData.title,
//   summary: taskData.summary,
//   dueDate: taskData.date
// });
this.isAddingTask = false;


}
}
