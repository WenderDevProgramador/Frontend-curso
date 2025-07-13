import { Link } from "react-router-dom";
import useStock from "../hooks/useStock";
import './ItemsTable.css';
import DeleteButton from "./DeleteButton";

export default function ItemsTable() {
    const { items } = useStock();

    return (
        <div className="table-container">
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Em Estoque</th>
                    <th>Categoria</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {Array.isArray(items) && items.map((item) => (
                    <tr key={item.id}>
                        <td className="id">{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.quantity} unid.</td>
                        <td>{item.category}</td>
                        <td className="ajustar">
                        
                            <Link to={`/items/${item.id}`} className="buttonP">
                                Visualizar
                            </Link>
                            <Link to={`/items/${item.id}/update`} className="buttonBlack">
                                Atualizar
                            </Link>
                            <DeleteButton itemId={item.id} itemName={item.name}/>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

        </div>
    );
}
