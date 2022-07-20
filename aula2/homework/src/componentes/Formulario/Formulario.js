import styles from './Formulario.module.css'

const FormularioSobre = () => {
    return (
        <form className={styles.formulario}>
            <div>
                <label type='text' placeholder="Digite sua Mensagem" >Digite seu nome completo:</label>
                <input/>
            </div>
            <div>
                <label type='e-mail' placeholder="Digite o e-mail" >Digite seu e-mail:</label>
                <input/>
            </div>
            <div>
                <label>Qual o motivo do contato</label>
                <select>
                    <option>Problema no site</option>
                    <option>Problema de conexão</option>
                    <option>Melhoria</option>
                </select>
            </div>
            <div>
                <label>Sua Mensagem</label>
                <textarea type='text' placeholder="Digite sua Mensagem"cols="30" rows="10"></textarea>
            </div>
            <button>Salvar</button>
        </form>
    )
}

export default FormularioSobre