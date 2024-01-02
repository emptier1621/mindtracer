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
import { useSession } from "next-auth/react";
import { useCallback, useEffect, useState } from "react";
import { Usuario } from "../../../types/User";

export default function DashboardPage() {
  const { data: session, status } = useSession();

  const [data, setData] = useState(null);
  const [result, setResult] = useState(0);
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
  const [filterUsers, setFilterUsers] = useState(users);

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
        })
        .catch((error) => {
          console.log(error);
        });

      axios
        .get("/api/data/getTotalUsers")
        .then((response) => {
          setTotalUsers(response.data.message);
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

  useEffect(() => {
    if (idbPercent >= 100 && tatPercent >= 100) {
      axios
        .get("/api/data/getResult")
        .then((response) => {
          setResult(response.data.message.IDB.clasificacion);
          console.log(result);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [idbPercent, tatPercent, result]);

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
      const buscar = (e: any) => {
        const newUsers = users.filter((item) => {
          return item.nombreCompleto.includes(e.target.value);
        });
        setFilterUsers(newUsers);
      };
      console.log(result);
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

                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                  <div className="p-4">
                    <div className="relative mt-1">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                          className="w-5 h-5 text-gray-500 dark:text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <input
                        type="text"
                        onChange={buscar}
                        id="table-search"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search for items"
                      />
                    </div>
                  </div>
                  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          Contador
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Email
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Nombre completo
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Edad
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Resultado
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {filterUsers.map((item, count) => {
                        return (
                          <>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                              <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                              >
                                {count + 1}
                              </th>
                              <td className="px-6 py-4">{item.email}</td>
                              <td className="px-6 py-4">
                                {item.nombreCompleto}
                              </td>
                              <td className="px-6 py-4">{item.edad}</td>
                              <td className="px-6 py-4">
                                {item.IDB.clasificacion === 1
                                  ? "Mínima depresión."
                                  : item.IDB.clasificacion === 2
                                  ? "Depresión leve. "
                                  : item.IDB.clasificacion === 3
                                  ? "Depresión moderada. "
                                  : item.IDB.clasificacion === 4
                                  ? "Depresión grave. "
                                  : ""}
                                - {item.IDB.puntaje} pts.
                              </td>
                            </tr>
                          </>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

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

        <main className="w-screen flex-col items-center justify-center">
          {result > 0 ? (
            <div className="w-full mt-10 flex justify-center items-center">
              <Chip
                color="success"
                className="p-2 text-2xl w-max h-max"
                variant="dot"
              >
                {result === 1
                  ? "Mínima depresión."
                  : result === 2
                  ? "Depresión leve."
                  : result === 3
                  ? "Depresión moderada."
                  : result === 4
                  ? "Depresión grave."
                  : ""}
              </Chip>
            </div>
          ) : (
            ""
          )}
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
