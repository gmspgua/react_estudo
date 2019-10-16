class HelloWorld extends React.Component {
  
    constructor() {
    super();
    this.state = {
      show: false,
      color: 'black'
    }
      this.onHandleLoad = this.onHandleLoad.bind(this);
      this.onHandleChangeColor = this.onHandleChangeColor.bind(this);
    };
  
  onHandleLoad(){
    this.setState(prevState =>({
      show: !prevState.show,
      color:!prevState.color
    }));   
  }
  
   onHandleChangeColor(){
    this.setState({
    color: 'blue'
    });  
  }
  
    render() {
       const show = this.state.show;
        return(
          <>
          <button onClick={this.onHandleLoad}>Load</button>
           {show &&
           <>   
          <button onClick={this.onHandleChangeColor}>Change Color</button>
          <h1 style={{color:this.state.color}}>Hello, World</h1>
           </>
           }   
          </> 
          )
    }
}


ReactDOM.render(<HelloWorld/>,document.getElementById('root'));