export const DURATION = 165;

export type Line = { start: number; end: number; text: string; plate: string | null };

export type Scene = {
  id: string;
  start: number;
  end: number;
  rank: number | null;
  name: string;
  years: string;
  kicker: string;
  image: string | null;
  swapImage: string | null;
  swapAt: number | null;
  lines: Line[];
};

export const scenes: Scene[] = [
  {
    "id": "open",
    "start": 0.0,
    "end": 6.244,
    "rank": null,
    "name": "",
    "years": "",
    "kicker": "",
    "image": null,
    "swapImage": null,
    "swapAt": null,
    "lines": [
      {
        "start": 0.0,
        "end": 1.801,
        "text": "No fue un ejército extranjero.",
        "plate": null
      },
      {
        "start": 1.801,
        "end": 2.582,
        "text": "Fue la silla.",
        "plate": null
      },
      {
        "start": 2.582,
        "end": 3.542,
        "text": "Del diez al uno.",
        "plate": null
      },
      {
        "start": 3.542,
        "end": 6.244,
        "text": "Los presidentes que más le costaron a México.",
        "plate": null
      }
    ]
  },
  {
    "id": "p10",
    "start": 6.493,
    "end": 17.591,
    "rank": 10,
    "name": "José López Portillo",
    "years": "1976–1982",
    "kicker": "El peso",
    "image": "/portraits/lopez.jpg",
    "swapImage": null,
    "swapAt": null,
    "lines": [
      {
        "start": 6.493,
        "end": 6.821,
        "text": "Diez.",
        "plate": null
      },
      {
        "start": 6.821,
        "end": 8.135,
        "text": "José López Portillo.",
        "plate": null
      },
      {
        "start": 8.135,
        "end": 10.499,
        "text": "Juró defender el peso como un perro.",
        "plate": null
      },
      {
        "start": 10.499,
        "end": 11.812,
        "text": "El peso se derrumbó.",
        "plate": null
      },
      {
        "start": 11.812,
        "end": 14.045,
        "text": "El petróleo se convirtió en deuda.",
        "plate": null
      },
      {
        "start": 14.045,
        "end": 17.591,
        "text": "Y en mil novecientos ochenta y dos, estatizó la banca.",
        "plate": null
      }
    ]
  },
  {
    "id": "p9",
    "start": 17.84,
    "end": 29.856,
    "rank": 9,
    "name": "Miguel de la Madrid",
    "years": "1982–1988",
    "kicker": "La década perdida",
    "image": "/portraits/madrid.jpg",
    "swapImage": null,
    "swapAt": null,
    "lines": [
      {
        "start": 17.84,
        "end": 18.192,
        "text": "Nueve.",
        "plate": null
      },
      {
        "start": 18.192,
        "end": 19.364,
        "text": "Miguel de la Madrid.",
        "plate": null
      },
      {
        "start": 19.364,
        "end": 21.885,
        "text": "Su nombre quedó pegado a la década perdida.",
        "plate": null
      },
      {
        "start": 21.885,
        "end": 26.808,
        "text": "El diecinueve de septiembre de mil novecientos ochenta y cinco, la ciudad se partió.",
        "plate": null
      },
      {
        "start": 26.808,
        "end": 28.449,
        "text": "El rescate lo hizo la gente.",
        "plate": null
      },
      {
        "start": 28.449,
        "end": 29.856,
        "text": "El gobierno llegó tarde.",
        "plate": null
      }
    ]
  },
  {
    "id": "p8",
    "start": 30.105,
    "end": 40.624,
    "rank": 8,
    "name": "Ernesto Zedillo",
    "years": "1994–2000",
    "kicker": "El error de diciembre",
    "image": "/portraits/zedillo.jpg",
    "swapImage": null,
    "swapAt": null,
    "lines": [
      {
        "start": 30.105,
        "end": 30.42,
        "text": "Ocho.",
        "plate": null
      },
      {
        "start": 30.42,
        "end": 31.428,
        "text": "Ernesto Zedillo.",
        "plate": null
      },
      {
        "start": 31.428,
        "end": 33.57,
        "text": "Le llamaron el error de diciembre.",
        "plate": null
      },
      {
        "start": 33.57,
        "end": 35.9,
        "text": "Una devaluación se comió los ahorros.",
        "plate": null
      },
      {
        "start": 35.9,
        "end": 40.624,
        "text": "Después, el Fobaproa pasó deudas privadas de la banca a la cuenta de todos.",
        "plate": null
      }
    ]
  },
  {
    "id": "p7",
    "start": 40.874,
    "end": 54.813,
    "rank": 7,
    "name": "Carlos Salinas de Gortari",
    "years": "1988–1994",
    "kicker": "La noche del sistema",
    "image": "/portraits/salinas.jpg",
    "swapImage": null,
    "swapAt": null,
    "lines": [
      {
        "start": 40.874,
        "end": 41.244,
        "text": "Siete.",
        "plate": null
      },
      {
        "start": 41.244,
        "end": 42.847,
        "text": "Carlos Salinas de Gortari.",
        "plate": null
      },
      {
        "start": 42.847,
        "end": 48.892,
        "text": "En mil novecientos ochenta y ocho, el sistema de cómputo se cayó cuando otro candidato iba arriba.",
        "plate": null
      },
      {
        "start": 48.892,
        "end": 54.813,
        "text": "Al irse, dejó un levantamiento en Chiapas, un candidato asesinado y la crisis tocando la puerta.",
        "plate": null
      }
    ]
  },
  {
    "id": "p6",
    "start": 55.062,
    "end": 68.298,
    "rank": 6,
    "name": "Luis Echeverría Álvarez",
    "years": "1970–1976",
    "kicker": "El Halconazo",
    "image": "/portraits/echeverria.jpg",
    "swapImage": null,
    "swapAt": null,
    "lines": [
      {
        "start": 55.062,
        "end": 55.385,
        "text": "Seis.",
        "plate": null
      },
      {
        "start": 55.385,
        "end": 56.418,
        "text": "Luis Echeverría.",
        "plate": null
      },
      {
        "start": 56.418,
        "end": 59.453,
        "text": "Diez de junio de mil novecientos setenta y uno.",
        "plate": null
      },
      {
        "start": 59.453,
        "end": 60.292,
        "text": "El Halconazo.",
        "plate": null
      },
      {
        "start": 60.292,
        "end": 63.585,
        "text": "Paramilitares golpearon a estudiantes en pleno día.",
        "plate": null
      },
      {
        "start": 63.585,
        "end": 68.298,
        "text": "Su gobierno cargó, además, la guerra sucia: persecución y desapariciones.",
        "plate": null
      }
    ]
  },
  {
    "id": "p5",
    "start": 68.547,
    "end": 81.355,
    "rank": 5,
    "name": "Gustavo Díaz Ordaz",
    "years": "1964–1970",
    "kicker": "Tlatelolco",
    "image": "/portraits/diaz-ordaz.jpg",
    "swapImage": null,
    "swapAt": null,
    "lines": [
      {
        "start": 68.547,
        "end": 68.92,
        "text": "Cinco.",
        "plate": null
      },
      {
        "start": 68.92,
        "end": 70.102,
        "text": "Gustavo Díaz Ordaz.",
        "plate": null
      },
      {
        "start": 70.102,
        "end": 73.148,
        "text": "Dos de octubre de mil novecientos sesenta y ocho.",
        "plate": null
      },
      {
        "start": 73.148,
        "end": 73.832,
        "text": "Tlatelolco.",
        "plate": null
      },
      {
        "start": 73.832,
        "end": 78.247,
        "text": "En la Plaza de las Tres Culturas, el Estado disparó contra estudiantes.",
        "plate": null
      },
      {
        "start": 78.247,
        "end": 80.547,
        "text": "La cifra de muertos sigue en disputa.",
        "plate": null
      },
      {
        "start": 80.547,
        "end": 81.355,
        "text": "El hecho, no.",
        "plate": null
      }
    ]
  },
  {
    "id": "p4",
    "start": 81.605,
    "end": 95.482,
    "rank": 4,
    "name": "Victoriano Huerta",
    "years": "1913–1914",
    "kicker": "El usurpador",
    "image": "/portraits/huerta.jpg",
    "swapImage": null,
    "swapAt": null,
    "lines": [
      {
        "start": 81.605,
        "end": 82.093,
        "text": "Cuatro.",
        "plate": null
      },
      {
        "start": 82.093,
        "end": 83.348,
        "text": "Victoriano Huerta.",
        "plate": null
      },
      {
        "start": 83.348,
        "end": 84.813,
        "text": "No ganó una elección.",
        "plate": null
      },
      {
        "start": 84.813,
        "end": 85.649,
        "text": "La arrebató.",
        "plate": null
      },
      {
        "start": 85.649,
        "end": 87.184,
        "text": "Mil novecientos trece.",
        "plate": null
      },
      {
        "start": 87.184,
        "end": 88.439,
        "text": "La Decena Trágica.",
        "plate": null
      },
      {
        "start": 88.439,
        "end": 89.276,
        "text": "Francisco I.",
        "plate": null
      },
      {
        "start": 89.276,
        "end": 92.762,
        "text": "Madero y José María Pino Suárez fueron asesinados.",
        "plate": null
      },
      {
        "start": 92.762,
        "end": 95.482,
        "text": "Un usurpador se sentó, y el país ardió.",
        "plate": null
      }
    ]
  },
  {
    "id": "p3",
    "start": 95.731,
    "end": 108.326,
    "rank": 3,
    "name": "Porfirio Díaz",
    "years": "1876–1911",
    "kicker": "Treinta años",
    "image": "/portraits/porfirio.jpg",
    "swapImage": null,
    "swapAt": null,
    "lines": [
      {
        "start": 95.731,
        "end": 96.064,
        "text": "Tres.",
        "plate": null
      },
      {
        "start": 96.064,
        "end": 96.997,
        "text": "Porfirio Díaz.",
        "plate": null
      },
      {
        "start": 96.997,
        "end": 99.13,
        "text": "Más de treinta años en el poder.",
        "plate": null
      },
      {
        "start": 99.13,
        "end": 101.928,
        "text": "Tendió rieles y le cerró la boca a México.",
        "plate": null
      },
      {
        "start": 101.928,
        "end": 103.194,
        "text": "Huelgas aplastadas.",
        "plate": null
      },
      {
        "start": 103.194,
        "end": 104.66,
        "text": "Campesinos sin tierra.",
        "plate": null
      },
      {
        "start": 104.66,
        "end": 107.193,
        "text": "La Revolución no empezó por accidente.",
        "plate": null
      },
      {
        "start": 107.193,
        "end": 108.326,
        "text": "Empezó contra él.",
        "plate": null
      }
    ]
  },
  {
    "id": "p2",
    "start": 108.575,
    "end": 129.72,
    "rank": 2,
    "name": "Antonio López de Santa Anna",
    "years": "1833–1855",
    "kicker": "El mapa partido",
    "image": "/portraits/santa.jpg",
    "swapImage": "/portraits/mapa.jpg",
    "swapAt": 118.302,
    "lines": [
      {
        "start": 108.575,
        "end": 108.819,
        "text": "Dos.",
        "plate": null
      },
      {
        "start": 108.819,
        "end": 110.525,
        "text": "Antonio López de Santa Anna.",
        "plate": null
      },
      {
        "start": 110.525,
        "end": 111.865,
        "text": "Presidente once veces.",
        "plate": null
      },
      {
        "start": 111.865,
        "end": 113.572,
        "text": "Con él, México perdió Texas.",
        "plate": null
      },
      {
        "start": 113.572,
        "end": 121.006,
        "text": "En mil ochocientos cuarenta y ocho, el Tratado de Guadalupe Hidalgo cedió a Estados Unidos más de la mitad del territorio.",
        "plate": null
      },
      {
        "start": 121.006,
        "end": 121.981,
        "text": "Alta California.",
        "plate": null
      },
      {
        "start": 121.981,
        "end": 122.773,
        "text": "Nuevo México.",
        "plate": null
      },
      {
        "start": 122.773,
        "end": 124.418,
        "text": "El Río Bravo como frontera.",
        "plate": null
      },
      {
        "start": 124.418,
        "end": 127.282,
        "text": "Quince millones de dólares por un mapa partido.",
        "plate": null
      },
      {
        "start": 127.282,
        "end": 129.72,
        "text": "Años después, todavía vendió La Mesilla.",
        "plate": null
      }
    ]
  },
  {
    "id": "p1",
    "start": 129.969,
    "end": 157.011,
    "rank": 1,
    "name": "Felipe Calderón",
    "years": "2006–2012",
    "kicker": "La guerra",
    "image": "/portraits/calderon.jpg",
    "swapImage": null,
    "swapAt": null,
    "lines": [
      {
        "start": 129.969,
        "end": 130.206,
        "text": "Uno.",
        "plate": null
      },
      {
        "start": 130.206,
        "end": 131.155,
        "text": "Felipe Calderón.",
        "plate": null
      },
      {
        "start": 131.155,
        "end": 136.018,
        "text": "En dos mil seis sacó al Ejército a la calle y le declaró la guerra a los cárteles.",
        "plate": null
      },
      {
        "start": 136.018,
        "end": 137.619,
        "text": "La violencia no se contuvo.",
        "plate": null
      },
      {
        "start": 137.619,
        "end": 138.212,
        "text": "Se desató.",
        "plate": null
      },
      {
        "start": 138.212,
        "end": 140.11,
        "text": "Los homicidios se multiplicaron.",
        "plate": null
      },
      {
        "start": 140.11,
        "end": 142.541,
        "text": "El país aprendió a contar muertos de más.",
        "plate": null
      },
      {
        "start": 142.541,
        "end": 150.665,
        "text": "Y quien mandaba la seguridad, Genaro García Luna, secretario de Seguridad Pública, fue declarado culpable en una corte de Estados Unidos.",
        "plate": "Culpable · Cártel de Sinaloa · 38 años"
      },
      {
        "start": 150.665,
        "end": 154.223,
        "text": "Trabajó para el cártel de Sinaloa mientras decía combatirlo.",
        "plate": "Culpable · Cártel de Sinaloa · 38 años"
      },
      {
        "start": 154.223,
        "end": 157.011,
        "text": "Lo condenaron a treinta y ocho años de prisión.",
        "plate": "Culpable · Cártel de Sinaloa · 38 años"
      }
    ]
  },
  {
    "id": "end",
    "start": 157.26,
    "end": 165.0,
    "rank": null,
    "name": "",
    "years": "",
    "kicker": "La factura",
    "image": null,
    "swapImage": null,
    "swapAt": null,
    "lines": [
      {
        "start": 157.26,
        "end": 158.034,
        "text": "Diez nombres.",
        "plate": null
      },
      {
        "start": 158.034,
        "end": 160.356,
        "text": "Una factura que no cabe en un discurso.",
        "plate": null
      },
      {
        "start": 160.356,
        "end": 161.785,
        "text": "La historia no absuelve.",
        "plate": null
      },
      {
        "start": 161.785,
        "end": 162.321,
        "text": "Recuerda.",
        "plate": null
      },
      {
        "start": 162.321,
        "end": 165.0,
        "text": "Y México sigue cargando el peso de esa silla.",
        "plate": null
      }
    ]
  }
];
