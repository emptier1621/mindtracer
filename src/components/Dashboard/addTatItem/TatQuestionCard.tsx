import { Button, Card, CardBody, CardHeader, Image, Textarea } from "@nextui-org/react";
import axios, { AxiosError } from "axios";
import { useSession } from "next-auth/react";
import { FormEvent, FormEventHandler, useEffect, useState } from "react";
import { IoIosSend } from "react-icons/io";
import TatQuestionItem from "./TatQuestionItem";

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
        const age = session?.user.edad
        description = session?.user.genero === 'M'?"Una mujer mayor, baja, está de pie, de espaldas a un hombre joven alto.":"Una mujer joven, sentada en el extremo de un sofá mira hacia atrás por sobre su hombro a un hombre mayor con una pipa en la boca que parece estar dirigiéndose a ella."
        src = session?.user.genero === 'M'?"/tatLaminas/6a.png":"/tatLaminas/6b.png"
        break;
      case 7: 
        description = session?.user.genero === 'M'?"Una mujer mayor, baja, está de pie, de espaldas a un hombre joven alto.":"Una mujer joven, sentada en el extremo de un sofá mira hacia atrás por sobre su hombro a un hombre mayor con una pipa en la boca que parece estar dirigiéndose a ella."
        src = session?.user.genero === 'M'?"/tatLaminas/6a.png":"/tatLaminas/6b.png"
        break;
      case 7: 
        description = session?.user.genero === 'M'?"Una mujer mayor, baja, está de pie, de espaldas a un hombre joven alto.":"Una mujer joven, sentada en el extremo de un sofá mira hacia atrás por sobre su hombro a un hombre mayor con una pipa en la boca que parece estar dirigiéndose a ella."
        src = session?.user.genero === 'M'?"/tatLaminas/6a.png":"/tatLaminas/6b.png"
        break;
      case 7: 
        description = session?.user.genero === 'M'?"Una mujer mayor, baja, está de pie, de espaldas a un hombre joven alto.":"Una mujer joven, sentada en el extremo de un sofá mira hacia atrás por sobre su hombro a un hombre mayor con una pipa en la boca que parece estar dirigiéndose a ella."
        src = session?.user.genero === 'M'?"/tatLaminas/6a.png":"/tatLaminas/6b.png"
        break;
        
      default:
        description = "Un niño contempla un violín que está sobre una mesa, enfrente de él."
        src = "/tatLaminas/1.png" 
        break;
    }

    return(
      <div className="w-full h-full pt-8 overflow-y-visible mb-8 flex justify-center items-center">
        <TatQuestionItem quest={quest} description={description} src={src} fSumbit={handleOnSubmit}/>
      </div>
    )
  }  
}

export default TatQuestionCard
