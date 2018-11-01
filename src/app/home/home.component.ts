import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {


  load;
	air;
	waterheater: any;
	Bwaterheater: any;
  Bonedoorrefrigerators: any;
  onedoorrefrigerators: any;
  Btwodoorrefrigerators: any;
  twodoorrefrigerators: any;
  Bwashingmachines: any;
  washingmachines: any;

  constructor(config: NgbCarouselConfig ,private dbService: DataService) {
    config.interval = 2500;
    config.wrap = false;
    config.keyboard = false;
   }

  ngOnInit() {
    this.load=this.dbService.getAirs().subscribe(air =>{
			this.air = air 
		})
    this.Bwaterheater = this.dbService.getWaterheaters().subscribe(waterheater => {
			this.waterheater = waterheater
    })
    this.Bonedoorrefrigerators=this.dbService.getOnedoorrefrigerators().subscribe(onedoorrefrigerators =>{
        this.onedoorrefrigerators = onedoorrefrigerators
    })
    this.Btwodoorrefrigerators=this.dbService.getTwodoorrefrigerators().subscribe(twodoorrefrigerators =>{
      this.twodoorrefrigerators = twodoorrefrigerators
  })
  this.Bwashingmachines=this.dbService.getWashingmachines().subscribe(washingmachines =>{
    this.washingmachines = washingmachines
  })
  }

  ngOnDestroy() {
		this.load.unsubscribe();
    this.Bwaterheater.unsubscribe();
    this.Bonedoorrefrigerators.unsubscribe();
    this.Btwodoorrefrigerators.unsubscribe();
    this.Bwashingmachines.unsubscribe();
	  }
}
