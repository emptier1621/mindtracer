import {
  Card,
  CardHeader,
  Divider,
  CardBody,
  CardFooter,
  Progress,
  Button,
  Image,
  Link,
} from "@nextui-org/react";
import React from "react";

function DashboardTestCard(props: {
  titulo: string;
  siglas: string;
  resumen: string;
  percent: number;
  link: string;
}) {
  return (
    <div className="md:pt-16 m-8 h-full flex items-center justify-center">
      <Card className="max-w-[400px] hover:scale-105 cursor-default">
        <CardHeader className="flex">
          <Image alt="test logo" height={40} src="/test.png" width={40} />
          <div className="flex flex-col w-full items-center justify-center">
            <p className="text-md text-success">{props.titulo}</p>
            <p className="text-small text-center text-foreground">
              {props.siglas}
            </p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody className="text-center">
          <p>{props.resumen}</p>
        </CardBody>
        <Divider />
        <CardFooter className="flex-col px-8">
          <Progress
            size="sm"
            radius="sm"
            color="secondary"
            label={props.siglas}
            classNames={{
              base: "max-w-md mb-4",
              track: "drop-shadow-md border border-default",
              indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
              label: "tracking-wider font-medium text-default-600",
              value: "text-foreground/60 ",
            }}
            value={props.percent}
            showValueLabel={true}
          />
          <Button
            as={Link}
            color="secondary"
            className={`mb-4 ${props.percent >= 100 ? "hidden" : ""}`}
            href={props.link}
            variant="ghost"
          >
            Continuar
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default DashboardTestCard;
