
//Meu primeiro componente 

import MyComponent from "./MyComponent";

// Para usar JS no react usamos os templete Expression {}

const FirstComponent = () => {
    return (
        <div>
            <h2>
                Meu primeiro componente!
                {/* comentario */}
            </h2>
            <MyComponent/>
        </div>
    )
}


export default FirstComponent ;