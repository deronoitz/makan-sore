import { NextPage } from 'next';
import * as React from 'react';
import Item from '../components/Item'

const Index: NextPage = () => {
  const [item, setItem] = React.useState({});
  const [id, setId] = React.useState([Math.random()]);

  React.useEffect(() => {
    document.title = 'Makan Sore'
  }, [item]);

  function inputChange(e: any, itemId: number) {
    setItem({
      ...item,
      [itemId]: {
        ...item[itemId],
        [e.target.name]: e.target.value
      }
    })
  }

  return (
    <div>
      {/* <h1>Potongan Makan Sore</h1> */}
      <div className="itemContainer">
        {
          id.map(i => {
            const total = item[i] && item[i].price && item[i].quantity ? item[i].price * item[i].quantity : 0;
            return (
              <Item key={i} id={i} actionChange={inputChange} totalCost={total}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default Index