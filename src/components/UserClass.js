import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      userInfo:{
        name:"",
        location:"",
      },
      count: 0,
      count2: 2,
    };
    console.log(this.props.name + " Child constructor");
  }

  async componentDidMount(){
    // console.log(this.props.name + " Child component did mount");
    // const response = await fetch("https://api.github.com/users/iam-harshit");
    // const data = await response.json();
    // // console.log(data);
    // this.setState({
    //     userInfo : data,
    // });
    this.timer = setInterval(() => {
        console.log("Hello");
    }, 1000);
  }

  componentDidUpdate(){
    console.log(this.props.name + " Component did update");
  }

  componentWillUnmount(){
    clearInterval(this.timer);
    console.log(this.props.name + " Component will unmount")
  }

  render() {
    console.log(this.props.name + " Child Render");
    const { name, location } = this.props;
    return (
      <div>
        <h2>Count : {this.state.count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button>
        <h3>Name: {this.state.userInfo.name}</h3>
        <h3>Location: {this.state.userInfo.location}</h3>
      </div>
    );
  }
}

export default UserClass;
