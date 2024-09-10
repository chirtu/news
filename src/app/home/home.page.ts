import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonItem, IonLabel, IonInput } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonItem, IonLabel, IonInput],
  schemas: [NO_ERRORS_SCHEMA],  // Add NO_ERRORS_SCHEMA here if needed
})
export class HomePage {
  email: string = '';
  password: string = '';

  constructor() {}

  onLogin() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    // Handle login logic here
  }
}
