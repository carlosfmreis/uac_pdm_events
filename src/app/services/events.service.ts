import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MyEvent } from '../models/event.model';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  private eventsList: MyEvent[];
  private readonly localStorageEventsListKey = 'eventsList';

  public eventsListSubject: BehaviorSubject<MyEvent[]>;

  constructor() {
    this.eventsList =
      localStorage.getItem(this.localStorageEventsListKey) === null
        ? []
        : JSON.parse(localStorage.getItem(this.localStorageEventsListKey));
    this.eventsListSubject = new BehaviorSubject<MyEvent[]>(this.eventsList);
  }

  private streamUpdatedEvents(): void {
    this.eventsListSubject.next(this.eventsList);
  }

  private saveEventsList(): void {
    localStorage.setItem(
      this.localStorageEventsListKey,
      JSON.stringify(this.eventsList)
    );
  }

  public addEvent(newEvent: MyEvent): void {
    this.eventsList.push(newEvent);
    this.streamUpdatedEvents();
    this.saveEventsList();
  }

  public removeEvent(index: number): void {
    this.eventsList.splice(index, 1);
    this.streamUpdatedEvents();
    this.saveEventsList();
  }
}
