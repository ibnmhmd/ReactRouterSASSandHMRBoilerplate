import React  from 'react';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {decompress: ''}
    }
    decompress() {
        let data = {}, obj = {one: '1', two: '2'};
        let { one } = obj ;
        
          let x = data.data.results.replace(/\\n/g, "\\n")
          .replace(/\\'/g, "\\'")
          .replace(/\\"/g, '\\"')
          .replace(/\\&/g, "\\&")
          .replace(/\\r/g, "\\r")
          .replace(/\\t/g, "\\t")
          .replace(/\\b/g, "\\b")
          .replace(/\\f/g, "\\f");
       // remove non-printable and other non-valid JSON chars
        x = data.data.results.replace(/[\u0000-\u0019]+/g,"");
        console.log(x)
      //  this.setState({decompress: JSON.parse(x)});
    
      //var o = JSON.parse(s);
      /** custom code ends **/
   
    //  var json = jQuery.parseJSON(compressed); 
    }
    render() {
        return (
                    <div className = 'container'>
                        <h2>Home is working ...</h2>
                       
                    </div>
                );
    }
}

export default Home;