import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-kalkulator",
  templateUrl: "./kalkulator.component.html",
  styleUrls: ["./kalkulator.component.css"]
})
export class KalkulatorComponent implements OnInit {
  constructor(private router: Router) {}
  op = "";
  angka1 = "";
  angka2 = "";
  hasil = 0;

  pageHasil() {
    this.router.navigate(["/hasil", this.hasil]);
  }

  input(x) {
    if (this.op == "") {
      this.angka1 += x.toString();

      this.hasil = Number(this.angka1);
    } else {
      this.angka2 += x.toString();

      if (this.op == "-") {
        this.hasil = Number(this.angka1) - Number(this.angka2);
      } else if (this.op == "+") {
        this.hasil = Number(this.angka1) + Number(this.angka2);
      } else if (this.op == "*") {
        this.hasil = Number(this.angka1) * Number(this.angka2);
      }
    }
  }

  operator(y) {
    if (y == 0) {
      this.op = "-";
    } else if (y == 1) {
      this.op = "+";
    } else if (y == 2) {
      this.op = "*";
    }
  }

  ngOnInit() {}
}
