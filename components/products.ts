
import type { Product } from './types';

export const allProducts: Product[] = [
    // --- CUIDADO DEL CABELLO (DUOLOGI) ---
    {
        id: 44956,
        name: "Champú Protector del Color Duologi",
        brand: "Duologi",
        price: 9.99,
        regularPrice: 16.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F44956%2F44956_1.png",
        description: "Tratamiento capilar de alto rendimiento con tecnología de cuidado facial. Este champú protector sella el color y fortalece la fibra capilar con Vitamina E y Proteína de Seda. Ideal para mantener el brillo y la intensidad del cabello teñido durante el Catálogo 1 - 2026.",
        stock: 150,
        category: "hair",
        tag: "NOVEDAD",
        rating: 4.9,
        reviewCount: 42
    },
    {
        id: 44961,
        name: "Acondicionador Reparador Duologi",
        brand: "Duologi",
        price: 9.99,
        regularPrice: 16.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F44961%2F44961_1.png",
        description: "Acondicionador intensivo que repara la cutícula dañada y previene la rotura. Enriquecido con Queratina y Lípidos de Avena para un cabello suave, desenredado y visiblemente más sano desde el primer uso.",
        stock: 95,
        category: "hair",
        tag: "OFERTA",
        rating: 4.8,
        reviewCount: 36
    },
    // --- CUIDADO FACIAL PREMIUM (TIMELINE RITUAL) ---
    {
        id: 41032,
        name: "Limpiadora Oleosa Comfort Novage+",
        brand: "Novage+",
        price: 16.93,
        regularPrice: 30.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F41032%2F41032_1.png",
        description: "Paso 1 del Ritual Platinum: Elimina impurezas y maquillaje resistente al agua de forma suave pero eficaz, manteniendo la hidratación natural de la piel. Prepara el rostro para los tratamientos posteriores.",
        stock: 120,
        category: "skincare",
        tag: "OFERTA",
        rating: 5.0,
        reviewCount: 156
    },
    {
        id: 41070,
        name: "Contorno de Ojos Renewing Restore Novage+",
        brand: "Novage+",
        price: 13.08,
        regularPrice: 38.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F41070%2F41070_1.png",
        description: "Paso 2 del Ritual Platinum: Tratamiento avanzado para la delicada zona de los ojos. Reduce bolsas, ojeras y líneas de expresión, restaurando la firmeza y la luminosidad de la mirada.",
        stock: 80,
        category: "skincare",
        tag: "OFERTA",
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
        description: "Paso 4 del Ritual Platinum: Hidratación suntuosa con Infusión de Iris Negro. Reafirma la piel y protege contra el fotoenvejecimiento con SPF 20. El acabado perfecto para un estilismo facial impecable.",
        stock: 60,
        category: "skincare",
        tag: "NOVEDAD",
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
        description: "Tratamiento de lujo con polvo de diamante real. Ilumina, regenera y combate los signos del envejecimiento a nivel celular. Para una piel radiante que refleja la luz con perfección.",
        stock: 40,
        category: "skincare",
        tag: "SET",
        rating: 5.0,
        reviewCount: 210
    },
    // --- FRAGANCIAS ---
    {
        id: 42100,
        name: "Eclat Homme Weekend Azur",
        brand: "Eclat",
        price: 24.99,
        regularPrice: 45.00,
        imageUrl: "https://media-cdn.oriflame.com/contentImage?externalMediaId=423c10a4-3112-4217-910a-85ef3c56310d&name=product_1&inputFormat=jpg",
        description: "Fragancia masculina fresca y acuática. Notas de Bergamota y Brisa Marina para el hombre moderno. Un clásico renovado para el 2026.",
        stock: 55,
        category: "men",
        tag: "OFERTA",
        rating: 4.8,
        reviewCount: 92
    },
    {
        id: 42864,
        name: "Eclat Homme Eau de Toilette",
        brand: "Eclat",
        price: 24.99,
        regularPrice: 45.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F42864%2F42864_1.png",
        description: "La elegancia atemporal del hombre Eclat. Con notas de Cuero de Barenia y Bergamota de Calabria. Una fragancia que define el estilo y la sofisticación.",
        stock: 45,
        category: "men",
        tag: "OFERTA",
        rating: 4.9,
        reviewCount: 124
    },
    {
        id: 30310,
        name: "Miss Giordani Eau de Parfum",
        brand: "Giordani Gold",
        price: 21.99,
        regularPrice: 40.00,
        imageUrl: "https://media-cdn.oriflame.com/contentImage?externalMediaId=5e8edbeb-1ff0-427f-878c-8b23062b1aa6&name=fragrance_main&inputFormat=jpg",
        description: "Resplandeciente aroma a Neroli Italiano. Una oda a la alegría de vivir y la sofisticación femenina. El regalo perfecto para comenzar el año.",
        stock: 75,
        category: "perfume",
        tag: "OFERTA",
        rating: 4.9,
        reviewCount: 310
    },
    // --- CUIDADO PERSONAL ---
    {
        id: 33140,
        name: "Activelle Invisible Fresh 48h",
        brand: "Activelle",
        price: 3.99,
        regularPrice: 9.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F33140%2F33140_1.png",
        description: "Protección invisible contra el sudor y el olor. Su tecnología Actiboost se activa con el movimiento para mantenerte fresca todo el día sin dejar manchas.",
        stock: 300,
        category: "personal-care",
        tag: "OFERTA",
        rating: 4.8,
        reviewCount: 450
    }
];
