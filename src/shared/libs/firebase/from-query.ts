import { Observable } from 'rxjs'
import { Query } from 'firebase/firestore'
import { firestore } from './firestore'

interface ObservableCollection<T> {
  isLoading: boolean
  data: T[]
}

export function fromQuery<T>(query: Query): Observable<ObservableCollection<T>> {
  return new Observable(observer => {
    observer.next({ data: [], isLoading: true })

    const unsubscribe = firestore.onSnapshot(query, querySnapshot => {
      const data: T[] = []

      querySnapshot.forEach(doc => {
        data.push({
          id: doc.id,
          ...doc.data(),
        } as any)
      })

      observer.next({ isLoading: false, data })
    })

    return unsubscribe
  })
}
