import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TooltipPosition, TooltipTheme} from "./tooltip.enums";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './tooltip.component.html',
  styleUrl: './tooltip.component.scss'
})
export class TooltipComponent {
  title = 'tooltip';

  position: TooltipPosition = TooltipPosition.DEFAULT;
  theme: TooltipTheme = TooltipTheme.DEFAULT;
  tooltip = '';
  left = 0;
  top = 0;
  visible = false;
}
