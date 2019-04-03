const enhance = compose(
  withState('count', 'setCount', ({ initialCount }) => initialCount),
  withHandlers({
    increment: ({ setCount }) => () => setCount(count => count + 1),
    decrement: ({ setCount }) => () => setCount(count => count - 1),
    handleChange: ({ setCount }) => event =>
      setCount(parseInt(event.target.value)),
  }),
  pure,
)

Counter = enhance(Counter)

function Counter({ count, increment, decrement, handleChange }) {
  return (
    <>
      <h1>{count}</h1>
      <div className="input-group">
        <button onClick={decrement}>-1</button>
        <input type="number" value={count} onChange={handleChange} />
        <button onClick={increment}>+1</button>
      </div>
    </>
  )
}

render(<Counter initialCount={42} />)
