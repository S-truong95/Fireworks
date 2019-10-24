import Fireworks from "fireworks-canvas"

export default () =>{
    alert("It works !")
}

export default () => {
    const app = document.getElementById("app")
    const fireworks = new Fireworks(app)
    fireworks.start()
  }