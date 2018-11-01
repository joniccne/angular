import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    // {
    //     path: '', title: 'Personal', icon: '', class: 'nav-small-cap', label: '', labelClass: '', extralink: true, submenu: []
    // },
     {
         
        path: '', title: 'หน้าแรก', icon: 'mdi mdi-gauge', class: '', label: '', labelClass: '', extralink: false, submenu: []
    }, 
    // {
         
    //     path: 'home', title: 'home', icon: 'mdi mdi-gauge', class: '', label: '', labelClass: '', extralink: false, submenu: []
    // }, 
    ,{
        path: '', title: 'เครื่องใช้ไฟฟ้า', icon: 'mdi mdi-bullseye', class: 'has-arrow', label: '', labelClass: '', extralink: false,
        submenu: [
            
            { path: '/electronics/air', title: 'เครื่องปรับอากาศ', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/electronics/refrigerator', title: 'ตู่เย็น', icon: '', class: 'has-arrow', label: '', labelClass: '', extralink: false, submenu: [
                { path: '/electronics/one-door-refrigerators', title: 'ตู้เย็น 1 ประตู', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] }, 
                { path: '/electronics/two-door-refrigerators', title: 'ตู้เย็น 2 ประตู', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },   
            ] },
            { path: '/electronics/wash', title: 'เครื่องซักผ้าและอบผ้า', icon: '', class: 'has-arrow', label: '', labelClass: '', extralink: false, submenu: [
                { path: '/electronics/washingmachines', title: 'เครื่องซักผ้า ฝาหน้า', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },] },
            { path: '/electronics/fan', title: 'พัดลม', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/electronics/water-heater', title: 'เครื่องทำน้ำอุ่น', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            // { path: '/electronics/suction', title: 'เครื่องดูดอากาศ', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            // { path: '/electronics/vacuum', title: 'เครื่องดูดฝุ่น', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/electronics/iron', title: 'เตารีด', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            // { path: '/electronics/microwave', title: 'ไมโครเวฟและเตาอบ', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            // { path: '/electronics/cooking', title: 'เครื่องมือทำอาหาร', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            // { path: '/electronics/kitchen-appliances', title: 'เครื่องใช้ไฟฟ้าในครัว', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
        
        
        ]
    },
    // {
    //     path: '', title: 'นำเข้าข้อมูล', icon: 'mdi mdi-bullseye', class: 'has-arrow', label: '', labelClass: '', extralink: false,
    //     submenu: [
            
    //         { path: '/inputdata/input', title: 'นำเข้าข้อฺมูล', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            
        
        
    //     ]
    // }, 
   
];

