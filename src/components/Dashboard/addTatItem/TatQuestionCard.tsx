import { Button, Card, CardBody, CardHeader, Image, Textarea } from "@nextui-org/react";
import axios, { AxiosError } from "axios";
import { FormEvent, FormEventHandler } from "react";
import { IoIosSend } from "react-icons/io";

function TatQuestionCard(props:{email:string|undefined ,count:number,descripcion:string, laminaSrc:string, tatLength:number, setError:(value:string)=>void, setQuest:(value:number)=>void}) {
  const handleOnSubmit = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const formData = new FormData(e.currentTarget);
      const texto = formData.get("historia")?.toString();
      const lamina = props.tatLength
      if (texto && texto.length > 0) {
        const axiosResponse = await axios.post("/api/psychology/addTatItem", {
          lamina,
          texto
        });
        props.setQuest(lamina+1)
        console.log(axiosResponse)
      } else {
        props.setError("La historia es requerida.");
      }
      
    } catch (error) {
      console.log(error);
      if (error instanceof AxiosError) {
        const errorMessage = error.response?.data.message;
        props.setError(errorMessage);
      } else {
        props.setError(String(error));
      }
    }
  }
  
  return (
    <>
          <Card
            isBlurred
            className="border-none bg-background/60 dark:bg-default-100/50 max-w-[344px]"
            shadow="sm"
          >
            <CardHeader className="w-full flex-col justify-center items-center">
            <div className="flex flex-col gap-1 items-center justify-center">
              <h4 className="text-small font-semibold leading-none text-success">Lámina {props.count+1}</h4>
              <h5 className="text-small tracking-tight text-foreground">{props.descripcion}</h5>
            </div>
            </CardHeader>
            <CardBody>
            <div className="relative col-span-6 md:col-span-4">
              <Image
                alt={`Lamina ${props.count}`}
                className="object-cover"
                height={200}
                shadow="md"
                src={props.laminaSrc}
                width="100%"
              />
            </div>
            
            <div className="flex flex-col gap-1 col-span-6 md:col-span-8">
            <form onSubmit={handleOnSubmit}>
              <div className="flex flex-col col-span-4 md-col-span-6">
                <Textarea
                  isRequired
                  name="historia"
                  color="default"
                  label="Historia"
                  labelPlacement="outside"
                  placeholder="Invente una historia que contenga un pasado, presente y futuro, enfatizando lo que los
                  personajes puedan estar sintiendo o pensando."
                  className="w-full h-full "
                />
              </div>

              <div className="flex flex-col col-span-2 md-col-span-2">
                <Button type="submit" color="success" variant="ghost" >Enviar <IoIosSend className="text-2xl"/></Button>
              </div>
              </form>
            </div>
            </CardBody>

          </Card>
          
          </>
  )
}

export default TatQuestionCard
