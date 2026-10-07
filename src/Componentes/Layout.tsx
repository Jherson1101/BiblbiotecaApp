import { Outlet } from "react-router-dom";
import Narbar from "./Narbar";


const Layoute = () => {

        return (

                <>

                        <Narbar></Narbar>
                        <main>
                                <Outlet></Outlet>
                        </main>
                </>


        )


}


export default Layoute;