import React from 'react'
import Card from 'react-bootstrap/Card';



class Child extends React.Component{
 
 componentDidMount(){
    setInterval(() => {
      this.setState({count:this.state.count+1})
    }, 1000);
   }
state ={count:0}

render(){
  console.log(this.props.state);
 return (
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>{this.props.state.Person.fullName}</Card.Title>
    <Card.Text>
    {this.props.state.Person.bio}
 count: {this.state.count}
    </Card.Text>
    {this.props.state.Person.profession}
  </Card.Body>
</Card>
  )
 }

 
}



export default Child