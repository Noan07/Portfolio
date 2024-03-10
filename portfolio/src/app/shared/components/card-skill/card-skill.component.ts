import { Component, Input } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar'; 

@Component({
  selector: 'app-card-skill',
  standalone: true,
  imports: [MatProgressBarModule],
  templateUrl: './card-skill.component.html',
  styleUrl: './card-skill.component.css'
})
export class CardSkillComponent {
  @Input() titles: string[] = [];
  @Input() percentage: number = 0;
}
