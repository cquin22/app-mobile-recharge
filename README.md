# Aplicación de recargas

Las instrucciones para correr cada aplicación están dentro de el readme de cada aplicación.

## Arquitectura de la aplicación
Se implementa una arquitectura MVC tanto en el front con Angular cómo en el backend con NodeJS, se realiza separando funcionalidades de Front (El front como un cliente web) y Backend (y el Backend sirviendo servicios REST), lo cual permite mayor flexibilidad y escalabilidad en el desarrollo
![alt text](https://image.ibb.co/jcCw85/App_Recharges_Page_1.png)

##Tipo de seguridad a implementar a futuro.
Debido a que el api aún requiere un esquema de seguridad dependiendo de los siguientes escenarios se debería implementar lo siguiente:

###Api privada:
En este caso se debe implementar en el api que el consumo de sus endpoints, sea de uso exclusivo de una ip o ips específicas para el caso de los clientes

###Api pública:
En este caso se debe implementar un esquema de autenticación JWT en el api y solo clientes autorizados podrían hacer uso de ella.
