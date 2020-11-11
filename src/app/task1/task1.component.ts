import {Component} from '@angular/core'

@Component({
    selector:'app-task1',
    templateUrl:'./task1.component.html',
    styleUrls:['./task1.component.css']
})
export class Task1Component{
    title = "Bill Gates"
    imgSrc="assets/img/Bill.jpg"
    url1 = "https://en.wikipedia.org/wiki/Bill_Gates"
    url2 = "https://www.gatesfoundation.org/"
    url3 = "https://www.gatesnotes.com/"
    url4 = "https://twitter.com/billgates"
}