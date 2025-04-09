import { Observable } from "rxjs";

export interface UseCase<S, T> {
    execute(params: S): Observable<T>
}

export interface UC<S, U, T> {
    execute(params1: S, params2: U): Observable<T>
}