import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task-model',
  templateUrl: './add-task-model.component.html',
  styleUrl: './add-task-model.component.css',
  standalone: true,
  imports: [FormsModule],
})
export class AddTaskModelComponent {
  title: string = '';
  description: string = '';

  addTask() {
    console.log('Adding task:', { title: this.title, description: this.description });
    // Implementar chamada ao serviço de tarefas aqui
  }
}
