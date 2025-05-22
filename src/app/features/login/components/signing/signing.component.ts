import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/authService';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-signing',
  standalone: true,
  templateUrl: './signing.component.html',
  styleUrls: ['./signing.component.scss'],
  imports: [
    IonicModule,         // ✅ Necesario para <ion-*>
    CommonModule,        // ✅ Necesario para *ngIf, etc.
    ReactiveFormsModule,  // ✅ Necesario para formGroup y controlName
    RouterModule
  ]
})
export class SigningComponent implements OnInit {
  loginForm!: FormGroup;
  errorMsg = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router:Router) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: (res) => {
          console.log('Login exitoso', res);
          localStorage.setItem('token', res.token);
          // Aquí puedes redirigir con router.navigate
          this.router.navigate(['/dashboard'], { replaceUrl: true });

          
        },
        error: (err) => {
          console.error('Error en login', err);
          this.errorMsg = 'Credenciales incorrectas';
        }
      });
    }
  }
}
