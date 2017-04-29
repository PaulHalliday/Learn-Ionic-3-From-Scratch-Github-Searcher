import { Component, Input } from '@angular/core';
import { User } from '../../models/user';

/**
 * Generated class for the SearchComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
    selector: 'search-results',
    templateUrl: 'search-results.html'
})
export class SearchResultsComponent {

    @Input() user: User;

    constructor() {
    }
}
 