import TextLoop from "react-text-loop"
import "../../styles/default.min.css"
import "../../styles/header.min.css"

export default function Header() {
  return (
    <div id="section-header" className="fullpage">
      <div id="header">
        <h3 className="subtitle">I am a creator of</h3>
        <TextLoop 
          className="title" 
          children={["Websites", "Apps", "Games", "Designs"]}
          springConfig={{
            stiffness: 200,
            damping: 30
          }}
          interval={2500}
          noWrap={false}
          mask={true} />
      </div>
    </div>
  )
}
