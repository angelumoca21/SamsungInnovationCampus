# Bibliotecas
import mysql.connector

# Programa
print("Conectandose a la base de datos")
cnx = mysql.connector.connect(user='angel', 
                            password='12345', 
                            host='127.0.0.1', 
                            database='codigoIoT')
print("Conexion realizada")
print(cnx)

print("Cerrar conexión")
cnx.close()
print("Conexión cerrada")