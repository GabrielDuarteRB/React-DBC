import styles from './Lista.module.css'

const Lista = ({titulo, itens}) => {
    return(
        <>
            <h4 className={styles.titulo}>{titulo}</h4>
            <ul className={styles.lista}>
                {itens.map((i, index) => ( 
                    <li key={index}>
                        <a href='#'>
                            {i}
                        </a>
                    </li>
                ))}
            </ul>
        </>
    )
}

const ListaComIcones = ({titulo, itens}) => {
    return(
        <>
         <h4 className={styles.titulo}>{titulo}</h4>
            <ul className={styles.listaComIcones}>
                {itens.map((i, index) => ( 
                    <li key={index}>
                        <a href='#'>
                            {<i.icone/>}
                            {i.paragrafo}
                        </a>
                    </li>
                ))}
            </ul>
        </>
    )
}

const ListaDeitada = ({itens}) => {
    return(
        <>
            <ul className={styles.listaDeitada}>
                {itens.map((i, index) => ( 
                    <li key={index}>
                        <a href='#'>
                            {i}
                        </a>
                    </li>
                ))}
            </ul>
        </>
    )
}

export {Lista, ListaComIcones, ListaDeitada}