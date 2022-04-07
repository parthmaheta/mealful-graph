import "./Loading.scss"
export function ShowLoading() {
  return (
    <div className="loading">
      <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <h3 className="text">Please Wait...,We Are Loading</h3>
    </div>
  )
}
