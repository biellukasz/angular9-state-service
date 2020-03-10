import {BehaviorSubject, Observable, of, throwError} from 'rxjs';
import {Injectable} from '@angular/core';
import {State} from './state';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  private stateSubject: BehaviorSubject<State> =
    new BehaviorSubject({productQuantity: 0, error: ''});

  addProduct(quantity: number): void {
    let state: State = this.stateSubject.value;
    // HTTP request
    if (quantity < 20) {
      state = {
        // cloning state
        ...state,
        // setting new values
        productQuantity: state.productQuantity + quantity,
        error: ''
      };
    } else {
      state = {
        ...state,
        error: 'Too many products'
      };
    }
    this.stateSubject.next(state);
  }
  // make sure that we can only use subscription
  get getState(): Observable<State> {
    return this.stateSubject.asObservable();
  }
}
