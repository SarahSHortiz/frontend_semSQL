import PropTypes from "prop-types";
import styles from "./Cards.module.css"; 

function Cards({nome, tipo, artista, imagem}) {
    return(
        <div className={styles.Cards}>
            <img src={imagem} alt={nome} className={styles.image} />
            <p>Nome: {nome}</p>
            <p>Tipo: {tipo}</p>
            <p>Artista: {artista}</p>
        </div>

// parametros para puxar as informações e organiza-las.

    );
}
Cards.propTypes = {
    nome: PropTypes.string.isRequired,
    tipo: PropTypes.string.isRequired,
    artista: PropTypes.string.isRequired,
    imagem: PropTypes.string.isRequired,


  };

//   O react estava apresentando falha ao puxar a props, pedindo para add PropTypes
export default Cards;