import { Component } from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  imports: [
    MatToolbar
  ],
  styleUrl: './header.component.css'


})
export class HeaderComponent {

}
