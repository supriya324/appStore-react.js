import './index.css'

const AppItem = props => {
  const {AppDetails} = props
  const {imageUrl, appName} = AppDetails
  return (
    <li className="app-item">
      <img src={imageUrl} alt={appName} className="image" />
      <h1 className="app-name"> {appName}</h1>
    </li>
  )
}
export default AppItem
