export const BurgerMenu = ({toggle, setToggle}) => {
  return (
    <>
    <button className={(toggle) ? "burger-wrapper" : "burger-wrapper active"} onClick={() => setToggle(!toggle)}>
      <div className="burger-content">
        <div className="line top"/>
        <div className="line middle"/>
        <div className="line bottom"/>
      </div>
    </button>
    </>
  )
}