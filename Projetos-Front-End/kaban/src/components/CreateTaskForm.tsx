import { Dialog, Button, Flex, Box, Text, TextField, TextArea, RadioGroup } from "@radix-ui/themes";
import { PlusIcon } from "@radix-ui/react-icons";

export const CreateTaskForm: React.FC = () => {
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

                <form>
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
                                        Para fazer
                                    </RadioGroup.Item>

                                    <RadioGroup.Item value='doing'>
                                        Em progresso
                                    </RadioGroup.Item>

                                    <RadioGroup.Item value='done'>
                                        Concluída
                                    </RadioGroup.Item>
                                </RadioGroup.Root>
                            </Box>

                            <Box>
                                <Text as='div' mb={'2'}>Prioridade</Text>
                                <RadioGroup.Root name="Priority" defaultValue='low' required>
                                    <RadioGroup.Item value='low'>
                                        Baixa
                                    </RadioGroup.Item>

                                    <RadioGroup.Item value='medium'>
                                        Média
                                    </RadioGroup.Item>

                                    <RadioGroup.Item value='high'>
                                        Alta
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
