import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MyEvent } from 'src/app/models/event.model';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.page.html',
  styleUrls: ['./event-details.page.scss'],
})
export class EventDetailsPage implements OnInit, OnDestroy {
  private eventsSubscription: Subscription;

  public event: MyEvent;

  constructor(private eventsService: EventsService) {}

  ngOnInit(): void {
    this.eventsSubscription = this.eventsService.eventsListSubject.subscribe(
      (newEventsList) => {
        this.event = newEventsList[this.eventsService.selectedIndex];
      }
    );
  }

  ngOnDestroy(): void {
    this.eventsSubscription.unsubscribe();
  }
}
