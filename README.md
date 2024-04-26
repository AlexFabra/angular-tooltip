# Tooltip

![tooltip](https://github.com/AlexFabra/angular-tooltip/blob/main/src/assets/tooltip.PNG)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.2.

# Accepted inputs and subjects

```
tooltip = ''; //content
position: TooltipPosition = TooltipPosition.DEFAULT; 
theme: TooltipTheme = TooltipTheme.DEFAULT;
showDelay = 0;
hideDelay = 3;
showOnInit = false;
forceClose: Subject<boolean> 
```

# How to use (example)

Imports in component.ts:
```
import { TooltipPosition, TooltipTheme } from 'src/app/shared/infrastructure/directives/tooltip/tooltip.enums';
import { TooltipDirective } from 'src/app/shared/infrastructure/directives/tooltip/tooltip.directive';
```
Declare in component.ts: 
```
@ViewChild(TooltipDirective)
TooltipPosition: typeof TooltipPosition = TooltipPosition;
TooltipTheme: typeof TooltipTheme = TooltipTheme;
```
use in compoment.html
```
 <div class="bg-light rounded-circle d-flex justify-content-center align-items-center ms-2"
   style="height:17px !important; width:21px !important" [tooltip]=inclinationTooltipText
   [theme]="TooltipTheme.DARK" [position]="TooltipPosition.BELOW">
      <i class="fas fa-question text-dark" aria-hidden="true" style="font-size: 13px;"></i>
  </div>
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
