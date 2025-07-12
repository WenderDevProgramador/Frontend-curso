import { createContext, useState } from 'react';
import PropTypes from 'prop-types';




export const StockContext = createContext({});




export const StockContextProvider = ({ children }) => {
    const [items, setItems] = useState(() => {
        const storedItems = localStorage.getItem('obc-react-stock');
        if (!storedItems) return [];

        const items = JSON.parse(storedItems);
        items.forEach((item) => {
            item.createAt = new Date(item.createAt)
            item.upDateAt = new Date(item.upDateAt)


        });
        return items;
    });

    const addItem = (item) => {
        setItems(currentState => {
            const updateItems = [item, ...currentState];
            localStorage.setItem('obc-react-stock', JSON.stringify(updateItems));
            return updateItems;
        })
    }


    const stock = {
        items,
        addItem
    }



    return (
        <StockContext.Provider value={{ stock }}>
            {children}
        </StockContext.Provider>
    );


}

StockContextProvider.propTypes = {
    children: PropTypes.node,
};