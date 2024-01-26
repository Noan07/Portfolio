import { Component } from '@angular/core';
import { HeaderSectionComponent } from '../header-section/header-section.component';
import { Contact } from '../../models/contact.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [HeaderSectionComponent, CommonModule, FormsModule],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.css'
})
export class ContactSectionComponent {
  contactModel: Contact = new Contact();
  submitted: boolean = false;

  onSubmit() {
    console.log('Formulaire soumis:', this.contactModel);
    this.contactModel = new Contact();
    this.submitted = true;
  }
}
