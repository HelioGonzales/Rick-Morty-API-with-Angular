import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchValue!: FormControl
  search: any

  constructor(
    private router: Router
  ) {
    this.searchValue = new FormControl("", [Validators.required])
  }

  ngOnInit(): void {
  }

  searchBtn(event: Event) {
    event.preventDefault()
    this.search = this.searchValue.value
    console.log(this.search);
    this.router.navigate([`/search/${this.search}`])
  }

}
