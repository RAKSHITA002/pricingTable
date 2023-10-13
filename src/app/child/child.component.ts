import { Component, Input } from '@angular/core';
interface ContentDetail {
  price: string;
  title: string;
  value1: string;
  value2: string;
  value3: string;
  value4: string;
  value5: string;
  value6: string;
  value7: string;
  value8: string;
}

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent {
  /* @Input() price : string = "";
  @Input() title : string = "";
  @Input() content1 : string = "";
  @Input() content2 : string = "";
  @Input() content3 : string = "";
  @Input() content4 : string = "";
  @Input() content5 : string = "";
  @Input() content6 : string = "";
  @Input() content7 : string = "";
  @Input() content8 : string = ""; */

  @Input() contentObj: ContentDetail | undefined;
}
