import React, { ReactNode } from "react";

interface TaskListProps {
    children: ReactNode
}

export const TaskList = ({ children }:TaskListProps) => {
    return (
        <section>
            { children }
        </section>
    );
}