import { useState, useRef } from 'react'
// Funzione con espressione regolare per la validazione del nome completo
function isValidName(name) {
  const regex = /^(?!.*\d)(?!.*[^a-zA-Z\s])[a-zA-Z\s]{2,}$/;
  return regex.test(name);
}
function isValidUsername(username) {
  const regex = /^[a-zA-Z0-9]+$/
  return regex.test(username);
}
function isValidPass(pass) {
  const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/
  return regex.test(pass);
}
function isValidDescription(text) {
  const trimmed = text.trim();
  console.log(trimmed.length >= 100 && trimmed.length <= 1000);
  return trimmed.length >= 100 && trimmed.length <= 1000;
}

function App() {

  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const specialization = useRef("1");
  const experience = useRef("");
  console.log(experience.current);
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    console.log(password)
  }
  const handleUsernameChange = (e) => {

    setUsername(e.target.value);
    console.log(username)
  }
  const handleNameChange = (e) => {

    setName(e.target.value);
    console.log(name)
  }
  const handleDescriptionChange = (e) => {

    setDescription(e.target.value);
    console.log(description)
  }
  const handleSpecializationChange = () => {
    console.log(specialization.current.value);
    return specialization.current.value;
  }
  const handleExperienceChange = () => {

    console.log(experience.current.value);
    return experience.current.value;

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nome:", name);
    console.log("Username:", username);
    handleSpecializationChange()
    handleExperienceChange()
  }

  return (
    <>
      <div className="container text-white mt-5">
        <h1 className="text-center">Form</h1>
        <form action="submit" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label"required>Nome completo</label>
            <input onChange={handleNameChange} type="text" className="form-control"  min="3" max="50"  pattern="^[a-zA-ZÀ-ÿ\s']{2,50}$"/>
            <div className="form-text text-white"></div>
            {/* //NOTE - name */}
            {name !== "" && (
              !isValidName(name) ? (
                <div className="alert alert-danger" role="alert">
                  Deve contenere almeno 2 caratteri e non deve contenere numeri [ 0-9 ] o caratteri speciali [ /|!"' ].
                </div>
              ) : (
                <div className="alert alert-success" role="alert">
                  <p>Campo compilato correttamente</p>
                </div>
              )
            )}
          </div>
          <div className="mb-3">
            <label className="form-label" >Username</label>
            <input onChange={handleUsernameChange} type="text" className="form-control" min="3" max="50" pattern='^[a-zA-Z0-9]+$' required />
            <div className="form-text"></div>
            {/* //NOTE - username */}
            {username !== "" && (
              !isValidUsername(username) && username != "" ? (<div className="alert alert-danger" role="alert">
                Deve contenere solo caratteri alfanumerici [a-zA-Z0-9] e almeno 6 caratter i (no spazi o simboli [ /|!"' ]).
              </div>) : (<div className="alert alert-success" role="alert">
                <p>Campo compilato correttamente</p>
              </div>))
            }
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input onChange={handlePasswordChange} type="password" className="form-control" min="6" pattern='^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$' required />
            {/* //NOTE - password */}
            {password !== "" && (
              !isValidPass(password) && password != "" ? (<div class="alert alert-danger" role="alert">
                Deve contenere almeno 8 caratteri, 1 [a-z], 1 numero [ 0-9 ] e 1 simbolo [ /|!"' ]
              </div>) : (<div className="alert alert-success" role="alert">
                <p>Campo compilato correttamente</p>
              </div>))
            }
          </div>
          {/* // NOTE - Specializzazione */}
          <div className="mb-3">
            <label className="form-label">Seleziona la tua specializzazione</label>
            <select defaultValue={""} className="form-select form-select-lg mb-3" aria-label="Large select example" required ref={specialization}>
              <option value="">Specializzazione</option>
              <option value="Full Stack">Full Stack</option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
            </select>
          </div>
          {/* //NOTE - Anni di esperienza */}
          <div className="mb-3">
            <label className="form-label">Anni di esperienza</label>
            <input type="number" className="form-control" />
          </div>
          {/* //NOTE - DESCRIZIONE */}
          <div className="">
            <label className="form-label" >Inserisci una breve descrizione</label>
            <textarea onChange={handleDescriptionChange} className="form-control" placeholder="Scrivi qui...." id="floatingTextarea2" ></textarea>
            {description !== "" && (
              !isValidDescription(description) && description != "" ? (<div className="alert alert-danger" role="alert">
                Il nome deve contenere almeno 2 caratteri e non deve contenere numeri [ 0-9 ] o caratteri speciali[ /|!"' ].
              </div>) : (<div className="alert alert-success" role="alert">
                <p>Campo compilato correttamente</p>
              </div>))
            }
          </div>
          <button type="submit" className="btn btn-primary mt-3">Submit</button>
        </form>
      </div>
    </>
  )
}

export default App
