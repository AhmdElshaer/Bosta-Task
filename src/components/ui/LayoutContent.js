import Header from "./Header";

function LayoutContent({children}) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default LayoutContent;