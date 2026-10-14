window.L={
"0-0":{e:"1. Preparar el entorno",t:"Instalar JDK 21 (LTS) y configurar JAVA_HOME",s:[
["Qué es y por qué importa",`<p>Para programar en Java necesitas el <b>JDK</b> (Java Development Kit). Tres siglas que debes distinguir:</p>
<ul><li><b>JVM</b>: la máquina virtual que ejecuta tu programa.</li><li><b>JRE</b>: JVM + librerías estándar (solo sirve para ejecutar).</li><li><b>JDK</b>: JRE + herramientas de desarrollo, entre ellas <code>javac</code> (compilador).</li></ul>
<p>Flujo real de un programa: escribes <code>Hola.java</code> → <code>javac</code> lo compila a <code>Hola.class</code> (bytecode) → <code>java</code> lo ejecuta en la JVM. Por eso Java funciona igual en Windows, Mac y Linux: el bytecode es el mismo y cada sistema tiene su JVM.</p>
<p><b>LTS</b> significa soporte a largo plazo. Las versiones LTS son 8, 11, 17, 21 y 25; en el trabajo se usan casi siempre LTS. Spring Boot 3 exige como mínimo Java 17, así que JDK 21 es una elección segura (25 también es LTS y válida).</p>`],
["Paso a paso: instalación",`<p>Usa la distribución gratuita <b>Eclipse Temurin</b> (adoptium.net). Elige tu sistema:</p>
<pre><code>Windows (PowerShell):  winget install EclipseAdoptium.Temurin.21.JDK
macOS (Homebrew):      brew install --cask temurin@21
Ubuntu/Debian:         sudo apt install openjdk-21-jdk</code></pre>
<p>Si no usas gestor de paquetes, descarga el instalador desde adoptium.net y marca la opción de configurar <code>JAVA_HOME</code> y PATH si aparece.</p>
<p>Cierra y abre de nuevo la terminal, y verifica:</p>
<pre><code>java -version
javac -version</code></pre>
<p>Ambos deben mostrar la versión 21. Si <code>java</code> funciona y <code>javac</code> no, instalaste solo el JRE: necesitas el JDK.</p>`],
["Configurar JAVA_HOME",`<p><code>JAVA_HOME</code> es una variable de entorno que apunta a la carpeta del JDK. Maven, Gradle y muchas herramientas la leen para saber qué Java usar.</p>
<p><b>Windows:</b> busca "Variables de entorno" → Variables del sistema → Nueva. Nombre: <code>JAVA_HOME</code>. Valor: la ruta del JDK, por ejemplo <code>C:\\Program Files\\Eclipse Adoptium\\jdk-21...</code>. Luego edita <code>Path</code> y agrega <code>%JAVA_HOME%\\bin</code>.</p>
<p><b>macOS</b> (agrega a <code>~/.zshrc</code>):</p>
<pre><code>export JAVA_HOME=$(/usr/libexec/java_home -v 21)
export PATH="$JAVA_HOME/bin:$PATH"</code></pre>
<p><b>Linux</b> (agrega a <code>~/.bashrc</code>):</p>
<pre><code>export JAVA_HOME=/usr/lib/jvm/java-21-openjdk-amd64
export PATH="$JAVA_HOME/bin:$PATH"</code></pre>
<p>Comprueba con <code>echo $JAVA_HOME</code> (Mac/Linux) o <code>echo %JAVA_HOME%</code> (cmd de Windows).</p>`],
["Práctica: tu primer programa sin IDE",`<p>Crea una carpeta <code>practica</code> y dentro un archivo <code>Hola.java</code> con este contenido (el nombre del archivo debe coincidir con el de la clase pública):</p>
<pre><code>public class Hola {
    public static void main(String[] args) {
        System.out.println("Hola, mundo");
    }
}</code></pre>
<p>Compila y ejecuta desde la terminal, dentro de esa carpeta:</p>
<pre><code>javac Hola.java     (genera Hola.class)
java Hola           (ejecuta el programa)
java Hola.java      (atajo: compila y ejecuta en un paso)</code></pre>
<p>Ejercicios: cambia el mensaje, imprime tu nombre, y provoca un error a propósito (borra un punto y coma) para leer cómo se ve un error de compilación.</p>`],
["Errores comunes",`<ul><li><b>'javac' no se reconoce</b>: el PATH no incluye la carpeta bin del JDK. Revisa JAVA_HOME y reabre la terminal.</li><li><b>java -version muestra otra versión</b>: hay un Java antiguo antes en el PATH. Quita el viejo o ponlo después.</li><li><b>class Hola is public, should be declared in a file named Hola.java</b>: el nombre del archivo no coincide con la clase (respeta mayúsculas).</li><li><b>Could not find or load main class</b>: ejecutaste <code>java Hola.java</code> con extensión después de compilar, o estás en otra carpeta.</li></ul>`],
["Cómo sé que lo domino",`<ul><li>Puedo explicar la diferencia entre JVM, JRE y JDK.</li><li>Puedo explicar qué hace <code>javac</code> y qué es un archivo .class.</li><li><code>java -version</code> y <code>javac -version</code> muestran 21.</li><li><code>JAVA_HOME</code> está configurada y la verifiqué.</li><li>Compilé y ejecuté Hola.java sin ayuda.</li></ul>`]
]},
"0-1":{e:"1. Preparar el entorno",t:"Instalar IntelliJ IDEA Community",s:[
["Qué es y por qué importa",`<p>Un <b>IDE</b> (entorno de desarrollo integrado) reúne editor, compilador, depurador y herramientas de proyecto. IntelliJ IDEA es el estándar en el mundo Java: autocompleta, detecta errores mientras escribes y refactoriza código de forma segura. Usa la edición gratuita (Community); JetBrains puede cambiar los nombres de las ediciones, pero siempre hay una opción gratuita suficiente para aprender Java y Maven.</p>
<p>Ojo: IDE no reemplaza al JDK. IntelliJ usa el JDK que instalaste (o puede descargar uno por ti).</p>`],
["Paso a paso",`<ol><li>Descarga desde jetbrains.com/idea (o con JetBrains Toolbox, que facilita actualizar).</li><li>Instala y abre. Acepta los valores por defecto.</li><li>Pulsa <b>New Project</b>. Elige <b>Java</b>, Build system <b>Maven</b>, y en JDK selecciona el 21 (si no aparece: <i>Add JDK</i> → carpeta de tu JDK).</li><li>Nombre: <code>practica-java</code>. Deja marcada la opción de generar código de ejemplo.</li><li>Abre la clase <code>Main</code> y pulsa el triángulo verde junto a <code>main</code> para ejecutarla. Verás la salida en la pestaña <b>Run</b>.</li></ol>
<p>Conoce la pantalla: panel izquierdo (<b>Project</b>, tus archivos), centro (editor), abajo (<b>Run</b>, <b>Terminal</b>, <b>Problems</b>).</p>`],
["Atajos que debes aprender desde el día 1",`<p>En Mac cambia Ctrl por Cmd.</p>
<ul><li><b>Escribir main + Tab</b>: genera el método main. <b>sout + Tab</b>: genera System.out.println.</li><li><b>Shift+F10</b>: ejecutar. <b>Shift Shift</b>: buscar cualquier cosa.</li><li><b>Alt+Enter</b>: arreglo rápido sobre el error o aviso donde está el cursor.</li><li><b>Ctrl+Alt+L</b>: formatear código. <b>Ctrl+/</b>: comentar línea.</li><li><b>Ctrl+B</b>: ir a la definición. <b>Ctrl+Space</b>: autocompletar.</li><li><b>Shift+F6</b>: renombrar de forma segura (refactor).</li></ul>`],
["Práctica",`<ol><li>Crea un proyecto nuevo y una clase <code>Saludo</code> con su propio main que imprima tu nombre.</li><li>Ejecútala con el triángulo y con Shift+F10.</li><li>Introduce un error (quita un punto y coma): mira el subrayado rojo y usa Alt+Enter.</li><li>Renombra la clase con Shift+F6 y observa que se actualiza todo.</li><li>Abre la pestaña Terminal dentro de IntelliJ y ejecuta <code>java -version</code>.</li></ol>`],
["Errores comunes",`<ul><li><b>Project SDK is not defined</b>: File → Project Structure → Project → elige el JDK 21.</li><li><b>El triángulo verde no aparece</b>: la clase no tiene un método main válido o el proyecto no cargó (espera la indexación abajo a la derecha).</li><li><b>Todo va lento</b>: la primera indexación tarda; no cierres el IDE.</li></ul>`],
["Cómo sé que lo domino",`<ul><li>Creo un proyecto Maven con JDK 21 sin ayuda.</li><li>Ejecuto una clase y leo la consola.</li><li>Uso al menos 5 atajos de memoria.</li><li>Sé abrir la terminal integrada.</li></ul>`]
]},
"0-2":{e:"1. Preparar el entorno",t:"Instalar Git y crear cuenta en GitHub",s:[
["Qué es y por qué importa",`<p><b>Git</b> es un sistema de control de versiones: guarda el historial de tu código como una serie de fotos (<i>commits</i>) y te permite volver atrás, probar ideas en ramas y colaborar. <b>GitHub</b> es un sitio web que aloja repositorios Git en la nube: es tu copia de seguridad y tu portafolio. Git funciona sin GitHub, pero se usan juntos.</p>
<p>Tres zonas que debes entender: <b>directorio de trabajo</b> (tus archivos), <b>staging</b> (lo que preparas con <code>git add</code>) y <b>repositorio</b> (lo guardado con <code>git commit</code>).</p>`],
["Paso a paso: instalar y configurar",`<pre><code>Windows:  winget install Git.Git
macOS:    brew install git
Ubuntu:   sudo apt install git</code></pre>
<p>Cierra y abre la terminal. Verifica con <code>git --version</code> y configura tu identidad (aparece en cada commit):</p>
<pre><code>git config --global user.name "Tu Nombre"
git config --global user.email "tu@correo.com"
git config --global init.defaultBranch main</code></pre>
<p>Crea tu cuenta en github.com con el mismo correo.</p>`],
["Tu primer repositorio",`<pre><code>mkdir java-aprendizaje
cd java-aprendizaje
git init
echo "# Mi ruta Java" > README.md
git status
git add README.md
git commit -m "Primer commit"
git log --oneline</code></pre>
<p>Crea un archivo <code>.gitignore</code> para no subir basura de Java:</p>
<pre><code>target/
.idea/
*.class
*.iml
.DS_Store</code></pre>
<p>Ciclo de trabajo diario: modificar archivos → <code>git status</code> → <code>git diff</code> (ver cambios) → <code>git add .</code> → <code>git commit -m "mensaje claro"</code>. Los mensajes deben decir qué cambió y por qué, no "cambios" ni "asdf".</p>`],
["Conectar con GitHub",`<ol><li>En GitHub pulsa <b>New repository</b>, nombre <code>java-aprendizaje</code>, sin README ni .gitignore (vacío).</li><li>Conecta y sube:</li></ol>
<pre><code>git remote add origin https://github.com/TU_USUARIO/java-aprendizaje.git
git branch -M main
git push -u origin main</code></pre>
<p>GitHub ya no acepta contraseña normal por HTTPS. Opciones: instalar GitHub CLI y ejecutar <code>gh auth login</code> (lo más fácil), crear un <i>Personal Access Token</i> y usarlo como contraseña, o configurar una clave SSH. Después de la primera vez, basta <code>git push</code>.</p>`],
["Práctica y errores comunes",`<ol><li>Haz 3 commits distintos (agrega un archivo Hola.java, modifícalo, agrega notas) y revisa <code>git log --oneline</code>.</li><li>Sube todo a GitHub y verifica que lo ves en la web.</li><li>Edita README directamente en GitHub, luego trae el cambio con <code>git pull</code>.</li></ol>
<ul><li><b>Author identity unknown</b>: no configuraste user.name y user.email.</li><li><b>rejected / non-fast-forward</b>: el remoto tiene cambios que no tienes; haz <code>git pull</code> primero.</li><li><b>Subiste la carpeta target o .idea</b>: agrega .gitignore y quítalas con <code>git rm -r --cached target</code>.</li></ul>`],
["Cómo sé que lo domino",`<ul><li>Explico qué hacen add, commit y push.</li><li>Tengo un repositorio en GitHub con al menos 3 commits.</li><li>Mi .gitignore evita subir target y .idea.</li><li>Sé leer git status y git log.</li></ul>`]
]},
"0-3":{e:"1. Preparar el entorno",t:"Aprender comandos básicos de terminal",s:[
["Qué es y por qué importa",`<p>La <b>terminal</b> te deja controlar el sistema escribiendo comandos. Es imprescindible: Git, Maven, Docker y los servidores se manejan desde ahí. Usa <b>Terminal</b> en Mac/Linux y <b>PowerShell</b> o <b>Git Bash</b> en Windows (Git Bash usa los mismos comandos que Linux, lo que te simplifica la vida).</p>
<p>Conceptos clave: el <b>directorio actual</b> (dónde estás parado), las <b>rutas absolutas</b> (desde la raíz, como <code>/home/ana/proyectos</code>) y <b>relativas</b> (desde donde estás). <code>.</code> es la carpeta actual, <code>..</code> la carpeta padre y <code>~</code> tu carpeta personal.</p>`],
["Comandos esenciales",`<pre><code>pwd                 dónde estoy
ls  (Windows: dir)  listar archivos; ls -la muestra ocultos y detalles
cd carpeta          entrar; cd .. subir; cd ~ ir a casa
mkdir nombre        crear carpeta; mkdir -p a/b/c crea toda la ruta
touch archivo.txt   crear archivo vacío (PowerShell: ni archivo.txt)
cp origen destino   copiar; cp -r para carpetas
mv origen destino   mover o renombrar
rm archivo          borrar; rm -r carpeta (¡no hay papelera!)
cat archivo         mostrar contenido
echo "texto"        imprimir texto
clear               limpiar pantalla
history             comandos anteriores</code></pre>
<p>Trucos: <b>Tab</b> autocompleta nombres, <b>flecha arriba</b> recupera comandos, <b>Ctrl+C</b> detiene un proceso, <b>Ctrl+R</b> busca en el historial.</p>`],
["Redirección, tuberías y búsqueda",`<pre><code>echo "hola" > nota.txt       escribe (sobrescribe) en un archivo
echo "otra" >> nota.txt      agrega al final
cat nota.txt | grep hola     pasa la salida de un comando a otro
grep -rn "main" .            busca "main" en todos los archivos
ls | wc -l                   cuenta archivos
cat ~/.zshrc                 leer tu configuración de shell
env                          ver variables de entorno
echo $JAVA_HOME              ver una variable (Windows cmd: %JAVA_HOME%)</code></pre>
<p>El símbolo <code>|</code> (pipe) es la idea central: encadenas programas pequeños para tareas grandes.</p>`],
["Práctica guiada",`<ol><li>Desde tu carpeta personal crea: <code>mkdir -p laboratorio/src laboratorio/docs</code>.</li><li>Entra a <code>laboratorio/src</code> y crea <code>Hola.java</code> (con touch y luego edítalo en IntelliJ o con nano).</li><li>Compila y ejecuta con <code>javac</code> y <code>java</code> desde esa carpeta.</li><li>Copia Hola.java a <code>docs</code> con cp, renómbralo con mv y bórralo con rm.</li><li>Usa <code>grep -rn "println" ~/laboratorio</code> para encontrar la línea de tu código.</li><li>Vuelve a la carpeta personal con <code>cd ~</code> y lista con <code>ls -la</code>.</li></ol>`],
["Errores comunes",`<ul><li><b>No such file or directory</b>: estás en otra carpeta o escribiste mal el nombre; usa <code>pwd</code> y <code>ls</code>.</li><li><b>Espacios en nombres</b>: encierra la ruta entre comillas o evita espacios.</li><li><b>rm sin pensar</b>: borra de forma permanente. Nunca ejecutes <code>rm -rf</code> sin revisar la ruta dos veces.</li><li><b>Permission denied</b>: no tienes permisos; revisa el usuario, no lo arregles con sudo sin entender el motivo.</li></ul>`],
["Cómo sé que lo domino",`<ul><li>Me muevo por carpetas sin usar el explorador gráfico.</li><li>Creo, copio, muevo y borro archivos y carpetas.</li><li>Entiendo ruta absoluta vs relativa.</li><li>Uso Tab, flecha arriba y Ctrl+C con soltura.</li><li>Uso grep y un pipe en un ejemplo propio.</li></ul>`]
]},
"1-0":{e:"2. Fundamentos de programación",t:"Variables, tipos de datos y operadores",s:[
["Qué es una variable",`<p>Una <b>variable</b> es un espacio de memoria con nombre y tipo donde guardas un dato. Java es de <b>tipado estático</b>: debes declarar el tipo y no puede cambiar después.</p>
<pre><code>int edad = 25;
double precio = 19.99;
boolean activo = true;
char letra = 'A';
String nombre = "Ana";
long poblacion = 8_000_000_000L;
float temp = 36.6f;
final double IVA = 0.21;   // constante: no se puede reasignar
var ciudad = "Lima";       // Java 10+: el compilador deduce String</code></pre>
<p>Reglas de nombres: empiezan con letra, no con número; no usan palabras reservadas (<code>class</code>, <code>int</code>…); distinguen mayúsculas. Convención: <b>camelCase</b> para variables (<code>totalVentas</code>) y <b>MAYUS_CON_GUION</b> para constantes.</p>`],
["Tipos de datos",`<p><b>Primitivos</b> (guardan el valor directo): <code>byte</code> (8 bits), <code>short</code> (16), <code>int</code> (32, el entero por defecto, ±2.147 millones), <code>long</code> (64, sufijo L), <code>float</code> (sufijo f), <code>double</code> (decimal por defecto), <code>char</code> (un carácter, comillas simples), <code>boolean</code> (true/false).</p>
<p><code>String</code> no es primitivo: es una clase (comillas dobles). Por eso tiene métodos, como veremos.</p>
<p><b>Conversión de tipos.</b> De pequeño a grande es automática (<code>double d = 5;</code>). De grande a pequeño exige <b>cast</b> y puedes perder datos: <code>int x = (int) 3.9;</code> da 3 (trunca, no redondea).</p>`],
["Operadores",`<ul><li>Aritméticos: <code>+ - * / %</code>. El <code>%</code> es el residuo.</li><li>Incremento: <code>i++</code>, <code>i--</code>. Asignación compuesta: <code>x += 5</code> equivale a <code>x = x + 5</code>.</li><li>Comparación: <code>== != &lt; &gt; &lt;= &gt;=</code> (devuelven boolean).</li><li>Lógicos: <code>&amp;&amp;</code> (y), <code>||</code> (o), <code>!</code> (no).</li></ul>
<pre><code>7 / 2      → 3      (división entera: ambos int)
7 / 2.0    → 3.5
7 % 2      → 1
"Suma: " + 7 + 2     → "Suma: 72"
"Suma: " + (7 + 2)   → "Suma: 9"</code></pre>
<p>Precedencia: primero <code>* / %</code>, luego <code>+ -</code>; los paréntesis mandan.</p>
<p><b>Trampas clásicas:</b> <code>0.1 + 0.2</code> da <code>0.30000000000000004</code> (los double son aproximados; para dinero se usa <code>BigDecimal</code>). Y <code>Integer.MAX_VALUE + 1</code> da un número negativo (<i>overflow</i>, sin aviso).</p>`],
["Práctica",`<pre><code>public class Variables {
    public static void main(String[] args) {
        int a = 7, b = 2;
        System.out.println(a / b);
        System.out.println((double) a / b);
        System.out.println(a % b);
        System.out.println("Suma: " + (a + b));
    }
}</code></pre>
<p>Antes de ejecutarlo, predice cada salida. Luego resuelve: (1) convertir 100 °C a Fahrenheit (<code>c * 9 / 5 + 32</code>); (2) área y perímetro de un círculo con <code>Math.PI</code>; (3) promedio de 3 notas con decimales (¡cuidado con la división entera!); (4) intercambiar el valor de dos variables usando una tercera.</p>`],
["Errores comunes",`<ul><li><b>incompatible types: possible lossy conversion from double to int</b>: asignas un decimal a int; usa cast o cambia el tipo.</li><li><b>variable might not have been initialized</b>: usas una variable local sin darle valor.</li><li><b>Promedio incorrecto</b>: <code>(a + b) / 2</code> con ints trunca; usa <code>/ 2.0</code>.</li><li><b>Usar = en lugar de ==</b> al comparar.</li></ul>`],
["Cómo sé que lo domino",`<ul><li>Elijo el tipo correcto para edad, precio, inicial y activo.</li><li>Predigo el resultado de <code>7 / 2</code>, <code>7 % 2</code> y <code>(int) 3.9</code>.</li><li>Explico por qué <code>0.1 + 0.2</code> no da 0.3.</li><li>Distingo primitivos de String.</li></ul>`]
]},
"1-1":{e:"2. Fundamentos de programación",t:"Condicionales (if, switch) y bucles",s:[
["Leer datos con Scanner",`<p>Para practicar necesitas pedir datos al usuario:</p>
<pre><code>import java.util.Scanner;

Scanner sc = new Scanner(System.in);
System.out.print("Edad: ");
int edad = sc.nextInt();
String nombre = sc.nextLine();   // línea completa (ojo: tras nextInt, limpia con otro nextLine())</code></pre>`],
["Condicionales",`<pre><code>if (edad &gt;= 18) {
    System.out.println("Mayor de edad");
} else if (edad &gt;= 13) {
    System.out.println("Adolescente");
} else {
    System.out.println("Niño");
}

String tipo = (edad &gt;= 18) ? "adulto" : "menor";   // operador ternario

String dia = switch (num) {            // switch moderno (Java 14+)
    case 1 -&gt; "Lunes";
    case 2 -&gt; "Martes";
    case 6, 7 -&gt; "Fin de semana";
    default -&gt; "Otro";
};</code></pre>
<p>Combina condiciones con <code>&amp;&amp;</code> y <code>||</code>. <b>Regla de oro:</b> los String se comparan con <code>a.equals(b)</code>, nunca con <code>==</code> (compara referencias, no texto).</p>`],
["Bucles",`<pre><code>int i = 1;
while (i &lt;= 5) { System.out.println(i); i++; }      // evalúa antes

do { System.out.println("Al menos una vez"); } while (false);   // evalúa después

for (int k = 1; k &lt;= 10; k++) { System.out.println(k); }        // cuando conoces las vueltas

for (int n : numeros) { System.out.println(n); }                // for-each sobre un array</code></pre>
<p><code>break</code> sale del bucle; <code>continue</code> salta a la siguiente vuelta. Un bucle tiene tres piezas: inicio, condición y avance. Si olvidas el avance, tienes un <b>bucle infinito</b> (Ctrl+C lo detiene).</p>`],
["Práctica",`<ol><li>Par o impar con <code>%</code>.</li><li>Mayor de tres números.</li><li>Año bisiesto: divisible por 4 y no por 100, salvo que lo sea por 400.</li><li>Nota numérica a letra (A, B, C…) con switch.</li><li>Suma de 1 a n, y tabla de multiplicar de un número.</li><li>FizzBuzz del 1 al 100.</li><li>¿Es primo? Prueba dividir de 2 hasta la raíz del número.</li><li>Adivina el número: el programa elige un secreto con <code>new Random().nextInt(100) + 1</code> y responde "más alto/más bajo" hasta acertar.</li></ol>`],
["Errores comunes",`<ul><li><b>if (x == 5);</b> con punto y coma: el bloque siguiente se ejecuta siempre.</li><li><b>Off-by-one</b>: usar <code>&lt;</code> cuando necesitabas <code>&lt;=</code>.</li><li><b>Olvidar break</b> en un switch clásico (con flecha no pasa).</li><li><b>Comparar Strings con ==</b>.</li></ul>`],
["Cómo sé que lo domino",`<ul><li>Elijo entre while, do-while y for según el caso.</li><li>Escribo FizzBuzz y el verificador de primos sin mirar.</li><li>Sé por qué no se usa == con Strings.</li><li>Detecto y corrijo un bucle infinito.</li></ul>`]
]},
"1-2":{e:"2. Fundamentos de programación",t:"Métodos y parámetros",s:[
["Qué es un método",`<p>Un <b>método</b> es un bloque de código con nombre que puedes reutilizar. Evita repetir código y permite dividir un problema en piezas pequeñas.</p>
<pre><code>static int sumar(int a, int b) {     // a y b: parámetros
    return a + b;
}

static void saludar(String nombre) {  // void: no devuelve nada
    System.out.println("Hola, " + nombre);
}

public static void main(String[] args) {
    int r = sumar(3, 4);              // 3 y 4: argumentos
    saludar("Ana");
}</code></pre>
<p>Anatomía: modificadores (<code>static</code>), tipo de retorno, nombre, parámetros, cuerpo. <code>static</code> permite llamarlo desde <code>main</code> sin crear objetos (lo entenderás del todo en la Épica 3).</p>`],
["Conceptos clave",`<ul><li><b>Paso por valor</b>: Java copia los argumentos. Si cambias un int dentro del método, el original no cambia.</li><li><b>Sobrecarga</b>: mismo nombre con distintos parámetros: <code>sumar(int, int)</code> y <code>sumar(double, double)</code>.</li><li><b>Ámbito (scope)</b>: una variable existe solo dentro del bloque <code>{ }</code> donde se declara.</li><li><b>Varargs</b>: <code>static int suma(int... nums)</code> recibe cualquier cantidad de enteros.</li><li><b>Recursión</b>: un método que se llama a sí mismo. Siempre necesita un caso base.</li></ul>
<pre><code>static long factorial(int n) {
    if (n &lt;= 1) return 1;          // caso base
    return n * factorial(n - 1);    // llamada recursiva
}</code></pre>
<p>Buenas prácticas: un método hace <b>una sola cosa</b>, nombre en verbo (<code>calcularPromedio</code>), pocos parámetros, y documéntalo con Javadoc (<code>/** ... */</code>).</p>`],
["Práctica",`<ol><li><code>esPrimo(int n)</code> que devuelva boolean, y otro que imprima los primos hasta 100.</li><li><code>maximo(int a, int b, int c)</code>.</li><li><code>celsiusAFahrenheit(double c)</code>.</li><li>Factorial iterativo y recursivo; compara resultados.</li><li>Fibonacci recursivo del término n (prueba con 40 y observa lo lento que se vuelve).</li><li>Sobrecarga: <code>area(double radio)</code> y <code>area(double base, double altura)</code>.</li></ol>`],
["Errores comunes",`<ul><li><b>missing return statement</b>: algún camino del método no devuelve valor.</li><li><b>non-static method cannot be referenced from a static context</b>: llamas a un método sin <code>static</code> desde main.</li><li><b>StackOverflowError</b>: recursión sin caso base o que no se acerca a él.</li><li>Esperar que un método modifique tu variable original.</li></ul>`],
["Cómo sé que lo domino",`<ul><li>Explico parámetro vs argumento.</li><li>Escribo métodos con retorno y void sin consultar.</li><li>Entiendo caso base y llamada recursiva.</li><li>Sé cuándo usar sobrecarga.</li></ul>`]
]},
"1-3":{e:"2. Fundamentos de programación",t:"Arrays y String",s:[
["Arrays",`<p>Un <b>array</b> guarda varios valores del mismo tipo con <b>tamaño fijo</b>. El primer índice es 0 y el último es <code>length - 1</code>.</p>
<pre><code>int[] notas = new int[5];            // [0, 0, 0, 0, 0]
int[] datos = {8, 5, 9, 3};
String[] nombres = {"Ana", "Luis"};
notas[0] = 10;
System.out.println(datos.length);    // 4

for (int i = 0; i &lt; datos.length; i++) System.out.println(datos[i]);
for (int d : datos) System.out.println(d);

int[][] matriz = new int[3][3];      // array 2D
matriz[1][2] = 7;</code></pre>
<p>Valores por defecto: 0 en numéricos, <code>false</code> en boolean, <code>null</code> en objetos. Utilidades de <code>java.util.Arrays</code>: <code>Arrays.toString(a)</code>, <code>Arrays.sort(a)</code>, <code>Arrays.fill(a, 0)</code>, <code>Arrays.copyOf(a, n)</code>. Acceder fuera de rango lanza <code>ArrayIndexOutOfBoundsException</code>.</p>`],
["String",`<p>Un <code>String</code> es <b>inmutable</b>: sus métodos devuelven un String nuevo, no modifican el original.</p>
<pre><code>String s = "  Hola Mundo  ";
s.length();              s.trim();            // quita espacios
s.charAt(2);             s.toUpperCase();
s.indexOf("Mundo");      s.contains("Hola");
s.substring(2, 6);       s.replace("o", "0");
s.equals("x");           s.equalsIgnoreCase("X");
s.isEmpty();             s.isBlank();
"a,b,c".split(",");      String.join("-", "a", "b");

String bloque = """
    Texto de varias
    líneas
    """;                  // text block (Java 15+)</code></pre>
<p><b>Formato:</b> <code>System.out.printf("%s tiene %d años y mide %.2f m%n", nombre, edad, altura);</code> (<code>%s</code> texto, <code>%d</code> entero, <code>%.2f</code> decimal con 2 cifras, <code>%n</code> salto de línea).</p>
<p><b>Concatenar en bucles:</b> usa <code>StringBuilder</code>, mucho más eficiente:</p>
<pre><code>StringBuilder sb = new StringBuilder();
for (int i = 0; i &lt; 5; i++) sb.append(i).append(",");
String r = sb.toString();
String inv = new StringBuilder("hola").reverse().toString();   // "aloh"</code></pre>`],
["Práctica",`<ol><li>Máximo, mínimo y promedio de un array de 10 números.</li><li>Invertir un array sin usar otro array auxiliar (intercambia extremos).</li><li>Ordenar un array con tu propio algoritmo (burbuja) y comparar con <code>Arrays.sort</code>.</li><li>Contar vocales de una frase.</li><li>Verificar si una palabra es palíndromo.</li><li>Contar palabras de una frase con <code>split(" ")</code>.</li><li>Sumar la diagonal de una matriz 3x3.</li></ol>`],
["Errores comunes",`<ul><li><b>ArrayIndexOutOfBoundsException</b>: usar <code>&lt;=</code> en vez de <code>&lt;</code> al recorrer.</li><li><b>NullPointerException</b>: llamar un método sobre un String que vale null.</li><li><b>Comparar con ==</b>: usa equals.</li><li><b>Esperar que s.toUpperCase() cambie s</b>: debes guardar el resultado (<code>s = s.toUpperCase();</code>).</li><li>Intentar agrandar un array: no se puede; en la Épica 4 verás <code>ArrayList</code>.</li></ul>`],
["Cómo sé que lo domino",`<ul><li>Recorro arrays con for y for-each y sé cuándo usar cada uno.</li><li>Explico por qué los String son inmutables.</li><li>Uso al menos 8 métodos de String de memoria.</li><li>Sé cuándo usar StringBuilder.</li></ul>`]
]},
"1-4":{e:"2. Fundamentos de programación",t:"Resolver 20+ ejercicios pequeños (calculadora, adivina el número…)",s:[
["Cómo practicar de forma efectiva",`<p>Programar se aprende programando. Para cada ejercicio sigue este método:</p>
<ol><li><b>Entiende</b>: ¿cuáles son las entradas y cuál la salida? Escribe 2 ejemplos a mano.</li><li><b>Planifica</b> en pseudocódigo o frases antes de abrir el teclado.</li><li><b>Programa</b> sin copiar. Si te atoras, relee la lección y vuelve a intentar 15 minutos antes de mirar una solución.</li><li><b>Prueba</b> casos normales y casos límite (0, negativos, vacío, un solo elemento).</li><li><b>Guarda</b>: un commit en Git por ejercicio en una carpeta <code>ejercicios/</code> de tu repositorio.</li><li><b>Repite</b> a los 3 días los que más te costaron, sin ver tu solución.</li></ol>`],
["Bloque A: variables y operadores",`<ol><li>Imprime tu nombre y edad con <code>printf</code>.</li><li>Calculadora de dos números: suma, resta, producto, división y residuo.</li><li>Celsius a Fahrenheit y viceversa.</li><li>Área y perímetro de un círculo.</li><li>Promedio de 3 notas con decimales.</li><li>Intercambiar dos variables.</li></ol>`],
["Bloque B: condicionales",`<ol start="7"><li>Par o impar.</li><li>Mayor de tres números.</li><li>Año bisiesto.</li><li>Nota numérica a letra con switch.</li><li>Índice de masa corporal (peso / altura²) con su clasificación.</li></ol>`],
["Bloque C: bucles",`<ol start="12"><li>Suma de 1 a n.</li><li>Tabla de multiplicar.</li><li>FizzBuzz.</li><li>Factorial con for.</li><li>Contar los dígitos de un número (divide entre 10 en un while).</li><li>¿Es primo?</li><li>Adivina el número.</li></ol>`],
["Bloque D: métodos, arrays y String",`<ol start="19"><li>Lista de primos hasta 100 con un método <code>esPrimo</code>.</li><li>Primeros n términos de Fibonacci.</li><li>Máximo, mínimo y promedio de un array.</li><li>Invertir un array.</li><li>Contar vocales de una frase.</li><li>Palíndromo.</li><li>Contar palabras.</li><li>Menú de calculadora: un do-while que muestra opciones (1 sumar, 2 restar, 3 multiplicar, 4 dividir, 0 salir), cada operación en su propio método.</li></ol>`],
["Dos soluciones de referencia",`<p>Compáralas con las tuyas después de intentar los ejercicios.</p>
<pre><code>// FizzBuzz
for (int i = 1; i &lt;= 100; i++) {
    if (i % 15 == 0) System.out.println("FizzBuzz");
    else if (i % 3 == 0) System.out.println("Fizz");
    else if (i % 5 == 0) System.out.println("Buzz");
    else System.out.println(i);
}</code></pre>
<pre><code>// Adivina el número
import java.util.Random;
import java.util.Scanner;

public class Adivina {
    public static void main(String[] args) {
        int secreto = new Random().nextInt(100) + 1;
        Scanner sc = new Scanner(System.in);
        int intentos = 0, n;
        do {
            System.out.print("Tu número (1-100): ");
            n = sc.nextInt();
            intentos++;
            if (n &lt; secreto) System.out.println("Más alto");
            else if (n &gt; secreto) System.out.println("Más bajo");
        } while (n != secreto);
        System.out.println("¡Acertaste en " + intentos + " intentos!");
    }
}</code></pre>
<p>Reto extra: limita a 7 intentos y permite jugar de nuevo.</p>`],
["Cómo sé que lo domino",`<ul><li>Resolví al menos 20 ejercicios y están en GitHub.</li><li>Puedo escribir FizzBuzz, primos y palíndromo sin ayuda.</li><li>Pruebo casos límite antes de dar un ejercicio por terminado.</li><li>Leo un mensaje de error de Java y sé en qué línea mirar.</li></ul>`]
]},
"2-0":{e:"3. Java orientado a objetos",t:"Clases, objetos y constructores",s:[
["Qué es la programación orientada a objetos",`<p>La <b>POO</b> modela el programa como objetos que combinan <b>datos</b> (atributos) y <b>comportamiento</b> (métodos). Una <b>clase</b> es el molde (el plano de una casa); un <b>objeto</b> es una instancia concreta creada con ese molde (una casa construida). De una clase puedes crear tantos objetos como quieras, cada uno con sus propios valores.</p>
<pre><code>public class Persona {
    String nombre;          // atributos (estado)
    int edad;

    Persona(String nombre, int edad) {   // constructor
        this.nombre = nombre;
        this.edad = edad;
    }

    void saludar() {                      // método (comportamiento)
        System.out.println("Hola, soy " + nombre);
    }
}

// En otra clase, con main:
Persona p1 = new Persona("Ana", 30);
Persona p2 = new Persona("Luis", 25);
p1.saludar();
System.out.println(p2.edad);</code></pre>`],
["Constructores y this",`<ul><li>El <b>constructor</b> se llama igual que la clase, no tiene tipo de retorno y se ejecuta con <code>new</code>.</li><li>Si no escribes ninguno, Java crea uno vacío por defecto. En cuanto escribes uno, el vacío desaparece (si lo necesitas, defínelo).</li><li><code>this</code> es el objeto actual. <code>this.nombre = nombre;</code> distingue el atributo del parámetro. Sin <code>this</code>, asignarías el parámetro a sí mismo y el atributo quedaría sin valor.</li><li><b>Sobrecarga</b>: varios constructores con distintos parámetros, y <code>this(...)</code> para llamar a otro:</li></ul>
<pre><code>Persona(String nombre) {
    this(nombre, 0);       // reutiliza el otro constructor
}</code></pre>
<p>Valores por defecto de atributos no inicializados: 0, <code>false</code> o <code>null</code>.</p>`],
["Referencias, static y toString",`<p>Una variable de objeto guarda una <b>referencia</b> (dirección), no el objeto. <code>Persona a = p1;</code> hace que a y p1 apunten al <b>mismo</b> objeto: cambiar uno cambia el otro. Si no apunta a nada vale <code>null</code>, y usarla lanza <code>NullPointerException</code>. Con objetos, <code>==</code> compara referencias; para comparar contenido se usa <code>equals</code> (lo definirás tú).</p>
<p><b>static</b>: pertenece a la clase, no a cada objeto. Útil para contadores o utilidades:</p>
<pre><code>static int total = 0;                 // compartido por todos los objetos
Persona(...) { total++; }
Persona.total                         // se accede con el nombre de la clase</code></pre>
<p>Sobrescribe <code>toString()</code> para imprimir tu objeto de forma legible:</p>
<pre><code>@Override
public String toString() {
    return "Persona{nombre=" + nombre + ", edad=" + edad + "}";
}</code></pre>
<p>Java libera la memoria automáticamente (<i>garbage collector</i>) cuando ya nada referencia un objeto.</p>`],
["Práctica",`<ol><li>Clase <code>Rectangulo</code> con ancho y alto, método <code>area()</code> y <code>perimetro()</code>.</li><li>Clase <code>Libro</code> (titulo, autor, paginas) con toString; crea 3 libros y muéstralos.</li><li>Clase <code>CuentaBancaria</code> (titular, saldo) con <code>depositar</code> y <code>retirar</code> (que no deje el saldo negativo).</li><li>Agrega un contador static que cuente cuántas cuentas se han creado.</li><li>Experimenta: asigna <code>CuentaBancaria b = a;</code>, modifica b y observa a.</li></ol>`],
["Errores comunes",`<ul><li><b>constructor X in class X cannot be applied to given types</b>: llamas a <code>new</code> con parámetros que ningún constructor acepta.</li><li><b>NullPointerException</b>: usas un objeto no creado con new.</li><li><b>Olvidar this</b> y dejar atributos sin asignar.</li><li><b>Usar atributos de instancia desde un método static</b>.</li></ul>`],
["Cómo sé que lo domino",`<ul><li>Explico la diferencia entre clase y objeto con un ejemplo propio.</li><li>Escribo una clase con atributos, constructor y métodos sin mirar.</li><li>Sé qué es una referencia y qué provoca un null.</li><li>Distingo miembros de instancia y static.</li></ul>`]
]},
"2-1":{e:"3. Java orientado a objetos",t:"Encapsulación, herencia, polimorfismo y abstracción",s:[
["Encapsulación",`<p>Ocultar los datos internos y exponer solo lo necesario mediante métodos. Atributos <code>private</code>, acceso mediante <b>getters</b> y <b>setters</b> que pueden validar:</p>
<pre><code>public class Cuenta {
    private double saldo;

    public double getSaldo() { return saldo; }

    public void depositar(double monto) {
        if (monto &lt;= 0) throw new IllegalArgumentException("Monto inválido");
        saldo += monto;
    }
}</code></pre>
<p>Beneficio: nadie puede dejar el objeto en un estado inválido (<code>cuenta.saldo = -500</code> ya no compila fuera de la clase). No todo atributo necesita setter; si algo no debe cambiar, no lo expongas.</p>`],
["Herencia",`<p>Una clase hija (<code>extends</code>) reutiliza los atributos y métodos de la clase padre y añade o cambia los suyos. Relación <b>"es un"</b>: un Perro es un Animal.</p>
<pre><code>public class Animal {
    protected String nombre;
    public Animal(String nombre) { this.nombre = nombre; }
    public void hacerSonido() { System.out.println("..."); }
}

public class Perro extends Animal {
    public Perro(String nombre) {
        super(nombre);                 // llama al constructor del padre
    }
    @Override
    public void hacerSonido() {        // redefine el método
        System.out.println(nombre + ": guau");
    }
}</code></pre>
<ul><li><code>super(...)</code> debe ser la primera línea del constructor hijo.</li><li><code>@Override</code> hace que el compilador verifique que realmente sobrescribes algo.</li><li>Java permite <b>una sola</b> clase padre. Todas heredan de <code>Object</code> (de ahí vienen toString, equals y hashCode).</li><li><code>final</code> en una clase impide heredarla; en un método, sobrescribirlo.</li><li>Regla práctica: prefiere <b>composición</b> ("tiene un": un Auto tiene un Motor) cuando no exista una relación clara "es un".</li></ul>`],
["Polimorfismo",`<p>Una variable del tipo padre puede referenciar objetos de cualquier hijo, y al llamar un método se ejecuta la versión del objeto real (enlace dinámico).</p>
<pre><code>Animal[] zoo = { new Perro("Rex"), new Gato("Misu"), new Animal("Genérico") };
for (Animal a : zoo) {
    a.hacerSonido();     // cada uno responde a su manera
}

if (zoo[0] instanceof Perro p) {   // verifica el tipo y lo convierte (Java 16+)
    System.out.println(p.nombre);
}</code></pre>
<p>Esto permite escribir código que trabaja con "un Animal" sin saber cuál es, y agregar nuevas clases sin tocarlo. Es la base de cómo funciona Spring.</p>`],
["Abstracción",`<p>Consiste en modelar solo lo esencial y ocultar los detalles. En Java se logra con <b>clases abstractas</b> e <b>interfaces</b> (siguiente tarea): defines <i>qué</i> debe hacerse y cada clase decide <i>cómo</i>. Un conductor usa el volante sin conocer el mecanismo de la dirección.</p>`],
["Práctica",`<ol><li>Jerarquía <code>Empleado</code> → <code>Gerente</code> y <code>Desarrollador</code>, con método <code>calcularSalario()</code> sobrescrito.</li><li>Guarda distintos empleados en un array de tipo Empleado y recorre imprimiendo el salario de cada uno.</li><li>Haz privados todos los atributos y agrega validaciones (salario no negativo).</li><li>Crea la jerarquía <code>Figura</code> → <code>Circulo</code>, <code>Cuadrado</code> con <code>area()</code> y calcula el área total de un arreglo de figuras.</li><li>Prueba <code>instanceof</code> para ejecutar algo solo de los Gerentes.</li></ol>`],
["Errores comunes",`<ul><li><b>There is no default constructor available in Padre</b>: falta llamar a <code>super(...)</code> con los parámetros correctos.</li><li><b>Atributos private no accesibles desde la hija</b>: usa getters o <code>protected</code>.</li><li><b>Herencia por reutilizar código</b> aunque no haya relación "es un".</li><li><b>Olvidar @Override</b> y crear sin querer un método nuevo (por error en el nombre).</li></ul>`],
["Cómo sé que lo domino",`<ul><li>Explico los cuatro pilares con un ejemplo propio de cada uno.</li><li>Distingo "es un" de "tiene un".</li><li>Predigo qué método se ejecuta en una variable de tipo padre.</li><li>Uso super y @Override correctamente.</li></ul>`]
]},
"2-2":{e:"3. Java orientado a objetos",t:"Interfaces, clases abstractas, enum y record",s:[
["Clases abstractas",`<p>Una clase <code>abstract</code> no se puede instanciar; sirve de base con código común y métodos que las hijas están obligadas a implementar.</p>
<pre><code>public abstract class Figura {
    public abstract double area();          // sin cuerpo
    public void describir() {               // con cuerpo: se hereda
        System.out.println("Área: " + area());
    }
}

public class Circulo extends Figura {
    private double radio;
    public Circulo(double radio) { this.radio = radio; }
    @Override public double area() { return Math.PI * radio * radio; }
}</code></pre>`],
["Interfaces",`<p>Una <b>interface</b> es un contrato: declara qué métodos debe tener una clase, sin decir cómo. Una clase puede implementar <b>varias</b> interfaces.</p>
<pre><code>public interface Volador {
    void volar();
    default void aterrizar() {              // método con implementación
        System.out.println("Aterrizando");
    }
}

public class Pato extends Animal implements Volador, Nadador {
    @Override public void volar() { System.out.println("Volando"); }
}

Volador v = new Pato("Donald");            // tipo interfaz = polimorfismo
v.volar();</code></pre>
<p><b>¿Cuándo cada una?</b> Clase abstracta: relación "es un" con estado y código compartido. Interfaz: una capacidad que clases no relacionadas pueden tener (Comparable, Runnable, Serializable). En Spring definirás servicios con interfaces y tantas implementaciones como necesites.</p>`],
["Enum",`<p>Un <code>enum</code> es un conjunto fijo de constantes. Más seguro que usar strings o números sueltos.</p>
<pre><code>public enum DiaSemana { LUNES, MARTES, MIERCOLES, JUEVES, VIERNES, SABADO, DOMINGO }

public enum Estado {
    PENDIENTE("Pendiente"), ACTIVO("Activo"), CERRADO("Cerrado");
    private final String etiqueta;
    Estado(String etiqueta) { this.etiqueta = etiqueta; }
    public String getEtiqueta() { return etiqueta; }
}

Estado e = Estado.ACTIVO;
Estado.values();                // todas las constantes
Estado.valueOf("CERRADO");      // por nombre (lanza excepción si no existe)
e.name(); e.ordinal();

switch (e) {
    case ACTIVO -&gt; System.out.println("Activo");
    default -&gt; System.out.println("Otro");
}</code></pre>`],
["Record",`<p>Un <code>record</code> (Java 16+) es una clase inmutable para transportar datos. Con una línea Java genera constructor, getters (sin prefijo "get"), <code>equals</code>, <code>hashCode</code> y <code>toString</code>.</p>
<pre><code>public record Punto(int x, int y) { }

Punto p = new Punto(3, 4);
p.x();                       // 3
System.out.println(p);       // Punto[x=3, y=4]
p.equals(new Punto(3, 4));   // true

public record Edad(int valor) {
    public Edad {                         // constructor compacto: validación
        if (valor &lt; 0) throw new IllegalArgumentException("Edad negativa");
    }
}</code></pre>
<p>Ideal para DTOs (los usarás en la API REST). Limitaciones: sus campos son finales, no hereda de otra clase (sí puede implementar interfaces).</p>`],
["Práctica",`<ol><li>Convierte <code>Figura</code> en abstracta y crea Circulo, Rectangulo y Triangulo.</li><li>Interfaz <code>Pagable</code> con <code>calcularPago()</code>; impleméntala en <code>Empleado</code> y <code>Freelancer</code> y procesa una lista mixta.</li><li>Enum <code>Prioridad</code> (BAJA, MEDIA, ALTA) con un número asociado, y úsalo en una clase <code>Tarea</code>.</li><li>Record <code>Producto(String nombre, double precio)</code> con validación de precio positivo.</li><li>Implementa <code>Comparable</code> en una clase tuya y ordena un array con <code>Arrays.sort</code>.</li></ol>`],
["Errores comunes",`<ul><li><b>is abstract; cannot be instantiated</b>: intentas hacer <code>new</code> de una clase abstracta o interfaz.</li><li><b>does not override abstract method</b>: te falta implementar un método del contrato.</li><li><b>Interfaz con métodos que no son public al implementarlos</b>: al implementar debes declararlos public.</li><li><b>Intentar modificar un campo de un record</b>: son inmutables.</li></ul>`],
["Cómo sé que lo domino",`<ul><li>Explico cuándo elegir clase abstracta, interfaz, enum o record.</li><li>Implemento una interfaz en dos clases distintas y las uso por polimorfismo.</li><li>Uso un enum con campos y un record con validación.</li></ul>`]
]},
"2-3":{e:"3. Java orientado a objetos",t:"Excepciones (try/catch y personalizadas)",s:[
["Qué es una excepción",`<p>Una <b>excepción</b> es un evento que interrumpe el flujo normal del programa (dividir entre cero, archivo inexistente, null). Si nadie la atiende, el programa termina mostrando el <i>stack trace</i>: léelo de arriba abajo; la primera línea indica el tipo y mensaje, y la primera línea con tu código indica dónde ocurrió.</p>
<pre><code>Throwable
 ├─ Error                      (fallos graves de la JVM: OutOfMemoryError. No se atrapan)
 └─ Exception
     ├─ IOException, SQLException...   CHECKED: el compilador te obliga a manejarlas
     └─ RuntimeException               UNCHECKED: NullPointerException,
                                       IllegalArgumentException, ArithmeticException...</code></pre>`],
["try, catch, finally",`<pre><code>try {
    int n = Integer.parseInt(texto);
    System.out.println(100 / n);
} catch (NumberFormatException e) {
    System.out.println("No es un número: " + e.getMessage());
} catch (ArithmeticException e) {
    System.out.println("No se divide entre cero");
} finally {
    System.out.println("Se ejecuta siempre");
}

catch (IllegalStateException | IllegalArgumentException e) { ... }   // multi-catch</code></pre>
<p><b>try-with-resources</b> cierra automáticamente los recursos (que implementan AutoCloseable):</p>
<pre><code>try (BufferedReader br = new BufferedReader(new FileReader("datos.txt"))) {
    System.out.println(br.readLine());
} catch (IOException e) {
    System.out.println("Error al leer: " + e.getMessage());
}</code></pre>
<p>Orden de los catch: de lo más específico a lo más general.</p>`],
["throw, throws y excepciones personalizadas",`<ul><li><code>throw</code> lanza una excepción: <code>throw new IllegalArgumentException("Edad inválida");</code></li><li><code>throws</code> en la firma avisa que el método puede lanzar una checked: <code>void leer() throws IOException</code>. Quien lo llama atrapa o vuelve a declarar.</li></ul>
<pre><code>public class SaldoInsuficienteException extends RuntimeException {
    private final double faltante;
    public SaldoInsuficienteException(double faltante) {
        super("Saldo insuficiente, faltan " + faltante);
        this.faltante = faltante;
    }
    public double getFaltante() { return faltante; }
}

public void retirar(double monto) {
    if (monto &gt; saldo) throw new SaldoInsuficienteException(monto - saldo);
    saldo -= monto;
}</code></pre>
<p>Hereda de <code>RuntimeException</code> (unchecked) para errores de negocio en aplicaciones Spring; de <code>Exception</code> si quieres obligar a manejarlas.</p>`],
["Buenas prácticas",`<ul><li><b>Nunca</b> dejes un catch vacío: ocultas el error. Como mínimo regístralo.</li><li>Atrapa lo más específico posible; evita <code>catch (Exception e)</code> salvo en el borde de la aplicación.</li><li>Usa excepciones para casos excepcionales, no para control de flujo normal.</li><li>Valida los argumentos al inicio (<i>fail fast</i>).</li><li>Si relanzas, conserva la causa: <code>throw new MiExcepcion("contexto", e);</code></li><li>Mensajes claros: qué falló y con qué valor.</li></ul>`],
["Práctica",`<ol><li>Programa que lee un número con Scanner y repite la petición hasta que el usuario escriba un entero válido (atrapa <code>InputMismatchException</code>).</li><li>Método <code>dividir(a, b)</code> que lance una excepción propia al dividir entre cero.</li><li>Excepción <code>SaldoInsuficienteException</code> en tu clase CuentaBancaria, y un main que la atrape e informe el faltante.</li><li>Lee un archivo de texto con try-with-resources y maneja el caso de archivo inexistente.</li><li>Provoca a propósito NullPointerException, ArrayIndexOutOfBounds y NumberFormatException, y lee cada stack trace.</li></ol>`],
["Errores comunes",`<ul><li><b>unreported exception X; must be caught or declared to be thrown</b>: llamas algo que lanza una checked sin atrapar ni declarar.</li><li><b>exception X has already been caught</b>: pusiste un catch general antes del específico.</li><li><b>Tragarse excepciones</b> con catch vacío.</li><li><b>Usar finally con return</b>: puede ocultar excepciones.</li></ul>`],
["Cómo sé que lo domino",`<ul><li>Distingo checked de unchecked con 3 ejemplos de cada una.</li><li>Escribo try/catch/finally y try-with-resources sin mirar.</li><li>Creo y lanzo una excepción propia.</li><li>Leo un stack trace y encuentro la línea de mi código.</li></ul>`]
]},
"2-4":{e:"3. Java orientado a objetos",t:"Paquetes y modificadores de acceso",s:[
["Paquetes",`<p>Un <b>paquete</b> agrupa clases relacionadas y evita choques de nombres (puede haber dos clases <code>Usuario</code> en paquetes distintos). Se declara en la primera línea y debe coincidir con la estructura de carpetas.</p>
<pre><code>// Archivo: src/main/java/com/miempresa/banco/modelo/Cuenta.java
package com.miempresa.banco.modelo;

public class Cuenta { ... }

// Archivo: src/main/java/com/miempresa/banco/app/Main.java
package com.miempresa.banco.app;

import com.miempresa.banco.modelo.Cuenta;      // importar una clase
import java.util.*;                            // todas las del paquete (evítalo en proyectos grandes)
import static java.lang.Math.PI;               // import estático</code></pre>
<p><b>Convención:</b> todo en minúsculas y dominio invertido (<code>com.miempresa.proyecto</code>). <code>java.lang</code> (String, Math, System) se importa sola. En Spring Boot organizarás típicamente por <code>controller</code>, <code>service</code>, <code>repository</code>, <code>model</code> o por funcionalidad.</p>`],
["Modificadores de acceso",`<p>Controlan quién puede ver una clase, atributo o método:</p>
<pre><code>Modificador       Misma clase  Mismo paquete  Subclase  Todos
private               sí           no            no       no
(sin modificador)     sí           sí            no       no
protected             sí           sí            sí       no
public                sí           sí            sí       sí</code></pre>
<p>Regla práctica: <b>lo más restrictivo posible</b>. Atributos <code>private</code>, métodos que forman la API <code>public</code>, ayudantes internos <code>private</code>. "Sin modificador" se llama <i>package-private</i>. Una clase de nivel superior solo puede ser <code>public</code> o package-private, y un archivo tiene como máximo una clase pública con el mismo nombre del archivo.</p>`],
["Otros modificadores útiles",`<ul><li><code>static</code>: pertenece a la clase.</li><li><code>final</code>: variable que no se reasigna, método que no se sobrescribe, clase que no se hereda.</li><li><code>abstract</code>: sin implementación completa.</li></ul>
<p>Constantes públicas típicas: <code>public static final int MAX_INTENTOS = 3;</code></p>`],
["Práctica",`<ol><li>En IntelliJ crea el paquete <code>com.ejemplo.banco</code> con los subpaquetes <code>modelo</code>, <code>servicio</code>, <code>excepcion</code> y <code>app</code>.</li><li>Mueve ahí tu CuentaBancaria, tu excepción y una clase <code>BancoServicio</code>; la clase Main va en <code>app</code>.</li><li>Haz que Main use todo con <code>import</code>.</li><li>Prueba qué pasa si cambias un método a package-private y lo llamas desde otro paquete: lee el error.</li><li>Verifica que tus atributos son private y que solo expones lo necesario.</li></ol>`],
["Errores comunes",`<ul><li><b>package X does not match the expected package</b>: la declaración <code>package</code> no coincide con la carpeta.</li><li><b>X is not public in Y; cannot be accessed from outside package</b>: falta <code>public</code> o falta importar.</li><li><b>Class X is public, should be declared in a file named X.java</b>.</li><li><b>Importar con * por pereza</b> y generar ambigüedades (por ejemplo, dos clases Date).</li></ul>`],
["Cómo sé que lo domino",`<ul><li>Organizo un proyecto en paquetes coherentes.</li><li>Recito de memoria qué ve cada modificador de acceso.</li><li>Uso imports correctos y sé corregir un error de visibilidad.</li><li>Aplico el criterio de lo más restrictivo posible.</li></ul>`]
]},
"3-0":{e:"4. Java intermedio",t:"Colecciones: List, Set, Map",s:[
["Por qué existen",`<p>Los arrays tienen tamaño fijo. El <b>Java Collections Framework</b> (paquete <code>java.util</code>) ofrece estructuras que crecen, buscan y ordenan por ti. Tres familias que usarás todos los días:</p>
<ul><li><b>List</b>: secuencia ordenada con duplicados, acceso por índice.</li><li><b>Set</b>: sin duplicados.</li><li><b>Map</b>: pares clave → valor, claves únicas (no es una Collection, pero forma parte del framework).</li></ul>
<p>Programa siempre contra la <b>interfaz</b> (<code>List</code>, <code>Set</code>, <code>Map</code>) y elige la implementación al crear el objeto.</p>`],
["List",`<pre><code>import java.util.*;

List&lt;String&gt; nombres = new ArrayList&lt;&gt;();
nombres.add("Ana");
nombres.add("Luis");
nombres.add(0, "Eva");              // insertar en posición
nombres.get(1);                     // "Ana"
nombres.set(1, "Pedro");            // reemplazar
nombres.remove("Luis");             // por valor; remove(0) por índice
nombres.size();  nombres.isEmpty();  nombres.contains("Eva");  nombres.indexOf("Eva");

for (String n : nombres) System.out.println(n);

List&lt;Integer&gt; fija = List.of(1, 2, 3);   // inmutable: add lanza UnsupportedOperationException
nombres.sort(Comparator.naturalOrder());
nombres.removeIf(n -&gt; n.startsWith("E"));</code></pre>
<p><b>ArrayList</b> (el 95% de los casos): acceso por índice muy rápido, insertar/borrar en medio es más lento. <b>LinkedList</b>: rara vez conviene.</p>`],
["Set",`<pre><code>Set&lt;String&gt; unicos = new HashSet&lt;&gt;();
unicos.add("java"); unicos.add("java");    // la segunda no se agrega
unicos.size();                             // 1
unicos.contains("java");                   // rapidísimo</code></pre>
<ul><li><b>HashSet</b>: sin orden garantizado, el más rápido.</li><li><b>LinkedHashSet</b>: conserva el orden de inserción.</li><li><b>TreeSet</b>: mantiene los elementos ordenados.</li></ul>
<p>Uso típico: eliminar duplicados de una lista con <code>new HashSet&lt;&gt;(lista)</code>.</p>`],
["Map",`<pre><code>Map&lt;String, Integer&gt; edades = new HashMap&lt;&gt;();
edades.put("Ana", 30);
edades.put("Luis", 25);
edades.get("Ana");                       // 30 (null si no existe)
edades.getOrDefault("Eva", 0);           // 0
edades.containsKey("Luis");
edades.putIfAbsent("Ana", 99);           // no sobrescribe
edades.remove("Luis");

for (Map.Entry&lt;String, Integer&gt; e : edades.entrySet()) {
    System.out.println(e.getKey() + " = " + e.getValue());
}
edades.keySet();  edades.values();

// contar frecuencias de palabras:
Map&lt;String, Integer&gt; conteo = new HashMap&lt;&gt;();
for (String p : palabras) conteo.merge(p, 1, Integer::sum);</code></pre>
<p>Variantes: <b>HashMap</b> (sin orden), <b>LinkedHashMap</b> (orden de inserción), <b>TreeMap</b> (claves ordenadas).</p>`],
["Detalles que importan",`<ul><li><b>equals y hashCode</b>: HashSet y HashMap los usan para detectar duplicados. Si tus objetos son claves, sobrescribe ambos (o usa un <code>record</code>, que ya los genera).</li><li><b>Ordenar objetos</b>: <code>lista.sort(Comparator.comparing(Persona::getEdad).thenComparing(Persona::getNombre));</code></li><li><b>ConcurrentModificationException</b>: no elimines elementos dentro de un for-each; usa <code>removeIf</code> o un Iterator.</li><li>Colecciones guardan <b>objetos</b>: <code>List&lt;int&gt;</code> no compila, usa <code>List&lt;Integer&gt;</code>.</li><li><b>Queue/Deque</b> (<code>ArrayDeque</code>) para colas y pilas.</li></ul>`],
["Práctica",`<ol><li>Lista de 10 números: elimina los pares, ordénala de mayor a menor y muéstrala.</li><li>Elimina duplicados de una lista de palabras usando Set, conservando el orden original.</li><li>Cuenta cuántas veces aparece cada palabra en una frase con Map.</li><li>Agenda de contactos: <code>Map&lt;String, String&gt;</code> con alta, búsqueda y baja desde un menú.</li><li>Lista de <code>Persona</code> ordenada por edad y luego por nombre.</li><li>Agrupa una lista de nombres por su inicial en <code>Map&lt;Character, List&lt;String&gt;&gt;</code>.</li></ol>`],
["Errores comunes",`<ul><li><b>IndexOutOfBoundsException</b>: índice fuera de rango.</li><li><b>NullPointerException con map.get</b>: la clave no existe y desempaquetas a int.</li><li><b>UnsupportedOperationException</b>: modificas una lista creada con List.of.</li><li><b>remove(int) vs remove(Object)</b> en List&lt;Integer&gt;: <code>lista.remove(1)</code> borra el índice 1, no el valor 1.</li></ul>`],
["Cómo sé que lo domino",`<ul><li>Elijo List, Set o Map según el problema y justifico por qué.</li><li>Recorro un Map con entrySet.</li><li>Sé por qué los objetos clave necesitan equals y hashCode.</li><li>Ordeno con Comparator.</li></ul>`]
]},
"3-1":{e:"4. Java intermedio",t:"Genéricos",s:[
["Para qué sirven",`<p>Los <b>genéricos</b> permiten escribir clases y métodos que funcionan con distintos tipos, manteniendo la verificación de tipos en <b>compilación</b>. Sin ellos tendrías listas de <code>Object</code> y casts peligrosos.</p>
<pre><code>List lista = new ArrayList();            // sin genéricos (raw type, evítalo)
lista.add("hola"); lista.add(5);
String s = (String) lista.get(1);        // ClassCastException en ejecución

List&lt;String&gt; seguras = new ArrayList&lt;&gt;();
seguras.add(5);                          // ¡error de compilación!
String t = seguras.get(0);               // sin cast</code></pre>
<p><code>&lt;&gt;</code> (diamante) deja que el compilador deduzca el tipo.</p>`],
["Clases y métodos genéricos",`<pre><code>public class Caja&lt;T&gt; {
    private T contenido;
    public Caja(T contenido) { this.contenido = contenido; }
    public T get() { return contenido; }
    public void set(T c) { this.contenido = c; }
}

Caja&lt;String&gt; a = new Caja&lt;&gt;("hola");
Caja&lt;Integer&gt; b = new Caja&lt;&gt;(42);

public static &lt;T&gt; void imprimir(List&lt;T&gt; lista) {      // método genérico
    for (T x : lista) System.out.println(x);
}

public static &lt;T extends Comparable&lt;T&gt;&gt; T maximo(T a, T b) {   // tipo con límite
    return a.compareTo(b) &gt;= 0 ? a : b;
}</code></pre>
<p>Letras convencionales: <b>T</b> (type), <b>E</b> (element), <b>K</b>/<b>V</b> (key/value), <b>R</b> (return). Un par de tipos: <code>Par&lt;K, V&gt;</code>.</p>`],
["Comodines (wildcards)",`<ul><li><code>List&lt;?&gt;</code>: lista de "algo", solo para leer.</li><li><code>List&lt;? extends Number&gt;</code>: lista de Number o subtipos (Integer, Double). Puedes <b>leer</b> como Number, pero no agregar.</li><li><code>List&lt;? super Integer&gt;</code>: lista de Integer o supertipos. Puedes <b>agregar</b> Integer.</li></ul>
<pre><code>static double sumar(List&lt;? extends Number&gt; nums) {
    double t = 0;
    for (Number n : nums) t += n.doubleValue();
    return t;
}
sumar(List.of(1, 2, 3));  sumar(List.of(1.5, 2.5));   // ambas valen</code></pre>
<p>Ojo: <code>List&lt;Integer&gt;</code> <b>no</b> es subtipo de <code>List&lt;Number&gt;</code>. Por eso existen los comodines. Regla mnemotécnica PECS: <i>Producer Extends, Consumer Super</i>.</p>`],
["Primitivos, wrappers y autoboxing",`<p>Los genéricos solo admiten objetos: usa <b>wrappers</b> (<code>Integer, Double, Boolean, Character, Long</code>). Java convierte solo (autoboxing/unboxing):</p>
<pre><code>List&lt;Integer&gt; nums = new ArrayList&lt;&gt;();
nums.add(5);          // int → Integer
int x = nums.get(0);  // Integer → int

Integer a = 127, b = 127;  a == b   // true (caché)
Integer c = 1000, d = 1000; c == d  // false → usa c.equals(d)
Integer n = null; int m = n;        // NullPointerException</code></pre>
<p>Dato técnico: Java borra los tipos genéricos al compilar (<i>type erasure</i>), por eso no puedes hacer <code>new T()</code> ni <code>instanceof List&lt;String&gt;</code>.</p>`],
["Práctica",`<ol><li>Clase genérica <code>Par&lt;A, B&gt;</code> con getters y toString.</li><li>Método <code>static &lt;T&gt; void intercambiar(T[] arr, int i, int j)</code>.</li><li>Método <code>maximo</code> sobre una lista de elementos Comparable; pruébalo con Integer, String y una clase tuya que implemente Comparable.</li><li>Clase <code>Pila&lt;T&gt;</code> (push, pop, peek, estaVacia) usando ArrayList por dentro.</li><li>Método que sume una lista de <code>? extends Number</code>.</li></ol>`],
["Errores comunes",`<ul><li><b>incompatible types: List&lt;Integer&gt; cannot be converted to List&lt;Number&gt;</b>: usa <code>? extends Number</code>.</li><li><b>unexpected type, required reference, found int</b>: usa Integer.</li><li><b>Comparar Integers con ==</b>.</li><li><b>Raw types</b> (List sin &lt;&gt;): pierdes la seguridad.</li></ul>`],
["Cómo sé que lo domino",`<ul><li>Escribo una clase y un método genérico sin mirar.</li><li>Explico qué es un tipo con límite (<code>extends</code>).</li><li>Sé cuándo usar ? extends y ? super.</li><li>Entiendo autoboxing y su trampa con ==.</li></ul>`]
]},
"3-2":{e:"4. Java intermedio",t:"Lambdas y Streams",s:[
["Lambdas e interfaces funcionales",`<p>Una <b>lambda</b> es una función anónima corta. Se usa donde se espera una <b>interfaz funcional</b> (una con un único método abstracto).</p>
<pre><code>(a, b) -&gt; a + b                 // varios parámetros
x -&gt; x * 2                      // uno solo, sin paréntesis
() -&gt; System.out.println("hi")  // sin parámetros
(a, b) -&gt; { int r = a + b; return r; }   // con bloque

Comparator&lt;String&gt; porLargo = (a, b) -&gt; a.length() - b.length();</code></pre>
<p>Interfaces funcionales de <code>java.util.function</code> que verás constantemente:</p>
<ul><li><b>Predicate&lt;T&gt;</b>: <code>boolean test(T)</code> (filtros).</li><li><b>Function&lt;T,R&gt;</b>: <code>R apply(T)</code> (transformar).</li><li><b>Consumer&lt;T&gt;</b>: <code>void accept(T)</code> (hacer algo).</li><li><b>Supplier&lt;T&gt;</b>: <code>T get()</code> (producir).</li><li><b>BiFunction, UnaryOperator, BinaryOperator</b>, y <b>Runnable</b>.</li></ul>
<p><b>Referencias a métodos</b> (atajo cuando la lambda solo llama a un método): <code>String::toUpperCase</code>, <code>System.out::println</code>, <code>Persona::getNombre</code>, <code>Persona::new</code>.</p>
<p>Una lambda solo puede usar variables locales <b>efectivamente finales</b> (que no cambian después de asignarse).</p>`],
["Streams: la idea",`<p>Un <b>Stream</b> procesa una colección como una tubería: <b>fuente → operaciones intermedias → operación terminal</b>. No modifica la fuente, es perezoso (nada se ejecuta hasta la terminal) y <b>no se puede reutilizar</b>.</p>
<pre><code>record Persona(String nombre, int edad, String ciudad) { }

List&lt;Persona&gt; ps = List.of(
    new Persona("Ana", 30, "Lima"),
    new Persona("Luis", 17, "Quito"),
    new Persona("Eva", 45, "Lima"));

List&lt;String&gt; adultos = ps.stream()
    .filter(p -&gt; p.edad() &gt;= 18)      // intermedia
    .map(Persona::nombre)              // intermedia
    .sorted()                          // intermedia
    .toList();                         // terminal → [Ana, Eva]</code></pre>`],
["Operaciones principales",`<ul><li><b>Intermedias</b>: <code>filter, map, flatMap, sorted, distinct, limit, skip, peek, mapToInt</code>.</li><li><b>Terminales</b>: <code>forEach, collect, toList, count, sum, average, min, max, reduce, anyMatch, allMatch, noneMatch, findFirst, findAny</code>.</li></ul>
<pre><code>int sumaEdades = ps.stream().mapToInt(Persona::edad).sum();
double promedio = ps.stream().mapToInt(Persona::edad).average().orElse(0);
boolean hayMenores = ps.stream().anyMatch(p -&gt; p.edad() &lt; 18);
Optional&lt;Persona&gt; mayor = ps.stream().max(Comparator.comparingInt(Persona::edad));
long cuantos = ps.stream().filter(p -&gt; p.ciudad().equals("Lima")).count();
int total = IntStream.rangeClosed(1, 100).sum();   // 5050</code></pre>`],
["Collectors",`<pre><code>import java.util.stream.Collectors;

String nombres = ps.stream().map(Persona::nombre).collect(Collectors.joining(", "));

Map&lt;String, List&lt;Persona&gt;&gt; porCiudad =
    ps.stream().collect(Collectors.groupingBy(Persona::ciudad));

Map&lt;String, Long&gt; conteo =
    ps.stream().collect(Collectors.groupingBy(Persona::ciudad, Collectors.counting()));

Map&lt;Boolean, List&lt;Persona&gt;&gt; partes =
    ps.stream().collect(Collectors.partitioningBy(p -&gt; p.edad() &gt;= 18));

Map&lt;String, Integer&gt; edadPorNombre =
    ps.stream().collect(Collectors.toMap(Persona::nombre, Persona::edad));</code></pre>
<p><code>flatMap</code> aplana listas de listas: <code>listaDeListas.stream().flatMap(List::stream).toList()</code>.</p>
<p>Buenas prácticas: lambdas cortas (si pasa de 3 líneas, extrae un método), evita efectos secundarios dentro del stream, y no uses streams para todo: un for simple a veces es más claro. Los <code>parallelStream()</code> solo valen la pena con grandes volúmenes y operaciones independientes.</p>`],
["Práctica",`<ol><li>Con una lista de números: los pares, al cuadrado, ordenados descendentemente.</li><li>Lista de palabras: las de más de 4 letras en mayúsculas, sin repetir.</li><li>Con <code>Persona</code>: promedio de edad, la persona más joven, y nombres separados por coma.</li><li>Agrupa personas por ciudad y cuenta cuántas hay en cada una.</li><li>Ordena una lista con <code>Comparator.comparing(...).thenComparing(...)</code> usando referencias a método.</li><li>Reescribe un for con if y acumulador como stream, y viceversa, y compara cuál es más legible.</li></ol>`],
["Errores comunes",`<ul><li><b>stream has already been operated upon or closed</b>: reutilizaste un stream.</li><li><b>Local variables referenced from a lambda must be final</b>: intentas modificar una variable externa.</li><li><b>Olvidar la operación terminal</b>: no pasa nada (es perezoso).</li><li><b>Alterar la lista original dentro del stream</b>.</li><li><b>Duplicados en toMap</b>: lanza IllegalStateException si dos claves coinciden.</li></ul>`],
["Cómo sé que lo domino",`<ul><li>Escribo Predicate, Function y Consumer como lambdas.</li><li>Construyo un pipeline filter-map-collect sin mirar.</li><li>Uso groupingBy y joining.</li><li>Sé cuándo un for es mejor que un stream.</li></ul>`]
]},
"3-3":{e:"4. Java intermedio",t:"Optional",s:[
["El problema del null",`<p>Devolver <code>null</code> obliga a quien llama a recordar comprobarlo; olvidarlo produce <code>NullPointerException</code>. <b>Optional&lt;T&gt;</b> es un contenedor que puede tener un valor o estar vacío, y deja explícito en la firma que "puede no haber resultado".</p>
<pre><code>Optional&lt;Usuario&gt; buscarPorId(long id) { ... }     // la firma avisa</code></pre>`],
["Crear y usar",`<pre><code>Optional&lt;String&gt; a = Optional.of("hola");           // no admite null (lanza NPE)
Optional&lt;String&gt; b = Optional.ofNullable(valor);    // valor puede ser null
Optional&lt;String&gt; c = Optional.empty();

c.isPresent();  c.isEmpty();

a.ifPresent(v -&gt; System.out.println(v));
a.ifPresentOrElse(v -&gt; System.out.println(v), () -&gt; System.out.println("nada"));

String x = c.orElse("por defecto");
String y = c.orElseGet(() -&gt; calcularCostoso());       // se evalúa solo si está vacío
String z = c.orElseThrow(() -&gt; new IllegalStateException("No existe"));</code></pre>
<p><code>orElse(valor)</code> evalúa el argumento <b>siempre</b>; <code>orElseGet(supplier)</code> solo cuando hace falta. Si calcular el valor es costoso o tiene efectos, usa orElseGet.</p>`],
["Transformar con map, flatMap y filter",`<pre><code>String ciudad = buscarPorId(5)
    .map(Usuario::getDireccion)        // Optional&lt;Direccion&gt;  (si direccion es null, queda vacío)
    .map(Direccion::getCiudad)
    .filter(c -&gt; !c.isBlank())
    .orElse("Desconocida");

// flatMap cuando la función ya devuelve un Optional:
Optional&lt;Perfil&gt; perfil = buscarPorId(5).flatMap(Usuario::getPerfil);</code></pre>
<p>Esto reemplaza cadenas de <code>if (x != null)</code> anidados. Spring Data lo usa en todos lados: <code>repositorio.findById(id)</code> devuelve Optional.</p>`],
["Buenas prácticas",`<ul><li>Úsalo como <b>tipo de retorno</b> cuando un resultado puede no existir.</li><li><b>No</b> lo uses como atributo de clase, parámetro de método ni elemento de colecciones.</li><li>No uses <code>get()</code> sin comprobar: es un NullPointerException disfrazado (<code>NoSuchElementException</code>). Prefiere orElseThrow.</li><li>Para colecciones, devuelve una lista vacía, no <code>Optional&lt;List&gt;</code>.</li><li>No hagas <code>if (opt.isPresent()) { opt.get() }</code> si puedes usar map/ifPresent.</li><li>Existen <code>OptionalInt</code>, <code>OptionalDouble</code> para primitivos (los devuelven average y max de IntStream).</li></ul>`],
["Práctica",`<ol><li>Método <code>Optional&lt;Persona&gt; buscarPorNombre(List&lt;Persona&gt; ps, String nombre)</code> con streams (<code>findFirst</code>).</li><li>Úsalo de tres maneras: ifPresent, orElse y orElseThrow con excepción propia.</li><li>Cadena de tres niveles (Empresa → Departamento → Jefe) con atributos que pueden ser null, resuelta con map y orElse.</li><li>Escribe una versión con ifs anidados y otra con Optional, y compara legibilidad.</li><li>Demuestra la diferencia entre orElse y orElseGet con un método que imprima cuándo se ejecuta.</li></ol>`],
["Errores comunes",`<ul><li><b>NoSuchElementException: No value present</b>: llamaste get() sobre un Optional vacío.</li><li><b>Optional.of(null)</b> lanza NPE; usa ofNullable.</li><li><b>Devolver null desde un método que retorna Optional</b>: rompes el contrato.</li><li><b>Optional como campo o parámetro</b>.</li></ul>`],
["Cómo sé que lo domino",`<ul><li>Explico por qué Optional mejora la firma de un método.</li><li>Uso map, filter y orElseThrow encadenados.</li><li>Distingo orElse de orElseGet.</li><li>Sé cuándo no usar Optional.</li></ul>`]
]},
"3-4":{e:"4. Java intermedio",t:"Fechas (java.time) y manejo de archivos",s:[
["API de fechas java.time",`<p>Usa siempre el paquete <code>java.time</code> (Java 8+); evita las antiguas <code>Date</code> y <code>Calendar</code>. Todas las clases son <b>inmutables</b>: cada operación devuelve un objeto nuevo.</p>
<ul><li><b>LocalDate</b>: fecha sin hora. <b>LocalTime</b>: hora sin fecha. <b>LocalDateTime</b>: ambas, sin zona.</li><li><b>ZonedDateTime</b>: con zona horaria. <b>Instant</b>: un punto en el tiempo (UTC), útil para guardar marcas de tiempo.</li><li><b>Duration</b> (horas, minutos, segundos) y <b>Period</b> (años, meses, días).</li></ul>
<pre><code>LocalDate hoy = LocalDate.now();
LocalDate nac = LocalDate.of(1995, 3, 21);        // o Month.MARCH
LocalDate f = LocalDate.parse("2026-10-13");       // formato ISO
LocalDateTime ahora = LocalDateTime.now();

hoy.plusDays(30);  hoy.minusMonths(2);  hoy.withDayOfMonth(1);
hoy.getDayOfWeek();  hoy.getYear();  hoy.isLeapYear();
nac.isBefore(hoy);  nac.isAfter(hoy);

Period edad = Period.between(nac, hoy);            // edad.getYears()
long dias = ChronoUnit.DAYS.between(nac, hoy);
Duration d = Duration.between(inicio, fin);        // d.toMinutes()

ZonedDateTime lima = ZonedDateTime.now(ZoneId.of("America/Lima"));</code></pre>`],
["Formatear y parsear",`<pre><code>DateTimeFormatter fmt = DateTimeFormatter.ofPattern("dd/MM/yyyy");
String texto = hoy.format(fmt);                    // "13/10/2026"
LocalDate f = LocalDate.parse("21/03/1995", fmt);

DateTimeFormatter conHora = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm");</code></pre>
<p>Patrones: <code>yyyy</code> año, <code>MM</code> mes (<code>mm</code> son minutos), <code>dd</code> día, <code>HH</code> hora 0-23, <code>mm</code> minutos, <code>ss</code> segundos. Un texto que no coincide lanza <code>DateTimeParseException</code>. Para guardar y enviar fechas en APIs, usa el formato ISO (<code>2026-10-13</code>).</p>`],
["Archivos con java.nio.file",`<pre><code>import java.nio.file.*;
import java.io.IOException;
import java.util.List;

Path ruta = Path.of("datos", "notas.txt");

Files.createDirectories(ruta.getParent());
Files.writeString(ruta, "Primera línea");                          // crea o sobrescribe
Files.writeString(ruta, " y más", StandardOpenOption.APPEND);      // agregar al final
String todo = Files.readString(ruta);
List&lt;String&gt; lineas = Files.readAllLines(ruta);
Files.exists(ruta);   Files.size(ruta);
Files.copy(ruta, Path.of("copia.txt"), StandardCopyOption.REPLACE_EXISTING);
Files.delete(ruta);

// archivos grandes: línea a línea, cerrando el stream
try (var lineasStream = Files.lines(ruta)) {
    lineasStream.filter(l -&gt; l.contains("error")).forEach(System.out::println);
}</code></pre>
<p>Casi todos estos métodos lanzan <code>IOException</code> (checked): envuélvelos en try/catch o declara <code>throws</code>. Las rutas relativas se resuelven desde la carpeta donde ejecutas el programa. Usa UTF-8 para evitar problemas con tildes.</p>`],
["Ejemplo: leer un CSV simple",`<pre><code>// personas.csv:  nombre,edad
//                Ana,30
List&lt;String&gt; lineas = Files.readAllLines(Path.of("personas.csv"));
for (String linea : lineas.subList(1, lineas.size())) {   // salta la cabecera
    String[] c = linea.split(",");
    System.out.println(c[0] + " tiene " + Integer.parseInt(c[1].trim()));
}</code></pre>
<p>Para CSV reales (con comas dentro de campos o comillas) se usan librerías como OpenCSV o Commons CSV.</p>`],
["Práctica",`<ol><li>Calcula tu edad exacta (años, meses y días) y los días que faltan para tu próximo cumpleaños.</li><li>Pide una fecha en formato dd/MM/yyyy y muestra el día de la semana; controla el error de formato.</li><li>Calcula el vencimiento de una factura a 30 días y avisa si cae en fin de semana.</li><li>Programa que guarde tareas en <code>tareas.txt</code> (una por línea) y las cargue al iniciar.</li><li>Lee un CSV de personas, convierte cada línea en un record y calcula la edad promedio con streams.</li><li>Registro de eventos: agrega al final de un log líneas con la fecha y hora actual.</li></ol>`],
["Errores comunes",`<ul><li><b>NoSuchFileException</b>: ruta incorrecta o ejecutas desde otra carpeta.</li><li><b>DateTimeParseException</b>: el texto no coincide con el patrón.</li><li><b>Confundir MM con mm</b>.</li><li><b>No cerrar streams</b> de Files.lines (usa try-with-resources).</li><li><b>Olvidar que las fechas son inmutables</b>: <code>hoy.plusDays(1);</code> sin asignar no hace nada.</li></ul>`],
["Cómo sé que lo domino",`<ul><li>Elijo LocalDate, LocalDateTime o Instant según el caso.</li><li>Formateo y parseo con DateTimeFormatter.</li><li>Leo y escribo archivos con Files y manejo IOException.</li><li>Calculo diferencias entre fechas con Period y ChronoUnit.</li></ul>`]
]},
"3-5":{e:"4. Java intermedio",t:"Pruebas unitarias con JUnit 5",s:[
["Por qué probar",`<p>Una <b>prueba unitaria</b> verifica automáticamente que una pieza pequeña de código (un método o clase) hace lo esperado. Te da seguridad para cambiar código sin romper lo existente, documenta el comportamiento y encuentra errores temprano. Es imprescindible en el trabajo profesional y en Spring Boot.</p>
<p>Buenas pruebas cumplen <b>FIRST</b>: rápidas, independientes, repetibles, auto-verificables y oportunas (escritas junto con el código).</p>`],
["Configuración con Maven",`<p>En tu <code>pom.xml</code> agrega la dependencia (usa la versión estable más reciente de JUnit; la API de <code>@Test</code> y los asserts es la misma):</p>
<pre><code>&lt;dependency&gt;
    &lt;groupId&gt;org.junit.jupiter&lt;/groupId&gt;
    &lt;artifactId&gt;junit-jupiter&lt;/artifactId&gt;
    &lt;version&gt;5.11.0&lt;/version&gt;
    &lt;scope&gt;test&lt;/scope&gt;
&lt;/dependency&gt;</code></pre>
<p>Estructura: el código va en <code>src/main/java</code> y las pruebas en <code>src/test/java</code>, <b>con el mismo paquete</b>. Convención de nombre: <code>CuentaTest</code> para probar <code>Cuenta</code>. Si Maven no ejecuta las pruebas, asegúrate de tener un maven-surefire-plugin 2.22 o superior. Ejecuta con el botón verde de IntelliJ o <code>mvn test</code> en la terminal.</p>`],
["Tu primera prueba",`<pre><code>import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class CuentaTest {

    @Test
    void depositar_aumentaElSaldo() {
        // Arrange (preparar)
        Cuenta cuenta = new Cuenta("Ana", 100);
        // Act (ejecutar)
        cuenta.depositar(50);
        // Assert (verificar)
        assertEquals(150, cuenta.getSaldo());
    }

    @Test
    void retirar_conSaldoInsuficiente_lanzaExcepcion() {
        Cuenta cuenta = new Cuenta("Ana", 100);
        assertThrows(SaldoInsuficienteException.class, () -&gt; cuenta.retirar(500));
    }
}</code></pre>
<p>El patrón <b>Arrange-Act-Assert</b> mantiene cada prueba clara. Una prueba verifica <b>un</b> comportamiento y su nombre dice cuál. Para doubles: <code>assertEquals(esperado, real, 0.001)</code> (con tolerancia).</p>`],
["Assertions y anotaciones",`<ul><li><b>Asserts</b>: <code>assertEquals(esperado, real)</code> (¡el esperado va primero!), <code>assertTrue</code>, <code>assertFalse</code>, <code>assertNull</code>, <code>assertNotNull</code>, <code>assertThrows</code>, <code>assertAll</code> (agrupa varias), <code>assertArrayEquals</code>.</li><li><b>@BeforeEach / @AfterEach</b>: se ejecutan antes y después de cada prueba (prepara objetos limpios).</li><li><b>@BeforeAll / @AfterAll</b>: una vez por clase (métodos static).</li><li><b>@DisplayName("texto")</b>: nombre legible. <b>@Disabled</b>: omite una prueba.</li></ul>
<pre><code>class CalculadoraTest {
    private Calculadora calc;

    @BeforeEach
    void iniciar() { calc = new Calculadora(); }

    @ParameterizedTest
    @CsvSource({"2,3,5", "0,0,0", "-1,1,0"})
    void sumar_variosCasos(int a, int b, int esperado) {
        assertEquals(esperado, calc.sumar(a, b));
    }

    @ParameterizedTest
    @ValueSource(ints = {2, 3, 5, 7})
    void esPrimo_devuelveTrue(int n) { assertTrue(Util.esPrimo(n)); }
}</code></pre>
<p>Las pruebas parametrizadas requieren <code>org.junit.jupiter.params</code> (ya incluido en <code>junit-jupiter</code>).</p>`],
["Qué probar y cómo pensar",`<ul><li><b>Camino feliz</b>: el caso normal.</li><li><b>Casos límite</b>: 0, negativos, vacío, null, un solo elemento, el valor máximo.</li><li><b>Errores esperados</b>: que se lance la excepción correcta.</li><li>No pruebes getters triviales ni librerías ajenas.</li><li><b>TDD</b> (opcional pero valioso): escribes primero la prueba que falla (rojo), luego el código mínimo para pasarla (verde), y finalmente mejoras el código (refactor).</li><li>Una prueba no debe depender de otra ni del orden de ejecución.</li></ul>`],
["Práctica",`<ol><li>Configura JUnit en un proyecto Maven nuevo y ejecuta una prueba que pase y otra que falle a propósito (lee el reporte).</li><li>Escribe 6 pruebas para <code>CuentaBancaria</code>: depósito, retiro válido, retiro excesivo, monto negativo, saldo inicial, y varios movimientos.</li><li>Pruebas parametrizadas para <code>esPrimo</code> y para tu verificador de palíndromos.</li><li>Pruebas para una clase <code>Pila&lt;T&gt;</code> (pop de pila vacía debe lanzar excepción).</li><li>Haz TDD: escribe primero las pruebas de FizzBuzz como método <code>String fizzBuzz(int n)</code> y luego impleméntalo.</li></ol>`],
["Errores comunes",`<ul><li><b>No se ejecutan las pruebas</b>: falta la dependencia, el paquete no coincide o el método es private/static.</li><li><b>assertEquals con argumentos invertidos</b>: los mensajes de error salen confusos.</li><li><b>Pruebas dependientes entre sí</b> o del orden.</li><li><b>Comparar doubles sin tolerancia</b>.</li><li><b>Usar JUnit 4 por error</b>: importa <code>org.junit.jupiter.api.Test</code>, no <code>org.junit.Test</code>.</li></ul>`],
["Cómo sé que lo domino",`<ul><li>Escribo una prueba con Arrange-Act-Assert sin ayuda.</li><li>Pruebo excepciones con assertThrows.</li><li>Uso @BeforeEach y una prueba parametrizada.</li><li>Pienso casos límite antes de dar por buena una función.</li></ul>`]
]},
"4-0":{e:"5. Herramientas de desarrollo",t:"Maven (o Gradle): dependencias y ciclo de build",s:[
["Qué es una herramienta de build",`<p>Un proyecto real usa decenas de librerías ajenas y debe compilarse, probarse y empaquetarse siempre del mismo modo. <b>Maven</b> y <b>Gradle</b> automatizan eso: descargan dependencias, compilan, ejecutan pruebas y generan el <code>.jar</code> final. Sin ellas tendrías que bajar archivos a mano y compilar con comandos larguísimos.</p>
<ul><li><b>Maven</b>: configuración declarativa en XML (<code>pom.xml</code>), estructura estándar, muy extendido en empresas. Es el que usaremos como base.</li><li><b>Gradle</b>: scripts en Groovy o Kotlin, más flexible y rápido en proyectos grandes. Spring Initializr soporta ambos.</li></ul>
<p>Aprende Maven primero; con él, entender Gradle te toma un día.</p>`],
["Instalación y estructura",`<p>IntelliJ trae Maven integrado, y los proyectos de Spring Boot incluyen el <b>Maven Wrapper</b> (<code>mvnw</code> / <code>mvnw.cmd</code>), que descarga la versión correcta sin instalar nada. Para usar <code>mvn</code> en terminal: descarga desde maven.apache.org, agrega la carpeta <code>bin</code> al PATH y verifica con <code>mvn -v</code> (debe mostrar Java 21).</p>
<pre><code>mi-proyecto/
 ├─ pom.xml                      configuración del proyecto
 ├─ src/main/java/               código de producción
 ├─ src/main/resources/          archivos de configuración (application.yml, logback.xml)
 ├─ src/test/java/               pruebas
 ├─ src/test/resources/
 └─ target/                      resultado del build (no se sube a Git)</code></pre>`],
["El pom.xml",`<pre><code>&lt;project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd"&gt;
  &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;

  &lt;groupId&gt;com.miempresa&lt;/groupId&gt;           &lt;!-- organización --&gt;
  &lt;artifactId&gt;practica-java&lt;/artifactId&gt;     &lt;!-- nombre del proyecto --&gt;
  &lt;version&gt;1.0-SNAPSHOT&lt;/version&gt;            &lt;!-- SNAPSHOT = en desarrollo --&gt;

  &lt;properties&gt;
    &lt;maven.compiler.release&gt;21&lt;/maven.compiler.release&gt;
    &lt;project.build.sourceEncoding&gt;UTF-8&lt;/project.build.sourceEncoding&gt;
  &lt;/properties&gt;

  &lt;dependencies&gt;
    &lt;dependency&gt;
      &lt;groupId&gt;org.junit.jupiter&lt;/groupId&gt;
      &lt;artifactId&gt;junit-jupiter&lt;/artifactId&gt;
      &lt;version&gt;5.11.0&lt;/version&gt;
      &lt;scope&gt;test&lt;/scope&gt;
    &lt;/dependency&gt;
  &lt;/dependencies&gt;
&lt;/project&gt;</code></pre>
<p>Cada artefacto se identifica por sus <b>coordenadas GAV</b>: groupId + artifactId + version. Puedes buscar cualquier librería en <b>central.sonatype.com</b> o mvnrepository.com y copiar su bloque <code>&lt;dependency&gt;</code>. Para evitar repetir versiones usa propiedades: define <code>&lt;junit.version&gt;5.11.0&lt;/junit.version&gt;</code> y escríbela como <code>\${junit.version}</code>.</p>`],
["Dependencias",`<ul><li>Maven las descarga desde <b>Maven Central</b> y las guarda en caché local (<code>~/.m2/repository</code>).</li><li><b>Transitivas</b>: si tu dependencia necesita otras, Maven las trae solas.</li><li><b>Scopes</b>: <code>compile</code> (por defecto, todo el código), <code>test</code> (solo pruebas), <code>runtime</code> (solo al ejecutar), <code>provided</code> (la aporta el servidor).</li><li><b>Conflictos de versión</b>: si dos librerías piden versiones distintas, gana la más cercana en el árbol. Inspecciónalo con <code>mvn dependency:tree</code>.</li><li><b>dependencyManagement / BOM</b>: un lugar que fija versiones compatibles. Spring Boot lo hace con <code>spring-boot-starter-parent</code>, por eso verás dependencias de Spring sin versión.</li></ul>
<p>Tras editar el pom en IntelliJ pulsa el icono <b>Load Maven Changes</b> (aparece como una "m" azul) para sincronizar.</p>`],
["Ciclo de vida y comandos",`<p>Maven ejecuta <b>fases</b> en orden; al pedir una, corren todas las anteriores:</p>
<pre><code>validate → compile → test → package → verify → install → deploy

mvn clean                 borra target/
mvn compile               compila src/main
mvn test                  compila y ejecuta las pruebas
mvn package               genera el .jar en target/
mvn clean install         limpia, prueba, empaqueta e instala en ~/.m2
mvn package -DskipTests   empaqueta sin ejecutar pruebas (úsalo con cuidado)
mvn dependency:tree       árbol de dependencias
mvn -U                    fuerza actualizar dependencias</code></pre>
<p>Para ejecutar un jar: <code>java -jar target/app.jar</code>. Un proyecto simple necesita configurar la clase principal en el manifiesto; el plugin de Spring Boot (<code>spring-boot-maven-plugin</code>) lo hace por ti y genera un "fat jar" ejecutable. Con el wrapper: <code>./mvnw clean package</code> (Windows: <code>mvnw.cmd</code>).</p>`],
["Equivalente en Gradle",`<pre><code>plugins { id 'java' }
group = 'com.miempresa'
version = '1.0-SNAPSHOT'
repositories { mavenCentral() }
dependencies {
    testImplementation 'org.junit.jupiter:junit-jupiter:5.11.0'
}
test { useJUnitPlatform() }

./gradlew build     ≈ mvn package
./gradlew test      ≈ mvn test
./gradlew clean     ≈ mvn clean</code></pre>
<p>Cambian la sintaxis y la velocidad, no los conceptos: repositorios, dependencias con scopes (<code>implementation</code>, <code>testImplementation</code>) y tareas.</p>`],
["Práctica",`<ol><li>Crea un proyecto Maven en IntelliJ y revisa su estructura de carpetas y su pom.</li><li>Agrega la dependencia de JUnit y escribe una prueba; ejecútala con <code>mvn test</code> en terminal.</li><li>Agrega <code>org.apache.commons:commons-lang3</code> (busca la versión en Maven Central) y usa <code>StringUtils.capitalize</code>.</li><li>Ejecuta <code>mvn dependency:tree</code> y localiza una dependencia transitiva.</li><li>Genera el jar con <code>mvn clean package</code> y encuéntralo en <code>target/</code>.</li><li>Genera un proyecto con Spring Initializr (start.spring.io) y mira qué trae su pom y su <code>mvnw</code>.</li></ol>`],
["Errores comunes",`<ul><li><b>Cannot resolve symbol</b> tras agregar una dependencia: falta recargar Maven.</li><li><b>release version X not supported</b>: <code>maven.compiler.release</code> no coincide con tu JDK.</li><li><b>'mvn' no se reconoce</b>: no está en el PATH (usa el wrapper o IntelliJ).</li><li><b>Could not transfer artifact</b>: sin internet, proxy o nombre de dependencia mal escrito.</li><li><b>No tests to run</b>: las clases de prueba no terminan en Test o están fuera de <code>src/test/java</code>.</li><li><b>Subir target/ a Git</b>: agrégalo al .gitignore.</li></ul>`],
["Cómo sé que lo domino",`<ul><li>Explico qué son las coordenadas GAV y los scopes.</li><li>Agrego una dependencia desde Maven Central y la uso.</li><li>Ejecuto clean, test y package por terminal.</li><li>Distingo dependencias directas y transitivas.</li></ul>`]
]},
"4-1":{e:"5. Herramientas de desarrollo",t:"Git: commits, ramas y pull requests",s:[
["Modelo mental",`<p>Un <b>commit</b> es una foto completa del proyecto con autor, fecha y mensaje, enlazada al commit anterior. Una <b>rama</b> es simplemente un puntero móvil a un commit (por eso crear ramas es barato). <b>HEAD</b> señala dónde estás parado. Trabajar con ramas permite desarrollar una función sin tocar <code>main</code> hasta que esté lista.</p>
<p><b>Buenos commits</b>: pequeños, con un solo propósito, y que dejen el proyecto funcionando. Mensaje: título breve en imperativo ("Agrega validación de edad"). Muchos equipos usan <b>Conventional Commits</b>: <code>feat:</code>, <code>fix:</code>, <code>docs:</code>, <code>refactor:</code>, <code>test:</code>, <code>chore:</code> (ej. <code>fix: corrige el cálculo del promedio</code>).</p>`],
["Comandos de todos los días",`<pre><code>git status                  estado actual
git diff                    cambios sin preparar
git add -p                  elegir qué trozos incluir en el commit
git diff --staged           lo que irá en el commit
git commit -m "feat: ..."   guardar
git log --oneline --graph --all     historial con ramas
git show abc1234            detalle de un commit

git restore archivo         descartar cambios locales de un archivo
git restore --staged archivo   sacar del staging
git stash / git stash pop   guardar cambios a medias y recuperarlos
git commit --amend          corregir el último commit (solo si NO lo has subido)
git revert abc1234          crea un commit que deshace otro (seguro en historial publicado)
git reset --hard abc1234    mueve la rama y descarta cambios: DESTRUCTIVO</code></pre>`],
["Ramas, merge y rebase",`<pre><code>git switch -c feature/login        crea la rama y entra
... trabajas y haces commits ...
git switch main
git merge feature/login            integra la rama en main
git branch -d feature/login        borra la rama ya integrada
git branch                         lista de ramas</code></pre>
<p>El merge puede ser <b>fast-forward</b> (main solo avanza el puntero) o crear un <b>commit de fusión</b> si ambas ramas tuvieron cambios. <b>Rebase</b> (<code>git rebase main</code> estando en tu rama) reaplica tus commits encima de main y deja un historial lineal. Regla de oro: <b>nunca reescribas (rebase/amend/reset) commits que otros ya descargaron</b>.</p>
<p><b>Conflictos</b>: ocurren cuando dos ramas cambian las mismas líneas. Git marca el archivo:</p>
<pre><code>&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD
tu versión (la rama donde estás)
=======
la versión de la otra rama
&gt;&gt;&gt;&gt;&gt;&gt;&gt; feature/login</code></pre>
<p>Resuelve: decide el texto final, borra los marcadores, <code>git add archivo</code> y <code>git commit</code> (en rebase: <code>git rebase --continue</code>). IntelliJ ofrece un editor visual de tres paneles (<i>Git → Resolve Conflicts</i>). Para abortar: <code>git merge --abort</code>.</p>`],
["Remotos",`<pre><code>git clone https://github.com/usuario/repo.git
git remote -v
git fetch                   descarga novedades sin tocar tus archivos
git pull --rebase           fetch + reaplica tus commits encima (historial limpio)
git push -u origin feature/login    primera subida de una rama
git push                    siguientes subidas</code></pre>`],
["Pull Requests (PR)",`<p>Un <b>Pull Request</b> es una solicitud en GitHub para integrar tu rama en otra (normalmente main), con revisión del equipo antes. Flujo estándar (<b>GitHub Flow</b>):</p>
<ol><li><code>git switch main &amp;&amp; git pull</code> para partir de lo último.</li><li><code>git switch -c feature/descripcion-corta</code>.</li><li>Haces commits pequeños y los subes con push.</li><li>En GitHub: <b>Compare &amp; pull request</b>. Escribe qué cambia y por qué, y cómo probarlo.</li><li>Los revisores comentan; tú corriges con nuevos commits en la misma rama.</li><li>Pasan las comprobaciones automáticas (CI, pruebas).</li><li><b>Merge</b>: "Merge commit", "Squash and merge" (un solo commit) o "Rebase and merge". Luego borra la rama.</li></ol>
<p>PR buenos: pequeños (menos de 400 líneas si es posible), un solo objetivo, con pruebas y descripción clara. Al revisar, comenta sobre el código, no sobre la persona. En proyectos ajenos de código abierto: <b>Fork</b> → clonas tu fork → rama → PR hacia el repositorio original. Configura la <b>protección de la rama main</b> (exigir PR y revisión) en Settings → Branches.</p>`],
["Seguridad y rescates",`<ul><li><b>Nunca subas secretos</b> (contraseñas, tokens, claves). Si ocurre, <b>rótalos</b>: borrar el commit no basta, ya quedó en el historial.</li><li>Commit en main por error (sin push): <code>git switch -c rama-nueva</code>, luego en main <code>git reset --hard origin/main</code>.</li><li><b>git reflog</b> muestra todo adonde ha apuntado HEAD: casi siempre permite recuperar commits "perdidos".</li><li><b>detached HEAD</b>: estás en un commit sin rama; <code>git switch -c nombre</code> para conservarlo.</li><li><b>push rechazado</b>: haz <code>git pull --rebase</code> y vuelve a subir.</li></ul>`],
["Práctica",`<ol><li>En tu repo <code>java-aprendizaje</code> crea la rama <code>feature/ejercicios-bucles</code>, haz 3 commits con mensajes Conventional Commits, súbela y abre un PR hacia main desde GitHub; hazte el merge con Squash.</li><li><b>Provoca un conflicto</b>: en main y en una rama modifica la misma línea de README, intenta el merge y resuélvelo.</li><li>Usa <code>git stash</code> para guardar un cambio a medias, cambia de rama y recupéralo.</li><li>Deshace un commit con <code>git revert</code> y otro con <code>reset --soft</code> en una rama de prueba.</li><li>Rompe algo a propósito y recupéralo con <code>git reflog</code>.</li><li>Pide a un amigo que revise un PR tuyo (o revisa uno de un proyecto abierto).</li></ol>`],
["Cómo sé que lo domino",`<ul><li>Explico commit, rama y HEAD con mis palabras.</li><li>Creo una rama, la subo y la integro mediante PR.</li><li>Resuelvo un conflicto sin pánico.</li><li>Sé cuándo usar revert y cuándo reset, y por qué no reescribir historia compartida.</li></ul>`]
]},
"4-2":{e:"5. Herramientas de desarrollo",t:"Depurar con el debugger de IntelliJ",s:[
["Para qué sirve",`<p>Cuando un programa no hace lo que esperas, imprimir variables con <code>println</code> es lento y ensucia el código. El <b>debugger</b> te permite <b>pausar</b> la ejecución en una línea, ver el valor de todas las variables, avanzar paso a paso y entender exactamente qué pasa. Es la herramienta que más acelera tu aprendizaje.</p>
<p>Inicio: haz clic en el margen izquierdo junto al número de una línea (aparece un punto rojo: <b>breakpoint</b>) y ejecuta con el icono del bichito (<b>Debug</b>, Shift+F9) en lugar de Run. El programa se detiene <b>antes</b> de ejecutar esa línea.</p>`],
["Los controles",`<pre><code>F9            Resume: continúa hasta el siguiente breakpoint
F8            Step Over: ejecuta la línea y pasa a la siguiente (sin entrar en métodos)
F7            Step Into: entra al método que se llama en esa línea
Shift+F8      Step Out: termina el método actual y vuelve a quien lo llamó
Alt+F9        Run to Cursor: corre hasta donde está el cursor
Alt+F8        Evaluate Expression: calcula cualquier expresión con el estado actual
Ctrl+F8       Pone o quita un breakpoint en la línea
Ctrl+Shift+F8 Ventana con todos los breakpoints (en Mac: Cmd en lugar de Ctrl, Option en lugar de Alt)</code></pre>
<p>En portátiles Mac/Windows a veces las teclas F requieren la tecla Fn.</p>
<p>Ventana <b>Debug</b> (abajo): <b>Frames</b> (la pila de llamadas: qué método llamó a cuál; clic en uno para ver sus variables), <b>Variables</b> (valores actuales; despliega objetos) y <b>Watches</b> (expresiones que quieres vigilar, como <code>lista.size()</code>). También puedes pasar el ratón sobre una variable en el editor para ver su valor.</p>`],
["Breakpoints avanzados",`<p>Clic derecho sobre un breakpoint (o en la ventana de breakpoints) para configurarlo:</p>
<ul><li><b>Condición</b>: se detiene solo si se cumple, por ejemplo <code>i == 500</code> o <code>usuario.getId() == 7</code>. Imprescindible dentro de bucles grandes.</li><li><b>Logging</b> (sin suspender): imprime un mensaje o expresión en la consola cada vez que pasa, sin detener el programa ni modificar el código.</li><li><b>Hit count</b>: detenerse a partir de la vez número N.</li><li><b>Exception breakpoint</b> (<i>Java Exception Breakpoints</i> → <code>+</code>): se detiene exactamente donde se lanza, por ejemplo cualquier <code>NullPointerException</code>, aunque se atrape luego.</li><li><b>Field watchpoint</b>: se detiene cuando alguien lee o modifica un atributo.</li></ul>
<p>Con <b>Evaluate Expression</b> puedes llamar métodos y probar hipótesis sin editar el código. Cuidado: si el método tiene efectos (borrar, guardar), se ejecutará de verdad. También se puede cambiar el valor de una variable en vivo (<i>Set Value</i>, clic derecho en ella).</p>`],
["Método de depuración",`<ol><li><b>Reproduce</b> el fallo de forma consistente y con el caso más pequeño posible.</li><li><b>Formula una hipótesis</b>: "creo que x llega nulo en este punto".</li><li>Pon el breakpoint <b>antes</b> del fallo (lee el stack trace para ubicar la línea).</li><li>Compara lo que ves con lo que <b>esperabas</b>. El error está donde la realidad se separa de tu expectativa.</li><li>Avanza con F8/F7 hasta encontrar la primera línea donde el estado es incorrecto.</li><li>Corrige, vuelve a ejecutar y confirma. Si te atascas, explícaselo en voz alta a alguien (o a un patito de goma): suele aparecer la respuesta.</li></ol>
<p>Depurar pruebas: clic derecho sobre un test → <i>Debug</i>. Depurar Spring Boot: ejecuta la clase principal con Debug. Es igual.</p>`],
["Práctica",`<p>Este método tiene <b>dos</b> errores. Encuéntralos usando el debugger, sin leer el código a ojo:</p>
<pre><code>static int sumaPares(int[] a) {
    int suma = 0;
    for (int i = 1; i &lt;= a.length; i++) {
        if (a[i] % 2 == 0) {
            suma += a[i];
        }
    }
    return suma;
}
// main: sumaPares(new int[]{2, 3, 4, 6})  → debería dar 12</code></pre>
<ol><li>Pon un breakpoint en el <code>for</code>, ejecuta con Debug y avanza con F8 observando <code>i</code> y <code>suma</code>.</li><li>Añade un Watch <code>a.length</code>.</li><li>Crea una prueba JUnit que falle y depúrala.</li><li>Practica un breakpoint con condición (<code>i == 3</code>) en un bucle de 1000 vueltas.</li><li>Crea un Exception Breakpoint para <code>ArrayIndexOutOfBoundsException</code> y ve cómo te lleva a la línea exacta.</li><li>Usa Step Into para entrar a un método tuyo, y Step Out para volver.</li></ol>
<p>Pista: el primer error es que el recorrido empieza en 1 (se omite el índice 0); el segundo, que <code>&lt;=</code> sale del arreglo.</p>`],
["Errores comunes",`<ul><li><b>El breakpoint se ve gris o con una cruz</b>: la línea no es ejecutable (comentario, declaración) o ejecutaste con Run.</li><li><b>No se detiene</b>: el código no se recompiló, o el programa no pasa por esa línea.</li><li><b>Breakpoints con condiciones pesadas ralentizan</b> muchísimo la ejecución.</li><li><b>Evaluar expresiones con efectos secundarios</b>.</li><li><b>Dejar el programa pausado</b> y olvidar pulsar Resume o Stop.</li></ul>`],
["Cómo sé que lo domino",`<ul><li>Uso F8, F7, Shift+F8 y F9 sin pensar.</li><li>Leo la pila de llamadas (Frames) y las variables.</li><li>Uso breakpoints condicionales y de excepción.</li><li>Sigo el método hipótesis-observación en vez de adivinar.</li></ul>`]
]},
"4-3":{e:"5. Herramientas de desarrollo",t:"Logging (SLF4J/Logback)",s:[
["Por qué no usar System.out.println",`<p>El <b>logging</b> registra lo que hace tu aplicación para diagnosticar problemas, sobre todo en producción donde no puedes usar el debugger. Frente a <code>println</code> ofrece:</p>
<ul><li><b>Niveles</b> de severidad que puedes activar o desactivar sin recompilar.</li><li><b>Formato</b> con fecha, hora, hilo y clase.</li><li><b>Destinos</b> múltiples: consola, archivos con rotación, servidores de logs.</li><li>Mejor rendimiento y configuración centralizada.</li></ul>
<p><b>SLF4J</b> es una fachada (la API que usas en tu código) y <b>Logback</b> es la implementación que hace el trabajo. Spring Boot los incluye por defecto con <code>spring-boot-starter</code>. En un proyecto Maven simple agrega <code>ch.qos.logback:logback-classic</code> (trae SLF4J como dependencia transitiva).</p>`],
["Niveles",`<pre><code>TRACE   detalle extremo (casi nunca activo)
DEBUG   información para desarrolladores: valores, decisiones, entrada/salida de métodos
INFO    hitos normales: "Aplicación iniciada", "Pedido 123 creado"
WARN    algo raro pero recuperable: reintentos, datos incompletos, uso de algo obsoleto
ERROR   algo falló y la operación no se completó</code></pre>
<p>Si configuras el nivel INFO, se muestran INFO, WARN y ERROR (los niveles más graves incluyen a los de arriba). En desarrollo suele usarse DEBUG; en producción, INFO.</p>`],
["Uso en el código",`<pre><code>import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class PedidoServicio {
    private static final Logger log = LoggerFactory.getLogger(PedidoServicio.class);

    public void crear(long usuarioId, double total) {
        log.info("Creando pedido para el usuario {} por {}", usuarioId, total);
        try {
            procesarPago(total);
        } catch (Exception e) {
            log.error("Falló el pago del usuario {}", usuarioId, e);   // la excepción va al final
            throw e;
        }
        log.debug("Pedido creado correctamente");
    }
}</code></pre>
<ul><li>Usa <b>placeholders <code>{}</code></b> en lugar de concatenar con +: el texto solo se construye si el nivel está activo.</li><li>Pasa la excepción como <b>último argumento</b> para registrar el stack trace completo.</li><li>Un logger por clase, <code>private static final</code>. (Más adelante, Lombok con <code>@Slf4j</code> lo genera por ti.)</li></ul>`],
["Configurar Logback (logback.xml)",`<p>Crea <code>src/main/resources/logback.xml</code>:</p>
<pre><code>&lt;configuration&gt;
  &lt;appender name="CONSOLA" class="ch.qos.logback.core.ConsoleAppender"&gt;
    &lt;encoder&gt;
      &lt;pattern&gt;%d{HH:mm:ss.SSS} [%thread] %-5level %logger{36} - %msg%n&lt;/pattern&gt;
    &lt;/encoder&gt;
  &lt;/appender&gt;

  &lt;appender name="ARCHIVO" class="ch.qos.logback.core.rolling.RollingFileAppender"&gt;
    &lt;file&gt;logs/app.log&lt;/file&gt;
    &lt;rollingPolicy class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy"&gt;
      &lt;fileNamePattern&gt;logs/app.%d{yyyy-MM-dd}.log&lt;/fileNamePattern&gt;
      &lt;maxHistory&gt;14&lt;/maxHistory&gt;
    &lt;/rollingPolicy&gt;
    &lt;encoder&gt;
      &lt;pattern&gt;%d{yyyy-MM-dd HH:mm:ss.SSS} %-5level %logger{36} - %msg%n&lt;/pattern&gt;
    &lt;/encoder&gt;
  &lt;/appender&gt;

  &lt;logger name="com.miempresa" level="DEBUG"/&gt;   &lt;!-- tu paquete en DEBUG --&gt;

  &lt;root level="INFO"&gt;
    &lt;appender-ref ref="CONSOLA"/&gt;
    &lt;appender-ref ref="ARCHIVO"/&gt;
  &lt;/root&gt;
&lt;/configuration&gt;</code></pre>
<p>Un <b>appender</b> es un destino, el <b>pattern</b> define el formato y el <b>root</b> el nivel global. Los <code>&lt;logger&gt;</code> ajustan paquetes concretos. Agrega <code>logs/</code> a tu .gitignore.</p>
<p><b>En Spring Boot</b> no necesitas el XML para lo básico; basta con <code>application.yml</code>:</p>
<pre><code>logging:
  level:
    root: INFO
    com.miempresa: DEBUG
    org.hibernate.SQL: DEBUG
  file:
    name: logs/app.log</code></pre>`],
["Buenas prácticas",`<ul><li><b>Nunca registres datos sensibles</b>: contraseñas, tokens, números de tarjeta, datos personales completos.</li><li>Incluye <b>contexto</b> útil: IDs de usuario, pedido o petición. "Error" a secas no sirve.</li><li><b>Registra una sola vez</b>: o logueas y manejas el error, o lo relanzas; no lo registres en cada capa.</li><li>Elige el nivel con criterio: no todo es ERROR.</li><li>Evita loguear dentro de bucles muy calientes.</li><li>En producción es común usar <b>logs estructurados en JSON</b> y un <b>MDC</b> (contexto por hilo) para añadir un ID de correlación a cada línea y seguir una petición completa.</li></ul>`],
["Práctica",`<ol><li>Crea un proyecto Maven con <code>logback-classic</code> y una clase que escriba un mensaje en cada nivel; observa cuáles aparecen con root en INFO y con root en DEBUG.</li><li>Reemplaza todos los println de tu CuentaBancaria por logs (INFO al depositar, WARN en un retiro rechazado, ERROR si ocurre una excepción).</li><li>Configura la salida a un archivo <code>logs/app.log</code> con rotación diaria.</li><li>Sube a DEBUG solo tu paquete y deja el resto en INFO.</li><li>Provoca una excepción y regístrala con <code>log.error("...", e)</code>; compara con registrar solo <code>e.getMessage()</code>.</li><li>Revisa tu propio código y quita cualquier dato sensible de los mensajes.</li></ol>`],
["Errores comunes",`<ul><li><b>SLF4J: No SLF4J providers were found</b> (y no sale nada): falta una implementación como logback-classic.</li><li><b>Mensajes DEBUG que no aparecen</b>: el nivel root o del paquete es INFO.</li><li><b>Logs duplicados</b>: el logger agrega appenders en varios sitios (revisa <code>additivity</code>) o hay varias configuraciones.</li><li><b>Stack trace perdido</b>: usaste <code>log.error("fallo " + e)</code> en lugar de pasar la excepción como último argumento.</li><li><b>Archivos de log gigantes</b>: sin rotación ni límite de historial.</li></ul>`],
["Cómo sé que lo domino",`<ul><li>Explico la diferencia entre SLF4J y Logback.</li><li>Elijo el nivel correcto para cada mensaje.</li><li>Uso placeholders y registro excepciones bien.</li><li>Configuro consola y archivo, y cambio niveles por paquete.</li></ul>`]
]},
"5-0":{e:"6. Bases de datos y SQL",t:"Modelo relacional, claves primarias y foráneas",s:[
["Por qué una base de datos",`<p>Las variables y listas de tu programa desaparecen al cerrarlo. Una <b>base de datos</b> guarda la información de forma permanente, permite que muchos usuarios la usen a la vez, la consulta rápido y protege su coherencia. Casi toda aplicación Spring Boot trabaja con una.</p>
<p>En el <b>modelo relacional</b> los datos viven en <b>tablas</b> (también llamadas relaciones): cada <b>columna</b> es un atributo con un tipo de dato, y cada <b>fila</b> es un registro. Los sistemas que lo implementan (SGBD) son PostgreSQL, MySQL, MariaDB, Oracle, SQL Server. Se consultan con el lenguaje <b>SQL</b>, casi igual en todos.</p>`],
["Claves primarias y foráneas",`<ul><li><b>Clave primaria (PK)</b>: columna (o conjunto) que identifica de forma <b>única</b> cada fila. No puede ser nula ni repetirse. Una tabla tiene una sola PK. Lo habitual es una clave <i>sustituta</i> numérica generada (<code>id</code>) en vez de datos del mundo real (el email o el DNI pueden cambiar).</li><li><b>Clave foránea (FK)</b>: columna que apunta a la PK de otra tabla y establece la relación. La base de datos garantiza la <b>integridad referencial</b>: no puedes crear un pedido de un cliente que no existe, ni borrar un cliente con pedidos (según la regla elegida).</li></ul>
<p>Reglas al borrar (<code>ON DELETE</code>): <code>RESTRICT</code> (impide), <code>CASCADE</code> (borra también los hijos), <code>SET NULL</code> (deja la FK en null). Usa CASCADE solo cuando los hijos no tienen sentido sin el padre.</p>`],
["Tipos de relaciones",`<ul><li><b>Uno a muchos (1-N)</b>: un cliente tiene muchos pedidos. La FK va en el lado "muchos" (<code>pedidos.cliente_id</code>). Es la más común.</li><li><b>Muchos a muchos (N-N)</b>: un estudiante cursa muchos cursos y un curso tiene muchos estudiantes. Requiere una <b>tabla intermedia</b> con dos FK.</li><li><b>Uno a uno (1-1)</b>: usuario y perfil. FK con restricción UNIQUE.</li></ul>
<pre><code>CREATE TABLE clientes (
    id      BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    nombre  VARCHAR(100) NOT NULL,
    email   VARCHAR(150) NOT NULL UNIQUE,
    ciudad  VARCHAR(80),
    creado  TIMESTAMP NOT NULL DEFAULT now()
);

CREATE TABLE pedidos (
    id          BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    cliente_id  BIGINT NOT NULL REFERENCES clientes(id) ON DELETE RESTRICT,
    fecha       DATE NOT NULL DEFAULT CURRENT_DATE,
    total       NUMERIC(10,2) NOT NULL CHECK (total &gt;= 0)
);

-- N-N: tabla intermedia con clave primaria compuesta
CREATE TABLE inscripciones (
    estudiante_id BIGINT NOT NULL REFERENCES estudiantes(id),
    curso_id      BIGINT NOT NULL REFERENCES cursos(id),
    fecha         DATE NOT NULL DEFAULT CURRENT_DATE,
    PRIMARY KEY (estudiante_id, curso_id)
);</code></pre>`],
["Restricciones y tipos de datos",`<ul><li><b>Restricciones</b>: <code>NOT NULL</code>, <code>UNIQUE</code>, <code>CHECK (condición)</code>, <code>DEFAULT valor</code>, además de PK y FK. Son tu última defensa: protegen los datos aunque el código Java falle.</li><li><b>Tipos habituales (PostgreSQL → Java)</b>: <code>INTEGER</code> → int; <code>BIGINT</code> → long/Long; <code>NUMERIC(10,2)</code> → BigDecimal (úsalo para dinero, nunca float/double); <code>VARCHAR(n)</code>/<code>TEXT</code> → String; <code>BOOLEAN</code> → boolean; <code>DATE</code> → LocalDate; <code>TIMESTAMP</code> → LocalDateTime; <code>UUID</code> → UUID.</li></ul>`],
["Diseñar con un diagrama entidad-relación",`<ol><li>Identifica las <b>entidades</b> (cosas de las que guardas datos): Cliente, Pedido, Producto.</li><li>Define los <b>atributos</b> de cada una y su PK.</li><li>Define las <b>relaciones</b> y su cardinalidad (1-N, N-N).</li><li>Resuelve cada N-N con una tabla intermedia. Un pedido tiene muchos productos y un producto está en muchos pedidos → tabla <code>detalle_pedido(pedido_id, producto_id, cantidad, precio_unitario)</code>.</li></ol>
<p>Dibújalo en dbdiagram.io, draw.io o en el diagrama ER de DBeaver. Es más barato corregir un diagrama que una base de datos con datos reales.</p>`],
["Práctica",`<ol><li>Diseña el modelo de una <b>biblioteca</b>: libros, autores (un libro puede tener varios autores), socios y préstamos. Dibuja el diagrama.</li><li>Escribe el <code>CREATE TABLE</code> de cada tabla con PK, FK, NOT NULL y al menos un CHECK y un UNIQUE.</li><li>Decide qué <code>ON DELETE</code> usarías en cada FK y justifícalo.</li><li>Diseña el modelo de una tienda online (clientes, productos, categorías, pedidos, detalle) y compáralo con el de un compañero.</li><li>Elige el tipo de dato Java y SQL para: precio, fecha de nacimiento, estado activo, fecha y hora de creación.</li></ol>`],
["Errores comunes",`<ul><li><b>Guardar listas en una columna</b> ("java,sql,git"): rompe la consulta y el diseño; usa otra tabla.</li><li><b>Dinero en FLOAT/DOUBLE</b>: errores de redondeo; usa NUMERIC.</li><li><b>Usar el email como PK</b> o datos que pueden cambiar.</li><li><b>No declarar las FK</b> "porque el código ya lo controla".</li><li><b>Columnas sin NOT NULL</b> que en la práctica son obligatorias.</li></ul>`],
["Cómo sé que lo domino",`<ul><li>Explico qué hace una PK y una FK con un ejemplo.</li><li>Identifico y modelo relaciones 1-N, N-N y 1-1.</li><li>Escribo un CREATE TABLE con restricciones de memoria.</li><li>Elijo tipos de datos correctos y su equivalente en Java.</li></ul>`]
]},
"5-1":{e:"6. Bases de datos y SQL",t:"SELECT, INSERT, UPDATE, DELETE y JOIN",s:[
["Panorama de SQL",`<p>SQL se divide en: <b>DDL</b> (define estructura: <code>CREATE</code>, <code>ALTER</code>, <code>DROP</code>), <b>DML</b> (modifica datos: <code>INSERT</code>, <code>UPDATE</code>, <code>DELETE</code>) y <b>DQL</b> (consulta: <code>SELECT</code>). Las palabras clave no distinguen mayúsculas, pero por convención se escriben en MAYÚSCULAS. Cada sentencia termina en <code>;</code>. Usaremos las tablas <code>clientes</code> y <code>pedidos</code> de la lección anterior.</p>`],
["INSERT, UPDATE y DELETE",`<pre><code>INSERT INTO clientes (nombre, email, ciudad)
VALUES ('Ana Ruiz', 'ana@correo.com', 'Lima');

INSERT INTO clientes (nombre, email, ciudad) VALUES
    ('Luis Paz', 'luis@correo.com', 'Quito'),
    ('Eva Gil',  'eva@correo.com',  'Lima');

UPDATE clientes SET ciudad = 'Cusco' WHERE email = 'ana@correo.com';

DELETE FROM clientes WHERE id = 3;</code></pre>
<p><b>Regla vital:</b> <code>UPDATE</code> y <code>DELETE</code> <b>sin WHERE afectan a todas las filas</b>. Antes de ejecutarlos escribe el mismo WHERE en un SELECT y verifica qué filas tocarías. Para protegerte usa transacciones:</p>
<pre><code>BEGIN;
UPDATE pedidos SET total = 0;      -- ¡ups!
ROLLBACK;                          -- deshace todo (COMMIT lo confirmaría)</code></pre>`],
["SELECT: consultar datos",`<pre><code>SELECT * FROM clientes;                               -- todo (evítalo en código real)
SELECT nombre, ciudad FROM clientes;
SELECT nombre AS cliente FROM clientes;               -- alias

SELECT nombre FROM clientes
WHERE ciudad = 'Lima' AND creado &gt;= '2026-01-01';

WHERE total BETWEEN 100 AND 500
WHERE ciudad IN ('Lima', 'Quito')
WHERE nombre LIKE 'A%'          -- empieza con A  (% = cualquier cosa, _ = un carácter)
WHERE ciudad IS NULL            -- para NULL: nunca "= NULL"
WHERE NOT (ciudad = 'Lima')     -- también: &lt;&gt; distinto de

SELECT DISTINCT ciudad FROM clientes;
SELECT * FROM pedidos ORDER BY total DESC, fecha ASC;
SELECT * FROM pedidos ORDER BY fecha DESC LIMIT 10 OFFSET 20;   -- paginación</code></pre>`],
["Funciones de agregación y GROUP BY",`<pre><code>SELECT COUNT(*) FROM pedidos;                 -- cuántas filas
SELECT SUM(total), AVG(total), MIN(total), MAX(total) FROM pedidos;

SELECT cliente_id, COUNT(*) AS num_pedidos, SUM(total) AS gastado
FROM pedidos
GROUP BY cliente_id
HAVING SUM(total) &gt; 1000        -- filtra GRUPOS (WHERE filtra filas antes de agrupar)
ORDER BY gastado DESC;</code></pre>
<p>Toda columna del SELECT que no sea una función de agregación debe aparecer en el GROUP BY. Orden lógico de ejecución: <b>FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT</b>. Por eso no puedes usar un alias del SELECT dentro del WHERE.</p>
<p><b>NULL</b> significa "desconocido": <code>NULL = NULL</code> no es verdadero. <code>COUNT(columna)</code> ignora los nulos; <code>COUNT(*)</code> no. <code>COALESCE(ciudad, 'N/D')</code> sustituye nulos.</p>`],
["JOIN: combinar tablas",`<p>Un JOIN une filas de dos tablas según una condición (normalmente PK = FK).</p>
<pre><code>-- INNER JOIN: solo las filas con coincidencia en ambas
SELECT c.nombre, p.id AS pedido, p.total
FROM clientes c
INNER JOIN pedidos p ON p.cliente_id = c.id;

-- LEFT JOIN: todos los clientes, tengan o no pedidos (sin pedido → columnas NULL)
SELECT c.nombre, COUNT(p.id) AS num_pedidos, COALESCE(SUM(p.total), 0) AS gastado
FROM clientes c
LEFT JOIN pedidos p ON p.cliente_id = c.id
GROUP BY c.id, c.nombre;

-- Clientes SIN pedidos
SELECT c.nombre
FROM clientes c
LEFT JOIN pedidos p ON p.cliente_id = c.id
WHERE p.id IS NULL;</code></pre>
<ul><li><b>INNER</b>: intersección. <b>LEFT</b>: todo lo de la izquierda. <b>RIGHT</b>: todo lo de la derecha. <b>FULL</b>: todo de ambos lados. <b>CROSS</b>: todas las combinaciones (producto cartesiano).</li><li>Se pueden encadenar varios JOIN (pedidos → detalle → productos).</li></ul>
<p><b>Subconsulta</b>: <code>SELECT nombre FROM clientes WHERE id IN (SELECT cliente_id FROM pedidos WHERE total &gt; 500);</code> <b>CASE</b>: <code>CASE WHEN total &gt; 500 THEN 'Alto' ELSE 'Normal' END</code>. <b>UNION</b> junta resultados de dos consultas.</p>`],
["Práctica",`<ol><li>Inserta 5 clientes (dos de Lima, uno sin ciudad) y 8 pedidos de distintos clientes.</li><li>Clientes de Lima ordenados por nombre. Pedidos mayores a 100 del último mes.</li><li>Total de ventas, promedio por pedido y el pedido más caro.</li><li>Cantidad de pedidos y monto gastado por cliente (con nombre), ordenado del mayor al menor.</li><li>Clientes que nunca han comprado (LEFT JOIN + IS NULL).</li><li>Clientes que gastaron más de 1000 en total (HAVING).</li><li>Cambia la ciudad de un cliente con UPDATE (primero comprueba con SELECT) y borra un pedido dentro de una transacción con ROLLBACK.</li><li>Los 3 clientes con más pedidos, usando LIMIT.</li></ol>`],
["Errores comunes",`<ul><li><b>UPDATE/DELETE sin WHERE</b>.</li><li><b>JOIN sin ON</b>: generas un producto cartesiano y miles de filas falsas.</li><li><b>column must appear in the GROUP BY clause</b>: te falta agrupar o agregar.</li><li><b>Comparar con = NULL</b> (usa IS NULL).</li><li><b>Contar duplicados tras un JOIN</b>: la suma se multiplica; revisa la cardinalidad.</li><li><b>Usar WHERE para filtrar agregados</b> (corresponde HAVING).</li></ul>`],
["Cómo sé que lo domino",`<ul><li>Escribo INSERT, UPDATE y DELETE con cuidado de WHERE.</li><li>Combino WHERE, GROUP BY, HAVING y ORDER BY correctamente.</li><li>Elijo entre INNER y LEFT JOIN y explico la diferencia.</li><li>Entiendo el comportamiento de NULL.</li></ul>`]
]},
"5-2":{e:"6. Bases de datos y SQL",t:"Instalar PostgreSQL (o MySQL) y un cliente (DBeaver)",s:[
["Qué vas a instalar",`<p><b>PostgreSQL</b> es una base de datos relacional libre, muy robusta y de las más usadas con Spring Boot. Un <b>cliente</b> es la herramienta gráfica para ejecutar SQL y explorar tablas: usaremos <b>DBeaver Community</b> (gratuito) y también la consola <code>psql</code>. MySQL es una alternativa válida; los conceptos y el 95% del SQL son iguales.</p>
<p>Elige <b>una</b> forma de instalar el servidor:</p>`],
["Opción A: Docker (recomendada)",`<p>Instala Docker Desktop (docker.com). Un solo comando crea un servidor limpio y desechable:</p>
<pre><code>docker run --name pg-aprendizaje \\
  -e POSTGRES_PASSWORD=secreto \\
  -e POSTGRES_DB=tienda \\
  -p 5432:5432 \\
  -v pgdata:/var/lib/postgresql/data \\
  -d postgres:16

docker ps                   comprobar que corre
docker stop pg-aprendizaje  detener
docker start pg-aprendizaje volver a iniciar</code></pre>
<p>El volumen <code>-v pgdata</code> conserva tus datos si borras el contenedor; sin él se pierden. (En una sola línea en Windows PowerShell, quita las barras invertidas finales.)</p>`],
["Opción B: instalación directa",`<ul><li><b>Windows / macOS</b>: instalador oficial en postgresql.org/download. Durante el asistente define la contraseña del usuario <code>postgres</code> (anótala), deja el puerto <b>5432</b> y marca pgAdmin/herramientas de línea de comandos.</li><li><b>macOS con Homebrew</b>: <code>brew install postgresql@16</code> y <code>brew services start postgresql@16</code>.</li><li><b>Ubuntu/Debian</b>: <code>sudo apt install postgresql</code>; luego <code>sudo -u postgres psql</code> para entrar y <code>ALTER USER postgres PASSWORD 'secreto';</code>.</li></ul>
<p>Si prefieres MySQL: instalador oficial o <code>docker run --name mysql-aprendizaje -e MYSQL_ROOT_PASSWORD=secreto -e MYSQL_DATABASE=tienda -p 3306:3306 -d mysql:8</code>. Diferencias menores: <code>AUTO_INCREMENT</code> en lugar de IDENTITY, y acentos graves para nombres.</p>`],
["Primeros pasos con psql",`<pre><code>psql -h localhost -U postgres -d tienda      (te pide la contraseña)

\\l              lista las bases de datos
\\c tienda       cambia de base de datos
\\dt             lista tablas
\\d clientes     describe una tabla
\\q              salir</code></pre>
<p>Si usas Docker: <code>docker exec -it pg-aprendizaje psql -U postgres -d tienda</code>. Dentro de psql escribe SQL normal terminado en <code>;</code>.</p>
<p><b>Buena práctica:</b> no uses el superusuario <code>postgres</code> en tus aplicaciones. Crea un usuario propio:</p>
<pre><code>CREATE USER app_tienda WITH PASSWORD 'cambia_esto';
GRANT ALL PRIVILEGES ON DATABASE tienda TO app_tienda;
\\c tienda
GRANT ALL ON SCHEMA public TO app_tienda;</code></pre>`],
["Instalar y usar DBeaver",`<ol><li>Descarga <b>DBeaver Community</b> desde dbeaver.io e instálalo.</li><li><b>Database → New Database Connection → PostgreSQL</b>.</li><li>Host <code>localhost</code>, Port <code>5432</code>, Database <code>tienda</code>, usuario y contraseña. La primera vez ofrece <b>descargar el driver</b>: acepta.</li><li><b>Test Connection</b>: debe decir Connected. Luego Finish.</li><li>Clic derecho en la conexión → <b>SQL Editor → New SQL script</b>. <b>Ctrl+Enter</b> ejecuta la sentencia bajo el cursor; <b>Alt+X</b> ejecuta todo el script.</li><li>Explora <i>tienda → Schemas → public → Tables</i>. Clic derecho en un esquema → <b>View Diagram</b> muestra el diagrama ER automático.</li></ol>
<p>DBeaver autocompleta, exporta resultados a CSV y permite editar datos en una grilla. Guarda tus scripts <code>.sql</code> dentro de tu repositorio Git (nunca con contraseñas reales).</p>`],
["Práctica",`<ol><li>Levanta PostgreSQL (Docker o instalador) y verifica que acepta conexiones.</li><li>Conéctate con <code>psql</code> y con DBeaver; ejecuta <code>SELECT version();</code> en ambos.</li><li>Crea las tablas <code>clientes</code> y <code>pedidos</code> de las lecciones anteriores y carga datos de prueba.</li><li>Crea el usuario <code>app_tienda</code> y conéctate con él.</li><li>Genera el diagrama ER desde DBeaver.</li><li>Detén y vuelve a iniciar el servidor, y comprueba que los datos siguen ahí.</li></ol>`],
["Errores comunes",`<ul><li><b>Connection refused</b>: el servidor no está iniciado (docker ps / servicio) o el puerto es otro.</li><li><b>port 5432 already in use</b>: ya hay otro PostgreSQL corriendo; cambia el mapeo a <code>-p 5433:5432</code> y usa el puerto 5433.</li><li><b>password authentication failed</b>: usuario o contraseña incorrectos.</li><li><b>psql no se reconoce</b>: agrega la carpeta <code>bin</code> de PostgreSQL al PATH.</li><li><b>Datos desaparecidos en Docker</b>: faltó el volumen.</li><li><b>permission denied for schema public</b>: faltó el GRANT al usuario nuevo.</li></ul>`],
["Cómo sé que lo domino",`<ul><li>Tengo un servidor PostgreSQL funcionando y sé iniciarlo y detenerlo.</li><li>Me conecto desde psql y desde DBeaver.</li><li>Creo una base de datos y un usuario propio para mi aplicación.</li><li>Ejecuto scripts SQL y leo el diagrama ER.</li></ul>`]
]},
"5-3":{e:"6. Bases de datos y SQL",t:"Normalización e índices",s:[
["Para qué normalizar",`<p>La <b>normalización</b> organiza las tablas para eliminar la redundancia y evitar tres <b>anomalías</b>: de <i>inserción</i> (no puedes registrar un dato sin otro), de <i>actualización</i> (cambiar un dato exige tocar muchas filas y puedes dejar inconsistencias) y de <i>borrado</i> (al borrar una fila pierdes información no relacionada).</p>
<p>Ejemplo de tabla mal diseñada:</p>
<pre><code>pedido_plano
id | cliente_nombre | cliente_ciudad | productos            | total
1  | Ana Ruiz       | Lima           | teclado, mouse       | 80
2  | Ana Ruiz       | Lima           | monitor              | 250</code></pre>
<p>Si Ana cambia de ciudad, hay que modificar todas sus filas; y "productos" mezcla varios valores.</p>`],
["Las formas normales",`<ul><li><b>1FN</b>: cada celda tiene un <b>valor atómico</b> (sin listas) y no hay grupos de columnas repetidas (<code>producto1, producto2</code>). Solución: una fila por producto, en otra tabla.</li><li><b>2FN</b>: cumple 1FN y cada atributo no clave depende de <b>toda</b> la clave primaria (importa con claves compuestas). Si en <code>detalle(pedido_id, producto_id, nombre_producto, cantidad)</code> el nombre depende solo de producto_id, va en la tabla productos.</li><li><b>3FN</b>: cumple 2FN y <b>ningún atributo no clave depende de otro no clave</b> (sin dependencias transitivas). En <code>empleados(id, departamento_id, departamento_nombre)</code>, el nombre depende del departamento, no del empleado: sepáralo.</li></ul>
<p>Regla mnemotécnica: cada atributo depende "de la clave, de toda la clave y de nada más que la clave". Resultado del ejemplo:</p>
<pre><code>clientes(id, nombre, ciudad)
pedidos(id, cliente_id, fecha, total)
productos(id, nombre, precio)
detalle_pedido(pedido_id, producto_id, cantidad, precio_unitario)</code></pre>
<p>Con 3FN se resuelven casi todos los casos prácticos (existen BCNF, 4FN y 5FN, más especializadas). La <b>desnormalización</b> deliberada (guardar un dato repetido para acelerar reportes) es válida, pero se hace a conciencia y no antes de medir. Fíjate que <code>precio_unitario</code> en el detalle <b>no</b> es redundancia: guarda el precio histórico al momento de la compra.</p>`],
["Índices: qué son",`<p>Un <b>índice</b> es una estructura auxiliar (normalmente un <b>árbol B</b>) que permite encontrar filas sin leer toda la tabla, como el índice alfabético de un libro. Sin índice, la base hace un <i>Seq Scan</i>: recorre todas las filas. Con índice hace un <i>Index Scan</i>: salta directo.</p>
<pre><code>CREATE INDEX idx_pedidos_cliente ON pedidos (cliente_id);
CREATE UNIQUE INDEX uq_clientes_email ON clientes (email);
CREATE INDEX idx_pedidos_cliente_fecha ON pedidos (cliente_id, fecha);   -- compuesto
DROP INDEX idx_pedidos_cliente;</code></pre>
<ul><li>PK y UNIQUE crean su índice automáticamente.</li><li><b>PostgreSQL no crea índice automáticamente para las FK</b> (MySQL/InnoDB sí). Indexa tus claves foráneas: acelera los JOIN y los borrados.</li><li>En un índice <b>compuesto el orden importa</b>: <code>(cliente_id, fecha)</code> sirve para filtrar por cliente_id o por ambos, pero no por fecha sola.</li></ul>`],
["Costos, cuándo sí y cuándo no",`<p><b>Costo:</b> ocupan espacio y hacen más lentos los INSERT, UPDATE y DELETE (hay que actualizarlos). No es "mientras más, mejor".</p>
<ul><li><b>Sí indexar</b>: columnas usadas en WHERE, JOIN y ORDER BY frecuentes, con muchos valores distintos (alta selectividad), en tablas grandes.</li><li><b>No indexar</b>: tablas pequeñas, columnas con pocos valores distintos (un booleano), tablas con escrituras masivas y casi sin lecturas.</li><li><b>Trampas</b>: <code>WHERE LOWER(email) = ...</code> o <code>WHERE total + 1 &gt; 5</code> no usan un índice normal de la columna (hace falta un índice funcional); <code>LIKE '%texto'</code> (comodín al inicio) tampoco usa el árbol B; convertir tipos implícitamente puede anularlo.</li></ul>
<p><b>Verifica siempre con EXPLAIN:</b> <code>EXPLAIN ANALYZE SELECT ...</code> muestra el plan real y los tiempos. Busca <code>Seq Scan</code> vs <code>Index Scan</code> / <code>Index Only Scan</code>.</p>`],
["Práctica",`<ol><li>Normaliza hasta 3FN esta tabla: <code>ventas(id_venta, fecha, cliente, email_cliente, producto, categoria_producto, cantidad, precio)</code>. Dibuja las tablas resultantes con sus PK y FK.</li><li>Experimento de índices en PostgreSQL:</li></ol>
<pre><code>CREATE TABLE prueba AS
SELECT g AS id, 'user' || g AS nombre, (random() * 1000)::int AS valor
FROM generate_series(1, 200000) g;

EXPLAIN ANALYZE SELECT * FROM prueba WHERE valor = 500;     -- Seq Scan, anota el tiempo

CREATE INDEX idx_prueba_valor ON prueba (valor);
EXPLAIN ANALYZE SELECT * FROM prueba WHERE valor = 500;     -- ¿Index Scan? compara</code></pre>
<ol start="3"><li>Mide cuánto tarda un <code>INSERT</code> masivo con y sin el índice.</li><li>Prueba <code>WHERE LOWER(nombre) = 'user5'</code> y luego crea un índice funcional <code>CREATE INDEX ... ON prueba (LOWER(nombre))</code>.</li><li>Agrega índices a las FK de tu esquema tienda y justifica cada uno.</li></ol>`],
["Errores comunes",`<ul><li><b>Indexar todas las columnas</b>.</li><li><b>Olvidar indexar las FK</b> en PostgreSQL.</li><li><b>Aplicar funciones a la columna</b> en el WHERE sin índice funcional.</li><li><b>Normalizar en exceso</b> creando decenas de tablas triviales.</li><li><b>Adivinar el rendimiento</b> en vez de medir con EXPLAIN ANALYZE.</li></ul>`],
["Cómo sé que lo domino",`<ul><li>Aplico 1FN, 2FN y 3FN a una tabla desordenada.</li><li>Explico qué es un índice y su costo.</li><li>Creo índices simples, únicos y compuestos y sé cuándo sirve cada orden.</li><li>Leo un EXPLAIN ANALYZE y distingo Seq Scan de Index Scan.</li></ul>`]
]},
"5-4":{e:"6. Bases de datos y SQL",t:"JDBC básico",s:[
["Qué es JDBC",`<p><b>JDBC</b> (Java Database Connectivity) es la API estándar de Java para hablar con bases de datos relacionales (paquete <code>java.sql</code>). Tu código usa las interfaces <code>Connection</code>, <code>PreparedStatement</code> y <code>ResultSet</code>; un <b>driver</b> (un .jar de cada fabricante) traduce a su protocolo. Spring Data JPA, Hibernate y JdbcTemplate funcionan <b>sobre</b> JDBC; entenderlo te permite depurar lo que ocurre debajo.</p>
<p>Agrega el driver de PostgreSQL a tu <code>pom.xml</code> (usa la versión estable más reciente de 42.x):</p>
<pre><code>&lt;dependency&gt;
    &lt;groupId&gt;org.postgresql&lt;/groupId&gt;
    &lt;artifactId&gt;postgresql&lt;/artifactId&gt;
    &lt;version&gt;42.7.4&lt;/version&gt;
&lt;/dependency&gt;</code></pre>
<p>URL de conexión: <code>jdbc:postgresql://localhost:5432/tienda</code> (formato <code>jdbc:motor://host:puerto/base</code>).</p>`],
["Consultar con PreparedStatement",`<pre><code>import java.sql.*;
import java.util.*;

public class ClienteDao {
    private static final String URL  = "jdbc:postgresql://localhost:5432/tienda";
    private static final String USER = "app_tienda";
    private static final String PASS = System.getenv("DB_PASSWORD");   // nunca en el código

    public List&lt;Cliente&gt; listar() throws SQLException {
        String sql = "SELECT id, nombre, email FROM clientes ORDER BY nombre";
        List&lt;Cliente&gt; lista = new ArrayList&lt;&gt;();
        try (Connection con = DriverManager.getConnection(URL, USER, PASS);
             PreparedStatement ps = con.prepareStatement(sql);
             ResultSet rs = ps.executeQuery()) {
            while (rs.next()) {
                lista.add(new Cliente(rs.getLong("id"), rs.getString("nombre"), rs.getString("email")));
            }
        }
        return lista;
    }

    public Optional&lt;Cliente&gt; buscarPorEmail(String email) throws SQLException {
        String sql = "SELECT id, nombre, email FROM clientes WHERE email = ?";
        try (Connection con = DriverManager.getConnection(URL, USER, PASS);
             PreparedStatement ps = con.prepareStatement(sql)) {
            ps.setString(1, email);                    // los parámetros empiezan en 1
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    return Optional.of(new Cliente(rs.getLong("id"), rs.getString("nombre"), rs.getString("email")));
                }
            }
        }
        return Optional.empty();
    }
}

public record Cliente(long id, String nombre, String email) { }</code></pre>
<p><code>try-with-resources</code> cierra Connection, Statement y ResultSet automáticamente; olvidarlo provoca <b>fugas de conexiones</b> hasta que la base rechaza nuevas.</p>`],
["Seguridad: SQL injection",`<p>Nunca construyas SQL concatenando texto del usuario:</p>
<pre><code>// PELIGROSO
String sql = "SELECT * FROM clientes WHERE email = '" + email + "'";
// Si email = ' OR '1'='1   → devuelve TODOS los clientes
// Si email = '; DROP TABLE clientes; --   → destruye datos</code></pre>
<p>Usa siempre <b>PreparedStatement con parámetros <code>?</code></b>: el valor viaja separado de la sentencia y la base nunca lo interpreta como SQL. Métodos: <code>setString</code>, <code>setInt</code>, <code>setLong</code>, <code>setBigDecimal</code>, <code>setBoolean</code>, <code>setObject(i, localDate)</code>. Los parámetros solo reemplazan <b>valores</b>, no nombres de tablas o columnas.</p>`],
["INSERT, UPDATE, DELETE y claves generadas",`<pre><code>public long crear(String nombre, String email) throws SQLException {
    String sql = "INSERT INTO clientes (nombre, email) VALUES (?, ?)";
    try (Connection con = DriverManager.getConnection(URL, USER, PASS);
         PreparedStatement ps = con.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS)) {
        ps.setString(1, nombre);
        ps.setString(2, email);
        ps.executeUpdate();                          // devuelve las filas afectadas
        try (ResultSet keys = ps.getGeneratedKeys()) {
            keys.next();
            return keys.getLong(1);                  // el id que generó la base
        }
    }
}</code></pre>
<p><code>executeQuery()</code> para SELECT (devuelve ResultSet); <code>executeUpdate()</code> para INSERT/UPDATE/DELETE (devuelve un int). Al leer, <code>getInt</code> de una columna NULL devuelve 0: usa <code>rs.wasNull()</code> o <code>getObject</code> si puede haber nulos.</p>`],
["Transacciones",`<p>Una <b>transacción</b> agrupa varias operaciones: o se aplican todas o ninguna (ACID). Por defecto JDBC confirma cada sentencia sola (auto-commit). Para operaciones relacionadas, como una transferencia, desactívalo:</p>
<pre><code>try (Connection con = DriverManager.getConnection(URL, USER, PASS)) {
    con.setAutoCommit(false);
    try (PreparedStatement ret = con.prepareStatement("UPDATE cuentas SET saldo = saldo - ? WHERE id = ?");
         PreparedStatement dep = con.prepareStatement("UPDATE cuentas SET saldo = saldo + ? WHERE id = ?")) {
        ret.setBigDecimal(1, monto); ret.setLong(2, origen);  ret.executeUpdate();
        dep.setBigDecimal(1, monto); dep.setLong(2, destino); dep.executeUpdate();
        con.commit();
    } catch (SQLException e) {
        con.rollback();                 // deshace todo si algo falla
        throw e;
    }
}</code></pre>
<p>Spring simplifica esto con <code>@Transactional</code> (Épica 10).</p>`],
["Buenas prácticas",`<ul><li><b>Pool de conexiones</b>: abrir una conexión es costoso. En aplicaciones reales se reutilizan con un pool (<b>HikariCP</b>, el que usa Spring Boot por defecto). <code>DriverManager</code> sirve para aprender.</li><li><b>Patrón DAO/Repository</b>: aísla el SQL en clases dedicadas, como <code>ClienteDao</code>, y deja la lógica de negocio fuera.</li><li><b>Configuración externa</b>: usuario, contraseña y URL desde variables de entorno o archivos no versionados.</li><li>Selecciona solo las columnas que necesitas, no <code>SELECT *</code>.</li><li>Maneja <code>SQLException</code> y registra el error con contexto (lección de Logging).</li></ul>`],
["Práctica",`<ol><li>Agrega el driver y escribe un <code>main</code> que se conecte y muestre <code>SELECT version()</code>.</li><li>Implementa un <b>CRUD completo de clientes</b> en <code>ClienteDao</code> (crear, listar, buscar por email, actualizar, borrar) con un menú de consola.</li><li>Demuestra SQL injection con una versión concatenada, y luego arréglala con PreparedStatement.</li><li>Implementa una transferencia entre cuentas con transacción; fuerza un error en la segunda operación y comprueba que se hizo rollback.</li><li>Mide el tiempo de 200 consultas abriendo una conexión nueva cada vez frente a reutilizando una sola.</li><li>Sustituye los println por logs y mueve la contraseña a una variable de entorno (en IntelliJ: Run → Edit Configurations → Environment variables).</li></ol>`],
["Errores comunes",`<ul><li><b>No suitable driver found</b>: falta la dependencia del driver o la URL está mal escrita.</li><li><b>Connection refused / password authentication failed</b>: servidor apagado, puerto o credenciales incorrectas.</li><li><b>relation "clientes" does not exist</b>: tabla inexistente, otra base o esquema distinto.</li><li><b>Fuga de conexiones</b>: no cerrar Connection/ResultSet.</li><li><b>Índices que empiezan en 0</b>: en JDBC (<code>setString(1, ...)</code>, <code>getString(1)</code>) empiezan en 1.</li><li><b>Concatenar valores en el SQL</b> en lugar de usar parámetros.</li></ul>`],
["Cómo sé que lo domino",`<ul><li>Conecto a PostgreSQL desde Java y leo resultados con ResultSet.</li><li>Explico qué es SQL injection y cómo lo evita PreparedStatement.</li><li>Escribo un CRUD con DAO y una transacción con commit y rollback.</li><li>Sé por qué se usa un pool de conexiones.</li></ul>`]
]}
};
