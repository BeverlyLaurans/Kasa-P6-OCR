import "../../styles/Error.css"

function Error() {
    return (
      <div className="error">
        <p className="error-title">404</p>
        <p className="error-description">Oups! La page que vous demandez n'existe pas.</p>
        <a href="/">Retourner sur la page d’accueil</a>
      </div>
    )
  }
  
  export default Error