import { Component } from '@angular/core';
import { Hero } from '../hero/hero';
import { Experience } from '../experience/experience';
import { Skills } from '../skills/skills';
import { Resume } from '../resume/resume';
import { Projects } from '../projects/projects';
import { Contact } from '../contact/contact';

@Component({
  selector: 'app-layout',
  imports: [Hero, Experience, Skills, Resume, Projects, Contact],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {}
