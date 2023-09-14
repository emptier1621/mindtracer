import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Image,
  Textarea,
} from "@nextui-org/react";
import React, { FormEventHandler } from "react";
import { IoIosSend } from "react-icons/io";

function TatQuestionItem(props: {
  quest: number;
  description: string;
  src: string;
  loading: boolean;
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
    <div className="w-screen flex h-auto pb-8 justify-center items-center">
      <Card
        isBlurred
        className="border-none bg-background/60 dark:bg-default-100/50 md:max-w-[480px] max-w-[300px]"
        shadow="sm"
      >
        <CardHeader className="w-full flex-col justify-center items-center">
          <div className="flex flex-col gap-1 items-center justify-center">
            <h4 className="text-small font-semibold leading-none text-success">
              Lámina {props.quest + 1}
            </h4>
            <h3 className="text-small tracking-tight text-foreground">
              {props.description}
            </h3>
          </div>
        </CardHeader>
        <CardBody>
          <div className="relative col-span-6 md:col-span-4">
            <Image
              alt={`Lamina ${props.quest}`}
              className="object-cover"
              height={200}
              shadow="md"
              src={props.src}
              width="100%"
            />
          </div>

          <div className="flex flex-col gap-1 col-span-6 md:col-span-8">
            <form onSubmit={handleSubmit} key={props.quest}>
              <div className="flex flex-col col-span-4 md-col-span-6">
                <Textarea
                  isRequired
                  name="historia"
                  color="default"
                  label="Historia"
                  labelPlacement="outside"
                  placeholder="Invente una historia que contenga un pasado, presente y futuro, enfatizando lo que los
                  personajes puedan estar sintiendo o pensando."
                  className="w-full h-full resize-none"
                />
              </div>

              <div className="flex flex-col col-span-2 md-col-span-2">
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
