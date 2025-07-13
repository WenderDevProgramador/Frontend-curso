import useStock from "../hooks/useStock";

const DeleteButton = ({itemName, itemId}) => {

    const {deleteItem} = useStock();

    const handleDelete = () => {
        if (confirm(`Tem certeza que deseja excluir ${itemName}?`)) {
            
            deleteItem(itemId);
            alert(`${itemName} foi excluído com sucesso!`) ;
            
        }
    }


    return (
        <button className="delete-button" onClick={handleDelete}>
            Excluir
            </button>
    )
}

export default DeleteButton