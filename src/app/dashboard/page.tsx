"use client";
import DashboardTestCard from "@/components/Dashboard/DashboardTestCard";
import NavBar from "@/components/NavBar/NavBar";
import NavSkeleton from "@/components/NavBar/NavSkeleton";
import ContentSkeleton from "@/components/Sekeletons/ContentSkeleton";
import user from "@/models/user";
import {
  Button,
  Chip,
  Link,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
  User,
} from "@nextui-org/react";
import axios from "axios";
import fs from "fs";
import { useSession } from "next-auth/react";
import { useCallback, useEffect, useState } from "react";

export default function DashboardPage() {
  const { data: session, status } = useSession();

  const [data, setData] = useState(null);
  const [dataTAT, setDataTAT] = useState({ tat: [] });
  const [totalUsers, setTotalUsers] = useState(0);
  const [dataIDB, setDataIDB] = useState({
    idb: {
      puntaje: 0,
      clasificacion: 0,
      respuestas: [{ sintoma: "", intensidad: 0 }],
    },
  });

  const [users, setUsers] = useState([
    {
      nombreCompleto: "",
      genero: "M",
      grado: 1,
      email: "",
      edad: 0,
      TAT: [],
      IDB: {
        puntaje: 0,
        clasificacion: 0,
        respuestas: [{ sintoma: "", intensidad: 0 }],
      },
    },
  ]);

  const renderCell = useCallback((user: any, columnKey: string) => {
    const cellValue = user[columnKey];
    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{ radius: "lg", src: user.avatar }}
            description={user.email}
            name={cellValue}
          >
            {user.email}
          </User>
        );
      case "role":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            <p className="text-bold text-sm capitalize text-default-400">
              {user.team}
            </p>
          </div>
        );
      case "status":
        return (
          <Chip className="capitalize" size="sm" variant="flat">
            {cellValue}
          </Chip>
        );
      default:
        return cellValue;
    }
  }, []);

  useEffect(() => {
    axios
      .get("/api/psychology/getTatItems")
      .then((response) => {
        setDataTAT(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("/api/psychology/getIdbItems")
      .then((response) => {
        setDataIDB(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (session && session.user.email === "admin@mindtracer.com") {
      axios
        .get("/api/data", { responseType: "blob" })
        .then((response) => {
          console.log(response.data);
          setData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [session]);

  useEffect(() => {
    if (session && session.user.email === "admin@mindtracer.com") {
      axios
        .get("/api/data/getData")
        .then((response) => {
          setUsers(response.data.message.data);
          console.log(response.data.message.data.TAT);
        })
        .catch((error) => {
          console.log(error);
        });

      axios
        .get("/api/data/getTotalUsers")
        .then((response) => {
          setTotalUsers(response.data.message);
          console.log(response.data.message);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [session]);

  const tatPercent = (dataTAT.tat.length * 100) / 20;
  let idbPercent = 0;
  if (dataIDB) {
    if (dataIDB.idb.respuestas.length === 0) {
      idbPercent = 0;
    } else {
      idbPercent = (dataIDB.idb.respuestas.length * 100) / 21;
    }
  }

  if (status === "unauthenticated") {
    return <div className="text-danger">Sin autorización...</div>;
  }
  if (status === "loading") {
    return (
      <>
        <header>
          <NavSkeleton />
        </header>
        <main className="w-full h-96 mt-20 flex items-center justify-center">
          <ContentSkeleton />
        </main>
      </>
    );
  }

  if (status === "authenticated") {
    if (session.user.email === "admin@mindtracer.com" && data) {
      const blob = data;
      const url = window.URL.createObjectURL(blob);

      return (
        <>
          <header className="mt-16 overflow-x-hidden">
            <NavBar user={session.user} status={"authenticated"} />
          </header>
          <main className="w-screen flex items-center justify-center">
            <div className="flex-col w-full items-center justify-center">
              <div className="w-full grid grid-flow-row place-items-center">
                <h3 className="text-success text-2xl py-4">
                  Usuarios que ya completaron ambos test
                </h3>
                <p className="text-foreground text-xl mt-2 mb-6">
                  Total: {users.length} de {totalUsers} usuarios completados
                </p>
                <div className="flex w-30 gap-4 p-5 border border-primary border-b-secondary text-primary">
                  <div className="w-16 text-center">Contador</div>
                  <div className="w-40 text-center">Email</div>
                  <div className="w-36 text-center">Nombre completo</div>
                  <div className="w-24 text-center">Edad</div>
                  <div className="w-36 text-center">Estado</div>
                </div>
                {users.map((item, count) => {
                  if (count < 15) {
                    return (
                      <>
                        <div className="flex w-30 gap-4 p-5 border border-secondary">
                          <div className="w-16 text-center">{count + 1}</div>
                          <div className="w-36 text-center">{item.email}</div>
                          <div className="w-40 text-center">
                            {item.nombreCompleto}
                          </div>
                          <div className="w-24 text-center">{item.edad}</div>
                          <div className="w-36 text-center">Completado</div>
                        </div>
                      </>
                    );
                  }
                })}

                <Button
                  download={"users.json"}
                  className="my-6"
                  as={Link}
                  variant="ghost"
                  color="warning"
                  href={url}
                >
                  Descargar documento.
                </Button>
              </div>
            </div>
          </main>
        </>
      );
    }
    return (
      <>
        <header className="mt-16 overflow-x-hidden">
          <NavBar user={session.user} status={"authenticated"} />
        </header>
        <main className="w-screen flex items-center justify-center">
          <div className="md:grid md:grid-cols-2 flex-col w-full place-items-center">
            <DashboardTestCard
              titulo="Test de Apercepción Temática"
              siglas="(TAT)"
              resumen="El Test de Apercepción Temática (TAT) es una prueba
                    psicológica que utiliza imágenes para explorar la
                    personalidad y emociones de las personas a través de las
                    historias que crean basadas en esas imágenes."
              percent={tatPercent}
              link="/dashboard/tat"
            />
            <DashboardTestCard
              titulo="Inventario de Depresión de Beck"
              siglas="(IDB-II)"
              resumen="El Inventario de Depresión de Beck es una herramienta psicológica para medir la depresión, usando preguntas para evaluar síntomas y emociones relacionados con esta condición."
              percent={idbPercent}
              link="/dashboard/idb"
            />
          </div>
        </main>
      </>
    );
  }
}
