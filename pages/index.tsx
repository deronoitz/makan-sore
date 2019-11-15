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
  function addItem() {
    setId([...id, Math.random()])
  }

  return (
    <div>
      <h1>Potongan Makan Sore</h1>
      <div className="itemContainer">
        {
          id.map(i => {
            const total = item[i] && item[i].price && item[i].quantity ? item[i].price * item[i].quantity : 0;
            return (
              <Item key={i} id={i} actionChange={inputChange} totalCost={total} />
            )
          })
        }
        <button onClick={() => addItem()}>Tambah Item</button>
      </div>
      <style jsx>
        {`
          button {
            padding: 12px 30px;
            border: none;
            border-radius: 7px;
            background-color: #0070f3;
            box-shadow: 0 4px 14px 0 rgba(0,118,255,0.39);
            color: white;
            cursor: pointer;
            margin: 10px
          }
          button:hover {
            background: rgba(0,118,255,0.9);
            box-shadow: 0 6px 20px rgba(0,118,255,0.23);
          }
        `}
      </style>
    </div>
  )
}

export default Index