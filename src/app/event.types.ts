import { Dates, EventLocation } from './types';

export class OrgEvent{
    id: string;
    eventID: string;
    eventName: string;
    eventNameID: string;
    formName: string;
    capacity: number;
    registeredCount: number;
    dates: Dates;
    organizer: string;
    description: string;
    eventDates?: {
        start: Date;
        end: Date;
    };
    attendees: string[]; 
    active: boolean
    constructor(
        name: string,
        organizer: string,
        eventID: string,
        capacity: number
    ) {
        this.eventName = name;
        this.organizer = organizer;
        this.attendees = [];
        this.formName = null;
        this.eventID = eventID;
        this.dates = new Dates();
        this.active = false;
        this.eventNameID = name + " (" + eventID + ")";
        this.capacity = capacity;
        this.registeredCount = 0;
    }

    updateEvent(fieldName: string, fieldData: any){
        (this as any)[fieldName] = fieldData;
        this.dates.update();
    }

}


