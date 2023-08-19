import React from "react";
import UserFunc from "./UserFunc";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

/**
 * If we have only one children in the parent render() method. Then, what is the flow of this component or we can say 
 * tell me the life cycle of this class component or How the life cycle of these will work?
 *
 *  -> When the About class component load on the web. Then parent means about class constructor will call, then after
 * render() method of the parent class will called. Now it see there is one children UserClass. So, now UserClass
 * will be load on the web. So, child constructor will be call, then after child class render() method will be call,
 * then child class componentDidMount() method will be called. And at last parent class componentDidMount() method will be call.
 * 
 * This is the REACT RENDER PHASE
 * 1. Parent Constructor called
 * 2. Parent render called
 * 3. Child Constructor called
 * 4. Child render called
 * 
 * This is the REACT COMMIT PHASE
 * 5. Child component did mount called
 * 6. Parent did mount called
 * 
 * Why this is happening?
 * Because, react have two phases first, Render phase and the second is commit phase. So first it render all the component.
 * When all the component rendered on the web. Then it commit the actual DOM. Because, DOM manipiluation is very expensive
 * If this is not happening like this, then react has to manipluate the DOM when each children rendered on the web.
 * 
 * This will makes the REACT fast.
*/

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  /**
   * What is the use of componentDidMount() and why we use this?
   * If we need to call an API. Then in this method we have to implement API logic. Why?
   * Because for network call we have to two approach.
   * First, Load -> API call -> Render. The second, Load -> Render -> API call. For better UX we're using the second approach.
   * That's why we're implement our API in this componentDidMount() method.
   */

  componentDidMount() {
    console.log("Parent component did mount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About Page</h1>

        {/* Implementing React.Context here */}
        <div>
        <UserContext.Consumer>
          {({loggedInUser}) => (
            <h1 className="font-bold text-2xl">{loggedInUser}</h1>
          )}
        </UserContext.Consumer>
        </div>
        <br />
        {/* This way we can call function component */}
        <UserFunc name="Harshit (From Function)" location="Uttarakhand"/> 
        <br />
        <br />
        {/* This way we can call class component */}
        <UserClass name="First" location="Uttarakhand" />
        <UserClass name="Second" location="Uttarakhand" />
        <UserClass name="Third" location="Uttarakhand" />
        <UserClass name="Fourth" location="Uttarakhand" />
        <UserClass name="Fifth" location="Uttarakhand" />
      </div>
    );
  }
}

/**
 * If we have multiple children in the parent render() method. Then, what is the flow of this component or we can say 
 * tell me the life cycle of this class component or How the life cycle of these will work?
 * 
 * -> Then, first parent class constuctor called -> parent class render called. Then it see first children, when that 
 * first children component load on the web then first children class constructor called -> first children class
 * render called. Now move to the second children, here second children class constructor called -> second children class render 
 * will call.
 * Now, first children class component did mount -> then second children class component did mount ->
 * then parent class component did mount.
 * 
 * This is the REACT RENDER PHASE
 * 1. Parent constructor called.
 * 2. Parent render called.
 * 3. First children class constructor called
 * 4. First children class render called.
 * 5. Second children class constructor called.
 * 6. Second children class render called.
 * 
 * This is the REACT COMMIT PHASE
 * 7. First children class component did mount called.
 * 8. Second children class component did mount called.
 * 9. Parent class component did mount called.
 * 
 * Why this is happening?
 * Because, react have two phases first, Render phase and the second is commit phase. So first it render all the component.
 * When all the component rendered on the web. Then it commit the actual DOM. Because, DOM manipiluation is very expensive
 * If this is not happening like this, then react has to manipluate the DOM when each children rendered on the web.
 * 
 * This will makes the REACT fast.
 * 
 * Follow this link for understand this with the help of the diagram: 
 * https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
 */








// const About = () => {
//     return (
//         <div>
//             <h1>About Page</h1>
//             <br/>
//             {/* This way we can call function component */}
//             {/* <UserFunc name="Harshit (From Function)" location="Uttarakhand"/>  */}
//             <br/>
//             <br/>
//             {/* This way we can call class component */}
//             <UserClass name="Harshit (From class)" location="Uttarakhand"/>
//         </div>
//     );
// }

export default About;
