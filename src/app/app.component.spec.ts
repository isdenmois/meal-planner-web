import { NO_ERRORS_SCHEMA } from '@angular/core'
import { render, screen } from '@testing-library/angular'

import { Auth } from 'firebase/auth'

import { FIREBASE_AUTH } from 'shared/libs/firebase'
import { AppComponent } from './app.component'

describe('AppComponent', () => {
  const onAuthStateChanged = jasmine.createSpy().and.returnValue(() => {})
  const auth = { onAuthStateChanged: onAuthStateChanged as unknown } as Auth
  const changeAuthState = (state: any) => onAuthStateChanged.calls.mostRecent().args[0](state)

  beforeEach(async () => {
    await render(AppComponent, {
      providers: [{ provide: FIREBASE_AUTH, useValue: auth }],
      schemas: [NO_ERRORS_SCHEMA],
    })
  })

  afterEach(() => {
    onAuthStateChanged.calls.reset()
  })

  it('should render loading on initial render', () => {
    expect(screen.getByText('Loading...')).toBeInTheDocument()
    expect(screen.queryByTestId('router-root')).not.toBeInTheDocument()
    expect(screen.queryByTestId('login')).not.toBeInTheDocument()
  })

  it('should render login when is not authed', async () => {
    changeAuthState(null)

    expect(screen.getByTestId('login')).toBeInTheDocument()
  })

  it('should render login when is not authed', async () => {
    changeAuthState({})

    expect(screen.getByTestId('router-root')).toBeInTheDocument()
  })
})
