import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-field-common',
  templateUrl: './field-common.component.html',
  styleUrls: ['./field-common.component.scss']
})
export class FieldCommonComponent implements OnInit {
  @Input() fieldName: string;
  @Input() value: any;
  @Input() isDate = false;
  @Input() gridName = "col-sm-3";
  @Input() gridValue = "col-sm-9";
  @Input() textColor = "text-dark";
  constructor() { }

  ngOnInit(): void {
  }

}


