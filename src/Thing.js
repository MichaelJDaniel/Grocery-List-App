import React from "react"


const Thing = ({ name, id, complete, thingClick }) => (
  <li 
  onClick={() => thingClick(id)}
  style={complete ? {...styles.todo, ...styles.complete} : styles.todo } 
  >
    { name }
  </li>


)

const styles = {
  thing: { cursor: "pointer" },
  complete: {color: "grey", textDecoration: "line-through", },


}

export default Thing;