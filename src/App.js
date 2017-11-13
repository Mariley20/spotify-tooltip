import React, { Component } from 'react';
import './css/app.css';
import { Button, Tooltip, ButtonToolbar, OverlayTrigger, Overlay } from 'react-bootstrap';

class App extends Component {
  render() {
    const tooltip = (
      <Tooltip id="overload-top">
                <div>
                    <label>Conectar a Un Dispositivo</label>
                    <i className="fa fa-question-circle" aria-hidden="true"></i>
                </div>
                <div>
                    <i className="fa fa-laptop" aria-hidden="true"></i>
                    <label>Este Navegador <br/>
                      <i className="fa fa-volume-up" aria-hidden="true"></i>
                      Spotify Connect
                    </label>
                </div>
      </Tooltip>
    )
    return (
      <div>
        <br/> <br/> <br/> <br/>
          <ButtonToolbar>
              <OverlayTrigger trigger="click" placement="top" overlay={tooltip}>
                {/* <Button bsStyle="default" ></Button> */}
                <span ><i className="fa fa-spotify" aria-hidden="true"></i>
                </span>
              </OverlayTrigger>
          </ButtonToolbar>
      </div>
    );
  }
}

export default App;
