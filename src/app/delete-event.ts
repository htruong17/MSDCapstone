import { FormlyFieldConfig } from '@ngx-formly/core';

/**
 * Dynamic form for deleting users
 */
export const RD_DeleteEvent: FormlyFieldConfig[] = [
    {
        key: 'eventID',
        type: 'input',
        templateOptions: {
            type: 'text',
            label: 'Event ID (unique)',
            required: true
        }
    }
];
