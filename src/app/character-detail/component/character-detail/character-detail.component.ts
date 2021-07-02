import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MainServiceService } from 'src/app/core/service/main-service.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css'],
})
export class CharacterDetailComponent implements OnInit {
  id: any;
  name: any;
  status: any;
  gender: any;
  image: any;
  species: any;

  constructor(
    private route: ActivatedRoute,
    private service: MainServiceService
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
    this.service.getDetails(this.id).subscribe((res: any) => {
      console.log(res);

      const { name, status, gender, image, species } = res;
      this.name = name;
      this.status = status;
      this.gender = gender;
      this.image = image;
      this.species = species;
    });
  }

  toFavorites(id: any, species: any, gender: any, image: any, name: any) {
    let arr = JSON.parse(localStorage.getItem('arr2') || '[]');
    let fav = {
      id,
      species,
      gender,
      image,
      name,
    };

    if (arr.filter((e: any) => e.id === fav.id) - 1) {
      arr.push(fav);
      console.log(arr);

      localStorage.setItem('arr2', JSON.stringify(arr));
    }
  }
}
