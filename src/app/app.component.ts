import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { DataService } from './core/data.service';
import { switchMap, startWith } from 'rxjs/operators';
import { FormlyFieldConfigCache } from '@ngx-formly/core/lib/components/formly.field.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  form = new FormGroup({});
  model = {
    min: 0,
    max: 0,
  };
  fields: FormlyFieldConfig[] = [
    {
      key: 'min',
      type: 'input',
      templateOptions: {
        type: 'number',
        label: 'Min',
        min: 0,
      },
    },
    {
      key: 'max',
      type: 'input',
      templateOptions: {
        type: 'number',
        label: 'Max',
      },
      expressionProperties: {
        'templateOptions.min': `model.min || 0`,
      },
      validation: {
        messages: {
          min: (error, field: FormlyFieldConfig) => {
            return `Min value:${error.min}`;
          },
        },
      },
    },
  ];

  constructor(private dataService: DataService) {}

  onSubmit({ valid, value }) {
    console.log(value);
  }
}
