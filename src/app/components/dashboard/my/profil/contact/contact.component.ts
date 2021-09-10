import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {

  public show:boolean = false;

  constructor(
  ) { }

  ngOnInit(): void {
  }

  toggle() {
    this.show = !this.show;
  }

}
