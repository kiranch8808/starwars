import { Component, OnInit } from '@angular/core';
import { StarService } from 'src/app/services/star.service';

@Component({
  selector: 'app-starwars',
  templateUrl: './starwars.component.html',
  styleUrls: ['./starwars.component.css']
})
export class StarwarsComponent implements OnInit{
  starShipsList: any=[];
  totalFilmCount: number=0;
constructor(private starService: StarService){

}
  ngOnInit(): void {
    // alert('sample check');
    this.getStarShips();
  }

getStarShips(){
 
  this.starService.getStarWarsShips().subscribe(res=>{
    // res.results;
    res.results.map((re:any)=>{
      if(+re.crew<10){
        re.crew=+re.crew;
        re.noOfFilms=re.films?.length>0?re.films?.length:0;
        // this.totalFilmCount=this.totalFilmCount+re.crew;
        this.starShipsList.push(re);
      }
    })
    this.starShipsList.sort((a:any,b:any) => 0 - (a.crew > b.crew ? -1 : 1));
    console.log('starShipsList',JSON.stringify(this.starShipsList));
  });
}

}
