import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
  standalone: true,
  imports: [FormsModule],
})
export class TaskListComponent {
  tasks: any[] = [
    { title: 'Task 1', description: 'Description 1', isCompleted: false },
    { title: 'Task 2', description: 'Description 2', isCompleted: true }
  ];

  markAsCompleted(task: any) {
    task.isCompleted = true;
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
