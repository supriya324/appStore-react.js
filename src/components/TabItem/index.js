// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {tabId, displayText} = tabDetails

  const TabBtnClassName = isActive ? 'tab-button active' : 'tab-button'

  const onClickTabItem = () => {
    clickTabItem(tabId)
  }
  return (
    <li className="tabs-list">
      <button
        className={TabBtnClassName}
        type="button"
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
