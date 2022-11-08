import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageCaptureComponent } from '../image-capture/image-capture.component';
import { FormBuilder } from '@angular/forms';
import { RESOURCE_CACHE_PROVIDER } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  imageData: any
  userInfoForm = this.formBuilder.group({
    name: '',
    gender: '',
    image: ''
  });

  constructor(private readonly dialog:MatDialog, private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
  }

  onSubmit() {}

  openImageCaptureDialog() {
    this.dialog.open(ImageCaptureComponent).afterClosed().subscribe(response => {
      console.log(response);
      if(!response) return;
      this.imageData = response;
    });
  }

}
