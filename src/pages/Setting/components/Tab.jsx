
function Tab({ selectedTab, setSelectedTab, tabTitle }) {
  return (
    <div 
      onClick={() => setSelectedTab(tabTitle.toLowerCase())}
      className="cursor-pointer px-5 py-2 text-xl"
      style={{
        fontWeight: selectedTab === tabTitle.toLowerCase() ? '600' : undefined,
        backgroundColor: selectedTab === tabTitle.toLowerCase() ? '#D9D9D9': undefined,
        borderRadius: selectedTab === tabTitle.toLowerCase() ? '1rem' : undefined
      }}
    >
      {tabTitle}
    </div>
  )
}

export default Tab