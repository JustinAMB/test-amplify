import { Component } from '@angular/core';
import { uploadData } from 'aws-amplify/storage';
@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {
  title = 'test-amplify';
 async onUpload(e) {
    const file=    e.target.files[0];
    try {
      const result = await uploadData({
        key: file.name||"1e",
        data: file,
      }).result;
      console.log('Succeeded: ', result);
    } catch (error) {
      console.log('Error : ', error);
    }
  }
}
