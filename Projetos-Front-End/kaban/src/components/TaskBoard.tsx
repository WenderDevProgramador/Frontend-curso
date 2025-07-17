import { Badge, Flex, Grid } from '@radix-ui/themes';
import { Task } from '../entities/Task.ts';


export const TaskBoard = () => {
    const taskTodo: Task[] = [{
        "id": 2,
        "title": "Reunião com a equipe",
        "description": "Reunião para discutir o progresso do projeto e próximos passos.",
        "status": "todo",
        "priority": "high"
    },
    {
        "id": 4,
        "title": "Implementar testes",
        "description": "Desenvolver os testes automatizados na nova funcionalidade do aplicativo.",
        "status": "todo",
        "priority": "medium"
    }];
    const taskInProgress: Task[] = [{
        "id": 1,
        "title": "Enviar relatório",
        "description": "Enviar o relatório mensal para o departamento financeiro.",
        "status": "doing",
        "priority": "high"
    },];
    const taskDone: Task[] = [{
        "id": 3,
        "title": "Atualizar o site",
        "description": "Fazer atualizações no site da empresa com novas informações.",
        "status": "done",
        "priority": "medium"
    },];

    return (
        <Grid columns={'3'} gap={'4'} minWidth={'64rem'}>
            <Flex direction="column" gap="4">
                <Badge size='3' color='gray'>
                    Para fazer (2)
                </Badge>
            </Flex>

            <Flex direction="column" gap="4">
                <Badge size='3' color='yellow'>
                    Em progresso (2)
                </Badge>
            </Flex>

            <Flex direction="column" gap="4">
                <Badge size='3' color='gray'>
                    Concluida (2)
                </Badge>
            </Flex>
        </Grid>
    );
}