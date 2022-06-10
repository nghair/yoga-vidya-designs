import { Component } from '@angular/core';
import {
  faBars,
  faMagnifyingGlass,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import { categories } from '../../assets/categories';

@Component({
  selector: 'app-design1',
  templateUrl: './design1.component.html',
  styleUrls: ['./design1.component.scss'],
})
export class Design1Component {
  faBars = faBars;
  faMagnifyingGlass = faMagnifyingGlass;
  faShoppingCart = faShoppingCart;
  logos = [1, 2, 3, 4];
  infos = [1, 2, 3, 4, 5];
  // categoriesL = [1, 2];
  // categoriesM = [1, 2, 3, 4];
  // categoriesS = [1, 2, 3, 4, 5];
  products = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  categories = categories;

  showAllCategories = false;
  showSidebar = false;
}
