/**
 * Full menu — source of truth transcribed from docs/PROJECT-BRIEF.md (the flipbook).
 * Prices in COP, displayed with a dot thousands separator ($9.500 = COP 9,500).
 * ⚠️ Confirm current prices + the Hamburguesa Doble Carne price before launch.
 */

export interface MenuItem {
  name: string;
  price: string;
  description: string;
  /** mark when a value still needs owner confirmation */
  confirm?: boolean;
}

export interface MenuCategory {
  id: string;
  title: string;
  kicker: string;
  note?: string;
  items: MenuItem[];
}

export interface SpiceLevel {
  id: string;
  label: string;
  sublabel: string;
  /** brand token name for the chili color */
  color: "rojo" | "barro" | "verde" | "maiz";
}

export const spiceLevels: SpiceLevel[] = [
  { id: "fuerte", label: "Picante fuerte", sublabel: "Strong / hot", color: "rojo" },
  { id: "medio", label: "Picante medio", sublabel: "Medium", color: "barro" },
  { id: "ligero", label: "Ligeramente picante", sublabel: "Mild", color: "verde" },
  { id: "dulce", label: "Mermelada dulce", sublabel: "Sweet house jam", color: "maiz" },
];

export const menu: MenuCategory[] = [
  {
    id: "entradas",
    title: "Entradas",
    kicker: "Para empezar el ritual",
    items: [
      {
        name: "Guacamole",
        price: "$29.000",
        description:
          "Guacamole de la casa con nachos, pico de gallo, cochinita pibil, queso blanco, sour cream, piña asada, cilantro y mermelada de jalapeño de la casa.",
      },
      {
        name: "Ceremonia de Nachos",
        price: "$18.000",
        description:
          "Nachos bañados en mermelada de la casa, cilantro, guacamole de la casa y sour cream.",
      },
      {
        name: "Sopa Birriera",
        price: "$22.900",
        description:
          "Caldo en cocción de especias y chiles, con carne de res desmechada, pico de gallo, aguacate, cilantro, limón y tortilla de maíz o nachos.",
      },
      {
        name: "Elote",
        price: "$19.500",
        description:
          "Mazorca dulce desgranada, salteada en mayonesa de chipotle, sour cream, queso blanco, tajín y cilantro.",
      },
      {
        name: "Tacos Dorados",
        price: "$27.900",
        description:
          "4 flautas rellenas de puré de papa y carne al pastor, guacamole de la casa, sour cream y queso blanco.",
      },
    ],
  },
  {
    id: "tacos",
    title: "Tacos",
    kicker: "El corazón de la casa",
    note: "Precio por unidad salvo que se indique lo contrario.",
    items: [
      {
        name: "Cochinita Pibil",
        price: "$9.500",
        description: "Tortilla de maíz, carne cochinita pibil, guacamole, encurtido yucateco y cilantro.",
      },
      {
        name: "Al Pastor",
        price: "$9.900",
        description: "Tortilla de maíz, carne al pastor, piña asada, cebolla blanca y cilantro.",
      },
      {
        name: "Arrachera",
        price: "$9.900",
        description:
          "Tortilla de maíz, res marinada en arrachera, guacamole, pico de gallo, puntos de salsa de frijol refrito y cilantro.",
      },
      {
        name: "Morrillo",
        price: "$10.000",
        description:
          "Tortilla de maíz, morrillo en chiles y cerveza, puré de plátano y chipotle, guacamole, pico de gallo, sour cream y cilantro.",
      },
      {
        name: "Chori-Taco",
        price: "$10.500",
        description:
          "Tortilla de maíz, chorizo gourmet, pico de gallo, puntos de sour cream y salsa de frijol refrito.",
      },
      {
        name: "Taco de Pollo",
        price: "$10.500",
        description:
          "Pollo apanado en finas hierbas y panko, tortilla de maíz, encurtido yucateco, guacamole, sour cream, mayonesa de chipotle y cilantro.",
      },
      {
        name: "Taco de Camarón",
        price: "$11.900",
        description:
          "Camarón apanado en cítrico y panko, tortilla de maíz, guacamole, encurtido de rábano y flor de jamaica, mayonesa de chipotle, sour cream y cilantro.",
      },
      {
        name: "Taco de Lengua",
        price: "$10.500",
        description:
          "Tortilla de maíz, lengua de res en cocción lenta, cebolla blanca, salsa verde de la casa y cilantro.",
      },
      {
        name: "Trío de Tacos Birrieros",
        price: "$36.000",
        description:
          "Tortilla de maíz, res desmechada en cocción lenta con chiles y especias, costras de mix de quesos, cebolla blanca, cilantro y caldo de birria.",
      },
      {
        name: "Combo Tacos",
        price: "$33.000",
        description:
          "3 tacos a elección (arrachera, cochinita pibil, al pastor) + nachos con mermelada de jalapeño + gaseosa Postobón 250 ml.",
      },
    ],
  },
  {
    id: "fuertes",
    title: "Platos Fuertes",
    kicker: "Para sentarse y quedarse",
    items: [
      {
        name: "Quesadilla de Pollo",
        price: "$31.900",
        description:
          "Tortilla de harina, mix de queso, pollo desmechado, mermelada de jalapeño, pico de gallo, guacamole, sour cream y salsa de frijol refrito; con nachos.",
      },
      {
        name: "Quesadilla al Pastor",
        price: "$33.900",
        description:
          "Tortilla de harina, mix de quesos, carne al pastor, cebolla blanca, mayonesa de chipotle, guacamole, sour cream y cilantro; con nachos.",
      },
      {
        name: "Quesadilla Mixto",
        price: "$36.900",
        description:
          "Dos carnes a elección, tortilla de harina, mix de quesos, cebolla blanca, mayonesa de chipotle, guacamole, sour cream y cilantro; con nachos.",
      },
      {
        name: "Burrito de Cochinita",
        price: "$28.900",
        description:
          "Tortilla de harina, guacamole, pico de gallo, sour cream, cochinita pibil, lechuga romana, salsa verde y queso blanco; con nachos y mermelada.",
      },
      {
        name: "Burrito Mixto",
        price: "$34.900",
        description:
          "Doble carne a elección, tortilla de harina, guacamole, pico de gallo, sour cream, lechuga romana, salsa verde y queso blanco; con nachos y mermelada.",
      },
      {
        name: "Chilaquiles",
        price: "$28.900",
        description:
          "Tortilla de maíz crocante, arrachera, salsa verde, queso blanco, pico de gallo, sour cream, huevo frito, cilantro y guacamole.",
      },
      {
        name: "Hamburguesa",
        price: "$35.900",
        description:
          "Pan brioche, res hecha en casa, mayonesa de chipotle, tocineta, queso cheddar, cebolla caramelizada en agraz, sour cream y cogollo; con papas o nachos.",
      },
      {
        name: "Hamburguesa Doble Carne",
        price: "$45.000",
        description:
          "Doble res, doble cheddar, mayonesa de chipotle, tocineta, cebolla caramelizada, sour cream y cogollo; con papas o nachos.",
      },
      {
        name: "Papas Cochinas",
        price: "$28.900",
        description:
          "Papas a la francesa, papa criolla, guacamole, cochinita pibil, sour cream, queso blanco, nachos y cilantro.",
      },
      {
        name: "Caserola de Nachos",
        price: "$39.000",
        description:
          "Nachos, guacamole, pico de gallo, sour cream, salsa de frijol refrito, queso blanco, cochinita pibil, mermelada de jalapeño y cilantro.",
      },
      {
        name: "Chimichanga",
        price: "$34.000",
        description:
          "Tortilla de harina frita rellena de mix de queso, morrillo salteado con pimentón, pico de gallo, guacamole, queso blanco, sour cream y cilantro.",
      },
      {
        name: "Bowl Mexicano",
        price: "$27.900",
        description:
          "Lechuga romana, salsa verde y mermelada de jalapeño, elotes con sour cream/tajín/queso, pico de gallo, aguacate, crispetas de pollo y nachos.",
      },
      {
        name: "Elote con Pollo",
        price: "$25.000",
        description:
          "Mazorca dulce salteada en mayonesa de chipotle, pollo, sour cream, queso blanco, tajín y cilantro.",
      },
      {
        name: "Torta Pibil",
        price: "$28.000",
        description:
          "Pan brioche bolillo, guacamole, queso blanco, tomates asados, mayonesa de chipotle, sour cream, cochinita pibil, encurtido yucateco, piña asada y salsa verde; con nachos.",
      },
      {
        name: "Dorilocos",
        price: "$28.500",
        description:
          "Doritos con pollo desmechado, tocineta, maíz dulce, plátano maduro, lechuga, pico de gallo, sour cream, salsa verde, queso blanco y cilantro.",
      },
      {
        name: "Tostadas de Arrachera",
        price: "$26.500",
        description:
          "Tostadas de maíz, arrachera, guacamole, sour cream, mayonesa de chipotle, salsa de frijol refrito, pico de gallo, queso blanco y cilantro.",
      },
      {
        name: "Tacada (para compartir)",
        price: "$94.900",
        description:
          "2 al pastor, 2 cochinita, 3 arrachera, 3 dorados, guacamole, nachos, porción de cochinita, salsa verde, sour cream y mermelada.",
      },
    ],
  },
  {
    id: "veggie",
    title: "Para los Verdi-Lovers",
    kicker: "Vegetariano, sin perder la fiesta",
    items: [
      {
        name: "Burrito Veggie",
        price: "$28.000",
        description:
          "Tortilla de harina, guacamole, pico de gallo, sour cream, champiñones crujientes, salsa de frijol refrito, lechuga romana, salsa verde y queso blanco; con nachos.",
      },
      {
        name: "Caserola de Nachos Veggie",
        price: "$36.900",
        description:
          "Nachos, guacamole, pico de gallo, sour cream, salsa de frijol refrito, champiñones crujientes, queso blanco, mermelada de jalapeño y cilantro.",
      },
      {
        name: "Taco Veggie",
        price: "$10.500",
        description:
          "Tortilla de maíz, guacamole, champiñones crujientes, encurtido yucateco, puntos de sour cream y cilantro.",
      },
      {
        name: "Quesadilla Veggie",
        price: "$28.000",
        description:
          "Tortilla de harina, mix de quesos, champiñones crujientes, salsa de frijol refrito, mermelada de jalapeño, pico de gallo, guacamole, sour cream y cilantro; con nachos.",
      },
      {
        name: "Papas Veggie",
        price: "$29.000",
        description:
          "Papas a la francesa y criolla en doble fritura, guacamole, champiñones crujientes, salsa de frijol refrito, pico de gallo, sour cream, queso blanco, nachos y cilantro.",
      },
      {
        name: "Hamburguesa Veggie",
        price: "$33.900",
        description:
          "Pan brioche, carne de lentejas, queso cheddar, mayonesa de chipotle, cebolla caramelizada en agraz, sour cream y cogollo; con papas o nachos.",
      },
    ],
  },
  {
    id: "bebidas",
    title: "Bebidas",
    kicker: "Para refrescar",
    items: [
      { name: "Agua de Jamaica", price: "$6.000", description: "Infusión fría de flor de jamaica de la casa." },
      { name: "Gaseosa Postobón", price: "$3.500", description: "Línea Postobón." },
      { name: "Coca-Cola", price: "$5.500", description: "Botella personal." },
      { name: "Té Hatsu", price: "$7.500", description: "Té premium Hatsu." },
      { name: "Soda Hatsu", price: "$6.500", description: "Soda artesanal Hatsu." },
      { name: "Soda Bretaña", price: "$4.500", description: "Soda Bretaña." },
      { name: "Agua Hatsu", price: "$5.500", description: "Agua Hatsu." },
      { name: "H2O 600 ml", price: "$6.000", description: "Agua saborizada 600 ml." },
      { name: "Cerveza Costeñita", price: "$5.000", description: "Cerveza nacional." },
      { name: "Cerveza Nacional", price: "$5.500", description: "Pilsen, Águila o Águila Light." },
      { name: "Cerveza Coronita 210 ml", price: "$6.500", description: "Corona 210 ml." },
      { name: "Cerveza Club Colombia", price: "$7.500", description: "Dorada, Roja o Negra." },
      { name: "Cerveza Corona 330 ml", price: "$8.500", description: "Corona 330 ml." },
      { name: "Cerveza Sol", price: "$8.500", description: "Cerveza Sol." },
      { name: "Cerveza Modelo", price: "$12.000", description: "Modelo." },
      { name: "Soda Michelada", price: "$15.000", description: "Lychee, cereza o maracuyá." },
      { name: "Vaso Michelado", price: "$3.000", description: "Para acompañar tu cerveza." },
    ],
  },
  {
    id: "licores",
    title: "Licores",
    kicker: "Para brindar",
    items: [
      { name: "Shot de Tequila — Cuernavaca", price: "$7.500", description: "Tequila Cuernavaca." },
      { name: "Shot de Tequila — Jimador", price: "$10.000", description: "Tequila Jimador." },
      { name: "Margarita", price: "$25.000", description: "Clásica de la casa, con su escarcha de sal." },
    ],
  },
];

export const menuFlipbookNote =
  "¿Quieres verlo con fotos? Explora nuestro menú digital completo.";
