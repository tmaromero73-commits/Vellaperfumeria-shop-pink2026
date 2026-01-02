
import type { Product } from './types';

export const allProducts: Product[] = [
    // --- CUIDADO DEL CABELLO (DUOLOGI) ---
    {
        id: 44956,
        name: "Champú Protector del Color Duologi",
        brand: "Duologi",
        price: 9.99,
        regularPrice: 15.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F44956%2F44956_1.png",
        description: "Una revolución en el cuidado capilar para el Catálogo 1 - 2026. Este champú cremoso ha sido formulado con ingredientes activos de alto rendimiento similares a los del cuidado facial. Su tecnología de sellado de color protege la cutícula del cabello, evitando la pérdida de pigmento y manteniendo la intensidad del tinte por más tiempo. Enriquecido con Proteína de Seda y Vitamina E, no solo limpia suavemente sino que fortalece la fibra capilar desde el interior. Ideal para cabellos teñidos o con mechas que buscan recuperar el brillo perdido por los lavados frecuentes.",
        stock: 120,
        category: "hair",
        tag: "NOVEDAD",
        rating: 4.9,
        reviewCount: 42
    },
    // --- FRAGANCIAS ---
    {
        id: 42100,
        name: "Eclat Homme Weekend Azur Eau de Toilette",
        brand: "Eclat",
        price: 24.99,
        regularPrice: 42.00,
        imageUrl: "https://media-cdn.oriflame.com/contentImage?externalMediaId=423c10a4-3112-4217-910a-85ef3c56310d&name=product_1&inputFormat=jpg",
        description: "Captura la esencia de un verano eterno en la costa italiana. Esta fragancia masculina se abre con notas vibrantes de Bergamota y Mandarina, seguidas de un corazón acuático que evoca la brisa marina. Su fondo de Ámbar y Madera de Cedro aporta una sofisticación clásica que perdura en la piel. Es la fragancia perfecta para el hombre que valora la libertad y la elegancia natural. Edición destacada para la campaña de 2026.",
        stock: 45,
        category: "men",
        tag: "OFERTA",
        rating: 4.8,
        reviewCount: 156
    },
    {
        id: 30310,
        name: "Miss Giordani Eau de Parfum",
        brand: "Giordani Gold",
        price: 21.99,
        regularPrice: 38.00,
        imageUrl: "https://media-cdn.oriflame.com/contentImage?externalMediaId=5e8edbeb-1ff0-427f-878c-8b23062b1aa6&name=fragrance_main&inputFormat=jpg",
        description: "Miss Giordani es una oda a la feminidad moderna y la alegría de vivir. Con el brillo inconfundible del Neroli Italiano como protagonista, esta fragancia es radiante, elegante y adictiva. Sus notas frutales de Mango y Pimienta Roja se funden con un fondo de maderas ricas, creando una estela inolvidable. El frasco de cristal tallado refleja la luz como una joya, convirtiéndolo en el regalo perfecto para este Catálogo 1.",
        stock: 60,
        category: "perfume",
        tag: "SET",
        rating: 4.9,
        reviewCount: 210
    },
    // --- CUIDADO FACIAL (IMÁGENES) ---
    {
        id: 48117,
        name: "Crema de Noche Reafirmante Royal Velvet",
        brand: "Royal Velvet",
        price: 18.47,
        regularPrice: 42.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F48117%2F48117_1.png",
        description: "El secreto de la firmeza eterna para pieles de más de 40 años. Esta crema nutritiva de noche aprovecha el poder de la Infusión de Iris Negro para fortalecer la estructura de la piel mientras duermes. Su fórmula avanzada aumenta la producción de colágeno y elastina, reduciendo visiblemente la apariencia de líneas finas y arrugas. Al despertar, la piel se siente más densa, suave y rejuvenecida. Es un tratamiento de lujo ahora al alcance de tu mano en la campaña 1 de 2026.",
        stock: 35,
        category: "skincare",
        tag: "NOVEDAD",
        rating: 4.9,
        reviewCount: 88
    },
    {
        id: 48115,
        name: "Crema de Día Reafirmante SPF 20 Royal Velvet",
        brand: "Royal Velvet",
        price: 18.47,
        regularPrice: 42.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F48115%2F48115_1.png",
        description: "Hidratación profunda y protección avanzada en un solo gesto. La crema de día Royal Velvet combina la Infusión de Iris Negro con un filtro SPF 20 para proteger tu piel del fotoenvejecimiento y las manchas solares. Su textura sedosa se absorbe rápidamente, dejando un acabado firme y luminoso. Perfecta como base de maquillaje, mantiene la elasticidad del rostro durante todo el día. Siente el terciopelo en tu piel con esta oferta exclusiva de inicio de año.",
        stock: 50,
        category: "skincare",
        tag: "OFERTA",
        rating: 4.8,
        reviewCount: 112
    },
    {
        id: 13659,
        name: "Crema Antiedad Diamond Cellular",
        brand: "Diamond Cellular",
        price: 29.99,
        regularPrice: 55.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F13659%2F13659_1.png",
        description: "El lujo supremo del diamante para tu piel. Diamond Cellular combina polvos de diamante real con una mezcla de ingredientes activos excepcionales para combatir todos los signos del envejecimiento celular. Ilumina instantáneamente la tez apagada, redefine el contorno facial y reduce las arrugas profundas. Su tecnología 'Eternal Beauty' actúa a nivel del ADN celular para prolongar la juventud de la piel. Un capricho necesario para comenzar el 2026 con un rostro radiante.",
        stock: 20,
        category: "skincare",
        tag: "NOVEDAD",
        rating: 5.0,
        reviewCount: 45
    },
    {
        id: 45326,
        name: "Hidratante SPF 25 The Beyond Optimals",
        brand: "Optimals",
        price: 18.47,
        regularPrice: 36.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F45326%2F45326_1.png",
        description: "Una solución inteligente para la vida urbana. Esta hidratante avanzada con SPF 25 utiliza tecnología 'PolluProtect' para crear un escudo invisible contra la contaminación ambiental y los rayos UV. Enriquecida con extractos botánicos suecos, equilibra los niveles de hidratación durante 24 horas y calma la piel estresada. Su textura ligera es apta para todo tipo de pieles, especialmente aquellas expuestas al ritmo frenético de la ciudad. Imprescindible en tu neceser de 2026.",
        stock: 85,
        category: "skincare",
        tag: "NOVEDAD",
        rating: 4.7,
        reviewCount: 63
    },
    {
        id: 46319,
        name: "Niacinamida 10% Power Drops Novage+",
        brand: "Novage+",
        price: 26.94,
        regularPrice: 57.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46319%2F46319_1.png",
        description: "Tratamiento de choque para una textura de piel perfecta. Con una concentración ultra-potente del 10% de Niacinamida purificada, este suero transforma la apariencia de poros abiertos, rojeces e imperfecciones. Su fórmula minimalista pero efectiva fortalece la barrera de hidratación de la piel y unifica el tono facial en tiempo récord. Ideal para incluir tras la limpieza y potenciar tu rutina facial Proceuticals en este nuevo Catálogo 1.",
        stock: 90,
        category: "skincare",
        tag: "NOVEDAD",
        rating: 5.0,
        reviewCount: 156
    },
    // --- CUIDADO PERSONAL (ACTIVELLE) ---
    {
        id: 33140,
        name: "Desodorante Activelle Invisible Fresh 48h",
        brand: "Activelle",
        price: 3.99,
        regularPrice: 8.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F33140%2F33140_1.png",
        description: "Máxima frescura sin manchas. Gracias a su tecnología Actiboost, las microcápsulas de fragancia se rompen con el movimiento, liberando frescor justo cuando más lo necesitas. Su fórmula anti-manchas blancas protege tu ropa negra y oscura, garantizando una protección invisible durante 48 horas. Sin alcohol y dermatológicamente testado para las pieles más sensibles. Empieza tus mañanas de 2026 con total confianza.",
        stock: 200,
        category: "personal-care",
        tag: "OFERTA",
        rating: 4.8,
        reviewCount: 420
    },
    {
        id: 33142,
        name: "Desodorante Activelle Extreme 72h",
        brand: "Activelle",
        price: 4.49,
        regularPrice: 9.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F33142%2F33142_1.png",
        description: "Para los retos más exigentes. Activelle Extreme ofrece nuestra protección más duradera: hasta 72 horas de control total contra el sudor y el olor. Especialmente diseñado para personas activas o momentos de alto estrés. Su fragancia fresca cítrica se activa con el calor corporal, manteniéndote seca y segura en cualquier situación. El aliado perfecto para tu rutina de deporte o largas jornadas de trabajo este invierno.",
        stock: 180,
        category: "personal-care",
        tag: "OFERTA",
        rating: 4.9,
        reviewCount: 310
    },
    // --- MAQUILLAJE (ACCESORIOS) ---
    {
        id: 42482,
        name: "Brocha Blush & Glow Angulada",
        brand: "Vella Accesorios",
        price: 6.99,
        regularPrice: 12.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F42482%2F42482_1.png",
        description: "La herramienta definitiva para un contorneado perfecto. Sus cerdas sintéticas de alta densidad y corte angulado permiten aplicar el colorete o el iluminador con precisión profesional. El mango ergonómico de madera sostenible ofrece un control total para difuminar el color suavemente sin dejar cortes. Imprescindible para aplicar tus Perlas Giordani Gold o el nuevo iluminador Platinum del Catálogo 1.",
        stock: 75,
        category: "accessories",
        tag: "NOVEDAD",
        rating: 4.7,
        reviewCount: 28
    }
];
