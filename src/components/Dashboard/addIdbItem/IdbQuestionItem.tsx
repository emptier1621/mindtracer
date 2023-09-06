import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Image,
  Input,
  Radio,
  RadioGroup,
  Textarea,
} from "@nextui-org/react";
import React, { FormEventHandler } from "react";
import { IoIosSend } from "react-icons/io";

function TatQuestionItem(props: {
  question: number;
  sintoma: string;
  opciones: {opcion:string, valor:number}[];
  fSumbit: FormEventHandler<HTMLFormElement>;
}) {
  return (
    <div className="w-screen flex h-auto pb-8 justify-center items-center">
      <Card
        isBlurred
        className="border-none bg-background/60 dark:bg-default-100/50 md:max-w-[480px] max-w-[300px]"
        shadow="sm"
      >
        <CardHeader className="w-full flex-col justify-center items-center">
          <div className="flex flex-col gap-1 items-center justify-center">
            <h4 className="text-small font-semibold leading-none text-success">
              Lámina {props.question}
            </h4>
            <h3 className="text-small tracking-tight text-foreground">
              {props.sintoma}
            </h3>
          </div>
        </CardHeader>
        <CardBody>
          <div className="flex flex-col gap-1 col-span-6 md:col-span-8">
            <form onSubmit={props.fSumbit} key={props.question}>
           
              <Input key={props.sintoma} className="hidden" value={props.sintoma} name="sintoma"/>
                <RadioGroup label="Opciones: " name="respuesta">
                  {props.opciones.map((item) => {
                    return(
                      <Radio key={item.opcion} value={item.valor.toString()}>{item.opcion}</Radio>  
                    )
                  })}
                

                </RadioGroup>
           

              <div className="flex flex-col col-span-2 md-col-span-2">
                <Button type="submit" color="success" variant="ghost">
                  Enviar <IoIosSend className="text-2xl" />
                </Button>
              </div>
            </form>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default TatQuestionItem;
