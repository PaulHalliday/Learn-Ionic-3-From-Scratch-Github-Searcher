import { Component, Input } from '@angular/core';
import { Repository } from '../../models/repository';
@Component({
    selector: 'repositories',
    templateUrl: 'repositories.html'
})
export class RepositoriesComponent {
    
    @Input() repository: Repository;

    constructor() {
    }


} 