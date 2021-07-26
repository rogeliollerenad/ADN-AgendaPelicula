import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import Logo from 'assets/image/logo-cine.png';
import './scss/style.scss';

export interface LandingProps {
  onContinue: (name: string) => void;
}
export const Landing: React.FC<LandingProps> = ({ onContinue }) => {
  const [text, setText] = useState('');
  const [showError, setShowError] = useState(false);

  const handleInput = () => {
    if (text.length <= 0 || text.includes(':')) {
      setShowError(true);
      return;
    }
    setShowError(false);
    onContinue(text);
  };
  return (
    <>
      <div className="limiter">
        <div className="container-login">
          <div
            className="login-imgbg"
            style={{
              backgroundImage: `url("https://cdn.pixabay.com/photo/2017/11/24/10/43/ticket-2974645_960_720.jpg")`,
            }}
          />
          <div className="wrap-login p-l-50 p-r-50 p-t-72 p-b-50">
            <img src={Logo} alt="Logo" />
            <div className="login-formulario validate-form">
              <span className="login-formulario-title p-b-59">CineApp</span>
              <div className="login-formulario-description">
                <p>
                  Para ver la Cartelera de películas, primero háganos saber su
                  nombre
                </p>
              </div>
              <div className="login-formulario-input">
                <TextField
                  id="standard-secondary"
                  label="Nombre Completo"
                  className="input"
                  error={showError}
                  value={text}
                  helperText={showError && 'Entrada incorrecta.'}
                  onChange={(e) => setText(e.target.value)}
                />
                <div className="wrap-input">
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    className="bg-golden"
                    onClick={() => handleInput()}
                  >
                    Ingresar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
