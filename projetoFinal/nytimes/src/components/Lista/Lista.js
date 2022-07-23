import { Link } from 'react-router-dom'
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

    const links = ['Science', 'World', "Politics", 'Health', 'Tech']

    return(
        <>
            <ul className={styles.listaDeitada}>
                {itens.map((i, index) => ( 
                    <li key={index}>
                        <Link to={links.includes(i) === true ? i : '#'}>
                            {i}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export {Lista, ListaComIcones, ListaDeitada}