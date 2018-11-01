import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Item } from '../../models/Item';

@Component({
  selector: 'app-fan',
  templateUrl: './fan.component.html',
  styleUrls: ['./fan.component.css']
})
export class FanComponent implements OnInit {

  Bfan:any;
  productName:any;
  productObjectByProductName:any[];
  BestPrice:any[];
  allProduct;
  img: any;
  pnames: any;
  State: boolean;

  constructor( private dbService:DataService) { }

  ngOnInit() {
    this.Bfan=this.dbService.getFan().subscribe(fan =>{    
      this.allProduct = fan;
  
      // console.log('fsSevice',this.allProduct )
  
      let getkeyid = fan.map(x =>{
        return x.keyid;
        
      });
      // console.log('getkeyid',getkeyid)


      this.productName = getkeyid.filter((v,i)=>{
        return getkeyid.indexOf(v) ==i;
      });
  
      // console.log('test',this.productName);
  
      this.productObjectByProductName = this.productName.map(item => {
        return fan.filter((fan) => (fan.keyid === item));
      });
  
      // console.log('product', this.productObjectByProductName);
  
      this.BestPrice = this.productObjectByProductName.map(item => {
        let prices = item.map(price =>{
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
      
          
      // console.log('best Price', this.BestPrice);
      
    });
  }
  onClicks(pname: Item) {
    this.State = true;
    this.pnames = this.allProduct.filter(name => name.keyid === pname);
  }
 
  clearState(){
    this.State = false;
    this.pnames = null;
  }
  clearStateon(){
    this.State = false;
    this.pnames = null;
  }
  ngOnDestroy(){
    this.Bfan.unsubscribe();
  }
}
