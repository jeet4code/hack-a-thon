import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageCaptureComponent } from '../image-capture/image-capture.component';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  constructor(private readonly dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openImageCaptureDialog() {
    this.dialog.open(ImageCaptureComponent).afterClosed().subscribe(response => console.log(response));
  }

}
