import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Auth } from 'firebase/auth'
import { firebaseAuth, FIREBASE_AUTH } from 'shared/libs/firebase'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  form = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  })
  error: string | null = null

  constructor(@Inject(FIREBASE_AUTH) private auth: Auth, private fb: FormBuilder, private cdr: ChangeDetectorRef) {}

  async onSubmit(event: SubmitEvent) {
    event.preventDefault()
    this.error = null

    const { email, password } = this.form.value

    if (!email || !password) {
      return
    }

    this.form.disable()

    try {
      await firebaseAuth.signInWithEmailAndPassword(this.auth, email, password)
    } catch (e) {
      this.form.enable()
      this.form.controls.email.setErrors({ exist: "This user doesn't exist" })
      this.cdr.detectChanges()
    }
  }
}
