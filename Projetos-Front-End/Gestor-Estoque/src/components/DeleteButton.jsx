import useStock from "../hooks/useStock";
import { useNavigate } from "react-router-dom";

const DeleteButton = ({itemName, itemId}) => {

    const {deleteItem} = useStock();
    const navigate = useNavigate();

    const handleDelete = () => {
        if (confirm(`Tem certeza que deseja excluir ${itemName}?`)) {
            
            deleteItem(itemId);
            alert(`${itemName} foi excluído com sucesso!`) ;
            navigate("/items");
            
        }
    }


    return (
        <button className="delete-button" onClick={handleDelete}>
            Excluir
            </button>
    )
}

export default DeleteButton