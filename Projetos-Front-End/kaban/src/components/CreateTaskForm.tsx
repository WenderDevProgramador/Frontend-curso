import { Dialog, Button, Flex, Box, Text, TextField, TextArea, RadioGroup, Badge } from "@radix-ui/themes";
import { PlusIcon } from "@radix-ui/react-icons";
import type { FormEventHandler } from "react";
import {z} from "zod";

const CreateTaskSchema = z.object({
    title: z.string(),
    description: z.string(),
    status: z.enum(['todo', 'doing', 'done']),
    priority: z.enum(['low', 'medium', 'high']),
});


export const CreateTaskForm: React.FC = () => {
    const handleSubmit: FormEventHandler<HTMLFormElement> = async (ev) => {
        ev.preventDefault();

        const formData = new FormData(ev.currentTarget);

        const title = formData.get('title')
        const description = formData.get('Description');
        const status = formData.get('status');
        const priority = formData.get('Priority');

        ev.currentTarget.reset();

        const taskData = CreateTaskSchema.parse({ title, description, status, priority });
        alert(`Tarefa criada: ${JSON.stringify(taskData)}`);

    }


    return (
        <Dialog.Root>
            <Dialog.Trigger>
                <Button><PlusIcon />Nova Tarefa</Button>
            </Dialog.Trigger>
            <Dialog.Content
                maxWidth='32rem'
                style={{
                    margin: 'auto', // centraliza horizontalmente
                }}
            >
                <Dialog.Title>Nova tarefa</Dialog.Title>

                <Dialog.Description size='2' mb='2'>
                    Adicione nova tarefa.
                </Dialog.Description>

                <form onSubmit={handleSubmit}>
                    <Flex direction='column' gap='1'>
                        <Box width="100%">
                            <Box mb={'2'}>
                                <Text as='label' htmlFor="title">Título</Text>
                            </Box>
                            <TextField.Root placeholder="Defina um titulo" name="title" id="title" autoFocus required />
                        </Box>

                        <Box width="100%">
                            <Box mb={'2'}>
                                <Text as='label' htmlFor="Description">Descrição</Text>
                            </Box>
                            <TextArea placeholder="Descreva a tarefa" name="Description" id="Description" required />
                        </Box>

                        <Flex direction={{ initial: 'column', sm: 'row' }} gap='8'>
                            <Box>
                                <Text as='div' mb={'2'}>Situação</Text>
                                <RadioGroup.Root name="status" defaultValue='todo' required>
                                    <RadioGroup.Item value='todo'>
                                        <Badge color='gray'>Para fazer</Badge>
                                        
                                    </RadioGroup.Item>

                                    <RadioGroup.Item value='doing'>
                                        <Badge color='yellow'>Em progresso</Badge>
                                        
                                    </RadioGroup.Item>

                                    <RadioGroup.Item value='done'>
                                        <Badge color='green'>Concluída</Badge>
                                        
                                    </RadioGroup.Item>
                                </RadioGroup.Root>
                            </Box>

                            <Box>
                                <Text as='div' mb={'2'}>Prioridade</Text>
                                <RadioGroup.Root name="Priority" defaultValue='low' required>
                                    <RadioGroup.Item value='low'>
                                        <Badge color='sky'>Baixa</Badge>
                                        
                                    </RadioGroup.Item>

                                    <RadioGroup.Item value='medium'>
                                        <Badge color='amber'>Média</Badge>
                                        
                                    </RadioGroup.Item>

                                    <RadioGroup.Item value='high'>
                                        <Badge color='tomato'>Alta</Badge>
                                        
                                    </RadioGroup.Item>
                                </RadioGroup.Root>
                            </Box>

                            <Box>
                                {/* Espaço reservado (vazio) */}
                            </Box>
                        </Flex>

                        <Flex gap={'2'} justify={'end'}>
                            <Dialog.Close>
                                <Button color="gray" variant="soft">Cancelar</Button>
                            </Dialog.Close>
                            <Button type="submit">Criar tarefa</Button>
                        </Flex>

                    </Flex>
                </form>

            </Dialog.Content>

        </Dialog.Root>
    );
}
