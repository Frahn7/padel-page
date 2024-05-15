export default function MembersGrup() {
  const MembersGrup = () => [
    {
      name: "Francisco Villella",
      image: "/img/members/Francv.jpg",
      racket: "SNAUWAERT NITROX",
      height: "1,60",
    },
    {
      name: "Thiago Valdiviezo",
      image: "/img/members/thiagocv.jpg",
      racket: "CIGIO ANKARA",
      height: "1,70",
    },
    {
      name: "Tomas Canosa",
      image: "/img/members/tomicv.png",
      racket: "CIGIO RIAD",
      height: "1,70",
    },
    {
      name: "Lucas Torres",
      image: "/img/members/lucascv.jpg",
      racket: "QUICK FLEX 40",
      height: "1,96",
    },
    {
      name: "Fabrizio Ottone",
      image: "/img/members/fabricv.jpg",
      racket: "SNAUWAERT BX3",
      height: "1,80",
    },
    {
      name: "Carlos brandan",
      image: "/img/members/carloscv.jpg",
      racket: "NO POSEE",
      height: "1,89",
    },
  ];

  const PlayersGrup = MembersGrup().map((member) => {
    return { ...member };
  });

  return PlayersGrup;
}
