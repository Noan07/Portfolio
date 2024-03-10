import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-section',
  standalone: true,
  imports: [],
  templateUrl: './header-section.component.html',
  styleUrl: './header-section.component.css'
})
export class HeaderSectionComponent {
  @Input() behindText: string = '';
  @Input() mainText: string = '';
}
