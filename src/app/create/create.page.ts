import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, 
        FormGroupDirective, 
        FormBuilder, 
        FormGroup, 
        NgForm, 
        Validators, 
        FormArray } from '@angular/forms';
import * as firebase from 'Firebase';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

	ref = firebase.database().ref('infos/');
	infoForm: FormGroup;
	
	constructor(
		public route: ActivatedRoute,
		public router: Router,
		public formBuilder: FormBuilder
	) { 
		this.infoForm = this.formBuilder.group(
		  {
			'info_title': [null,Validators.required],
			'info_description': [null,Validators.required],
		  }
		);
	}

	ngOnInit() {
	}
	
	saveInfo(){
		let newInfo=firebase.database().ref('infos/').push();
		
		newInfo.set(this.infoForm.value);
		
		this.router.navigate(['/detail/'+newInfo.key]);
	}

}
