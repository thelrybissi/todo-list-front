import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  standalone: true,
  imports: [FormsModule],
})
export class RegisterComponent {
  user = { username: '', password: '', confirmPassword: '' };

  constructor(private authService: AuthService, private router: Router) { }

  register() {
    if (this.user.password !== this.user.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    this.authService.register(this.user).subscribe({
      next: () => {
        alert('User registered successfully!');
        this.router.navigate(['/login']);
      },
      error: (err) => alert('Registration failed.')
    });
  }
}
