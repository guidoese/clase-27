const contacts = [
  {
    id: 1,
    name: "Yoda",
    last_time_conection: "Hace 2 horas",
    porfile_picture:
      "https://images.immediate.co.uk/production/volatile/sites/3/2017/12/yoda-the-empire-strikes-back-28a7558.jpg?quality=90&webp=true&resize=800,534",

    messages: [
      {
        id: 1,
        text: "Hola, como estas?",
        send_by_me: true,
        created_at: "2025-06-01T12:00:00Z",
        is_read: true,
      },
      {
        id: 2,
        text: "bien yo estoy",
        send_by_me: false,
        created_at: "2025-06-01T12:05:00Z",
        is_read: false,
      },
    ],
  },
  {
    id: 2,
    name: "Pepe Argento",
    last_time_conection: "Hace 3 horas",
    porfile_picture:
      "https://www.clarin.com/img/2022/01/20/GWR2-6fo__1256x620__1.jpg",
    messages: [
      {
        id: 1,
        text: "Holaaa",
        send_by_me: true,
        created_at: "2025-06-01T12:00:00Z",
        is_read: true,
      },
      {
        id: 2,
        text: "Uh la puta",
        send_by_me: false,
        created_at: "2025-06-01T12:05:00Z",
        is_read: false,
      },
    ],
  },
];

export default contacts;
