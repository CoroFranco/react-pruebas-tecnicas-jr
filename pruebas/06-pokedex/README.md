# Prueba Técnica de React: Pokédex Avanzada

## Objetivo

Crear una aplicación web de Pokédex utilizando React que consuma la PokeAPI ([https://pokeapi.co/](https://pokeapi.co/)). La aplicación debe tener las siguientes características:

1. Lista de Pokémon paginada
2. Detalles de Pokémon
3. Búsqueda de Pokémon
4. Comparación de Pokémon
5. Equipo de Pokémon favoritos


## Requisitos

1. **Lista de Pokémon paginada:**

1. Mostrar una lista de Pokémon con su nombre e imagen.
2. Implementar paginación para cargar 20 Pokémon por página.
3. Usar infinite scroll o botones de "Anterior" y "Siguiente" para la navegación.



2. **Detalles de Pokémon:**

1. Al hacer clic en un Pokémon, mostrar una página o modal con detalles como:

1. Nombre, imagen, tipo(s), habilidades, estadísticas base.
2. Mostrar una pequeña descripción del Pokémon (obtenida de la API de especies).






3. **Búsqueda de Pokémon:**

1. Implementar un campo de búsqueda que permita buscar Pokémon por nombre o número.
2. La búsqueda debe ser dinámica (actualizar resultados mientras el usuario escribe).



4. **Comparación de Pokémon:**

1. Permitir al usuario seleccionar dos Pokémon para comparar sus estadísticas.
2. Mostrar una visualización gráfica de la comparación (por ejemplo, un gráfico de barras).



5. **Equipo de Pokémon favoritos:**

1. Permitir al usuario marcar hasta 6 Pokémon como favoritos.
2. Mostrar el equipo de favoritos en una sección separada.
3. Persistir el equipo de favoritos en el almacenamiento local del navegador.





## Requisitos técnicos

- Utilizar React con hooks.
- Gestionar el estado de la aplicación con Context API o Redux.
- Implementar rutas con React Router.
- Utilizar una biblioteca de componentes UI (como Material-UI, Chakra UI, o similar).
- Implementar manejo de errores y estados de carga.
- Escribir al menos un test unitario y un test de integración.


## Puntos extra (opcionales)

- Implementar modo oscuro.
- Añadir animaciones para mejorar la experiencia de usuario.
- Hacer la aplicación responsive para dispositivos móviles.
- Implementar caché de solicitudes a la API para mejorar el rendimiento.


## Entregables

- Código fuente en un repositorio de GitHub.
- Instrucciones para ejecutar la aplicación localmente.
- Un breve documento o README explicando las decisiones de diseño y arquitectura.


Esta prueba técnica evalúa varias habilidades importantes en React, incluyendo:

- Manejo de estado
- Consumo de APIs
- Routing
- Componentes reutilizables
- Optimización de rendimiento
- Testing


Además, ofrece oportunidades para demostrar habilidades en UX/UI y atención al detalle.