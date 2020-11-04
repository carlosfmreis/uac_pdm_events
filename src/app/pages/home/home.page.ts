import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MyEvent } from 'src/app/models/event.model';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  private eventsListSubscription: Subscription;

  public eventsList: MyEvent[];

  constructor(private router: Router, private eventsService: EventsService) {}

  ngOnInit(): void {
    this.eventsListSubscription = this.eventsService.eventsListSubject.subscribe(
      (updatedEventsList) => {
        this.eventsList = updatedEventsList;
      }
    );
  }

  ngOnDestroy(): void {
    this.eventsListSubscription.unsubscribe();
  }

  openAddEventPage(): void {
    this.router.navigateByUrl('/add-event');
  }

  removeEvent(index: number): void {
    this.eventsService.removeEvent(index);
  }
}
