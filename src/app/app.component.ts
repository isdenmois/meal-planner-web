import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnDestroy } from '@angular/core'
import { Auth } from 'firebase/auth'
import { FIREBASE_AUTH } from 'shared/libs/firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnDestroy {
  isLoaded = false
  isLoggedId = false

  private unsubscribe = this.auth.onAuthStateChanged(user => {
    this.isLoaded = true
    this.isLoggedId = !!user

    this.cdr.detectChanges()
  })

  constructor(@Inject(FIREBASE_AUTH) private auth: Auth, private cdr: ChangeDetectorRef) {}

  ngOnDestroy(): void {
    this.unsubscribe()
  }
}
