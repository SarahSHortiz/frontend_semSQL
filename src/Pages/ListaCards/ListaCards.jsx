import Cards from "../../Components/Cards/Cards";

function ListaCards() {
  return (
    <div>
      <h2>Lista de desenhos</h2>
      <div className="card-container">
        <Cards
          nome="arte 8bits"
          tipo="8bits"
          artista="joel"
          imagem="/src/assets/image/gabriel-nagypal-statue-03.jpg"
        />
        <Cards
          nome="arte 8bits"
          tipo="8bits"
          artista="joel"
          imagem="/src/assets/image/philipp-a-urlich-bridge-320x240-des.jpg"
        />
        <Cards
          nome="arte 8bits"
          tipo="8bits"
          artista="joel"
          imagem="/src/assets/image/rutger-van-de-steeg-a-secret-place-pixel-art-png.jpg"
        />
      </div>
    </div>
  );
}

export default ListaCards;
