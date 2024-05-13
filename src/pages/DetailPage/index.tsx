import { useOutletContext } from "react-router-dom"

const DetailPage = () => {
const {found}= useOutletContext()
console.log(found)

  return (
  <div>
asda
  </div> 
)
}

export default DetailPage