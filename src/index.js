import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import { Switch } from 'react-router';

import NewConcept from './Components/Main/NewConcept';
import GrantDashBoard from './Components/Main/NewConcept/GrantDashBoard';
import Welcome from './Components/Main/Welcome';
import SignUp1 from './Components/Main/SignUp/SignUp1';
import SignUp2 from './Components/Main/SignUp/SignUp2';
import SignUp3 from './Components/Main/SignUp/SignUp3';
import SignUp4 from './Components/Main/SignUp/SignUp4';
import Step1 from './Components/Main/Granting/Step1';
import Step2 from './Components/Main/Granting/Step2';
import Step3 from './Components/Main/Granting/Step3';
import Step4 from './Components/Main/Granting/Step4';


const routes = (
    <BrowserRouter>
        <div>
            <App>
                <div>
                    <Switch>
                        <Route exact path="/" component={SignUp1} />
                        <Route path="/welcome" component={Welcome} /> 
                        <Route path="/newconcept" component={NewConcept} />                        
                        <Route path="/grantdashboard" component={GrantDashBoard} />
                        <Route path="/signup1" component={SignUp1} />
                        <Route path="/signup2" component={SignUp2} />
                        <Route path="/signup3" component={SignUp3} />
                        <Route path="/signup4" component={SignUp4} />
                        <Route path="/step1" component={Step1} />
                        <Route path="/step2" component={Step2} />
                        <Route path="/step3" component={Step3} />
                        <Route path="/step4" component={Step4} />
                        {/* <Route path="/contribute" component={Contribute} />
                        <Route path="/report" component={Report} />
                        <Route path="/profile" component={Profile} /> */}
                    </Switch>
                </div>
            </App>
        </div>
    </BrowserRouter>
);
ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();
