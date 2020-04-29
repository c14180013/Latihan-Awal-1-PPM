import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kalkulator',
  templateUrl: './kalkulator.component.html',
  styleUrls: ['./kalkulator.component.css']
})
export class KalkulatorComponent implements OnInit {

  constructor(private router : Router) {}

  pageHasil()
  {
    this.router.navigate(['/hasil']);
  }

  input(x)
  {

  }

  ngOnInit() {
  }

}