import { Component, OnInit } from "@angular/core";
import { Item } from "../../models/item";
import { GlobalService } from "../../services/global.service";
import { PowerbuyService } from "../../services/powerbuy.service";
import { DataService } from "../../services/data.service";
@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.css"]
})
export class InputComponent implements OnInit {
  inputWashingmachines: any;
  inputWaterheaters: any;
  inputTwodoorrefrigerators: any;
  inputOnedoorrefrigerators: any;
  inputFans: any;
  inputAir: any;
  item: Item = {
    name: "",
    price: 0,
    store: "",
    img: "",
    keyid: "",
    submit: 0
  };

  // inputItem1: any;
  items: any;

  pnames: any[];
  allProduct: any;
  inputupAir: any;

  aaa: any;
  itemid: any;
  pnamea: any[];
  State: boolean;

  constructor(
    private contentGlobal: GlobalService,
    private contentPowerbuy: PowerbuyService,
    private dbdata: DataService
  ) {}

  ngOnInit() {
    this.dbdata.getAirs().subscribe(item => {
      this.allProduct = item;
      // console.log(item)
    });
  }
// _____________________________________________GETDATAGLOBAL____________________________________________
  getGlobalAir() {
    this.contentGlobal.getAir().then((data: any) => {
      this.items = data;
      if (this.items != undefined) {
        this.contentGlobal.getAir1().then((data: any) => {
          this.inputAir = this.items.concat(data);
          console.log("contentGlobal", this.inputAir);
        });
      }
    });
  }
  getGlobalfan() {
    this.contentGlobal.getfan().then((data: any) => {
      this.items = data;
      if (this.items != undefined) {
        this.contentGlobal.getfan1().then((data: any) => {
          let inputItem1 = this.items.concat(data);
          this.contentGlobal.getfan2().then((data: any) => {
            this.inputFans = inputItem1.concat(data);
            console.log("fanGlobal", this.inputFans);
          });
        });
      }
    });
  }
  getGlobalonedoorrefrigerators() {
    this.contentGlobal.getonedoorrefrigerators().then((data: any) => {
      this.inputOnedoorrefrigerators = data;
      console.log("OnedoorrefrigeratorsGlobal", this.inputOnedoorrefrigerators);
    });
  }

  getGlobaltwodoorrefrigerators() {
    this.contentGlobal.gettwodoorrefrigerators().then((data: any) => {
      this.items = data;
      if (this.items != undefined) {
        this.contentGlobal.gettwodoorrefrigerators1().then((data: any) => {
          this.inputTwodoorrefrigerators = this.items.concat(data);
          console.log(
            "TwodoorrefrigeratorsGlobal",
            this.inputTwodoorrefrigerators
          );
        });
      }
    });
  }

  getGlobalwaterheaters() {
    this.contentGlobal.getwaterheaters().then((data: any) => {
      this.items = data;
      if (this.items != undefined) {
        this.contentGlobal.getwaterheaters1().then((data: any) => {
          let inputItem1 = this.items.concat(data);
          this.contentGlobal.getwaterheaters2().then((data: any) => {
            this.inputWaterheaters = inputItem1.concat(data);
            console.log("inputshowerwaterheaters", this.inputWaterheaters);
          });
        });
      }
    });
  }

  getGlobalwashingmachines() {
    this.contentGlobal.getwashingmachines().then((data: any) => {
      this.inputWashingmachines = data;
      console.log("this.inputWashingmachines", this.inputWashingmachines);
    });
  }
// _____________________________________________GETDATAPOWERBUY____________________________________________
  getPowerbuyAir() {
    this.contentPowerbuy.getPowerAir().then((data: any) => {
      this.items = data;
      console.log("items2", this.items);
      if (this.items != undefined) {
        this.contentPowerbuy.getPowerAir1().then((data: any) => {
          let inputItem1 = this.items.concat(data);

          this.contentPowerbuy.getPowerAir2().then((data: any) => {
            this.inputAir = inputItem1.concat(data);
            console.log("inputitems2", this.inputAir);
          });
        });
      }
    });
  }
  getPowerbuyfan() {
    this.contentPowerbuy.getPowerfan().then((data: any) => {
      this.items = data;
      if (this.items != undefined) {
        this.contentPowerbuy.getPowerfan1().then((data: any) => {
          this.inputFans = this.items.concat(data);
          console.log("Powerbuyfan", this.inputFans);
        });
      }
    });
  }

  getPowerbuyonedoorrefrigerators() {
    this.contentPowerbuy.getPoweronedoorrefrigerators().then((data: any) => {
      this.inputOnedoorrefrigerators = data;
      console.log(
        "OnedoorrefrigeratorsPowerbuy",
        this.inputOnedoorrefrigerators
      );
    });
  }

  getPowerbuytwodoorrefrigerators() {
    this.contentPowerbuy.getPowertwodoorrefrigerators().then((data: any) => {
      this.items = data;
      if (this.items != undefined) {
        this.contentPowerbuy
          .getPowertwodoorrefrigerators1()
          .then((data: any) => {
            this.inputTwodoorrefrigerators = this.items.concat(data);
            console.log(
              "TwodoorrefrigeratorsPowerbuy",
              this.inputTwodoorrefrigerators
            );
          });
      }
    });
  }

  getPowerbuywaterheaters() {
    this.contentPowerbuy.getPowerwaterheaters().then((data: any) => {
      this.inputWaterheaters = data;
      console.log("Powershowerwaterheaters", this.inputWaterheaters);
    });
  }

  getPowerbuywashingmachines() {
    this.contentPowerbuy.getPowerwashingmachines().then((data: any) => {
      this.inputWashingmachines = data;
      console.log("this.inputWashingmachines ;", this.inputWashingmachines);
    });
  }
// _________________________________________________ADDDATA__________________________________________
  addAir(index: number, id: string) {
    if (id != "") {
      this.inputAir[index].keyid = id;
      this.inputAir[index].submit = 1;
      this.dbdata.addAirs(this.inputAir[index]);

      console.log("ninew", this.inputAir[index]);
    }
  }

  addFan(index: number, id: string) {
    if (id != "") {
      this.inputFans[index].keyid = id;
      this.inputFans[index].submit = 1;
      this.dbdata.addFans(this.inputFans[index]);

      console.log("ninew", this.inputFans[index]);
    }
  }
  addOnedoorrefrigerators(index: number, id: string) {
    if (id != "") {
      this.inputOnedoorrefrigerators[index].keyid = id;
      this.inputOnedoorrefrigerators[index].submit = 1;
      this.dbdata.addOnedoorrefrigerators(
        this.inputOnedoorrefrigerators[index]
      );

      console.log("ninew", this.inputOnedoorrefrigerators[index]);
    }
  }
  addTwodoorrefrigerators(index: number, id: string) {
    if (id != "") {
      this.inputTwodoorrefrigerators[index].keyid = id;
      this.inputTwodoorrefrigerators[index].submit = 1;
      this.dbdata.addTwodoorrefrigerators(
        this.inputTwodoorrefrigerators[index]
      );

      console.log("ninew", this.inputTwodoorrefrigerators[index]);
    }
  }
  addWaterheaters(index: number, id: string) {
    if (id != "") {
      this.inputWaterheaters[index].keyid = id;
      this.inputWaterheaters[index].submit = 1;
      this.dbdata.addWaterheaters(this.inputWaterheaters[index]);

      console.log("ninew", this.inputWaterheaters[index]);
    }
  }

  addWashingmachines(index: number, id: string) {
    if (id != "") {
      this.inputWashingmachines[index].keyid = id;
      this.inputWashingmachines[index].submit = 1;
      this.dbdata.addWashingmachines(this.inputWashingmachines[index]);

      console.log("ninew", this.inputWashingmachines[index]);
    }
  }
// ______________________________________________UPDATA_______________________________________________________________-
  upGlobalAir() {
    this.contentGlobal.getAir().then((data: any) => {
      this.items = data;
      if (this.items != undefined) {
        this.contentGlobal.getAir1().then((data: any) => {
          this.inputupAir = this.items.concat(data);
          console.log("contentGlobal", this.inputupAir);
        });
      }
    });
  }
  upPowerbuyAir() {
    this.contentPowerbuy.getPowerAir().then((data: any) => {
      this.items = data;
      console.log("items2", this.items);
      if (this.items != undefined) {
        this.contentPowerbuy.getPowerAir1().then((data: any) => {
          let inputItem1 = this.items.concat(data);
          this.contentPowerbuy.getPowerAir2().then((data: any) => {
            this.inputupAir = inputItem1.concat(data);
            console.log("inputitems2", this.inputupAir);
          });
        });
      }
    });
  }
  updates(itemp) {
    // for 
    
    // this.pnames = this.allProduct.filter(item => item.name === this.inputAir);

    this.State = true;

    this.aaa = itemp;

    this.pnames = this.allProduct.filter(item => item.name === itemp.name);
    //  console.log('filter',this.pnames)

    this.itemid = this.pnames.map(i => {
      i.name;
      i.store;
      i.namestore = this.aaa.namestore;
      i.img;
      i.keyid;
      i.submit;
      i.price = this.aaa.price;
      // i.namestore
      // i.price = 10
      return i;
    });
    // this.dbdata.updateItem(this.itemid);
    console.log("itemid", this.itemid);
  }
  clearState() {
    this.State = false;
    this.pnames = null;
  }

  update(item) {
    console.log("item1", item);

    this.dbdata.updateItem(item);
  }

  ungetAir() {
    this.inputAir = null;
  }
  ungetupAir() {
    this.inputupAir = null;
  }
  ungetFan() {
    this.inputFans = null;
  }
  ungetOnedoorrefrigerators() {
    this.inputOnedoorrefrigerators = null;
  }
  ungetTwodoorrefrigerators() {
    this.inputTwodoorrefrigerators = null;
  }
  ungetWaterheaters() {
    this.inputWaterheaters = null;
  }
  ungetWashingmachines() {
    this.inputWashingmachines = null;
  }
}
