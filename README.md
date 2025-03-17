    <h1>🏉 API de Equipos de Rugby Femenino en España</h1>

    <p>Este proyecto consiste en una API RESTful para gestionar equipos, jugadoras y ligas de rugby femenino en España. La API permite obtener información sobre estos elementos, así como añadir y modificar datos.</p>

    <h2>📌 Tecnologías utilizadas</h2>
    <ul>
        <li><strong>Backend:</strong> Node.js, Express, MySQL</li>
        <li><strong>Frontend:</strong> React, Vite</li>
        <li><strong>Base de datos:</strong> MySQL</li>
    </ul>

    <h2>🚀 Instalación y ejecución</h2>

    <h3>🔹 Requisitos previos</h3>
    <ul>
        <li>Tener instalado <strong>Node.js</strong> (versión recomendada: 18+)</li>
        <li>Tener una instancia de <strong>MySQL</strong> en ejecución</li>
        <li>Tener <strong>Vite</strong> instalado si quieres ejecutar el frontend</li>
    </ul>

    <h3>🔹 Pasos para ejecutar el proyecto</h3>

    <p><strong>1. Clonar el repositorio</strong></p>
    <pre><code>git clone &lt;URL_DEL_REPOSITORIO&gt;

cd &lt;NOMBRE_DEL_PROYECTO&gt;</code></pre>

    <p><strong>2. Instalar dependencias</strong></p>
    <pre><code>npm install</code></pre>

    <p><strong>3. Configurar variables de entorno</strong></p>
    <p>Crea un archivo <code>.env</code> en la raíz del proyecto con los siguientes valores:</p>
    <pre><code>MYSQL_HOST=localhost

MYSQL_PORT=3306
MYSQL_USER=tu_usuario
MYSQL_PASS=tu_contraseña
MYSQL_SCHEMA=nombre_de_tu_base_de_datos</code></pre>

    <p><strong>4. Ejecutar el backend</strong></p>
    <pre><code>npm run dev</code></pre>
    <p>La API se ejecutará en <code>http://localhost:3000</code></p>

    <p><strong>5. Ejecutar el frontend</strong></p>
    <pre><code>cd frontend

npm install
npm run dev</code></pre>
<p>La aplicación frontend estará disponible en <code>http://localhost:5173</code></p>

    <h2>📡 Endpoints de la API</h2>

    <h3>🔹 Usuarios</h3>
    <table>
        <tr>
            <th>Método</th>
            <th>Endpoint</th>
            <th>Descripción</th>
        </tr>
        <tr>
            <td>POST</td>
            <td>/api/register</td>
            <td>Registra un nuevo usuario</td>
        </tr>
    </table>

    <h3>📝 Registro de usuario</h3>
    <p><strong>📍 POST</strong> <code>/api/register</code></p>
    <p>Envía un JSON con los siguientes datos en el <strong>body</strong>:</p>
    <pre><code>{

"name": "María",
"surname": "García",
"email": "maria@example.com",
"password": "123456",
"confirmPassword": "123456"
}</code></pre>

    <p><strong>🔹 Respuesta exitosa:</strong></p>
    <pre><code>{

"success": true,
"message": "Usuario registrado con éxito",
"userId": 1
}</code></pre>

    <p><strong>🔹 Error en la validación:</strong></p>
    <pre><code>{

"success": false,
"message": "Faltan los siguientes campos obligatorios: email, password"
}</code></pre>

    <h3>🔹 Equipos</h3>
    <table>
        <tr>
            <th>Método</th>
            <th>Endpoint</th>
            <th>Descripción</th>
        </tr>
        <tr>
            <td>GET</td>
            <td>/rugby-femenino/teams</td>
            <td>Obtiene todos los equipos</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/rugby-femenino/teams/:id</td>
            <td>Obtiene un equipo por su ID</td>
        </tr>
    </table>

    <h3>🔹 Jugadoras</h3>
    <table>
        <tr>
            <th>Método</th>
            <th>Endpoint</th>
            <th>Descripción</th>
        </tr>
        <tr>
            <td>GET</td>
            <td>/rugby-femenino/players</td>
            <td>Obtiene todas las jugadoras</td>
        </tr>
        <tr>
            <td>POST</td>
            <td>/rugby-femenino/players</td>
            <td>Añade una nueva jugadora</td>
        </tr>
        <tr>
            <td>PUT</td>
            <td>/rugby-femenino/players/:id</td>
            <td>Actualiza datos de una jugadora</td>
        </tr>
        <tr>
            <td>DELETE</td>
            <td>/rugby-femenino/players/:id</td>
            <td>Elimina una jugadora</td>
        </tr>
    </table>

    <h3>📝 Añadir una jugadora</h3>
    <p><strong>📍 POST</strong> <code>/rugby-femenino/players</code></p>
    <p><strong>Body JSON:</strong></p>
    <pre><code>{

"name": "Laura",
"surname": "Fernández",
"position": "Ala",
"nationality": "España",
"team_id": 2
}</code></pre>
