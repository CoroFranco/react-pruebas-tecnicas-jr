# Aplicación del Clima


# Instrucciones:
Desarrolla una aplicación de React que muestre el pronóstico del tiempo actual para una ciudad específica utilizando la API de OpenWeatherMap.

# Requisitos:

- Utiliza la API de OpenWeatherMap para obtener datos del clima.
- Crea un campo de entrada donde los usuarios puedan escribir el nombre de una ciudad.
- Muestra la información del clima actual, incluyendo temperatura, descripción, humedad y velocidad del viento.
- Implementa un estado de carga mientras se obtienen los datos.
- Maneja los errores de la API y muestra mensajes apropiados al usuario.
- Utiliza iconos o imágenes para representar las diferentes condiciones climáticas.


# Bonus (opcional):

- Agrega la opción de cambiar entre grados Celsius y Fahrenheit.
- Implementa un pronóstico de 5 días.
- Agrega geolocalización para obtener el clima de la ubicación actual del usuario.


API: [https://openweathermap.org/api](https://openweathermap.org/api)
Parámetros de la API:

- Clave de API: Regístrate en el sitio web para obtener una clave gratuita.
- Endpoint del clima actual: `https://api.openweathermap.org/data/2.5/weather?q=NOMBRE_CIUDAD&appid=TU_CLAVE_API&units=metric`