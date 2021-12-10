import { FormlyFieldConfig } from '@ngx-formly/core';

/**
 * Dynamic form for creating users
 */
export const RD_CreateEvent: FormlyFieldConfig[] = [
    {
        key: 'eventName',
        type: 'input',
      
        templateOptions: {
            type: 'text',
            label: 'Event Name',
            required: true
        },
    },
  
    {
        key: 'organizer',
        type: 'input',
        templateOptions: {
            type: 'text',
            label: 'Organizer',
            required: true
        }
    },
    {
        key: 'eventID',
        type: 'input',
        templateOptions: {
            type: 'text',
            label: 'Event ID (unique)',
            required: true
        }
    },
    {
        key: 'capacity',
        type: 'input',
        templateOptions: {
            type: 'number',
            label: 'Capacity Limit',
            required: true
        }
    },
];
