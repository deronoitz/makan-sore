const Item = (props: any) => {
  return (
    <div className="item">
      <div>
        <label>Nama Makanan</label>
        <input type="text" name="name" onChange={(e) => props.actionChange(e, props.id)}/>
      </div>
      <div style={{width: 150}}>
        <label>Harga/Item</label>
        <input type="number" name="price" onChange={(e) => props.actionChange(e, props.id)}/>
      </div>
      <div style={{width: 100}}>
        <label>Qty</label>
        <input type="number" name="quantity" onChange={(e) => props.actionChange(e, props.id)}/>
      </div>
 
      <div className="resItem">
        <label>Total</label>
        <input type="number" disabled value={props.totalCost}/>
        
      </div>
      <style jsx>
        {`
          input{
            padding: 10px 15px;

            border: solid 1px #eee;
            border-radius: 5px;
          }
          input:disabled {
            background: #eee
          }
          .item > div {
            display: flex;
            flex-direction: column;
            margin: 0 10px;
          }
          .item {
            display: flex;
            margin-bottom: 15px;
          }
          label {
            margin-bottom: 5px;
            font-size: 14px;
          }
        `}
      </style>
    </div>
  )
}

export default Item;