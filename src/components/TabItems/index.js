import './index.css'

const TabItems = props => {
  const {tabDetails, activeTabId, isActive} = props
  const {displayText, tabId} = tabDetails

  const tabItemClass = isActive ? 'tab-item' : ''

  const onClickTabId = () => {
    activeTabId(tabId)
  }

  return (
    <li className="tab-item-container">
      <button className="each-tab-button" type="button" onClick={onClickTabId}>
        <p className={tabItemClass}>{displayText}</p>
      </button>
    </li>
  )
}

export default TabItems
