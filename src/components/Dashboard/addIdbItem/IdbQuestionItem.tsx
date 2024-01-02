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
import React, { FormEventHandler, useState } from "react";
import { IoIosSend } from "react-icons/io";

function TatQuestionItem(props: {
  question: number;
  sintoma: string;
  loading: boolean;
  opciones: { opcion: string; valor: number }[];
  fSumbit: FormEventHandler<HTMLFormElement>;
  setLoading: (value: boolean) => void;
}) {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.setLoading(true);
    try {
      props.fSumbit(event);
    } catch (error) {}
  };

  return (
    <div className="p-8">
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
              <Input
                key={props.sintoma}
                className="hidden"
                value={props.sintoma}
                name="sintoma"
              />
              <RadioGroup label="Opciones: " name="respuesta" isRequired>
                {props.opciones.map((item) => {
                  return (
                    <Radio key={item.opcion} value={item.valor.toString()}>
                      {item.opcion}
                    </Radio>
                  );
                })}
              </RadioGroup>

              <div className="flex my-4 flex-col col-span-2 md-col-span-2">
                {props.loading ? (
                  <Button
                    isLoading
                    color="secondary"
                    spinner={
                      <svg
                        className="animate-spin h-5 w-5 text-current"
                        fill="none"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          fill="currentColor"
                        />
                      </svg>
                    }
                  >
                    Loading
                  </Button>
                ) : (
                  <Button type="submit" color="success" variant="ghost">
                    Enviar <IoIosSend className="text-2xl" />
                  </Button>
                )}
              </div>
            </form>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default TatQuestionItem;
