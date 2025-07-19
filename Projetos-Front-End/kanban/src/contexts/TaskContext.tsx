import { createContext, ReactNode, useEffect, useState } from "react";
import { Task } from "../entities/Task";
import { tasksService } from "../services/api";
import { z } from "zod";

const UpdateTaskSchema = z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    status: z.enum(["todo", "doing", "done"]).optional(),
    priority: z.enum(["low", "medium", "high"]).optional()
});

interface TasksContextData {
    tasks: Task[];
    createTask: (attributes: Omit<Task, "id">) => Promise<Task>;
    updateTask: (id: number, attributes: Partial<Omit<Task, "id">>) => Promise<void>;
    deleteTask: (id: number) => Promise<void>;
}

export const TasksContext = createContext({} as TasksContextData);

export const TasksContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        tasksService.fetchTasks().then((data) => setTasks(data));
    }, []);

    const createTask = async (attributes: Omit<Task, "id">) => {
        const task = await tasksService.save(attributes);
        setTasks((current) => [...current, task]);
        return task;
    };

    const updateTask = async (id: number, attributes: Partial<Omit<Task, "id">>) => {
        try {
            await tasksService.update(id, attributes);
            setTasks((current) =>
                current.map((task) => (task.id === id ? { ...task, ...attributes } : task))
            );
        } catch (error) {
            console.error("Erro ao atualizar tarefa:", error);
        }
    };

    const deleteTask = async (id: number) => {
        try {
            await tasksService.delete(id);
            setTasks((current) => current.filter((task) => task.id !== id));
        } catch (error) {
            console.error("Erro ao deletar tarefa:", error);
        }
    };

    return (
        <TasksContext.Provider value={{ tasks, createTask, updateTask, deleteTask }}>
            {children}
        </TasksContext.Provider>
    );
};