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
query = ("SELECT * FROM rfid WHERE id=2;")

# Ejecutar cursor
cursor.execute(query)

res = cursor.fetchall()

for x in res:
    print(x)

# Cerrar todo
cursor.close()
cnx.close()