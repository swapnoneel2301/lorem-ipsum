import React, { useState } from 'react';
import data from './data';
function App() {
  const [amount,setAmount] = useState('0');
  const [paragraphs,setParagraphs] = useState([]);

  const handleSubmit = (event)=>{
      event.preventDefault();
      let count = Number(amount);
      console.log(count);
      if(count<=0) count=1;
      if(count>8) count=8;
      setParagraphs(data.slice(0,count));
  }
  return <section className='section-center'>
     <h3>Tired of boring lorem ipsum?</h3>
     <form className='lorem-ipsum' onSubmit={handleSubmit}>
        <label htmlFor='amount'>paragraphs:</label>
        <input type="number" name="amount" id="amount" value={amount}
        onChange={(e)=>{
          setAmount(e.target.value);
        }}></input>
        <button className='btn'>generate</button>
        <article className='lorem-text'>
          {
            paragraphs.map((paragraph,index)=>{
                return <p key={index}>
                  {paragraph}
                </p>
            })
          }
        </article>
     </form>
  </section>
}

export default App;
