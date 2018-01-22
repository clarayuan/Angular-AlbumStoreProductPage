import { Component, OnInit, Input} from '@angular/core';

import {Album} from '../album';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-product-tracklisting',
  templateUrl: './product-tracklisting.component.html',
  styleUrls: ['./product-tracklisting.component.css']
})
export class ProductTracklistingComponent implements OnInit {

  @Input()
  id: number;

  albumInfo: Album;

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this._productService.getAlbum(this.id)
      .subscribe(response => this.albumInfo = response);
  }

}
