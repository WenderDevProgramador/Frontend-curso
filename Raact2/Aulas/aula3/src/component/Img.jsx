import YuYu from '../assets/yuyu.webp'

function Img() {
    return (
        <div>
            
            {/* Imagem public */}
            <img src="https://i0.wp.com/bitsebaits.com/wp-content/uploads/2024/02/yu-yu-hakusho.jpeg" alt="Imagem YUYU" />

            <h2>Proxima imagem</h2>

            <img src={YuYu} alt="YUYU 2" />
        </div>
    )
}

export default Img