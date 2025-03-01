import { useState } from 'react';


const Header = (props) => <h2>{props.header}</h2>;

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>;

const Paragraph = (props) => <p>{props.text}</p>;

const App = () => {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];

  const [selected, setSelected] = useState(0);
   
  const handleNextAnecdote = () => setSelected(Math.floor(Math.random()*anecdotes.length));

  const initialVoteValues = new Array(anecdotes.length).fill(0);
  const [votes, setVotes] = useState(initialVoteValues);

  const handleVote = () => {
    const newVote = [...votes];
    newVote[selected] += 1;
    setVotes(newVote);    
  };
  
  const mostVotes = () => {
    const mostVoted = votes.indexOf(Math.max(...votes));
    if (votes[mostVoted] === 0) {
      return "Please cast your votes first.";
    } else {
      return anecdotes[mostVoted];
    }
  
  };


  return (
    <div>
      <Header header="Anecdote of the day" />
      <Paragraph text={anecdotes[selected]} />
      <p>has {votes[selected]} votes</p>
      <Button onClick={handleVote} text="vote" />
      <Button onClick={handleNextAnecdote} text="See next anecdote" />
      <Header header="Anecdote with most votes" />
      <Paragraph text={mostVotes()} />
            
    </div>
  );


};

export default App;