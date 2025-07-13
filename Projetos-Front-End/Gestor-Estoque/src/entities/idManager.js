export function getNextId() {
    const idKey = "nextId"
    let nextId = parseInt(localStorage.getItem(idKey), 10)

    // Se não existe ainda, inicializa com 1
    if (isNaN(nextId)) {
        nextId = 1
    }

    // Salva o próximo ID incrementado
    localStorage.setItem(idKey, (nextId + 1).toString())

    console.log(`[idManager] Próximo ID gerado: ${nextId}`)
    return nextId
}