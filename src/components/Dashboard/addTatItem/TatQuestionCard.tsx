import { Button, Card, CardBody, CardHeader, Image, Textarea } from "@nextui-org/react";
import axios, { AxiosError } from "axios";
import { useSession } from "next-auth/react";
import { FormEvent, FormEventHandler, useEffect, useState } from "react";
import { IoIosSend } from "react-icons/io";

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
    switch (quest) {
      case 0: 
        const descripcion1 = "Un niño contempla un violín que está sobre una mesa, enfrente de él."
        const laminaSrc1 = "/tatLaminas/1.png" 
        return (
          <>
                <Card
                  isBlurred
                  className="border-none bg-background/60 dark:bg-default-100/50 max-w-[344px]"
                  shadow="sm"
                >
                  <CardHeader className="w-full flex-col justify-center items-center">
                  <div className="flex flex-col gap-1 items-center justify-center">
                    <h4 className="text-small font-semibold leading-none text-success">Lámina {quest}</h4>
                    <h5 className="text-small tracking-tight text-foreground">{descripcion1}</h5>
                  </div>
                  </CardHeader>
                  <CardBody>
                  <div className="relative col-span-6 md:col-span-4">
                    <Image
                      alt={`Lamina ${quest}`}
                      className="object-cover"
                      height={200}
                      shadow="md"
                      src={laminaSrc1}
                      width="100%"
                    />
                  </div>
                  
                  <div className="flex flex-col gap-1 col-span-6 md:col-span-8">
                  <form onSubmit={handleOnSubmit} key={quest}>
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
      case 1: 
        const descripcion2 = "Escena campestre. En primer plano, hay una mujer joven con libros en sus manos; más al fondo se ve un hombre trabajando el campo y una mujer que lo mira."
        const laminaSrc2 = "/tatLaminas/2.png" 
        
        return (
          <>
                <Card
                  isBlurred
                  className="border-none bg-background/60 dark:bg-default-100/50 max-w-[344px]"
                  shadow="sm"
                >
                  <CardHeader className="w-full flex-col justify-center items-center">
                  <div className="flex flex-col gap-1 items-center justify-center">
                    <h4 className="text-small font-semibold leading-none text-success">Lámina {quest}</h4>
                    <h5 className="text-small tracking-tight text-foreground">{descripcion2}</h5>
                  </div>
                  </CardHeader>
                  <CardBody>
                  <div className="relative col-span-6 md:col-span-4">
                    <Image
                      alt={`Lamina ${quest}`}
                      className="object-cover"
                      height={200}
                      shadow="md"
                      src={laminaSrc2}
                      width="100%"
                    />
                  </div>
                  
                  <div className="flex flex-col gap-1 col-span-6 md:col-span-8">
                  <form onSubmit={handleOnSubmit} key={quest}>
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
      case 2: 
        const descripcion3 = session?.user.genero === 'M'?"En el suelo, apoyado en un sofá está la figura de un joven con la cabeza descansando sobre su brazo derecho. Junto a él en el suelo hay, un revolver.":"Una mujer joven está de pie con la cabeza gacha, su cara cubierta con su mano derecha. Su brazo izquierdo está estirado hacia adelante contra una puerta de madera."
        const laminaSrc3 = session?.user.genero === 'M'?"/tatLaminas/3a.png":"/tatLaminas/3b.png"
        
        return (
          <>
                <Card
                  isBlurred
                  className="border-none bg-background/60 dark:bg-default-100/50 max-w-[344px]"
                  shadow="sm"
                >
                  <CardHeader className="w-full flex-col justify-center items-center">
                  <div className="flex flex-col gap-1 items-center justify-center">
                    <h4 className="text-small font-semibold leading-none text-success">Lámina {quest}</h4>
                    <h5 className="text-small tracking-tight text-foreground">{descripcion3}</h5>
                  </div>
                  </CardHeader>
                  <CardBody>
                  <div className="relative col-span-6 md:col-span-4">
                    <Image
                      alt={`Lamina ${quest}`}
                      className="object-cover"
                      height={200}
                      shadow="md"
                      src={laminaSrc3}
                      width="100%"
                    />
                  </div>
                  
                  <div className="flex flex-col gap-1 col-span-6 md:col-span-8">
                  <form onSubmit={handleOnSubmit} key={quest}>
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
      case 3: 
        const descripcion4 = "Una mujer sujeta los hombros de un hombre cuya cara y cuerpo están vueltos como sí estuviese tratando de zafarse de ella."
        const laminaSrc4 = "/tatLaminas/4.png"
        
        return (
          <>
                <Card
                  isBlurred
                  className="border-none bg-background/60 dark:bg-default-100/50 max-w-[344px]"
                  shadow="sm"
                >
                  <CardHeader className="w-full flex-col justify-center items-center">
                  <div className="flex flex-col gap-1 items-center justify-center">
                    <h4 className="text-small font-semibold leading-none text-success">Lámina {quest}</h4>
                    <h5 className="text-small tracking-tight text-foreground">{descripcion4}</h5>
                  </div>
                  </CardHeader>
                  <CardBody>
                  <div className="relative col-span-6 md:col-span-4">
                    <Image
                      alt={`Lamina ${quest}`}
                      className="object-cover"
                      height={200}
                      shadow="md"
                      src={laminaSrc4}
                      width="100%"
                    />
                  </div>
                  
                  <div className="flex flex-col gap-1 col-span-6 md:col-span-8">
                  <form onSubmit={handleOnSubmit} key={quest}>
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
      case 4: 
        const descripcion5 = "Una mujer de edad media está de pie en el umbral de una puerta a medio abrir, mirando al interior de la habitación."
        const laminaSrc5 = "/tatLaminas/5.png"
        
        
      case 5: 
        const descripcion6 = session?.user.genero === 'M'?"Una mujer mayor, baja, está de pie, de espaldas a un hombre joven alto.":"Una mujer joven, sentada en el extremo de un sofá mira hacia atrás por sobre su hombro a un hombre mayor con una pipa en la boca que parece estar dirigiéndose a ella."
        const laminaSrc6 = session?.user.genero === 'M'?"/tatLaminas/6a.png":"/tatLaminas/6b.png"
        
        return (
          <>
                <Card
                  isBlurred
                  className="border-none bg-background/60 dark:bg-default-100/50 max-w-[344px]"
                  shadow="sm"
                >
                  <CardHeader className="w-full flex-col justify-center items-center">
                  <div className="flex flex-col gap-1 items-center justify-center">
                    <h4 className="text-small font-semibold leading-none text-success">Lámina {quest}</h4>
                    <h5 className="text-small tracking-tight text-foreground">{descripcion6}</h5>
                  </div>
                  </CardHeader>
                  <CardBody>
                  <div className="relative col-span-6 md:col-span-4">
                    <Image
                      alt={`Lamina ${quest}`}
                      className="object-cover"
                      height={200}
                      shadow="md"
                      src={laminaSrc6}
                      width="100%"
                    />
                  </div>
                  
                  <div className="flex flex-col gap-1 col-span-6 md:col-span-8">
                  <form onSubmit={handleOnSubmit} key={quest}>
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
      default:
        const descripcion = "Un niño contempla un violín que está sobre una mesa, enfrente de él."
        const laminaSrc = "/tatLaminas/1.png" 
      
        return (
          <>
                <Card
                  isBlurred
                  className="border-none bg-background/60 dark:bg-default-100/50 max-w-[344px]"
                  shadow="sm"
                >
                  <CardHeader className="w-full flex-col justify-center items-center">
                  <div className="flex flex-col gap-1 items-center justify-center">
                    <h4 className="text-small font-semibold leading-none text-success">Lámina {quest}</h4>
                    <h5 className="text-small tracking-tight text-foreground">{descripcion}</h5>
                  </div>
                  </CardHeader>
                  <CardBody>
                  <div className="relative col-span-6 md:col-span-4">
                    <Image
                      alt={`Lamina ${quest}`}
                      className="object-cover"
                      height={200}
                      shadow="md"
                      src={laminaSrc}
                      width="100%"
                    />
                  </div>
                  
                  <div className="flex flex-col gap-1 col-span-6 md:col-span-8">
                  <form onSubmit={handleOnSubmit} key={quest}>
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
  }
  

  
  
  
}

export default TatQuestionCard
