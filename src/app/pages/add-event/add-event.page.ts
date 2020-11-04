import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MyEvent } from 'src/app/models/event.model';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.page.html',
  styleUrls: ['./add-event.page.scss'],
})
export class AddEventPage implements OnInit {
  public event: MyEvent;

  constructor(
    private eventsService: EventsService,
    private navigationController: NavController
  ) {}

  ngOnInit() {
    this.event = new MyEvent('', '', '');
  }

  addEvent(): void {
    this.eventsService.addEvent(this.event);
    this.navigationController.pop();
  }
}
