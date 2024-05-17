
function Tab({ selectedTab, setSelectedTab, tabTitle }) {
  return (
    <div 
      onClick={() => setSelectedTab(tabTitle)}
      className="cursor-pointer px-5 py-2 text-xl"
      style={{
        fontWeight: selectedTab === tabTitle ? '600' : undefined,
        backgroundColor: selectedTab === tabTitle ? '#D9D9D9': undefined,
        borderRadius: selectedTab === tabTitle ? '1rem' : undefined
      }}
    >
      {tabTitle}
    </div>
  )
}

export default Tab