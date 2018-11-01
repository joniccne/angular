import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";
@Component({
  selector: "app-water-heater",
  templateUrl: "./water-heater.component.html",
  styleUrls: ["./water-heater.component.css"]
})
export class WaterHeaterComponent implements OnInit {
  cc: number;
  Bwaterheater: any;
  productName: any;
  productObjectByProductName: any[];
  BestPrice: any[];
  allProduct;
  img: any;
  pnames: any;
aa= 10;
bb= 20;
namecolor = this.getNamecolor();
State: boolean=false ;

public getNamecolor(){

  var len = '{{itemsp[0].leng}} >= 2 '
  var color = 'red';
}

  constructor(private dbService: DataService) {}

  ngOnInit() {
    this.Bwaterheater = this.dbService.getWaterheaters().subscribe(waterheater => {
        this.allProduct = waterheater;

        console.log("allProduct", this.allProduct);

        let getkeyid = waterheater.map(x => {
          return x.keyid;
        });
        console.log("getkeyid", getkeyid);

        this.productName = getkeyid.filter((v, i) => {
          return getkeyid.indexOf(v) == i;
        });

        console.log("test", this.productName);

        this.productObjectByProductName = this.productName.map(item => {
          return waterheater.filter(waterheater => waterheater.keyid === item);
        });

        console.log("product", this.productObjectByProductName);

        this.BestPrice = this.productObjectByProductName.map(item => {
          let prices = item.map(price => {
            
            return price.price;
          });
          let min = Math.min.apply(null, prices);
          let max = Math.max.apply(null, prices);
          item.forEach(e => {
            if (item.length > 1) {
              e.leng = item.length;
             } 
             else 
             {
              e.leng = item.length;
              
            }
        
         });
          let temp = item.filter(best => best.price === min);
          let xx = temp.map(i=>{
            i.name
            i.store
            i.img
            i.keyid
            i.submit
            i.priceStore=max-min
            return i
          })
          return xx;
        });

        console.log("best Price", this.BestPrice);
      });

      this.cc= this.aa+this.bb
      console.log('sum',this.cc)
  }

  onClicks(pname) {
    
    this.State = true;
    this.pnames = this.allProduct.filter(name => name.keyid === pname);
    
   
    console.log("pnames", this.pnames);

  
  }
  clearState(){
    this.State = false;
    this.pnames = null;
  }

  ngOnDestroy() {
    this.Bwaterheater.unsubscribe();
  }
}
