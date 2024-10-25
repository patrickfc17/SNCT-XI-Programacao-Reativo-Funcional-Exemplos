"use client";

import { KeyboardEvent, useState } from "react";

type Todo = {
    nome: string;
    status: "iniciado" | "finalizado";
};

const todos: Todo[] = [
    {
        nome: "Lavar os pratos",
        status: "finalizado",
    },
    {
        nome: "Arrumar o quarto",
        status: "finalizado",
    },
    {
        nome: "Dar banho no cachorro",
        status: "iniciado",
    },
    {
        nome: "Escovar os dentes",
        status: "iniciado",
    },
    {
        nome: "Limpar o computador",
        status: "finalizado",
    },
];

export default function Home() {
    const [todosList, setTodos] = useState<Todo[]>(todos);
    const handleKeyDown = (e: KeyboardEvent): void => {
        if (e.key !== "Enter") return;
        const target = e.target as HTMLInputElement | undefined;

        setTodos(() => [
            ...todosList,
            {
                nome: target?.value ?? "",
                status: "iniciado",
            },
        ]);
    };

    return (
        <main className="w-full flex flex-col items-center mt-16">
            <section className="mb-4">
                <input
                    className="border border-slate-500 rounded h-8 w-64 outline-none"
                    type="text"
                    onKeyDown={handleKeyDown}
                />
            </section>
            <ul className="text-justify">
                {todosList.map((todo, i) => (
                    <li key={i}>
                        {todo.nome} - {todo.status}
                    </li>
                ))}
            </ul>
        </main>
    );
}
