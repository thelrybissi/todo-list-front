import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login/login.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.navigate(['/login']);
  }
}
