import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
 private floors;
  constructor(public http:HttpClient) {
    this.loadData()
  }
  ngOnInit() {
  }
  // function to load data (actually local data) from a JSON API change location to API end point
  loadData(){
    this.http.get('assets/data/testData.json').subscribe(res => {
      console.log(res)
      let data = (res as any);
      this.floors = data.pisos;
    });
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
