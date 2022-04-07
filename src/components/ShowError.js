import "./Error.scss"
export function ShowError({ reload }) {
  return (
    <div className="error">
      <h1>Something went wrong</h1>
      <button onClick={reload}>Retry</button>
    </div>
  )
}
