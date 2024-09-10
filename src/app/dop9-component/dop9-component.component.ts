import {Component, Inject, OnDestroy, OnInit, PLATFORM_ID} from '@angular/core';
import {CommonModule, isPlatformServer, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-dop9-component',
  standalone: true,
  imports: [CommonModule,NgIf, FormsModule],
  templateUrl: './dop9-component.component.html',
  styleUrl: './dop9-component.component.scss'
})
export class MyComponent implements OnInit, OnDestroy {
  currentTime: string = '';
  is24Format: boolean = true;
  timer: ReturnType<typeof setInterval>|null = null;

  constructor(@Inject(PLATFORM_ID) private platform: Object) {

  }
  ngOnInit() {
    if (!isPlatformServer(this.platform)) {
      this.updateTime();
      this.timer = setInterval(this.updateTime.bind(this), 1000);
    }
  }

  updateTime() {
    let date = new Date();
    if (this.is24Format) {
      this.currentTime = date.toLocaleTimeString('ru-RU');
    } else {
      this.currentTime = date.toLocaleTimeString('ru-RU', {hour12: true});
    }
    this.currentTime = String(date).split(' ')[4];
  }

  ngOnDestroy(): void {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

}
