import { Observable } from "rxjs";

const obs$ = new Observable<number>((subscriber) => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);

    setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
    }, 1000);
});

obs$.subscribe({
    next: (num) => {
        console.log(num);
    },
    error: (err) => {
        throw new Error(err);
    },
    complete: () => console.log("Finalizado"),
});
