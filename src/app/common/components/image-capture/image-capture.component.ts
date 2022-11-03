import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'image-capture',
  templateUrl: './image-capture.component.html',
  styleUrls: ['./image-capture.component.scss']
})
export class ImageCaptureComponent implements OnInit {
 @ViewChild('video') video?: ElementRef<HTMLVideoElement>;
 @ViewChild('canvas') canvas?: ElementRef<HTMLCanvasElement>;
 @ViewChild('canvas2') canvas2?: ElementRef<HTMLCanvasElement>;
 step = 1; 
 constructor() { }

  ngOnInit(): void {
  }

  startCamera() {
    this.step = 2;
    setTimeout(async () => {
      if(!this.video?.nativeElement) return;
      let stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
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
   	let sourceImageData = canvas.toDataURL('image/jpeg');

    setTimeout(() => {
      const ctx = this.canvas2?.nativeElement.getContext("2d");

      var destinationImage = new Image;
      destinationImage.onload = function(){
      ctx?.drawImage(destinationImage,0,0);
    };
    destinationImage.src = sourceImageData;
    
    }, 0);
  }

  uploadImage() {}

}
