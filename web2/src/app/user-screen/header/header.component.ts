import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() username: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  exitClicked() {
    this.router.navigateByUrl("");
  }

}
