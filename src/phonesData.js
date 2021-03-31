const phonesData = [
  {
    id: 1,
    brand: "Xiaomi",
    modelName: "Mi 11 Ultra",
    phoneImg: "/images/01.png",
    hitsAvg: 1124,
    usersLike: 2322,
    rumored: true,
    launch: {
      announced: "2021, March 29", // this can be date, used string for simplisity. in fact many things used simply to make things easy for parsing
      status: "Coming soon. Exp. release 2021, April 02",
    },
    body: {
      dimensions: "164.3 x 74.6 x 8.4 mm (6.47 x 2.94 x 0.33 in)",
      weight: "234 g (8.25 oz)",
      build: "Glass front (Gorilla Glass Victus), ceramic back, aluminum frame",
      sim: "Dual SIM (Nano-SIM, dual stand-by)",
      extraInfo: "IP68 dust/water resistant (up to 1.5m for 30 mins)",
    },
    display: {
      size: {
        inch: 6.81,
        cm2: 112.0,
        extraInfo: "~91.4% screen-to-body ratio",
      },
      type: "AMOLED, 1B colors, 120Hz, HDR10+, 900 nits, 1700 nits (peak)",
      resolution: {
        px: "1440 x 3200",
        extraInfo: " 20:9 ratio (~515 ppi density)",
      },
      Protection: "Corning Gorilla Glass Victus",
      extraInfo: "Dolby Vision",
    },
    battary: {
      type: "li-po",
      mah: 5000,
    },
    ram: [4],
    chipset: "snapdragon 888",
    camera: {
      mp: 50,
      vidRecord: 4320,
    },
    network: {
      techs: ["GSM", "CDMA", "HSPA", "EVDO", "LTE", "5G"],
    },
  },
  {
    id: 2,
    brand: "Samsung",
    modelName: "Galaxy A72",
    phoneImg: "/images/02.png",
    hitsAvg: 124,
    usersLike: 2422,
    rumored: true,
    launch: {
      announced: "2020, April 22", // this can be date, used string for simplisity. in fact many things used simply to make things easy for parsing
      status: "available",
    },
    body: {
      dimensions: "164.3 x 74.6 x 8.4 mm (6.47 x 2.94 x 0.33 in)",
      weight: "234 g (8.25 oz)",
      build: "Glass front (Gorilla Glass Victus), ceramic back, aluminum frame",
      sim: "Dual SIM (Nano-SIM, dual stand-by)",
      extraInfo: "IP68 dust/water resistant (up to 1.5m for 30 mins)",
    },
    display: {
      size: {
        inch: 6.81,
        cm2: 112.0,
        extraInfo: "~91.4% screen-to-body ratio",
      },
      type: "AMOLED, 1B colors, 120Hz, HDR10+, 900 nits, 1700 nits (peak)",
      resolution: {
        px: "1440 x 3200",
        extraInfo: " 20:9 ratio (~515 ppi density)",
      },
      Protection: "Corning Gorilla Glass Victus",
      extraInfo: "Dolby Vision",
    },
    battary: {
      type: "li-po",
      mah: 5000,
    },
    ram: [3, 4],
    chipset: "snapdragon 888",
    camera: {
      mp: 50,
      vidRecord: 4320,
    },
    network: {
      techs: ["GSM", "CDMA", "HSPA", "EVDO", "LTE", "5G"],
    },
  },
  {
    id: 3,
    brand: "Apple",
    modelName: "Redmi Note 10",
    phoneImg: "/images/03.png",
    hitsAvg: 1714,
    usersLike: 1322,
    rumored: true,
    launch: {
      announced: "2021, March 29", // this can be date, used string for simplisity. in fact many things used simply to make things easy for parsing
      status: "Coming soon. Exp. release 2021, April 02",
    },
    body: {
      dimensions: "164.3 x 74.6 x 8.4 mm (6.47 x 2.94 x 0.33 in)",
      weight: "234 g (8.25 oz)",
      build: "Glass front (Gorilla Glass Victus), ceramic back, aluminum frame",
      sim: "Dual SIM (Nano-SIM, dual stand-by)",
      extraInfo: "IP68 dust/water resistant (up to 1.5m for 30 mins)",
    },
    display: {
      size: {
        inch: 6.81,
        cm2: 112.0,
        extraInfo: "~91.4% screen-to-body ratio",
      },
      type: "AMOLED, 1B colors, 120Hz, HDR10+, 900 nits, 1700 nits (peak)",
      resolution: {
        px: "1440 x 3200",
        extraInfo: " 20:9 ratio (~515 ppi density)",
      },
      Protection: "Corning Gorilla Glass Victus",
      extraInfo: "Dolby Vision",
    },
    battary: {
      type: "li-po",
      mah: 5000,
    },
    ram: [8, 12],
    chipset: "snapdragon 888",
    camera: {
      mp: 50,
      vidRecord: 4320,
    },
    network: {
      techs: ["GSM", "CDMA", "HSPA", "EVDO", "LTE", "5G"],
    },
  },
  {
    id: 4,
    brand: "Lg",
    modelName: "Poco X3 Pro",
    phoneImg: "/images/04.png",
    hitsAvg: 675,
    usersLike: 1454,
    rumored: true,
    launch: {
      announced: "2021, March 29", // this can be date, used string for simplisity. in fact many things used simply to make things easy for parsing
      status: "Coming soon. Exp. release 2021, April 02",
    },
    body: {
      dimensions: "164.3 x 74.6 x 8.4 mm (6.47 x 2.94 x 0.33 in)",
      weight: "234 g (8.25 oz)",
      build: "Glass front (Gorilla Glass Victus), ceramic back, aluminum frame",
      sim: "Dual SIM (Nano-SIM, dual stand-by)",
      extraInfo: "IP68 dust/water resistant (up to 1.5m for 30 mins)",
    },
    display: {
      size: {
        inch: 6.81,
        cm2: 112.0,
        extraInfo: "~91.4% screen-to-body ratio",
      },
      type: "AMOLED, 1B colors, 120Hz, HDR10+, 900 nits, 1700 nits (peak)",
      resolution: {
        px: "1440 x 3200",
        extraInfo: " 20:9 ratio (~515 ppi density)",
      },
      Protection: "Corning Gorilla Glass Victus",
      extraInfo: "Dolby Vision",
    },
    battary: {
      type: "li-po",
      mah: 5000,
    },
    ram: [8, 12],
    chipset: "snapdragon 888",
    camera: {
      mp: 50,
      vidRecord: 4320,
    },
    network: {
      techs: ["GSM", "CDMA", "HSPA", "EVDO", "LTE", "5G"],
    },
  },
  {
    id: 5,
    brand: "HUAWEI",
    modelName: "Galaxy F62",
    phoneImg: "/images/05.png",
    hitsAvg: 363,
    usersLike: 3634,
    rumored: true,
    launch: {
      announced: "2021, March 29", // this can be date, used string for simplisity. in fact many things used simply to make things easy for parsing
      status: "Coming soon. Exp. release 2021, April 02",
    },
    body: {
      dimensions: "164.3 x 74.6 x 8.4 mm (6.47 x 2.94 x 0.33 in)",
      weight: "234 g (8.25 oz)",
      build: "Glass front (Gorilla Glass Victus), ceramic back, aluminum frame",
      sim: "Dual SIM (Nano-SIM, dual stand-by)",
      extraInfo: "IP68 dust/water resistant (up to 1.5m for 30 mins)",
    },
    display: {
      size: {
        inch: 6.81,
        cm2: 112.0,
        extraInfo: "~91.4% screen-to-body ratio",
      },
      type: "AMOLED, 1B colors, 120Hz, HDR10+, 900 nits, 1700 nits (peak)",
      resolution: {
        px: "1440 x 3200",
        extraInfo: " 20:9 ratio (~515 ppi density)",
      },
      Protection: "Corning Gorilla Glass Victus",
      extraInfo: "Dolby Vision",
    },
    battary: {
      type: "li-po",
      mah: 5000,
    },
    ram: [8, 12],
    chipset: "snapdragon 888",
    camera: {
      mp: 50,
      vidRecord: 4320,
    },
    network: {
      techs: ["GSM", "CDMA", "HSPA", "EVDO", "LTE", "5G"],
    },
  },

  {
    id: 6,
    brand: "NOKIA",
    modelName: "Redmi Note 10 Pro",
    phoneImg: "/images/06.png",
    hitsAvg: 2342,
    usersLike: 8975,
    rumored: true,
    launch: {
      announced: "2021, March 29", // this can be date, used string for simplisity. in fact many things used simply to make things easy for parsing
      status: "Coming soon. Exp. release 2021, April 02",
    },
    body: {
      dimensions: "164.3 x 74.6 x 8.4 mm (6.47 x 2.94 x 0.33 in)",
      weight: "234 g (8.25 oz)",
      build: "Glass front (Gorilla Glass Victus), ceramic back, aluminum frame",
      sim: "Dual SIM (Nano-SIM, dual stand-by)",
      extraInfo: "IP68 dust/water resistant (up to 1.5m for 30 mins)",
    },
    display: {
      size: {
        inch: 6.81,
        cm2: 112.0,
        extraInfo: "~91.4% screen-to-body ratio",
      },
      type: "AMOLED, 1B colors, 120Hz, HDR10+, 900 nits, 1700 nits (peak)",
      resolution: {
        px: "1440 x 3200",
        extraInfo: " 20:9 ratio (~515 ppi density)",
      },
      Protection: "Corning Gorilla Glass Victus",
      extraInfo: "Dolby Vision",
    },
    battary: {
      type: "li-po",
      mah: 5000,
    },
    ram: [4],
    chipset: "snapdragon 888",
    camera: {
      mp: 50,
      vidRecord: 4320,
    },
    network: {
      techs: ["GSM", "CDMA", "HSPA", "EVDO", "LTE", "5G"],
    },
  },
  {
    id: 7,
    brand: "SONY",
    modelName: "Galaxy Xcover 5",
    phoneImg: "/images/07.png",
    hitsAvg: 4534,
    usersLike: 2942,
    rumored: true,
    launch: {
      announced: "2020, April 22", // this can be date, used string for simplisity. in fact many things used simply to make things easy for parsing
      status: "available",
    },
    body: {
      dimensions: "164.3 x 74.6 x 8.4 mm (6.47 x 2.94 x 0.33 in)",
      weight: "234 g (8.25 oz)",
      build: "Glass front (Gorilla Glass Victus), ceramic back, aluminum frame",
      sim: "Dual SIM (Nano-SIM, dual stand-by)",
      extraInfo: "IP68 dust/water resistant (up to 1.5m for 30 mins)",
    },
    display: {
      size: {
        inch: 6.81,
        cm2: 112.0,
        extraInfo: "~91.4% screen-to-body ratio",
      },
      type: "AMOLED, 1B colors, 120Hz, HDR10+, 900 nits, 1700 nits (peak)",
      resolution: {
        px: "1440 x 3200",
        extraInfo: " 20:9 ratio (~515 ppi density)",
      },
      Protection: "Corning Gorilla Glass Victus",
      extraInfo: "Dolby Vision",
    },
    battary: {
      type: "li-po",
      mah: 5000,
    },
    ram: [3],
    chipset: "snapdragon 888",
    camera: {
      mp: 50,
      vidRecord: 4320,
    },
    network: {
      techs: ["GSM", "CDMA", "HSPA", "EVDO", "LTE", "5G"],
    },
  },
  {
    id: 8,
    brand: "HTC",
    modelName: "Galaxy M02s",
    phoneImg: "/images/08.png",
    hitsAvg: 2322,
    usersLike: 788,
    rumored: true,
    launch: {
      announced: "2021, March 29", // this can be date, used string for simplisity. in fact many things used simply to make things easy for parsing
      status: "Coming soon. Exp. release 2021, April 02",
    },
    body: {
      dimensions: "164.3 x 74.6 x 8.4 mm (6.47 x 2.94 x 0.33 in)",
      weight: "234 g (8.25 oz)",
      build: "Glass front (Gorilla Glass Victus), ceramic back, aluminum frame",
      sim: "Dual SIM (Nano-SIM, dual stand-by)",
      extraInfo: "IP68 dust/water resistant (up to 1.5m for 30 mins)",
    },
    display: {
      size: {
        inch: 6.81,
        cm2: 112.0,
        extraInfo: "~91.4% screen-to-body ratio",
      },
      type: "AMOLED, 1B colors, 120Hz, HDR10+, 900 nits, 1700 nits (peak)",
      resolution: {
        px: "1440 x 3200",
        extraInfo: " 20:9 ratio (~515 ppi density)",
      },
      Protection: "Corning Gorilla Glass Victus",
      extraInfo: "Dolby Vision",
    },
    battary: {
      type: "li-po",
      mah: 5000,
    },
    ram: [4, 6],
    chipset: "snapdragon 888",
    camera: {
      mp: 50,
      vidRecord: 4320,
    },
    network: {
      techs: ["GSM", "CDMA", "HSPA", "EVDO", "LTE", "5G"],
    },
  },
  {
    id: 9,
    brand: "MOTOROLA",
    modelName: "Mi Mix Fold",
    phoneImg: "/images/09.png",
    hitsAvg: 6275,
    usersLike: 454,
    rumored: false,
    launch: {
      announced: "2021, March 29", // this can be date, used string for simplisity. in fact many things used simply to make things easy for parsing
      status: "Coming soon. Exp. release 2021, April 02",
    },
    body: {
      dimensions: "164.3 x 74.6 x 8.4 mm (6.47 x 2.94 x 0.33 in)",
      weight: "234 g (8.25 oz)",
      build: "Glass front (Gorilla Glass Victus), ceramic back, aluminum frame",
      sim: "Dual SIM (Nano-SIM, dual stand-by)",
      extraInfo: "IP68 dust/water resistant (up to 1.5m for 30 mins)",
    },
    display: {
      size: {
        inch: 6.81,
        cm2: 112.0,
        extraInfo: "~91.4% screen-to-body ratio",
      },
      type: "AMOLED, 1B colors, 120Hz, HDR10+, 900 nits, 1700 nits (peak)",
      resolution: {
        px: "1440 x 3200",
        extraInfo: " 20:9 ratio (~515 ppi density)",
      },
      Protection: "Corning Gorilla Glass Victus",
      extraInfo: "Dolby Vision",
    },
    battary: {
      type: "li-po",
      mah: 5000,
    },
    ram: [2],
    chipset: "snapdragon 888",
    camera: {
      mp: 50,
      vidRecord: 4320,
    },
    network: {
      techs: ["GSM", "CDMA", "HSPA", "EVDO", "LTE", "5G"],
    },
  },
  {
    id: 10,
    brand: "LENOVO",
    modelName: "Galaxy Note10",
    phoneImg: "/images/10.png",
    hitsAvg: 363,
    usersLike: 3634,
    rumored: false,
    launch: {
      announced: "2021, March 29", // this can be date, used string for simplisity. in fact many things used simply to make things easy for parsing
      status: "Coming soon. Exp. release 2021, April 02",
    },
    body: {
      dimensions: "164.3 x 74.6 x 8.4 mm (6.47 x 2.94 x 0.33 in)",
      weight: "234 g (8.25 oz)",
      build: "Glass front (Gorilla Glass Victus), ceramic back, aluminum frame",
      sim: "Dual SIM (Nano-SIM, dual stand-by)",
      extraInfo: "IP68 dust/water resistant (up to 1.5m for 30 mins)",
    },
    display: {
      size: {
        inch: 6.81,
        cm2: 112.0,
        extraInfo: "~91.4% screen-to-body ratio",
      },
      type: "AMOLED, 1B colors, 120Hz, HDR10+, 900 nits, 1700 nits (peak)",
      resolution: {
        px: "1440 x 3200",
        extraInfo: " 20:9 ratio (~515 ppi density)",
      },
      Protection: "Corning Gorilla Glass Victus",
      extraInfo: "Dolby Vision",
    },
    battary: {
      type: "li-po",
      mah: 5000,
    },
    ram: [8, 12],
    chipset: "snapdragon 888",
    camera: {
      mp: 50,
      vidRecord: 4320,
    },
    network: {
      techs: ["GSM", "CDMA", "HSPA", "EVDO", "LTE", "5G"],
    },
  },

  {
    id: 11,
    brand: "GOOGLE",
    modelName: "Redmi cool",
    phoneImg: "/images/11.png",
    hitsAvg: 8342,
    usersLike: 2975,
    rumored: false,
    launch: {
      announced: "2021, March 29", // this can be date, used string for simplisity. in fact many things used simply to make things easy for parsing
      status: "Coming soon. Exp. release 2021, April 02",
    },
    body: {
      dimensions: "164.3 x 74.6 x 8.4 mm (6.47 x 2.94 x 0.33 in)",
      weight: "234 g (8.25 oz)",
      build: "Glass front (Gorilla Glass Victus), ceramic back, aluminum frame",
      sim: "Dual SIM (Nano-SIM, dual stand-by)",
      extraInfo: "IP68 dust/water resistant (up to 1.5m for 30 mins)",
    },
    display: {
      size: {
        inch: 6.81,
        cm2: 112.0,
        extraInfo: "~91.4% screen-to-body ratio",
      },
      type: "AMOLED, 1B colors, 120Hz, HDR10+, 900 nits, 1700 nits (peak)",
      resolution: {
        px: "1440 x 3200",
        extraInfo: " 20:9 ratio (~515 ppi density)",
      },
      Protection: "Corning Gorilla Glass Victus",
      extraInfo: "Dolby Vision",
    },
    battary: {
      type: "li-po",
      mah: 5000,
    },
    ram: [8, 12],
    chipset: "snapdragon 888",
    camera: {
      mp: 50,
      vidRecord: 4320,
    },
    network: {
      techs: ["GSM", "CDMA", "HSPA", "EVDO", "LTE", "5G"],
    },
  },
  {
    id: 12,
    brand: "HONOR",
    modelName: "Galaxy bl5",
    phoneImg: "/images/12.png",
    hitsAvg: 4134,
    usersLike: 2902,
    rumored: true,
    launch: {
      announced: "2020, April 22", // this can be date, used string for simplisity. in fact many things used simply to make things easy for parsing
      status: "available",
    },
    body: {
      dimensions: "164.3 x 74.6 x 8.4 mm (6.47 x 2.94 x 0.33 in)",
      weight: "234 g (8.25 oz)",
      build: "Glass front (Gorilla Glass Victus), ceramic back, aluminum frame",
      sim: "Dual SIM (Nano-SIM, dual stand-by)",
      extraInfo: "IP68 dust/water resistant (up to 1.5m for 30 mins)",
    },
    display: {
      size: {
        inch: 6.81,
        cm2: 112.0,
        extraInfo: "~91.4% screen-to-body ratio",
      },
      type: "AMOLED, 1B colors, 120Hz, HDR10+, 900 nits, 1700 nits (peak)",
      resolution: {
        px: "1440 x 3200",
        extraInfo: " 20:9 ratio (~515 ppi density)",
      },
      Protection: "Corning Gorilla Glass Victus",
      extraInfo: "Dolby Vision",
    },
    battary: {
      type: "li-po",
      mah: 5000,
    },
    ram: [8, 12],
    chipset: "snapdragon 888",
    camera: {
      mp: 50,
      vidRecord: 4320,
    },
    network: {
      techs: ["GSM", "CDMA", "HSPA", "EVDO", "LTE", "5G"],
    },
  },
  {
    id: 13,
    brand: "Samsung",
    modelName: "Galaxy bl5",
    phoneImg: "/images/12.png",
    hitsAvg: 134,
    usersLike: 202,
    rumored: true,
    launch: {
      announced: "2029, April 22", // this can be date, used string for simplisity. in fact many things used simply to make things easy for parsing
      status: "available",
    },
    body: {
      dimensions: "164.3 x 74.6 x 8.4 mm (6.47 x 2.94 x 0.33 in)",
      weight: "234 g (8.25 oz)",
      build: "Glass front (Gorilla Glass Victus), ceramic back, aluminum frame",
      sim: "Dual SIM (Nano-SIM, dual stand-by)",
      extraInfo: "IP68 dust/water resistant (up to 1.5m for 30 mins)",
    },
    display: {
      size: {
        inch: 6.81,
        cm2: 112.0,
        extraInfo: "~91.4% screen-to-body ratio",
      },
      type: "AMOLED, 1B colors, 120Hz, HDR10+, 900 nits, 1700 nits (peak)",
      resolution: {
        px: "1440 x 3200",
        extraInfo: " 20:9 ratio (~515 ppi density)",
      },
      Protection: "Corning Gorilla Glass Victus",
      extraInfo: "Dolby Vision",
    },
    battary: {
      type: "li-po",
      mah: 5000,
    },
    ram: [8, 12],
    chipset: "snapdragon 888",
    camera: {
      mp: 50,
      vidRecord: 4320,
    },
    network: {
      techs: ["GSM", "CDMA", "HSPA", "EVDO", "LTE", "5G"],
    },
  },
];

export default phonesData;
