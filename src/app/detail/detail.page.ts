import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'Firebase';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})

export class DetailPage implements OnInit {

  info = null;

  constructor(public router:Router,
    public route: ActivatedRoute) { 
      firebase.database().ref('infos/'+this.route.snapshot.paramMap.get('key')).on('value', resp=>{
        this.info = snapshotToObject(resp);
      });
  }

  ngOnInit() {
  }

}

export const snapshotToObject = snapshot => {
  let item = snapshot.val();
  item.key=snapshot.key;
  return item;
};
