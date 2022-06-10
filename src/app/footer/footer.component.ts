import {
  AfterViewInit,
  Component,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

interface Control {
  name: string;
  ref: any;
  open: boolean;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements AfterViewInit {
  faAngleUp = faAngleUp;
  faAngleDown = faAngleDown;

  control: Control[] = [
    {
      name: 'Online Shop',
      ref: undefined,
      open: false,
    },
    {
      name: 'Service',
      ref: undefined,
      open: false,
    },
    {
      name: 'Zahlungsarten',
      ref: undefined,
      open: false,
    },
    {
      name: 'Sicher Einkaufen',
      ref: undefined,
      open: false,
    },
    {
      name: 'Follow us',
      ref: undefined,
      open: false,
    },
  ];

  @ViewChild('os') os!: TemplateRef<any>;
  @ViewChild('ser') ser!: TemplateRef<any>;
  @ViewChild('za') za!: TemplateRef<any>;
  @ViewChild('se') se!: TemplateRef<any>;
  @ViewChild('fu') fu!: TemplateRef<any>;

  ngAfterViewInit(): void {
    this.control[0].ref = this.os;
    this.control[1].ref = this.ser;
    this.control[2].ref = this.za;
    this.control[3].ref = this.se;
    this.control[4].ref = this.fu;
  }
}
