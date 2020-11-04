export class MyEvent {
  public title: string;
  public description: string;
  public dateTime: string;
  public location: string;

  constructor(title: string, dateTime: string, location: string) {
    this.title = title;
    this.dateTime = dateTime;
    this.location = location;
  }
}
