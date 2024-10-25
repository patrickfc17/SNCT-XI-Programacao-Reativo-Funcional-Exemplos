type User = {
    name: string;
    email: string;
};
type Callback = (data: User[]) => string;
type ReturnFunc = () => void;

const fetchAPI = async (
    url: string,
    afterFetch: Callback
): Promise<ReturnFunc> => {
    const users: User[] = await fetch(url).then((res) => res.json());

    const res = afterFetch(users);

    return () => console.log(res);
};

fetchAPI("https://jsonplaceholder.typicode.com/users", (users) => {
    users.forEach((user) => console.log(`${user.name} - ${user.email}`));

    return "Concluído";
}).then((mensagem) => mensagem());
