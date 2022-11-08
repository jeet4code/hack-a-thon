import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'image-capture',
  templateUrl: './image-capture.component.html',
  styleUrls: ['./image-capture.component.scss']
})
export class ImageCaptureComponent implements OnInit {
 @ViewChild('video') video?: ElementRef<HTMLVideoElement>;
 @ViewChild('canvas') canvas?: ElementRef<HTMLCanvasElement>;
 step = 1;
 imageData: any; 

 scanning = false;

  ngOnInit(): void {
    this.startCamera();
  }

  startCamera() {
    this.step = 2;
    let stream;
    setTimeout(async () => {
      if(!this.video?.nativeElement) return;
      stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
      this.video.nativeElement.srcObject = stream;
    }, 0);

    
    
  }

  takeImage() {
    this.step=3;
    if(!this.canvas?.nativeElement || !this.video?.nativeElement) return;
    
    const context = this.canvas.nativeElement.getContext('2d');
    
    if(!context) return;

    const video = this.video.nativeElement;
    const canvas = this.canvas.nativeElement;
    
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
   	//this.imageData = canvas.toDataURL('image/jpeg');
    

     canvas.toBlob((blob) => {
      const newImg = document.createElement('img');
      const url = URL.createObjectURL(blob!);
    
      const formdata = new FormData();
      formdata.append("file", blob!);
      console.log(formdata);
      newImg.onload = () => {
        URL.revokeObjectURL(url);
      };
    
      newImg.src = url;
      document.body.appendChild(newImg);
    });

    this.scanning = true;
  
  }
}
