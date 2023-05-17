import { useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import Component1 from "../Components/Component1";
import Component2 from "../Components/Component2";




const Page2 = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const Values = localStorage.getItem('Values');
        if (!Values) {
            navigate({
                pathname: '/',
            })
        }
    })

  return (
    <div>
        <Component1 />
        <Component2 />
    </div>
  )
}

export default Page2