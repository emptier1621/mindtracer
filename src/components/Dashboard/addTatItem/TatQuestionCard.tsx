import { Button, Card, CardBody, CardHeader, Image, Textarea } from "@nextui-org/react";
import axios, { AxiosError } from "axios";
import { useSession } from "next-auth/react";
import { FormEvent, FormEventHandler, useEffect, useState } from "react";
import { IoIosHappy, IoIosSend } from "react-icons/io";
import TatQuestionItem from "./TatQuestionItem";
import Link from "next/link";
import JSConfetti from "js-confetti";

function TatQuestionCard() {
  
  const [error, setError] = useState("");
  const {data:session, status} = useSession();
  const [data, setData] = useState({ tat: [] });
  const [quest, setQuest] = useState(0);
  useEffect(() => {
    axios.get('/api/psychology/getTatItems')
      .then(response => {
        setData(response.data);
        setQuest(data.tat.length)
      })
      .catch(error => {
        console.log(error);
      });
  }, [data.tat.length]);

  const handleOnSubmit = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const formData = new FormData(e.currentTarget);
      const texto = formData.get("historia")?.toString();

      if (texto && texto.length > 0) {
        const axiosResponse = await axios.post("/api/psychology/addTatItem", {
          lamina:quest+1,
          texto
        });
        new JSConfetti().addConfetti()
        setQuest(quest+1)
        console.log(axiosResponse)
      } else {
        console.log(quest)
        setError("La historia es requerida.");
        console.log(quest)
      }
      
    } catch (error) {
      console.log(error);
      if (error instanceof AxiosError) {
        const errorMessage = error.response?.data.message;
        setError(errorMessage);
      } else {
        setError(String(error));
      }
    }
  }



  if(error === ''){
    let src = "";
    let description = "";
    switch (quest) {
      case 0: 
        description = "Un niño contempla un violín que está sobre una mesa, enfrente de él."
        src = "/tatLaminas/1.png" 
        break;

      case 1: 
        description = "Escena campestre. En primer plano, hay una mujer joven con libros en sus manos; más al fondo se ve un hombre trabajando el campo y una mujer que lo mira."
        src = "/tatLaminas/2.png" 
        break;

      case 2: 
        description = session?.user.genero === 'M'?"En el suelo, apoyado en un sofá está la figura de un joven con la cabeza descansando sobre su brazo derecho. Junto a él en el suelo hay, un revolver.":"Una mujer joven está de pie con la cabeza gacha, su cara cubierta con su mano derecha. Su brazo izquierdo está estirado hacia adelante contra una puerta de madera."
        src = session?.user.genero === 'M'?"/tatLaminas/3a.png":"/tatLaminas/3b.png"
        break;

      case 3: 
        description = "Una mujer sujeta los hombros de un hombre cuya cara y cuerpo están vueltos como sí estuviese tratando de zafarse de ella."
        src = "/tatLaminas/4.png"
        break;

      case 4: 
        description = "Una mujer de edad media está de pie en el umbral de una puerta a medio abrir, mirando al interior de la habitación."
        src = "/tatLaminas/5.png"
        break;
        
      case 5: 
        description = session?.user.genero === 'M'?"Una mujer mayor, baja, está de pie, de espaldas a un hombre joven alto.":"Una mujer joven, sentada en el extremo de un sofá mira hacia atrás por sobre su hombro a un hombre mayor con una pipa en la boca que parece estar dirigiéndose a ella."
        src = session?.user.genero === 'M'?"/tatLaminas/6a.png":"/tatLaminas/6b.png"
        break;
        
      case 6: 
        description = session?.user.genero === 'M'?"Relación padre-hijo.":"Relación madre-hija."
        src = session?.user.genero === 'M'?"/tatLaminas/7a.png":"/tatLaminas/7b.png"
        break;
        
      case 7: 
        description = ""
        src = session?.user.genero === 'M'?"/tatLaminas/8a.png":"/tatLaminas/8b.png"
        break;
      case 8: 
        description = ""
        src = session?.user.genero === 'M'?"/tatLaminas/9a.png":"/tatLaminas/9b.png"
        break;
      case 9: 
        description = ""
        src = "/tatLaminas/10.png"
        break;
      case 10: 
        description = "Un camino bordeando un precipicio entre barrancos altos."
        src = "/tatLaminas/11.png"
        break;
      case 11:
        if( session?.user.edad){ 
          description =  session?.user.edad < 14?"Paisaje.":session.user.genero==="M"?"":"Mujer joven y mujer vieja"
          src = session?.user.edad < 14?"/tatLaminas/12a.png":session.user.genero==="M"?"/tatLaminas/12b.png":"/tatLaminas/12c.png"
        }
        break;
      case 12: 
        if( session?.user.edad){ 
          description =  ""
          src = session?.user.edad > 14?"/tatLaminas/13a.png":session.user.genero==="M"?"/tatLaminas/13b.png":"/tatLaminas/13c.png"
        }
        break;
      case 13: 
        description = "Silueta contra una ventana abierta."
        src = "/tatLaminas/14.png"
        break;
      case 14: 
        description = "Un hombre con sus manos enlazadas está de pie entre lápidas en un cementerio."
        src = "/tatLaminas/15.png"
        break;
      case 15: 
        description = "Lámina en blanco."
        src = "/tatLaminas/16.png"
        break;
      case 16: 
        if(session?.user.genero){
          description = session?.user.genero==="M"?"Un hombre desnudo se trepa por una soga.":"Un puente sobre el agua."
          src =session?.user.genero==="M"?"/tatLaminas/17a.png":"/tatLaminas/17b.png"
        }
        break;
      case 17: 
        description = session?.user.genero==="M"?"Un hombre es sujetado desde atrás por tres manos.":"Una mujer aprieta con sus manos el cuello de otra mujer."
        src = session?.user.genero==="M"?"/tatLaminas/18a.png":"/tatLaminas/18b.png"
        break;
      case 18: 
        description = "Cuadro de formación de nubes sobre una cabaña cubierta de nieve en el campo."
        src = "/tatLaminas/19.png"
        break;
      case 19: 
        description = "La figura difusamente iluminada de un hombre (o una mujer) en la noche apoyada contra un poste de luz."
        src = "/tatLaminas/20.png"
        break;
        
      default:
        return(
          <div className="w-full md:px-24 my-4 px-4 h-full flex-col justify-center items-center ">
            <h3 className="text-4xl text-center">¡Felicidades!</h3>
            <IoIosHappy className="text-5xl w-full flex justify-center items-center my-4"/>
            <p className="px-4 md:px-24 text-justify ">¡Has completado el Test de Apercepción Temática con éxito! ¡Gracias por tu colaboración! Ahora, para seguir mejorando, te invitamos a realizar la siguiente evaluación. ¡No te la pierdas!</p>
            <div className="w-full flex items-center justify-center my-8">
            <Button as={Link} href="/dashboard" variant="ghost" color="warning">Ir al dashboard</Button>
            </div>
          </div>  
        )
    }

    return(
      <div className="w-full h-full pt-8 overflow-y-visible mb-8 flex justify-center items-center">
        <TatQuestionItem quest={quest} description={description} src={src} fSumbit={handleOnSubmit}/>
      </div>
    )
  }  
}

export default TatQuestionCard
