import { from, map } from "rxjs";

type APIUser = {
    name: string;
    email: string;
};

const users: APIUser[] = [
    {
        name: "Patrick Ferreira",
        email: "patrickferreira@email.com",
    },
    {
        name: "Arthur Santos",
        email: "arthussantos@email.com",
    },
    {
        name: "Rafael Carvalho",
        email: "rafaelcarvalho@email.com",
    },
];

from(users)
    .pipe(
        map(
            (user): APIUser =>
                ({
                    name: user.name.split(" ")[0],
                    email: user.email,
                } satisfies APIUser)
        )
    )
    .subscribe((user) => {
        console.log(`${user.name} - ${user.email}`);
    });
