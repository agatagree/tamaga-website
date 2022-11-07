export const BurgerMenu = ({open, setOpen}) => {

  const toggle  = () => {
    setOpen(!open);
  }

  return (
    <button className={(open) ? "burger-wrapper" : "burger-wrapper active"} onClick={toggle}>
      <div className="burger-content">
        <div className="line top"/>
        <div className="line middle"/>
        <div className="line bottom"/>
      </div>
    </button>
  )
}