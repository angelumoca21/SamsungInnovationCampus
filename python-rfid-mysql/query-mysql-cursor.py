# Bibliotecas
import mysql.connector

# Conexion
cnx = mysql.connector.connect(user='angel', 
                            password='12345', 
                            host='localhost',
                            database='codigoIoT')

# Cursor
cursor = cnx.cursor()

# Query
query = ("SELECT id,nombre,temperatura,fecha FROM clima WHERE id=123;")

# Ejecutar cursor
cursor.execute(query)

res = cursor.fetchall()

for x in res:
    print(x)

# Cerrar todo
cursor.close()
cnx.close()