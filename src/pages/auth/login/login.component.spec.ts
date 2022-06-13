import { CommonModule } from '@angular/common'
import { NO_ERRORS_SCHEMA } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { fireEvent, render, screen } from '@testing-library/angular'

import userEvent from '@testing-library/user-event'
import { Auth, UserCredential } from 'firebase/auth'

import { firebaseAuth, FIREBASE_AUTH } from 'shared/libs/firebase'
import { LoginComponent } from './login.component'
import { Deferred } from 'shared/test-utils'

describe('LoginComponent', () => {
  const auth = {} as Auth
  let emailField: HTMLElement, passwordField: HTMLElement, submitButton: HTMLElement

  beforeEach(async () => {
    await render(LoginComponent, {
      imports: [CommonModule, ReactiveFormsModule],
      providers: [{ provide: FIREBASE_AUTH, useValue: auth }],
      schemas: [NO_ERRORS_SCHEMA],
    })
    emailField = screen.getByPlaceholderText('Email')
    passwordField = screen.getByPlaceholderText('Password')
    submitButton = screen.getByRole('button')
  })

  it('should render the form', () => {
    expect(emailField).toBeInTheDocument()
    expect(passwordField).toBeInTheDocument()
    expect(submitButton).toBeInTheDocument()
  })

  describe('User authorization', () => {
    it('should not send request until the form is filled', async () => {
      spyOn(firebaseAuth, 'signInWithEmailAndPassword')

      fireEvent.click(submitButton)
      expect(firebaseAuth.signInWithEmailAndPassword).not.toHaveBeenCalled()
    })

    it('should authorize user with valid data', async () => {
      spyOn(firebaseAuth, 'signInWithEmailAndPassword').and.resolveTo()

      await userEvent.type(emailField, 'test@example.com')
      await userEvent.type(passwordField, '123')

      fireEvent.click(submitButton)

      expect(firebaseAuth.signInWithEmailAndPassword).toHaveBeenCalledWith(auth, 'test@example.com', '123')
      expect(screen.queryByRole('error')).not.toBeInTheDocument()
    })

    it('should show error when invalid data was inputed', async () => {
      const def = new Deferred<UserCredential>()

      spyOn(firebaseAuth, 'signInWithEmailAndPassword').and.returnValue(def.promise)

      await userEvent.type(emailField, 'test@example.com')
      await userEvent.type(passwordField, '123456')

      await fireEvent.click(submitButton)

      expect(emailField).toBeDisabled()
      expect(passwordField).toBeDisabled()
      expect(submitButton).toBeDisabled()

      await def.reject('auth')

      expect(firebaseAuth.signInWithEmailAndPassword).toHaveBeenCalledWith(auth, 'test@example.com', '123456')
      expect(screen.getByRole('error')).toBeInTheDocument()
      expect(screen.getByText("This user doesn't exist")).toBeInTheDocument()
    })
  })
})
