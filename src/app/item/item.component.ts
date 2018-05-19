import { Component, OnInit } from '@angular/core';
import{ InventoryService } from '../inventory.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

 inventory=[];
 routeParams={};
  constructor(private route:ActivatedRoute,private inventoryservice:InventoryService) {
        this.route.params.subscribe(params=>this.routeParams=params);
   }

  ngOnInit() {
      this.inventory=this.inventoryservice.getInventory();
  }
 

}
