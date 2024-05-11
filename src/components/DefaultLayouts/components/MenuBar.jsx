
function MenuBar({ menuTitle, sgvIcon }) {
  return (
    <button>
      <div className="flex px-9 py-4 rounded-3xl bg-yellow-100 gap-3">
        <div>
          {sgvIcon}
        </div>
        <div className="">
          {menuTitle}
        </div>
      </div>
    </button>
  )
}

export default MenuBar