import {
  Component,
  EventEmitter,
  Inject,
  Input,
  Output,
  inject,
} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { NgClass } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { CropperModalComponent } from '../cropper-modal/cropper-modal.component';
import { SafeUrl } from '@angular/platform-browser';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { UsersService } from '../../services/users.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [
    MatIcon,
    NgClass,
    MatInputModule,
    MatDialogActions,
    MatDialogContent,
    MatDialogClose,
    ReactiveFormsModule,
    TranslateModule
  ],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.scss',
})
export class EditProfileComponent {
  userServ = inject(UsersService);

  theme: string | null = '';

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<EditProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  @Input() user: { name: string; img: string | SafeUrl } = {
    name: this.data.user.name,
    img: this.data.user.img,
  };
  nameForm: FormControl = new FormControl('', [Validators.required]);
  @Output() updateUser = new EventEmitter<{id:number,username:string,userpfp:SafeUrl}>();
  source: string = '';

  uploadFile() {
    const fileInput = document.getElementById('file-upload');
    if (fileInput) {
      fileInput.click();
    }
  }

  sendUser() {
    let user: {id:number,username:string,userpfp:SafeUrl} = {
      id: this.userServ.getCurrentUser().id,
      username: this.nameForm.value,
      userpfp: this.user.img,
    };
    this.updateUser.emit(user);
  }

  async fileChangeEvent(event: Event): Promise<void> {
    let src: string | SafeUrl = '';
    const dialogRef = this.dialog.open(CropperModalComponent, {
      data: { imageChangedEvent: event },
    });

    dialogRef.componentInstance.croppedImageCallback.subscribe(
      (croppedImageUrl: ImageCroppedEvent) => {
        src = croppedImageUrl;
      }
    );

    dialogRef.afterClosed().subscribe(async (result: boolean) => {
      if (result == true) {
        this.user.img = src;
      } else {
        const fileInput = event.target as HTMLInputElement;
        fileInput.value = '';
      }
    });
  }

  ngOnInit() {
    if (localStorage.getItem('theme') == null) {
      localStorage.setItem('theme', 'light-theme');
    }
    this.theme = localStorage.getItem('theme');
    this.nameForm.setValue(this.data.user.name);
  }
}
