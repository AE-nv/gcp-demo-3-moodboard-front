import {Component, OnInit} from '@angular/core';

declare let EventSource: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  mood = 50;
  ngOnInit(): void {
    const source = new EventSource('/mood');
    source.addEventListener('message', message => {
      console.log('Received mood: ' + message.data);
      let score = JSON.parse(message.data);
      score += 1;
      score *= 50;
      this.mood = Math.round(score);
    });
  }
}
