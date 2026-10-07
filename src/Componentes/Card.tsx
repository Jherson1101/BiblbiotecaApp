import { Link, useNavigate } from "react-router-dom"
import { Button } from "../components/ui/button"

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,

  CardTitle,
} from "../components/ui/card"
import { Input } from "../components/ui/input"
import type { TypesLibros } from "../data"
import { DialogDemo } from "./modalcontainer"  
interface PropsType {
  item: TypesLibros
}
export function CardDemo({ item }: PropsType) {
  const navigate = useNavigate()
  const clickMe = () => {
        navigate(`/book/${item.titulo}`)
  }
  return (  


<DialogDemo></DialogDemo>
  //   <Card onClick={clickMe} className="w-full max-w-sm  min-h-[200px  hover:bg-[#f7f2f2] hover:shadow-md duration-150
  // ]">
  //     <CardHeader>
  //       <CardTitle>{
  //         item.titulo
  //       }</CardTitle>
  //       <CardDescription>
  //         {item.titulo}
  //       </CardDescription>
  //       <CardAction>
  //       </CardAction>
  //     </CardHeader>
  //     <CardContent>
  //       <h1>Libros an Oponieng</h1>
  //     </CardContent>
  //     <CardFooter className="flex-col gap-2">
  //       <Button type="submit" className="w-full">
  //         informacion
  //       </Button>

  //     </CardFooter>
  //   </Card>  


  )
}
