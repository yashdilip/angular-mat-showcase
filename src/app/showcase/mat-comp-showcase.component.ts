import { Component, OnInit, Input } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-mat-comp-showcase',
  templateUrl: './mat-comp-showcase.component.html',
  styleUrls: ['./mat-comp-showcase.component.scss']
})
export class MatCompShowcaseComponent implements OnInit {

  @Input() name: string;
  @Input() role: string;
  @Input() selectedGender: string;
  @Input() isContractor : boolean;
  @Input() joinedAt;

  constructor() {
    this.selectedGender = "male";
    this.role = "dev";
    this.joinedAt = new FormControl(new Date());
    this.isContractor = false;
  }

  public submit(){
    console.log("name ", this.name, " selected gender ", this.selectedGender, " role ", this.role, " joined at ", this.joinedAt, " is contractor ", this.isContractor);
  }

  ngOnInit(): void {
  }

}
