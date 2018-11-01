
import { Routes } from '@angular/router';
import { AirComponent } from './air/air.component';
import { RefrigeratorComponent } from './refrigerator/refrigerator.component';
import { WashComponent } from './wash/wash.component';
import { FanComponent } from './fan/fan.component';
import { VacuumComponent } from './vacuum/vacuum.component';
import { SuctionComponent } from './suction/suction.component';
import { IronComponent } from './iron/iron.component';
import { WaterHeaterComponent } from './water-heater/water-heater.component';
import { MicrowaveComponent } from './microwave/microwave.component';
import { CookingComponent } from './cooking/cooking.component';
import { KitchenAppliancesComponent } from './kitchen-appliances/kitchen-appliances.component';
import { OneDoorRefrigeratorsComponent } from './refrigerator/one-door-refrigerators/one-door-refrigerators.component';
import { TwoDoorRefrigeratorsComponent } from './refrigerator/two-door-refrigerators/two-door-refrigerators.component';
import { WashingmachinesComponent } from './wash/washingmachines/washingmachines.component';

export const ElectronicsRoutes: Routes = [
  {
    path: '',
    children: [
    
    {
      path:'air',
      component:AirComponent,
      data:{
        title:'เครื่องปรับอากาศ',
        urls:[{title: 'หน้าแรก',url:'/dashboard'},{title: 'เตรื่องใช้ไฟฟ้า'},{title:'เครื่องปรับอากาศ'}]
      }
    },
    {
      path:'refrigerator',
      component:RefrigeratorComponent,
      data:{
        title:'ตู่เย็น',
        urls:[{title: 'หน้าแรก',url:'/dashboard'},{title: 'เตรื่องใช้ไฟฟ้า'},{title:'ตู่เย็น'}]
      }
    },
    {
      path:'wash',
      component:WashComponent,
      data:{
        title:'เครื่องซักผ้าและอบผ้า',
        urls:[{title: 'หน้าแรก',url:'/dashboard'},{title: 'เตรื่องใช้ไฟฟ้า'},{title:'เครื่องซักผ้าและอบผ้า'}]
      }
    },
    {
      path:'fan',
      component:FanComponent,
      data:{
        title:'พัดลม',
        urls:[{title: 'หน้าแรก',url:'/dashboard'},{title: 'เตรื่องใช้ไฟฟ้า'},{title:'พัดลม'}]
      }
    },
    {
      path:'suction',
      component:SuctionComponent,
      data:{
        title:'เครื่องดูดอากาศ',
        urls:[{title: 'หน้าแรก',url:'/dashboard'},{title: 'เตรื่องใช้ไฟฟ้า'},{title:'เครื่องดูดอากาศ'}]
      }
    },
    {
      path:'vacuum',
      component:VacuumComponent,
      data:{
        title:'เครื่องดูดฝุ่น',
        urls:[{title: 'หน้าแรก',url:'/dashboard'},{title: 'เตรื่องใช้ไฟฟ้า'},{title:'เครื่องดูดฝุ่น'}]
      }
    },
    {
      path:'iron',
      component:IronComponent,
      data:{
        title:'เตารีด',
        urls:[{title: 'หน้าแรก',url:'/dashboard'},{title: 'เตรื่องใช้ไฟฟ้า'},{title:'เตารีด'}]
      }
    },
    {
      path:'water-heater',
      component:WaterHeaterComponent,
      data:{
        title:'เครื่องทำน้ำอุ่น',
        urls:[{title: 'หน้าแรก',url:'/dashboard'},{title: 'เตรื่องใช้ไฟฟ้า'},{title:'เครื่องทำน้ำอุ่น'}]
      }
    },
    {
      path:'microwave',
      component:MicrowaveComponent,
      data:{
        title:'ไมโครเวฟและเตาอบ',
        urls:[{title: 'หน้าแรก',url:'/dashboard'},{title: 'เตรื่องใช้ไฟฟ้า'},{title:'ไมโครเวฟและเตาอบ'}]
      }
    },
    {
      path:'cooking',
      component:CookingComponent,
      data:{
        title:'เครื่องมือทำอาหาร',
        urls:[{title: 'หน้าแรก',url:'/dashboard'},{title: 'เตรื่องใช้ไฟฟ้า'},{title:'เครื่องมือทำอาหาร'}]
      }
    },
    {
      path:'kitchen-appliances',
      component:KitchenAppliancesComponent,
      data:{
        title:'เครื่องใช้ไฟฟ้าในครัว',
        urls:[{title: 'หน้าแรก',url:'/dashboard'},{title: 'เตรื่องใช้ไฟฟ้า'},{title:'เครื่องใช้ไฟฟ้าในครัว'}]
      }
    },
    
    {
      path:'one-door-refrigerators',
      component:OneDoorRefrigeratorsComponent,
      data:{
        title:'ตู้เย็น 1ประตู ',
        urls:[{title: 'หน้าแรก',url:'/dashboard'},{title: 'เครื่องใช้ไฟฟ้า'},{title:'ตู้เย็น 1ประตู'}]
      }
    },
    {
      path:'two-door-refrigerators',
      component:TwoDoorRefrigeratorsComponent,
      data:{
        title:'ตู้เย็น 2ประตู ',
        urls:[{title: 'หน้าแรก',url:'/dashboard'},{title: 'เครื่องใช้ไฟฟ้า'},{title:'ตู้เย็น 2ประตู'}]
      }
    },
    {
      path:'washingmachines',
      component:WashingmachinesComponent,
      data:{
        title:'เครื่องซักผ้า ฝาหน้า ',
        urls:[{title: 'หน้าแรก',url:'/dashboard'},{title: 'เครื่องใช้ไฟฟ้า'},{title:'เครื่องซักผ้า ฝาหน้า'}]
      }
    },
    

    ]
  }
];

    