import { Component, OnInit, Input} from '@angular/core';
import { ProductService } from '../product.service';

import {Album} from '../album';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  @Input()
  id: number; // the album id

  albumInfo: Album;

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this._productService.getAlbum(this.id)
      .subscribe(response => this.albumInfo = response);
  }

}
