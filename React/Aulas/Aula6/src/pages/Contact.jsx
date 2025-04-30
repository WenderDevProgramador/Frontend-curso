export default function Contact() {
    return (
        <div className="container py-5">
            <h2 className="mb-4">Entre em Contato</h2>
            <form className="row g-3">
                <div className="col-md-6">
                    <label htmlFor="nome" className="form-label">Nome</label>
                    <input type="text" className="form-control" id="nome" placeholder="Seu nome" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="email" className="form-label">E-mail</label>
                    <input type="email" className="form-control" id="email" placeholder="seu@email.com" />
                </div>
                <div className="col-12">
                    <label htmlFor="mensagem" className="form-label">Mensagem</label>
                    <textarea className="form-control" id="mensagem" rows="4" placeholder="Digite sua mensagem aqui"></textarea>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-success">Enviar Mensagem</button>
                </div>
            </form>
        </div>
    );
}
