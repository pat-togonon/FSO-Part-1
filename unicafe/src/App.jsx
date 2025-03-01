import { useState } from 'react';

const Header = (props) => <h1>{props.header}</h1>;

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>;

const StatisticLine = (props) => {
     return (
      <tr>
        <td>{props.feedback}</td>
        <td>{props.total}</td>
      </tr> 
      );
};

const Statistics = (props) => {
  
  const total = props.total1 + props.total2 + props.total3;
  const average = (props.total1 - props.total3) / total;

  const positivePercent = ((props.total1 * 100) / total) + " %";

  if (total === 0) {
    return (
      <tbody>
      <tr>
        <td>No feedback given</td>
      </tr>
      </tbody>
     )
  };
  
  return (
   <tbody>
    <StatisticLine feedback="good" total={props.total1} />
    <StatisticLine feedback="neutral" total={props.total2} />
    <StatisticLine feedback="bad" total={props.total3} />
    <StatisticLine feedback="all" total={total} />
    <StatisticLine feedback="average" total={average} />
    <StatisticLine feedback="positive" total={positivePercent} />
   </tbody>
  )

};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const header = "give feedback";

  const handleGood = () => setGood(good + 1);
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);

  return (
    <div>
      <Header header={header} />
      <Button onClick={handleGood} text="good" />
      <Button onClick={handleNeutral} text="neutral" />
      <Button onClick={handleBad} text="bad" />
      <Header header="statistics" />
      
      <table>
          <Statistics total1={good} total2={neutral} total3={bad}/>
      </table>    

    </div>
  )

};

export default App;