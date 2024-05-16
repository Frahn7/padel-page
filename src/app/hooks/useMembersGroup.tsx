export default function MembersGroup() {
  const MembersGroup = () => [
    {
      name: "Francisco Villella",
      id: "1",
      image: "/img/members/Francv.jpg",
      racket: "SNAUWAERT NITROX",
      height: "1,60",
      site: "Izquierda",
      ptos: 0,
      wins: 1,
      type: "Agresivo",
    },
    {
      name: "Thiago Valdiviezo",
      id: "2",
      image: "/img/members/thiagocv.jpg",
      racket: "CIGIO ANKARA",
      height: "1,70",
      site: "Izquierda",
      ptos: 0,
      wins: 0,
      type: "Agresivo",
    },
    {
      name: "Tomas Canosa",
      id: "3",
      image: "/img/members/tomicv.png",
      racket: "CIGIO RIAD",
      height: "1,70",
      site: "Derecha",
      ptos: 0,
      wins: 1,
      type: "Defensivo",
    },
    {
      name: "Lucas Torres",
      id: "4",
      image: "/img/members/lucascv.jpg",
      racket: "QUICK FLEX 40",
      height: "1,96",
      site: "Izquierda",
      ptos: 0,
      wins: 0,
      type: "Agresivo",
    },
    {
      name: "Fabrizio Ottone",
      id: "5",
      image: "/img/members/fabricv.jpg",
      racket: "SNAUWAERT BX3",
      height: "1,80",
      site: "Izquierda",
      ptos: 0,
      wins: 0,
      type: "Agresivo",
    },
    {
      name: "Carlos brandan",
      id: "6",
      image: "/img/members/carloscv.jpg",
      racket: "NO POSEE",
      height: "1,89",
      site: "Derecha",
      ptos: 0,
      wins: 0,
      type: "Defensivo",
    },
  ];

  const PlayersGrup = MembersGroup().map((member) => {
    return { ...member };
  });

  return PlayersGrup;
}