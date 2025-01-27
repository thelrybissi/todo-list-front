import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
  standalone: true,
  imports: [
    FormsModule,
    RouterModule,
    CommonModule]
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
