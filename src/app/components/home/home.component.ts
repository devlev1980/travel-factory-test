import {AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {ContactService} from '../../services/contact.service';
import {IContact} from '../../models/contact';
import {MatDialog} from '@angular/material';
import {AddDialogComponent} from '../../dialogs/add-dialog/add-dialog.component';
import {YesNoDialogComponent} from '../../dialogs/yes-no-dialog/yes-no-dialog.component';
import {EditDialogComponent} from '../../dialogs/edit-dialog/edit-dialog.component';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewChecked,OnDestroy {
  contacts: IContact[] = [];
  sub: Subscription;
  constructor(private contactService: ContactService,
              public dialog: MatDialog,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
   this.sub = this.contactService.getContacts().subscribe((data) => {
      this.contacts = data;
    });

    // this.contactService.getContacts().pipe(
    //   switchMap(contacts => {
    //     contacts.forEach((contact) => {
    //       return this.contactService.getCoordinates(contact.city);
    //     });
    //     return contacts;
    //   })
    // ).subscribe((data) => {
    //   this.contacts.push(data);
    //   this.contacts.forEach(res => {
    //     res.location.lon = data.location.lon;
    //   });
    // });
  }

  ngAfterViewChecked() {
    this.cdr.detectChanges();
  }


  onAddContact() {
    const dialogRef = this.dialog.open(AddDialogComponent, {
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(contact => {
      if (contact) {
        this.contacts.push(contact);
      }
    });
  }

  onDeleteContact(contactId) {
    const dialogRef = this.dialog.open(YesNoDialogComponent, {
      width: '300px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'Yes') {
        this.contacts.splice(contactId, 1);

      }
    });
  }

  onEditContact(contact: IContact, index) {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '600px',
      data: contact
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.contacts[index] = result;

      } else {
        return;
      }
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }


}
