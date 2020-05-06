import React, { PureComponent } from 'react';
import {renderRoutes} from "react-router-config"//路由插件
class App extends PureComponent{
  render(){
    return <div className="App">
    {
      renderRoutes(this.props.route.routes)
    }
    </div>
  }
}

export default App;
