import React from 'react';
import Header from './partials/Header';
import Footer from './partials/Footer';

class Root extends React.Component {
    render () {
        return (<div>
                      <Header />
                    
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                              {this.props.children}
                            </div>
                        </div>
                    </div>

                    <Footer />
                </div>);
    }
}

export default Root;