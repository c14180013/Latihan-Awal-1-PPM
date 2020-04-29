import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hasil',
  templateUrl: './hasil.component.html',
  styleUrls: ['./hasil.component.css']
})
export class HasilComponent implements OnInit {

  constructor(private router : Router, private route : ActivatedRoute) {}

  pageKalkulator()
  {
    this.router.navigate(['/kalkulator']);
  }

  hasil = "";
  ngOnInit() {
    this.hasil = this.route.snapshot.paramMap.get('hsl');
  }
}