import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { MainServiceService } from 'src/app/core/service/main-service.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {
  id: any;
  arr: any[] = [];
  favorite: any;

  constructor(
    private route: ActivatedRoute,
    private service: MainServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.has('id')) {
        this.id = params.get('id');
        console.log(this.id);
      }
    });

    this.showCharacterDetail();
  }

  showCharacterDetail() {
    // this.service.getDetails(this.id).subscribe((res: any) => {
    //   this.favorite = res;

    //   let arr = JSON.parse(localStorage.getItem('arr') || '[]');
    //   let fav = this.favorite;
    //   if (arr.filter((e: any) => e.id === fav.id) - 1) {
    //     arr.push(fav);
    //     localStorage.setItem('arr', JSON.stringify(arr));
    //   }
    //   // console.log(arr);

    //   this.arr = arr;
    // });
    let arr = JSON.parse(localStorage.getItem('arr2') || '[]');
    this.arr = arr;
  }

  deleteFav(id: any) {
    let arr = [];
    arr = JSON.parse(localStorage.getItem('arr2') || '[]');

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id === id) {
        arr.splice(i, 1);
      }
    }

    console.log(arr);
    localStorage.setItem('arr2', JSON.stringify(arr));
    arr = JSON.parse(localStorage.getItem('arr2') || '[]');
    this.arr = arr;
    console.log(this.arr);

    if (this.arr.length === 0) {
      alert('Your list is empty');
      this.router.navigate(['/']);
    }
  }

  clearAll() {
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
