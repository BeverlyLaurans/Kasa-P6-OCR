import "../../styles/scss/components/_Error.scss";

function Error() {
    return (
      <div className="error">
        <p className="error__title">404</p>
        <p className="error__description">Oups! La page que vous demandez n'existe pas.</p>
        <a href="/">Retourner sur la page d’accueil</a>
      </div>
    )
  }
  
  export default Error;