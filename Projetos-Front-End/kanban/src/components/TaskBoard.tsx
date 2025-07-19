import { useContext } from "react";
import { TasksContext } from "../contexts/TaskContext";
import { TaskCard } from "./TaskCard";
import { Badge, Flex, Grid, ScrollArea } from "@radix-ui/themes";

export const TaskBoard: React.FC = () => {
    const { tasks } = useContext(TasksContext);

    const tasksTodo = tasks.filter((task) => task.status === "todo");
    const tasksInProgress = tasks.filter((task) => task.status === "doing");
    const tasksDone = tasks.filter((task) => task.status === "done");

    return (
        <ScrollArea scrollbars="horizontal">
            <Grid columns="3" gap="4" minWidth="64rem">
                <Flex direction="column" gap="4">
                    <Badge size="3" color="gray">
                        Para Fazer ({tasksTodo.length})
                    </Badge>
                    {tasksTodo.map((task) => (
                        <TaskCard key={task.id} task={task} />
                    ))}
                </Flex>

                <Flex direction="column" gap="4">
                    <Badge size="3" color="yellow">
                        Em Progresso ({tasksInProgress.length})
                    </Badge>
                    {tasksInProgress.map((task) => (
                        <TaskCard key={task.id} task={task} />
                    ))}
                </Flex>

                <Flex direction="column" gap="4">
                    <Badge size="3" color="green">
                        Concluídas ({tasksDone.length})
                    </Badge>
                    {tasksDone.map((task) => (
                        <TaskCard key={task.id} task={task} />
                    ))}
                </Flex>
            </Grid>
        </ScrollArea>
    );
};