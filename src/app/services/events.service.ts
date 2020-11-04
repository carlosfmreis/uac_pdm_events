import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MyEvent } from '../models/event.model';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  private eventsList: MyEvent[];

  public eventsListSubject: BehaviorSubject<MyEvent[]>;

  constructor() {
    this.eventsList = [];
    this.eventsListSubject = new BehaviorSubject<MyEvent[]>(this.eventsList);
  }

  private streamUpdatedEvents(): void {
    this.eventsListSubject.next(this.eventsList);
  }

  public addEvent(newEvent: MyEvent): void {
    this.eventsList.push(newEvent);
    this.streamUpdatedEvents();
  }
}