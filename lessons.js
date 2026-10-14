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
<p><b>Excepciones en macOS</b> (keymap por defecto): Debug es <code>Ctrl+D</code> y Resume es <code>Option+Cmd+R</code> (no F9). En portátiles las teclas F a veces requieren la tecla Fn. Si algún atajo no coincide, búscalo en <i>Settings → Keymap</i> o con Shift Shift.</p>
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

docker ps                    # comprobar que corre
docker stop pg-aprendizaje   # detener
docker start pg-aprendizaje  # volver a iniciar</code></pre>
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
]},
"6-0":{e:"7. Web y HTTP",t:"Cómo funciona HTTP: métodos, códigos de estado, headers",s:[
["La idea general",`<p><b>HTTP</b> (HyperText Transfer Protocol) es el idioma con el que se comunican navegadores, aplicaciones móviles y servidores. Funciona con el modelo <b>petición-respuesta</b>: un <b>cliente</b> envía una petición (<i>request</i>) y un <b>servidor</b> devuelve una respuesta (<i>response</i>). Dos propiedades clave:</p>
<ul><li><b>Sin estado (stateless)</b>: cada petición es independiente; el servidor no "recuerda" la anterior. Por eso existen cookies, sesiones y tokens para identificar al usuario.</li><li><b>Es texto</b> sobre una conexión TCP. <b>HTTPS</b> es HTTP cifrado con TLS (puerto 443; HTTP usa el 80). Hoy todo debe ir por HTTPS.</li></ul>
<p>Tu aplicación Spring Boot será un servidor HTTP: recibirá peticiones y devolverá respuestas, normalmente en JSON. Los servidores web escuchan en un <b>puerto</b>; Spring Boot usa por defecto el <code>8080</code>.</p>`],
["Anatomía de una URL",`<pre><code>https://api.tienda.com:443/v1/clientes/5?activo=true&amp;orden=nombre#datos
└─┬─┘   └─────┬──────┘└┬┘ └─────┬──────┘└──────────┬─────────┘└──┬─┘
esquema     host     puerto   ruta (path)      query string     fragmento</code></pre>
<ul><li><b>Host</b>: se traduce a una IP mediante DNS.</li><li><b>Path</b>: identifica el recurso (<code>/clientes/5</code>). <b>Path param</b> es la parte variable (el 5).</li><li><b>Query string</b>: pares <code>clave=valor</code> separados por <code>&amp;</code>, para filtros, orden y paginación.</li><li><b>Fragmento</b> (<code>#</code>): lo usa solo el navegador; no se envía al servidor.</li></ul>
<p>No pongas datos sensibles (contraseñas, tokens) en la URL: quedan en logs e historial.</p>`],
["Anatomía de petición y respuesta",`<p>Una petición tiene: <b>línea inicial</b> (método + ruta + versión), <b>headers</b>, una línea en blanco y un <b>cuerpo</b> opcional.</p>
<pre><code>POST /v1/clientes HTTP/1.1
Host: api.tienda.com
Content-Type: application/json
Accept: application/json
Authorization: Bearer eyJhbGciOi...

{"nombre": "Ana", "email": "ana@correo.com"}</code></pre>
<p>La respuesta tiene: <b>línea de estado</b> (versión + código + texto), headers y cuerpo.</p>
<pre><code>HTTP/1.1 201 Created
Content-Type: application/json
Location: /v1/clientes/8

{"id": 8, "nombre": "Ana", "email": "ana@correo.com"}</code></pre>`],
["Métodos HTTP",`<pre><code>GET      leer un recurso                      seguro, idempotente
POST     crear un recurso / ejecutar acción   NO idempotente
PUT      reemplazar un recurso completo       idempotente
PATCH    modificar parcialmente               (normalmente no garantizado)
DELETE   eliminar                             idempotente
HEAD     como GET pero solo headers
OPTIONS  qué métodos admite (lo usan los navegadores en CORS)</code></pre>
<ul><li><b>Seguro</b>: no modifica datos. GET nunca debe cambiar nada.</li><li><b>Idempotente</b>: repetir la misma petición varias veces deja el mismo resultado que una sola vez. Borrar el cliente 5 dos veces termina igual; crear con POST dos veces crea dos recursos.</li><li><b>PUT vs PATCH</b>: PUT envía el recurso completo; PATCH solo los campos que cambian.</li></ul>`],
["Códigos de estado",`<p>El primer dígito indica la familia. <b>Regla de oro: 4xx es culpa del cliente; 5xx, del servidor.</b></p>
<pre><code>2xx ÉXITO
 200 OK                   respuesta normal con cuerpo
 201 Created              recurso creado (suele incluir header Location)
 202 Accepted             recibido, se procesará después
 204 No Content           éxito sin cuerpo (típico en DELETE)

3xx REDIRECCIÓN
 301 Moved Permanently    302 Found      304 Not Modified (caché vigente)

4xx ERROR DEL CLIENTE
 400 Bad Request          petición mal formada / datos inválidos
 401 Unauthorized         no autenticado (falta o es inválido el token)
 403 Forbidden            autenticado pero sin permiso
 404 Not Found            el recurso no existe
 405 Method Not Allowed   método no permitido en esa ruta
 409 Conflict             choque con el estado actual (email duplicado)
 415 Unsupported Media Type   Content-Type no admitido
 422 Unprocessable Content    validación semántica fallida
 429 Too Many Requests    límite de peticiones excedido

5xx ERROR DEL SERVIDOR
 500 Internal Server Error    fallo inesperado (un bug)
 502 Bad Gateway   503 Service Unavailable   504 Gateway Timeout</code></pre>`],
["Headers (cabeceras) importantes",`<ul><li><b>Content-Type</b>: formato del cuerpo que envías (<code>application/json</code>, <code>text/html</code>, <code>multipart/form-data</code>, <code>application/x-www-form-urlencoded</code>).</li><li><b>Accept</b>: formato que aceptas recibir.</li><li><b>Authorization</b>: credenciales (<code>Bearer token</code>, <code>Basic ...</code>).</li><li><b>Cookie</b> / <b>Set-Cookie</b>: sesiones.</li><li><b>Location</b>: URL del recurso creado o destino de una redirección.</li><li><b>Cache-Control</b>, <b>ETag</b>: control de caché.</li><li><b>User-Agent</b>, <b>Host</b>, <b>Content-Length</b>.</li><li><b>Access-Control-Allow-Origin</b>: CORS; qué sitios web pueden llamar a tu API desde el navegador (lo verás en Seguridad).</li></ul>`],
["Práctica",`<p>Usa <code>curl</code> (en Windows PowerShell escribe <code>curl.exe</code>; si el POST con JSON da error de comillas, ejecútalo en Git Bash o usa Postman, que veremos en la tercera lección). La opción <code>-i</code> muestra los headers de la respuesta:</p>
<pre><code>curl -i https://httpbin.org/get
curl -i https://httpbin.org/status/404
curl -i -X POST https://httpbin.org/post -H "Content-Type: application/json" -d "{\\"a\\": 1}"
curl -i -H "Accept: application/json" https://jsonplaceholder.typicode.com/users/1</code></pre>
<ol><li>Identifica en cada respuesta la línea de estado, tres headers y el cuerpo.</li><li>Abre cualquier página, pulsa <b>F12 → pestaña Network</b>, recarga y estudia 3 peticiones: método, código, headers y tiempo.</li><li>Pide un recurso inexistente y lee el 404; prueba <code>httpbin.org/status/500</code>.</li><li>Haz una lista de qué código devolverías en: login fallido, usuario sin permisos, cliente creado, borrado exitoso, email duplicado, falla de la base de datos.</li></ol>`],
["Errores comunes",`<ul><li><b>Confundir 401 y 403</b>: 401 = no sé quién eres; 403 = sé quién eres y no puedes.</li><li><b>Usar GET para modificar datos</b> (los buscadores y cachés pueden repetirlo).</li><li><b>Responder 200 con un mensaje de error</b> en el cuerpo.</li><li><b>Enviar JSON sin el header Content-Type</b> correcto.</li><li><b>Datos sensibles en la URL</b>.</li><li><b>Confundir PUT con PATCH</b> y perder campos al reemplazar.</li></ul>`],
["Cómo sé que lo domino",`<ul><li>Dibujo de memoria una petición y una respuesta HTTP.</li><li>Elijo el método correcto y explico "seguro" e "idempotente".</li><li>Doy el código de estado adecuado a 10 situaciones.</li><li>Leo headers y peticiones en las herramientas de desarrollo del navegador y con curl.</li></ul>`]
]},
"6-1":{e:"7. Web y HTTP",t:"Qué es una API REST y qué es JSON",s:[
["Qué es una API REST",`<p>Una <b>API</b> es una interfaz para que un programa use las funciones de otro. Una <b>API REST</b> expone <b>recursos</b> (clientes, pedidos, productos) a través de HTTP. <b>REST</b> es un estilo de arquitectura, no un protocolo; sus ideas principales:</p>
<ul><li><b>Cliente-servidor</b> separados: el front-end (web, móvil) y el back-end evolucionan por separado.</li><li><b>Sin estado</b>: cada petición lleva toda la información necesaria (por ejemplo el token).</li><li><b>Recursos con URI propia</b> y manipulados mediante representaciones (normalmente JSON).</li><li><b>Interfaz uniforme</b>: se usan los métodos HTTP con su significado estándar.</li><li><b>Cacheable</b> y en capas (balanceadores, gateways).</li></ul>`],
["Diseño de endpoints",`<p>Reglas prácticas: la URI nombra <b>recursos (sustantivos, plural)</b>; el <b>método HTTP</b> indica la acción. Minúsculas y guiones; jerarquía para relaciones.</p>
<pre><code>Operación            Método   URI                       Éxito          Errores típicos
Listar clientes      GET      /clientes                 200            -
Ver uno              GET      /clientes/5               200            404
Crear                POST     /clientes                 201 + Location 400, 409
Reemplazar           PUT      /clientes/5               200 / 204      400, 404
Modificar parcial    PATCH    /clientes/5               200            400, 404
Borrar               DELETE   /clientes/5               204            404
Pedidos de un cliente GET     /clientes/5/pedidos       200            404

Filtrar, ordenar y paginar con query params:
GET /clientes?ciudad=Lima&amp;page=0&amp;size=20&amp;sort=nombre,asc

Versionar la API:   /api/v1/clientes</code></pre>
<p><b>Mal diseño</b> (verbos en la URL): <code>/obtenerClientes</code>, <code>/crearCliente</code>, <code>/borrar?id=5</code>. Para acciones que no encajan en CRUD se acepta un verbo como subrecurso: <code>POST /pedidos/7/cancelar</code>.</p>`],
["JSON: sintaxis",`<p><b>JSON</b> (JavaScript Object Notation) es el formato de intercambio estándar: texto ligero, legible y soportado por todos los lenguajes.</p>
<pre><code>{
  "id": 8,
  "nombre": "Ana Ruiz",
  "activo": true,
  "saldo": 1250.50,
  "telefono": null,
  "roles": ["ADMIN", "USER"],
  "direccion": { "ciudad": "Lima", "cp": "15001" },
  "creado": "2026-10-14T10:30:00Z"
}</code></pre>
<ul><li>Tipos: <b>string</b> (comillas dobles), <b>number</b>, <b>boolean</b> (<code>true</code>/<code>false</code>), <b>null</b>, <b>array</b> <code>[ ]</code> y <b>objeto</b> <code>{ }</code> (pares clave-valor; las claves van siempre entre comillas dobles).</li><li><b>No admite</b> comentarios, comillas simples ni coma final después del último elemento.</li><li>Las <b>fechas</b> no tienen tipo propio: se envían como texto en formato ISO 8601 (<code>2026-10-14</code> o <code>2026-10-14T10:30:00Z</code>).</li><li>Convención de nombres en Java/Spring: <b>camelCase</b> (<code>fechaNacimiento</code>).</li><li>Valida tu JSON en jsonlint.com o con el formateador de tu editor.</li></ul>`],
["JSON y Java",`<p>Convertir objeto Java ↔ JSON se llama <b>serializar</b> / <b>deserializar</b>. La librería estándar es <b>Jackson</b> (incluida en Spring Boot, que lo hace automáticamente al recibir y devolver datos).</p>
<pre><code>public record Cliente(long id, String nombre, String email) { }

ObjectMapper mapper = new ObjectMapper();
String json = mapper.writeValueAsString(new Cliente(8, "Ana", "ana@correo.com"));
// {"id":8,"nombre":"Ana","email":"ana@correo.com"}

Cliente c = mapper.readValue(json, Cliente.class);</code></pre>
<p>Para consumir una API desde Java sin librerías externas existe <code>java.net.http.HttpClient</code>:</p>
<pre><code>HttpClient client = HttpClient.newHttpClient();
HttpRequest req = HttpRequest.newBuilder()
    .uri(URI.create("https://jsonplaceholder.typicode.com/users/1"))
    .header("Accept", "application/json")
    .GET()
    .build();
HttpResponse&lt;String&gt; res = client.send(req, HttpResponse.BodyHandlers.ofString());
System.out.println(res.statusCode());
System.out.println(res.body());</code></pre>
<p>(Necesita los imports de <code>java.net</code> y <code>java.net.http</code>, y manejar <code>IOException</code> e <code>InterruptedException</code>.)</p>`],
["Respuestas de error y buenas prácticas",`<p>Devuelve errores con la <b>misma estructura</b> siempre, junto al código HTTP correcto:</p>
<pre><code>{
  "status": 404,
  "error": "Not Found",
  "message": "El cliente 99 no existe",
  "path": "/clientes/99",
  "timestamp": "2026-10-14T10:30:00Z"
}</code></pre>
<ul><li><b>No expongas tus entidades de base de datos</b> directamente: usa <b>DTOs</b> (por ejemplo records) para controlar qué sale y qué entra (nunca devuelvas contraseñas).</li><li><b>Pagina</b> las listas grandes.</li><li>Usa <b>HTTPS</b> y autenticación; nunca confíes en datos del cliente: <b>valida</b>.</li><li>Sé <b>consistente</b>: mismos nombres, mismo formato de fechas, mismo estilo de errores.</li><li>Documenta con <b>OpenAPI/Swagger</b> (lo harás en la Épica 9).</li></ul>`],
["Práctica",`<ol><li>Diseña la API REST de una <b>biblioteca</b> (libros, autores, socios, préstamos): tabla con método, URI, código de éxito y errores posibles para al menos 12 endpoints.</li><li>Escribe el JSON de un libro con autores anidados, y el de la respuesta de error si el libro no existe.</li><li>Pega un JSON con errores (comillas simples, coma final) en jsonlint.com y corrígelo.</li><li>Con <code>curl -i https://jsonplaceholder.typicode.com/users/1</code> lee la respuesta y localiza el objeto anidado <code>address</code>.</li><li>Haz el mismo GET con <code>HttpClient</code> en Java y muestra el código y el cuerpo.</li><li>Con Jackson (agrega <code>jackson-databind</code> en tu pom) convierte un record a JSON y vuelve a un objeto.</li></ol>`],
["Errores comunes",`<ul><li><b>Verbos en la URL</b> en lugar de recursos y métodos.</li><li><b>Mezclar singular y plural</b> (<code>/cliente</code> y <code>/pedidos</code>).</li><li><b>Devolver 200 siempre</b> con el error dentro del cuerpo.</li><li><b>JSON inválido</b>: comillas simples, coma final, claves sin comillas.</li><li><b>Formatos de fecha inventados</b> ("14-10-26") en lugar de ISO 8601.</li><li><b>Anidar demasiado</b> las rutas (<code>/a/1/b/2/c/3/d</code>).</li></ul>`],
["Cómo sé que lo domino",`<ul><li>Explico qué es REST y qué significa "sin estado".</li><li>Diseño endpoints CRUD correctos con códigos de estado adecuados.</li><li>Escribo y leo JSON sin errores de sintaxis.</li><li>Sé qué hace Jackson y por qué se usan DTOs.</li></ul>`]
]},
"6-2":{e:"7. Web y HTTP",t:"Usar Postman o Insomnia",s:[
["Para qué sirven",`<p>Cuando construyes una API todavía no tienes pantallas que la usen. <b>Postman</b> e <b>Insomnia</b> son clientes gráficos para enviar peticiones HTTP, ver respuestas, guardarlas en colecciones y automatizar pruebas. Elige una (los conceptos son idénticos): Postman (postman.com, la más popular, requiere cuenta), Insomnia (insomnia.rest, ligera), o <b>Bruno</b> (open source, guarda las colecciones como archivos y funciona bien con Git). También sirve <code>curl</code> en terminal, pero una herramienta gráfica es más cómoda para explorar.</p>`],
["Tu primera petición",`<ol><li>Instala y abre la herramienta. Crea una <b>Collection</b> llamada "Ruta Java".</li><li><b>New Request</b>. Método <b>GET</b>, URL <code>https://jsonplaceholder.typicode.com/posts/1</code>. Pulsa <b>Send</b>.</li><li>Observa el panel de respuesta: <b>Status</b> (200 OK), <b>Time</b>, <b>Size</b>, pestaña <b>Body</b> (Pretty muestra el JSON formateado), <b>Headers</b> y <b>Cookies</b>.</li><li>Guarda la petición en la colección (<b>Save</b>).</li></ol>
<p>Zonas de la petición: <b>Params</b> (query string: <code>?userId=1</code> se arma sola), <b>Authorization</b>, <b>Headers</b>, <b>Body</b>, <b>Scripts/Tests</b>.</p>`],
["Enviar datos: POST, PUT y DELETE",`<ol><li>Cambia el método a <b>POST</b> y la URL a <code>https://jsonplaceholder.typicode.com/posts</code>.</li><li>Pestaña <b>Body</b> → <b>raw</b> → tipo <b>JSON</b> (esto añade el header <code>Content-Type: application/json</code> automáticamente).</li><li>Escribe:</li></ol>
<pre><code>{
  "title": "Mi primer post",
  "body": "Probando la API",
  "userId": 1
}</code></pre>
<p>Pulsa Send: obtendrás <b>201 Created</b> con el objeto y un <code>id</code> nuevo (esta API de práctica simula la creación, no guarda). Repite con <b>PUT</b> a <code>/posts/1</code> y <b>DELETE</b> a <code>/posts/1</code>, y fíjate en los códigos que devuelve cada uno.</p>`],
["Variables y entornos",`<p>No repitas la URL base en cada petición. Crea un <b>Environment</b> (por ejemplo "local") con variables y úsalas entre llaves dobles:</p>
<pre><code>Variable   Valor
baseUrl    http://localhost:8080
token      (vacío por ahora)

URL de la petición:   {{baseUrl}}/clientes
Header Authorization: Bearer {{token}}</code></pre>
<p>Cambiar de "local" a "producción" es seleccionar otro entorno. <b>No guardes tokens ni contraseñas reales en colecciones que compartas o subas a Git.</b></p>`],
["Tests y encadenamiento",`<p>En la pestaña <b>Tests</b> (Postman) escribes JavaScript que se ejecuta tras la respuesta, para verificar automáticamente:</p>
<pre><code>pm.test("Status es 201", function () {
    pm.response.to.have.status(201);
});

pm.test("Devuelve un id numérico", function () {
    const json = pm.response.json();
    pm.expect(json.id).to.be.a("number");
    pm.environment.set("clienteId", json.id);   // guarda el id para la siguiente petición
});</code></pre>
<p>Luego la petición siguiente puede usar <code>{{baseUrl}}/clientes/{{clienteId}}</code>. Así armas flujos: crear → consultar → actualizar → borrar. El <b>Collection Runner</b> ejecuta todas las peticiones en orden y muestra qué pruebas pasaron; <b>Newman</b> hace lo mismo desde la terminal (útil en CI). Exporta la colección a JSON y guárdala en tu repositorio.</p>`],
["Práctica",`<p>Con <code>https://jsonplaceholder.typicode.com</code> (API pública de práctica):</p>
<ol><li>GET <code>/posts</code> (lista) y GET <code>/posts/1</code>.</li><li>GET <code>/posts?userId=1</code> usando la pestaña Params.</li><li>GET <code>/posts/9999</code> y observa el 404.</li><li>POST a <code>/posts</code> con un body JSON propio.</li><li>PUT y DELETE sobre <code>/posts/1</code>.</li><li>Crea un entorno con <code>baseUrl</code> y reescribe las peticiones con <code>{{baseUrl}}</code>.</li><li>Agrega tests: status esperado y que el JSON contenga el campo <code>title</code>.</li><li>Exporta la colección y súbela a tu repositorio <code>java-aprendizaje</code>.</li></ol>
<p>Más adelante usarás la misma herramienta para probar <b>tu propia API Spring Boot</b> en <code>http://localhost:8080</code>.</p>`],
["Errores comunes",`<ul><li><b>Could not send request / ECONNREFUSED</b>: tu servidor no está corriendo o el puerto es otro.</li><li><b>Falta http:// en la URL</b>.</li><li><b>400 por JSON inválido</b>: revisa comillas y comas del body.</li><li><b>415 Unsupported Media Type</b>: el body no es raw JSON o falta el Content-Type.</li><li><b>Error CORS</b>: ocurre solo en navegadores, no en Postman; si funciona aquí y falla en el front, es configuración CORS del servidor.</li><li><b>Problemas de certificado SSL</b> en entornos locales: desactiva la verificación solo en desarrollo.</li><li><b>Variable sin resolver</b>: no seleccionaste el entorno activo.</li></ul>`],
["Cómo sé que lo domino",`<ul><li>Envío GET, POST, PUT y DELETE y leo status, headers y body.</li><li>Mando JSON en el cuerpo con el Content-Type correcto.</li><li>Uso entornos, variables y un token Bearer.</li><li>Escribo un test sencillo y ejecuto una colección completa.</li></ul>`]
]},
"7-0":{e:"8. Spring Boot básico",t:"Inversión de control e inyección de dependencias",s:[
["El problema: clases acopladas",`<p>Observa este servicio que crea él mismo lo que necesita:</p>
<pre><code>public class PedidoServicio {
    private final EmailNotificador notificador = new EmailNotificador();   // acoplado

    public void crear() {
        // ...
        notificador.enviar("Pedido creado");
    }
}</code></pre>
<p>Problemas: <b>PedidoServicio</b> queda atado a una implementación concreta (¿y si mañana quieres SMS?), no puedes probarlo sin enviar emails reales, y cada clase decide cómo construir sus piezas. Esto escala mal.</p>`],
["Inyección de dependencias (DI)",`<p>Una <b>dependencia</b> es un objeto que otra clase necesita. <b>Inyectarla</b> significa que se la entregas desde fuera (normalmente por el constructor) en lugar de crearla dentro, y de preferencia programando contra una <b>interfaz</b>:</p>
<pre><code>public interface Notificador { void enviar(String mensaje); }

public class EmailNotificador implements Notificador {
    public void enviar(String mensaje) { System.out.println("Email: " + mensaje); }
}

public class PedidoServicio {
    private final Notificador notificador;                       // depende de la interfaz
    public PedidoServicio(Notificador notificador) {             // se la entregan
        this.notificador = notificador;
    }
    public void crear() { notificador.enviar("Pedido creado"); }
}

// Armado manual (sin Spring):
PedidoServicio s = new PedidoServicio(new EmailNotificador());

// En una prueba, sin enviar nada real (Notificador tiene un solo método → lambda):
PedidoServicio test = new PedidoServicio(mensaje -&gt; System.out.println("simulado: " + mensaje));</code></pre>
<p>Beneficios: <b>bajo acoplamiento</b>, <b>pruebas fáciles</b> (inyectas dobles/mocks) y <b>cambiar de implementación</b> sin tocar el consumidor.</p>`],
["Inversión de control (IoC) y el contenedor de Spring",`<p><b>IoC</b> significa que el control de crear y conectar los objetos deja de estar en tu código y pasa a un <b>framework</b>. En Spring ese framework es el <b>contenedor</b> (<code>ApplicationContext</code>). Al arrancar la aplicación, el contenedor:</p>
<ol><li><b>Descubre</b> las clases que marcaste (<code>@Component</code>, <code>@Service</code>…) escaneando los paquetes.</li><li><b>Crea</b> sus instancias, llamadas <b>beans</b>.</li><li><b>Resuelve</b> qué necesita cada una (mira los parámetros del constructor) y se las <b>inyecta</b>.</li><li>Gestiona su <b>ciclo de vida</b> hasta que la aplicación se cierra.</li></ol>
<pre><code>@Component
public class EmailNotificador implements Notificador { ... }

@Service
public class PedidoServicio {
    private final Notificador notificador;

    public PedidoServicio(Notificador notificador) {   // Spring inyecta EmailNotificador
        this.notificador = notificador;
    }
}</code></pre>
<p>Nunca haces <code>new PedidoServicio(...)</code> tú mismo: pides el bean al contenedor (o, más común, lo recibes inyectado en otra clase).</p>`],
["Tipos de inyección y beans",`<ul><li><b>Por constructor (la recomendada)</b>: las dependencias son <code>final</code>, el objeto nace completo y es fácil de probar. Si la clase tiene un solo constructor, <code>@Autowired</code> es opcional.</li><li><b>Por setter</b>: para dependencias opcionales.</li><li><b>Por campo</b> (<code>@Autowired</code> sobre el atributo): funciona, pero oculta dependencias y dificulta las pruebas. Evítala.</li></ul>
<p><b>Dos implementaciones de la misma interfaz</b> provocan <code>NoUniqueBeanDefinitionException</code>. Soluciones:</p>
<pre><code>@Primary                       // la que se elige por defecto
@Component
public class EmailNotificador implements Notificador { ... }

@Component("sms")
public class SmsNotificador implements Notificador { ... }

public PedidoServicio(@Qualifier("sms") Notificador notificador) { ... }   // elegir una concreta</code></pre>
<p><b>Beans de librerías de terceros</b> (que no puedes anotar) se declaran con <code>@Bean</code> en una clase <code>@Configuration</code>:</p>
<pre><code>@Configuration
public class AppConfig {
    @Bean
    public ObjectMapper objectMapper() { return new ObjectMapper(); }
}</code></pre>
<p><b>Alcance (scope)</b>: por defecto cada bean es <b>singleton</b>: una sola instancia compartida por toda la aplicación (por eso los beans no deben guardar estado mutable por usuario). Otros: <code>prototype</code> (una nueva cada vez), <code>request</code>, <code>session</code>. Ciclo de vida: <code>@PostConstruct</code> (tras crearse e inyectarse) y <code>@PreDestroy</code> (antes de cerrar).</p>`],
["Práctica",`<ol><li>Primero <b>sin Spring</b>: crea la interfaz <code>Notificador</code>, dos implementaciones (Email, Sms) y <code>PedidoServicio</code> con inyección por constructor. Arma todo en un <code>main</code> y cambia de implementación sin tocar el servicio.</li><li>Escribe una prueba JUnit de <code>PedidoServicio</code> usando una implementación falsa que guarde los mensajes en una lista y verifica que se envió "Pedido creado".</li><li>Con tu proyecto Spring (lección siguiente), anota las clases con <code>@Component</code>/<code>@Service</code> y verifica el funcionamiento con un <code>CommandLineRunner</code> en la clase principal:</li></ol>
<pre><code>@Bean
CommandLineRunner demo(PedidoServicio servicio) {
    return args -&gt; servicio.crear();     // se ejecuta al arrancar
}</code></pre>
<ol start="4"><li>Provoca <code>NoUniqueBeanDefinitionException</code> con dos implementaciones y arréglalo con <code>@Primary</code> y luego con <code>@Qualifier</code>.</li><li>Haz que dos beans se necesiten mutuamente (dependencia circular) y lee el error de arranque.</li></ol>`],
["Errores comunes",`<ul><li><b>NoSuchBeanDefinitionException</b>: falta la anotación (<code>@Service</code>…) o la clase está <b>fuera del paquete</b> de la clase principal y no se escanea.</li><li><b>NoUniqueBeanDefinitionException</b>: varias implementaciones; usa @Primary o @Qualifier.</li><li><b>Hacer <code>new MiServicio()</code> manualmente</b> y esperar que tenga sus dependencias inyectadas: no es un bean, sus campos quedan en null (NullPointerException).</li><li><b>Dependencia circular</b> (A necesita B y B necesita A): rediseña, normalmente falta una tercera clase.</li><li><b>Inyección por campo</b> que impide instanciar la clase en pruebas sin Spring.</li><li><b>Estado mutable en un singleton</b>: datos de un usuario se mezclan con los de otro.</li></ul>`],
["Cómo sé que lo domino",`<ul><li>Explico con mis palabras IoC, DI y bean.</li><li>Convierto una clase que hace <code>new</code> de sus dependencias en una con inyección por constructor.</li><li>Resuelvo ambigüedades con @Primary y @Qualifier.</li><li>Sé por qué la inyección por constructor facilita las pruebas.</li></ul>`]
]},
"7-1":{e:"8. Spring Boot básico",t:"Crear un proyecto con Spring Initializr",s:[
["Qué es Spring Boot y qué es Initializr",`<p><b>Spring Framework</b> aporta el contenedor de IoC y todo el ecosistema (web, datos, seguridad). <b>Spring Boot</b> lo hace fácil de usar con tres ideas: <b>starters</b> (una dependencia que trae todo lo necesario para una función), <b>autoconfiguración</b> (configura por ti según lo que hay en el classpath) y <b>servidor embebido</b> (Tomcat dentro del jar: no instalas nada, ejecutas con <code>java -jar</code>).</p>
<p><b>Spring Initializr</b> (<b>start.spring.io</b>) es el sitio oficial que genera el esqueleto de un proyecto con el <code>pom.xml</code> correcto.</p>`],
["Paso a paso en start.spring.io",`<ol><li><b>Project</b>: Maven. <b>Language</b>: Java.</li><li><b>Spring Boot</b>: elige la versión <b>estable más reciente</b> (sin sufijos SNAPSHOT, M1 ni RC). Las series actuales son 3.5.x y 4.x; todas exigen Java 17 como mínimo, y usaremos 21.</li><li><b>Group</b>: <code>com.miempresa</code>. <b>Artifact</b>: <code>tienda</code>. Name y Package se rellenan solos (<code>com.miempresa.tienda</code>).</li><li><b>Packaging</b>: Jar. <b>Java</b>: 21.</li><li><b>Add Dependencies</b> (botón o Ctrl+B): <b>Spring Web</b>, <b>Spring Boot DevTools</b>, <b>Validation</b> y <b>Spring Boot Actuator</b>. (Más adelante: JPA, PostgreSQL Driver, Security.)</li><li><b>Generate</b>: descarga un .zip. Descomprímelo en tu carpeta de proyectos.</li></ol>
<p>En IntelliJ: <b>File → Open</b> y selecciona el <code>pom.xml</code> (Open as Project). Espera a que Maven descargue las dependencias (barra de progreso abajo). Nota: el nombre del starter web depende de la versión: en Spring Boot 3.x es <code>spring-boot-starter-web</code> y en 4.x es <code>spring-boot-starter-webmvc</code> (el antiguo sigue funcionando pero está obsoleto). Initializr siempre genera el correcto: no lo cambies a mano.</p>`],
["Qué trae el proyecto generado",`<pre><code>tienda/
 ├─ pom.xml                      dependencias y plugin de Spring Boot
 ├─ mvnw, mvnw.cmd, .mvn/        Maven Wrapper (no necesitas instalar Maven)
 ├─ .gitignore
 └─ src/
     ├─ main/java/com/miempresa/tienda/TiendaApplication.java   ← punto de entrada
     ├─ main/resources/application.properties                    configuración
     ├─ main/resources/static/        archivos estáticos (html, css, js)
     ├─ main/resources/templates/     plantillas HTML (si usas Thymeleaf)
     └─ test/java/com/miempresa/tienda/TiendaApplicationTests.java</code></pre>
<pre><code>@SpringBootApplication
public class TiendaApplication {
    public static void main(String[] args) {
        SpringApplication.run(TiendaApplication.class, args);
    }
}</code></pre>
<p><code>@SpringBootApplication</code> combina tres cosas: <code>@Configuration</code>, <code>@EnableAutoConfiguration</code> y <code>@ComponentScan</code>. <b>El escaneo parte del paquete de esta clase hacia abajo</b>: todas tus clases deben vivir en <code>com.miempresa.tienda</code> o en sus subpaquetes.</p>`],
["Ejecutar y comprobar",`<p>Dos formas: botón verde junto al <code>main</code> en IntelliJ, o por terminal:</p>
<pre><code>./mvnw spring-boot:run          (Windows: mvnw.cmd spring-boot:run)

./mvnw clean package            genera target/tienda-0.0.1-SNAPSHOT.jar
java -jar target/tienda-0.0.1-SNAPSHOT.jar</code></pre>
<p>En la consola verás el banner de Spring y líneas como <i>Tomcat started on port 8080</i> y <i>Started TiendaApplication in 2.1 seconds</i>. Abre <code>http://localhost:8080</code>: aparece una página <b>Whitelabel Error Page (404)</b>. Es normal: la aplicación corre, solo que aún no tiene endpoints.</p>
<p>Crea tu primer endpoint en <code>src/main/java/com/miempresa/tienda/HolaController.java</code>:</p>
<pre><code>package com.miempresa.tienda;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HolaController {
    @GetMapping("/hola")
    public String hola() {
        return "¡Hola desde Spring Boot!";
    }
}</code></pre>
<p>Reinicia y abre <code>http://localhost:8080/hola</code>, o prueba <code>curl -i http://localhost:8080/hola</code>. Con Actuator, <code>http://localhost:8080/actuator/health</code> responde <code>{"status":"UP"}</code>. DevTools reinicia la aplicación al recompilar (en IntelliJ: <b>Build → Build Project</b>, Ctrl+F9).</p>`],
["Práctica",`<ol><li>Genera el proyecto, ábrelo y ejecútalo. Anota cuánto tarda en arrancar.</li><li>Crea <code>GET /hola</code> y <code>GET /hola/{nombre}</code> (con <code>@PathVariable</code>) que responda "Hola, Ana".</li><li>Visita <code>/actuator/health</code> y observa el JSON.</li><li>Cambia el puerto a 9090 en <code>application.properties</code> (<code>server.port=9090</code>) y comprueba que ya no responde en 8080.</li><li>Genera el jar con <code>./mvnw clean package</code>, ejecútalo con <code>java -jar</code> y confirma que funciona sin IntelliJ.</li><li>Abre el <code>pom.xml</code> e identifica: el <b>parent</b> (spring-boot-starter-parent), los starters y el spring-boot-maven-plugin.</li><li>Haz <code>git init</code>, revisa que el <code>.gitignore</code> excluye <code>target/</code> y haz tu primer commit en un repositorio nuevo.</li></ol>`],
["Errores comunes",`<ul><li><b>Port 8080 was already in use</b>: otra aplicación (o una instancia anterior tuya) usa el puerto; ciérrala o cambia <code>server.port</code>.</li><li><b>404 en tu endpoint</b>: el controller está <b>fuera del paquete</b> base y no se escanea, o escribiste mal la ruta.</li><li><b>Unsupported class file major version</b> / <b>release version not supported</b>: tu JDK no coincide con el configurado en el pom o en IntelliJ (File → Project Structure).</li><li><b>Maven no descarga</b>: sin internet o proxy; revisa y pulsa Reload.</li><li><b>Elegir una versión SNAPSHOT/RC</b> y encontrar errores raros: usa la estable.</li><li><b>Abrir la carpeta equivocada</b>: IntelliJ debe abrir la que contiene <code>pom.xml</code>.</li></ul>`],
["Cómo sé que lo domino",`<ul><li>Genero un proyecto en Initializr y lo ejecuto en IntelliJ y por terminal.</li><li>Explico qué hace <code>@SpringBootApplication</code> y por qué importa el paquete.</li><li>Entiendo qué es un starter y qué aporta la autoconfiguración.</li><li>Creo un endpoint GET y lo pruebo con navegador y curl.</li></ul>`]
]},
"7-2":{e:"8. Spring Boot básico",t:"Estructura: controller, service, repository",s:[
["Arquitectura en capas",`<p>Para que el código sea mantenible, cada clase tiene <b>una responsabilidad</b> y las clases se agrupan en capas:</p>
<pre><code>Cliente HTTP → CONTROLLER → SERVICE → REPOSITORY → Base de datos
                  ↑            ↑           ↑
          traduce HTTP   lógica de      acceso a datos
          (rutas, JSON,  negocio y      (consultas, guardar,
          códigos)       reglas         buscar)</code></pre>
<ul><li><b>Controller</b>: recibe la petición, extrae parámetros y cuerpo, llama al servicio y devuelve la respuesta con el código HTTP adecuado. <b>No contiene lógica de negocio.</b></li><li><b>Service</b>: reglas de negocio, validaciones, coordinación de varios repositorios y transacciones. <b>No sabe nada de HTTP.</b></li><li><b>Repository</b>: lee y escribe datos. <b>No contiene reglas de negocio.</b></li><li><b>Model / Entity</b>: las clases que representan tus datos. <b>DTO</b>: objetos para entrada/salida de la API (los usarás en la Épica 9).</li></ul>
<p>Reglas de dependencia: <b>solo hacia abajo</b> (controller → service → repository); el controller no llama directamente al repository; el service no usa <code>ResponseEntity</code> ni <code>HttpServletRequest</code>.</p>`],
["Organización de paquetes",`<pre><code>com.miempresa.tienda
 ├─ TiendaApplication.java
 ├─ controller/ClienteController.java
 ├─ service/ClienteService.java
 ├─ repository/ClienteRepository.java
 ├─ model/Cliente.java
 └─ dto/                       (más adelante)</code></pre>
<p>Esta es la organización <b>por capas</b>, la más habitual para empezar. Existe también <b>por funcionalidad</b> (<code>cliente/</code> con su controller, service y repository juntos), que escala mejor en proyectos grandes. Lo importante: ser consistente.</p>`],
["Ejemplo completo en memoria",`<p>Aún no usamos base de datos: el repositorio guardará en un mapa (en la Épica 10 lo cambiarás por JPA sin tocar el resto, ese es el valor de las capas).</p>
<pre><code>// model/Cliente.java
public record Cliente(Long id, String nombre, String email) { }

// repository/ClienteRepository.java
@Repository
public class ClienteRepository {
    private final Map&lt;Long, Cliente&gt; datos = new ConcurrentHashMap&lt;&gt;();
    private final AtomicLong secuencia = new AtomicLong();

    public List&lt;Cliente&gt; buscarTodos() { return new ArrayList&lt;&gt;(datos.values()); }

    public Optional&lt;Cliente&gt; buscarPorId(long id) { return Optional.ofNullable(datos.get(id)); }

    public Cliente guardar(Cliente c) {
        long id = secuencia.incrementAndGet();
        Cliente nuevo = new Cliente(id, c.nombre(), c.email());
        datos.put(id, nuevo);
        return nuevo;
    }
}

// service/ClienteService.java
@Service
public class ClienteService {
    private final ClienteRepository repo;

    public ClienteService(ClienteRepository repo) { this.repo = repo; }

    public List&lt;Cliente&gt; listar() { return repo.buscarTodos(); }

    public Cliente obtener(long id) {
        return repo.buscarPorId(id)
                .orElseThrow(() -&gt; new NoSuchElementException("Cliente " + id + " no existe"));
    }

    public Cliente crear(Cliente c) {
        if (c.nombre() == null || c.nombre().isBlank()) {
            throw new IllegalArgumentException("El nombre es obligatorio");
        }
        return repo.guardar(c);
    }
}

// controller/ClienteController.java
@RestController
@RequestMapping("/clientes")
public class ClienteController {
    private final ClienteService servicio;

    public ClienteController(ClienteService servicio) { this.servicio = servicio; }

    @GetMapping
    public List&lt;Cliente&gt; listar() { return servicio.listar(); }

    @GetMapping("/{id}")
    public Cliente obtener(@PathVariable long id) { return servicio.obtener(id); }

    @PostMapping
    public ResponseEntity&lt;Cliente&gt; crear(@RequestBody Cliente c) {
        Cliente creado = servicio.crear(c);
        return ResponseEntity.created(URI.create("/clientes/" + creado.id())).body(creado);
    }
}</code></pre>
<p>Prueba (con la app corriendo):</p>
<pre><code>curl -i -X POST http://localhost:8080/clientes -H "Content-Type: application/json" -d '{"nombre":"Ana","email":"ana@correo.com"}'
curl -i http://localhost:8080/clientes
curl -i http://localhost:8080/clientes/1
curl -i http://localhost:8080/clientes/99</code></pre>
<p>Observa que el cliente 99 devuelve <b>500</b>: las excepciones aún no están traducidas a códigos HTTP. Eso se arregla en la Épica 9 con <code>@RestControllerAdvice</code> (404 para "no existe", 400 para datos inválidos). También notarás que los datos se pierden al reiniciar: es memoria.</p>`],
["Por qué separar en capas",`<ul><li><b>Cambiar una capa sin romper las otras</b>: pasar de memoria a PostgreSQL solo toca el repositorio.</li><li><b>Probar por separado</b>: el servicio se prueba con un repositorio falso, sin servidor ni base de datos.</li><li><b>Reutilizar lógica</b>: dos controllers (REST y otro) pueden usar el mismo servicio.</li><li><b>Legibilidad</b>: sabes dónde buscar cada cosa.</li></ul>
<p>Cuidado con el exceso: no crees capas vacías que solo delegan sin valor. Una regla útil: si el service no hace nada más que llamar al repository, está bien en un CRUD simple, pero la lógica nueva siempre va ahí, no en el controller.</p>`],
["Práctica",`<ol><li>Reproduce el ejemplo completo y pruébalo con Postman: crear, listar, obtener y un id inexistente.</li><li>Agrega <code>DELETE /clientes/{id}</code> y <code>PUT /clientes/{id}</code> recorriendo las tres capas (controller, service, repository). Usa <code>204 No Content</code> para borrar.</li><li>Agrega en el service la regla "no se permiten dos clientes con el mismo email" (lanza una excepción) y comprueba que el controller no cambió.</li><li>Escribe una prueba JUnit de <code>ClienteService</code> con un repositorio real en memoria (instancia directa con <code>new</code>, sin Spring).</li><li>Crea una segunda entidad (<code>Producto</code>) con sus tres capas, siguiendo el mismo patrón.</li><li>Revisa tu código: ¿hay algún <code>ResponseEntity</code> en un service o alguna regla de negocio en un controller? Corrígelo.</li></ol>`],
["Errores comunes",`<ul><li><b>Lógica de negocio en el controller</b> (queda sin reutilizar y difícil de probar).</li><li><b>Controller que llama al repository</b> saltándose el service.</li><li><b>Clases fuera del paquete base</b>: Spring no las encuentra (404 o bean no encontrado).</li><li><b>Olvidar la anotación</b> (<code>@Repository</code>, <code>@Service</code>, <code>@RestController</code>).</li><li><b>415 Unsupported Media Type</b> o <b>400</b> al hacer POST: falta <code>Content-Type: application/json</code> o el JSON es inválido.</li><li><b>Devolver entidades internas</b> directamente a la API: se corrige con DTOs (Épica 9).</li></ul>`],
["Cómo sé que lo domino",`<ul><li>Explico la responsabilidad de cada capa y la dirección de las dependencias.</li><li>Construyo un CRUD en memoria con controller, service y repository.</li><li>Sé dónde va cada tipo de código (HTTP, reglas, datos).</li><li>Entiendo por qué cambiar a una base de datos solo tocará el repositorio.</li></ul>`]
]},
"7-3":{e:"8. Spring Boot básico",t:"Anotaciones clave (@RestController, @Service, @Autowired…)",s:[
["Cómo funcionan las anotaciones",`<p>Una <b>anotación</b> es metadato que añades al código (<code>@Algo</code>). No ejecuta nada por sí sola: Spring lee las anotaciones al arrancar (mediante reflexión) y actúa según lo que encuentre. Las clases anotadas dentro del paquete base se registran como <b>beans</b> (<i>component scan</i>), y la <b>autoconfiguración</b> activa configuración adicional según los starters presentes. Si quieres ver qué se configuró y por qué, agrega <code>debug=true</code> a tu configuración y lee el informe de condiciones al arrancar.</p>`],
["Arranque y configuración",`<ul><li><b>@SpringBootApplication</b>: la clase principal (= @Configuration + @EnableAutoConfiguration + @ComponentScan).</li><li><b>@Configuration</b>: clase que declara beans.</li><li><b>@Bean</b>: método que devuelve un objeto que Spring registra como bean (útil para clases de terceros).</li><li><b>@Profile("dev")</b>: el bean/clase solo existe con ese perfil activo.</li><li><b>@Value("\${app.nombre}")</b>: inyecta un valor de la configuración.</li><li><b>@ConfigurationProperties(prefix = "app")</b>: enlaza un grupo de propiedades a una clase (lo verás en la última lección de esta épica).</li></ul>`],
["Estereotipos: registrar clases como beans",`<ul><li><b>@Component</b>: bean genérico.</li><li><b>@Service</b>: capa de negocio.</li><li><b>@Repository</b>: capa de datos; además traduce excepciones de persistencia a las de Spring.</li><li><b>@Controller</b>: controlador que devuelve vistas (HTML).</li><li><b>@RestController</b>: controlador de API; es @Controller + <b>@ResponseBody</b>, así que el valor devuelto se escribe como JSON en el cuerpo de la respuesta.</li></ul>
<p>Todas (menos @RestController/@Controller en su función web) son @Component con distinto significado: usarlas correctamente documenta tu arquitectura.</p>`],
["Inyección",`<pre><code>@Service
public class PedidoServicio {
    private final ClienteService clientes;
    private final Notificador notificador;

    // Con un único constructor, @Autowired NO es necesario:
    public PedidoServicio(ClienteService clientes,
                          @Qualifier("sms") Notificador notificador) {
        this.clientes = clientes;
        this.notificador = notificador;
    }
}</code></pre>
<ul><li><b>@Autowired</b>: pide una inyección (ponlo solo si hay varios constructores, y evítalo en campos).</li><li><b>@Qualifier("nombre")</b>: elige un bean concreto cuando hay varios del mismo tipo.</li><li><b>@Primary</b>: marca el bean por defecto.</li><li><b>@Scope("prototype")</b>: cambia el alcance (por defecto singleton).</li></ul>`],
["Anotaciones web",`<pre><code>@RestController
@RequestMapping("/api/v1/productos")              // prefijo común de la clase
public class ProductoController {

    @GetMapping                                    // GET /api/v1/productos?nombre=ta&amp;page=0
    public List&lt;Producto&gt; buscar(
            @RequestParam(required = false) String nombre,
            @RequestParam(defaultValue = "0") int page) { ... }

    @GetMapping("/{id}")                           // GET /api/v1/productos/5
    public Producto uno(@PathVariable Long id) { ... }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)            // responde 201
    public Producto crear(@RequestBody Producto p) { ... }

    @PutMapping("/{id}")
    public Producto reemplazar(@PathVariable Long id, @RequestBody Producto p) { ... }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)         // responde 204
    public void borrar(@PathVariable Long id) { ... }

    @GetMapping("/idioma")
    public String idioma(@RequestHeader("Accept-Language") String idioma) { return idioma; }
}</code></pre>
<ul><li><b>@RequestMapping</b>: ruta (y método) genérico; <b>@GetMapping, @PostMapping, @PutMapping, @PatchMapping, @DeleteMapping</b> son atajos.</li><li><b>@PathVariable</b>: valor dentro de la ruta (<code>/{id}</code>). <b>@RequestParam</b>: parámetro de la query (<code>?page=0</code>). <b>@RequestBody</b>: el JSON del cuerpo convertido a objeto. <b>@RequestHeader</b>: un header.</li><li><b>@ResponseStatus</b>: código HTTP fijo. Para control total usa <code>ResponseEntity</code> (código + headers + cuerpo).</li><li><b>@CrossOrigin</b>: permite llamadas desde otro origen en el navegador (CORS).</li></ul>`],
["Otras anotaciones que irás usando",`<ul><li><b>Validación</b> (Épica 9): <code>@Valid</code>, <code>@NotBlank</code>, <code>@NotNull</code>, <code>@Size</code>, <code>@Email</code>, <code>@Min</code>.</li><li><b>Errores</b> (Épica 9): <code>@RestControllerAdvice</code> y <code>@ExceptionHandler</code>.</li><li><b>Datos</b> (Épica 10): <code>@Entity</code>, <code>@Id</code>, <code>@Table</code>, <code>@Transactional</code>.</li><li><b>Ciclo de vida</b>: <code>@PostConstruct</code>, <code>@PreDestroy</code>. <b>Tareas</b>: <code>@Scheduled</code> (con <code>@EnableScheduling</code>). <b>Eventos</b>: <code>@EventListener</code>.</li><li><b>Pruebas</b> (Épica 12): <code>@SpringBootTest</code>, <code>@WebMvcTest</code> y la anotación para simular beans (<code>@MockitoBean</code> en versiones recientes, antes <code>@MockBean</code>).</li><li><b>Lombok</b> (opcional): <code>@Getter</code>, <code>@Data</code>, <code>@Slf4j</code>… generan código repetitivo.</li></ul>`],
["Práctica",`<ol><li>Crea un <code>ProductoController</code> con los cinco endpoints del ejemplo usando un servicio y repositorio en memoria.</li><li>Prueba cada anotación de entrada: un <code>@PathVariable</code>, dos <code>@RequestParam</code> (uno opcional y uno con valor por defecto), un <code>@RequestBody</code> y un <code>@RequestHeader</code>.</li><li>Declara un bean con <code>@Bean</code> en una clase <code>@Configuration</code> (por ejemplo un <code>Clock</code>) e inyéctalo en un servicio.</li><li>Haz dos implementaciones de una interfaz y elige entre ellas con <code>@Primary</code> y <code>@Qualifier</code>.</li><li>Escribe un <code>@PostConstruct</code> que cargue datos de ejemplo al arrancar.</li><li>Agrega <code>debug=true</code>, arranca y busca en el informe la autoconfiguración del servidor web.</li><li>Haz una tabla propia (anotación → qué hace → ejemplo) con las 20 que más uses.</li></ol>`],
["Errores comunes",`<ul><li><b>@Controller en lugar de @RestController</b>: Spring busca una vista HTML y falla o devuelve la página de error.</li><li><b>Olvidar @RequestBody</b>: los campos del JSON llegan vacíos o null.</li><li><b>Mismo mapeo duplicado</b> en dos métodos: <i>Ambiguous mapping</i> al arrancar.</li><li><b>@PathVariable con otro nombre</b> que la ruta sin indicarlo: usa <code>@PathVariable("id")</code> o el mismo nombre.</li><li><b>Imports incorrectos</b> (por ejemplo <code>@GetMapping</code> de otro paquete): usa <code>org.springframework.web.bind.annotation</code>.</li><li><b>Anotar una interfaz o clase fuera del paquete base</b> y esperar que se registre.</li><li><b>Abusar de @Autowired en campos</b>.</li></ul>`],
["Cómo sé que lo domino",`<ul><li>Distingo @Component, @Service, @Repository y @RestController.</li><li>Uso @PathVariable, @RequestParam, @RequestBody y @RequestHeader sin consultar.</li><li>Sé cuándo @Autowired es innecesario.</li><li>Explico cómo Spring descubre y conecta los beans.</li></ul>`]
]},
"7-4":{e:"8. Spring Boot básico",t:"Configuración con application.yml y perfiles (dev/prod)",s:[
["Dónde se configura",`<p>Spring Boot lee la configuración de <code>src/main/resources</code>. Puedes usar <code>application.properties</code> o <code>application.yml</code> (mismo contenido, distinta sintaxis; no mezcles ambos en el mismo proyecto). YAML es más legible al anidar:</p>
<pre><code># application.properties
server.port=8080
spring.application.name=tienda
logging.level.com.miempresa=DEBUG

# application.yml (equivalente)
server:
  port: 8080
spring:
  application:
    name: tienda
logging:
  level:
    com.miempresa: DEBUG</code></pre>
<p>Reglas de YAML: la <b>indentación con espacios</b> (nunca tabuladores) define la jerarquía, los dos puntos van seguidos de un espacio y las listas usan guiones. Un error de sangría rompe el arranque. Propiedades que conocerás: <code>server.port</code>, <code>spring.application.name</code>, <code>logging.level.*</code>, y más adelante <code>spring.datasource.*</code> y <code>spring.jpa.*</code>.</p>`],
["Leer tus propias propiedades",`<pre><code>app:
  nombre: Tienda Demo
  max-intentos: 3
  contacto:
    email: soporte@tienda.com</code></pre>
<p><b>Opción 1: @Value</b> para un valor suelto:</p>
<pre><code>@Value("\${app.nombre}")
private String nombre;

@Value("\${app.max-intentos:5}")     // 5 es el valor por defecto si no existe
private int maxIntentos;</code></pre>
<p><b>Opción 2 (recomendada): @ConfigurationProperties</b>, agrupa y tipa todas las propiedades de un prefijo:</p>
<pre><code>@ConfigurationProperties(prefix = "app")
public record AppProperties(String nombre, int maxIntentos, Contacto contacto) {
    public record Contacto(String email) { }
}

// En la clase principal, para registrarla:
@SpringBootApplication
@ConfigurationPropertiesScan
public class TiendaApplication { ... }

// Uso por inyección:
@RestController
public class InfoController {
    private final AppProperties props;
    public InfoController(AppProperties props) { this.props = props; }

    @GetMapping("/info")
    public AppProperties info() { return props; }
}</code></pre>
<p>El <b>relaxed binding</b> hace que <code>max-intentos</code> (YAML) se enlace con <code>maxIntentos</code> (Java). Las propiedades personalizadas no se validan solas: puedes añadir <code>@Validated</code> y anotaciones como <code>@NotBlank</code> para fallar al arrancar si falta algo esencial.</p>`],
["Perfiles: dev, prod y más",`<p>Un <b>perfil</b> es un conjunto de configuración para un entorno: tu máquina (dev), pruebas (test) o producción (prod). Lo normal es tener un archivo base y uno por perfil:</p>
<pre><code>src/main/resources/
 ├─ application.yml          valores comunes (se carga siempre)
 ├─ application-dev.yml      se suma/sobrescribe cuando el perfil "dev" está activo
 └─ application-prod.yml     idem para "prod"</code></pre>
<pre><code># application.yml
spring:
  application:
    name: tienda
  profiles:
    active: dev            # perfil por defecto

# application-dev.yml
server:
  port: 8080
logging:
  level:
    com.miempresa: DEBUG

# application-prod.yml
server:
  port: 80
logging:
  level:
    com.miempresa: INFO
app:
  nombre: Tienda</code></pre>
<p><b>Cómo activar un perfil</b> (por orden de uso real):</p>
<ul><li>Variable de entorno: <code>SPRING_PROFILES_ACTIVE=prod</code> (lo habitual en servidores y Docker).</li><li>Argumento: <code>java -jar tienda.jar --spring.profiles.active=prod</code>.</li><li>En IntelliJ: <b>Run → Edit Configurations → Active profiles</b>.</li><li>En el yml con <code>spring.profiles.active</code> (solo como valor por defecto de desarrollo).</li></ul>
<p>También puedes condicionar beans: <code>@Profile("dev")</code> sobre una clase o método <code>@Bean</code> (por ejemplo cargar datos de ejemplo solo en dev). Y existe la variante de un solo archivo con documentos separados por <code>---</code> y <code>spring.config.activate.on-profile: prod</code>, pero los archivos separados son más claros.</p>`],
["Secretos, variables de entorno y precedencia",`<p><b>Nunca guardes contraseñas ni claves reales en el repositorio.</b> Referencia variables de entorno con placeholders y, si quieres, un valor por defecto solo para desarrollo:</p>
<pre><code>spring:
  datasource:
    url: \${DB_URL:jdbc:postgresql://localhost:5432/tienda}
    username: \${DB_USER:app_tienda}
    password: \${DB_PASSWORD}       # sin valor por defecto: en prod debe existir</code></pre>
<p>Spring también mapea variables de entorno automáticamente: <code>SPRING_DATASOURCE_PASSWORD</code> equivale a <code>spring.datasource.password</code>, y <code>APP_MAX_INTENTOS</code> a <code>app.max-intentos</code>.</p>
<p><b>Orden de precedencia</b> (de mayor a menor, simplificado): argumentos de línea de comandos → variables de entorno → <code>application-{perfil}.yml</code> → <code>application.yml</code>. Lo más externo gana, así puedes cambiar valores sin recompilar. Un <code>application-prod.yml</code> colocado junto al jar también lo detecta Spring.</p>`],
["Práctica",`<ol><li>Convierte el <code>application.properties</code> generado en <code>application.yml</code>.</li><li>Define <code>app.nombre</code> y <code>app.max-intentos</code>, crea el record <code>AppProperties</code> y un endpoint <code>GET /info</code> que lo devuelva.</li><li>Crea <code>application-dev.yml</code> y <code>application-prod.yml</code> con distinto puerto, nivel de log y <code>app.nombre</code>.</li><li>Ejecuta con cada perfil desde IntelliJ (Active profiles) y comprueba que <code>/info</code> y el puerto cambian.</li><li>Genera el jar y ejecútalo con <code>SPRING_PROFILES_ACTIVE=prod java -jar ...</code> (en Windows: <code>set SPRING_PROFILES_ACTIVE=prod</code> antes).</li><li>Sobrescribe un valor con argumento: <code>--app.max-intentos=10</code> y confirma que gana.</li><li>Crea un bean con <code>@Profile("dev")</code> que imprima "Cargando datos de ejemplo" y verifica que solo aparece en dev.</li><li>Agrega un placeholder con valor por defecto y luego con variable de entorno, y compruébalo.</li></ol>`],
["Errores comunes",`<ul><li><b>Tabuladores o sangría incorrecta</b> en YAML: error de parseo al arrancar.</li><li><b>Archivo mal nombrado</b>: debe ser exactamente <code>application-dev.yml</code> (con guion).</li><li><b>Olvidar activar el perfil</b> y creer que se leyó la configuración de prod.</li><li><b>Tener properties y yml</b> a la vez con valores contradictorios.</li><li><b>Could not resolve placeholder 'X'</b>: la propiedad o variable de entorno no existe y no hay valor por defecto.</li><li><b>@ConfigurationProperties que llega vacío</b>: falta <code>@ConfigurationPropertiesScan</code> o <code>@EnableConfigurationProperties</code>, o el prefijo no coincide.</li><li><b>Subir secretos a Git</b>: si pasa, rótalos (borrar el commit no basta).</li><li><b>Mismo puerto en dev y otra aplicación</b>: Port already in use.</li></ul>`],
["Cómo sé que lo domino",`<ul><li>Escribo configuración en YAML sin errores de sangría.</li><li>Leo propiedades con @Value y con @ConfigurationProperties.</li><li>Creo perfiles dev y prod y sé activarlos de tres maneras.</li><li>Manejo secretos con variables de entorno y conozco la precedencia.</li></ul>`]
]},
"8-0":{e:"9. API REST completa (CRUD)",t:"Endpoints GET, POST, PUT y DELETE",s:[
["El contrato de la API",`<p>Vamos a completar el CRUD de <code>clientes</code> siguiendo las reglas REST de la Épica 7. Este es el contrato que vamos a implementar:</p>
<pre><code>Operación         Método   URI                       Éxito              Error
Listar            GET      /api/v1/clientes          200 + lista        -
Obtener uno       GET      /api/v1/clientes/{id}     200 + objeto       404
Crear             POST     /api/v1/clientes          201 + Location    400
Reemplazar        PUT      /api/v1/clientes/{id}     200 + objeto       404
Eliminar          DELETE   /api/v1/clientes/{id}     204 sin cuerpo     404</code></pre>
<p>Partimos del proyecto de la Épica 8 (controller, service y repository en memoria). El prefijo <code>/api/v1</code> versiona la API: si algún día cambias el contrato de forma incompatible, publicas <code>/api/v2</code> sin romper a los clientes actuales.</p>`],
["Modelo, excepción y repositorio",`<pre><code>// model/Cliente.java
public record Cliente(Long id, String nombre, String email, String ciudad) {
    public Cliente conId(Long nuevoId) {            // copia con otro id (los records son inmutables)
        return new Cliente(nuevoId, nombre, email, ciudad);
    }
}

// exception/RecursoNoEncontradoException.java
@ResponseStatus(HttpStatus.NOT_FOUND)               // por ahora basta para devolver 404
public class RecursoNoEncontradoException extends RuntimeException {
    public RecursoNoEncontradoException(String mensaje) { super(mensaje); }
}

// repository/ClienteRepository.java
@Repository
public class ClienteRepository {
    private final Map&lt;Long, Cliente&gt; datos = new ConcurrentHashMap&lt;&gt;();
    private final AtomicLong secuencia = new AtomicLong();

    public List&lt;Cliente&gt; buscarTodos() { return new ArrayList&lt;&gt;(datos.values()); }
    public Optional&lt;Cliente&gt; buscarPorId(long id) { return Optional.ofNullable(datos.get(id)); }
    public boolean existe(long id) { return datos.containsKey(id); }

    public Cliente guardar(Cliente c) {
        Long id = (c.id() != null) ? c.id() : secuencia.incrementAndGet();
        Cliente guardado = c.conId(id);
        datos.put(id, guardado);
        return guardado;
    }

    public boolean borrar(long id) { return datos.remove(id) != null; }
}</code></pre>`],
["El servicio",`<pre><code>@Service
public class ClienteService {
    private final ClienteRepository repo;
    public ClienteService(ClienteRepository repo) { this.repo = repo; }

    public List&lt;Cliente&gt; listar() { return repo.buscarTodos(); }

    public Cliente obtener(long id) {
        return repo.buscarPorId(id)
                .orElseThrow(() -&gt; new RecursoNoEncontradoException("Cliente " + id + " no existe"));
    }

    public Cliente crear(Cliente c) {
        if (c.nombre() == null || c.nombre().isBlank()) {
            throw new IllegalArgumentException("El nombre es obligatorio");
        }
        return repo.guardar(c.conId(null));        // ignora cualquier id que mande el cliente
    }

    public Cliente actualizar(long id, Cliente datos) {
        if (!repo.existe(id)) throw new RecursoNoEncontradoException("Cliente " + id + " no existe");
        return repo.guardar(datos.conId(id));      // el id sale de la URL, no del cuerpo
    }

    public void eliminar(long id) {
        if (!repo.borrar(id)) throw new RecursoNoEncontradoException("Cliente " + id + " no existe");
    }
}</code></pre>
<p>Fíjate en <code>conId(null)</code> al crear: si el JSON trae un <code>id</code>, sin esa línea un cliente podría <b>sobrescribir un registro ajeno</b>. Es un error clásico (<i>mass assignment</i>) que la lección de DTOs resuelve de forma estructural.</p>`],
["El controller",`<pre><code>@RestController
@RequestMapping("/api/v1/clientes")
public class ClienteController {
    private final ClienteService servicio;
    public ClienteController(ClienteService servicio) { this.servicio = servicio; }

    @GetMapping
    public List&lt;Cliente&gt; listar() { return servicio.listar(); }

    @GetMapping("/{id}")
    public Cliente obtener(@PathVariable long id) { return servicio.obtener(id); }

    @PostMapping
    public ResponseEntity&lt;Cliente&gt; crear(@RequestBody Cliente c) {
        Cliente creado = servicio.crear(c);
        URI ubicacion = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}").buildAndExpand(creado.id()).toUri();       // /api/v1/clientes/3
        return ResponseEntity.created(ubicacion).body(creado);            // 201 + header Location
    }

    @PutMapping("/{id}")
    public Cliente reemplazar(@PathVariable long id, @RequestBody Cliente c) {
        return servicio.actualizar(id, c);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void eliminar(@PathVariable long id) { servicio.eliminar(id); }
}</code></pre>
<p>Import útil: <code>org.springframework.web.servlet.support.ServletUriComponentsBuilder</code>.</p>`],
["Probar el ciclo completo",`<pre><code>curl -i -X POST http://localhost:8080/api/v1/clientes -H "Content-Type: application/json" -d '{"nombre":"Ana","email":"ana@correo.com","ciudad":"Lima"}'
curl -i http://localhost:8080/api/v1/clientes
curl -i http://localhost:8080/api/v1/clientes/1
curl -i -X PUT http://localhost:8080/api/v1/clientes/1 -H "Content-Type: application/json" -d '{"nombre":"Ana Ruiz","email":"ana@correo.com","ciudad":"Cusco"}'
curl -i -X DELETE http://localhost:8080/api/v1/clientes/1
curl -i http://localhost:8080/api/v1/clientes/1</code></pre>
<p>Resultado esperado: 201 (con <code>Location</code>), 200, 200, 200 con la ciudad cambiada, 204 y finalmente 404. Hazlo mejor aún con una colección de Postman y tests para cada paso.</p>`],
["Decisiones de diseño",`<ul><li><b>PUT reemplaza el recurso completo</b>: los campos que no envíes quedan vacíos. Para cambiar solo algunos campos se usa <b>PATCH</b> (lo practicarás).</li><li><b>Idempotencia</b>: repetir un PUT deja el mismo resultado. Repetir un DELETE: la segunda vez el recurso ya no existe; devolver 404 es válido (y lo usual), también 204. Lo importante es ser consistente.</li><li><b>PUT sobre un id inexistente</b>: aquí devolvemos 404; otras APIs lo crean (<i>upsert</i>). Decide y documenta.</li><li><b>El id de la URL manda</b>, no el del cuerpo.</li><li><b>201 + Location</b> al crear permite al cliente saber dónde está el nuevo recurso.</li><li><b>Consumes/produces</b>: puedes restringir con <code>@PostMapping(consumes = "application/json")</code>; por defecto Spring ya produce JSON.</li></ul>`],
["Práctica",`<ol><li>Implementa el CRUD completo de <code>Cliente</code> y pruébalo con la secuencia de curl anterior y con Postman.</li><li>Construye lo mismo para <code>Producto</code> (nombre, precio, stock) siguiendo el mismo patrón en sus tres capas.</li><li>Agrega <code>PATCH /{id}</code> que actualice solo los campos no nulos del cuerpo.</li><li>Intenta un POST con un <code>id</code> en el JSON y comprueba que se ignora; quita <code>conId(null)</code> y observa el problema.</li><li>Agrega <code>HEAD</code> o <code>GET /count</code> que devuelva cuántos clientes hay.</li><li>Escribe pruebas JUnit del <code>ClienteService</code>: crear, actualizar inexistente (espera la excepción) y eliminar dos veces.</li></ol>`],
["Errores comunes",`<ul><li><b>405 Method Not Allowed</b>: el método HTTP no coincide con el mapeo.</li><li><b>Campos null</b> al recibir: falta <code>@RequestBody</code> o el JSON usa nombres distintos.</li><li><b>415 Unsupported Media Type</b>: falta <code>Content-Type: application/json</code>.</li><li><b>Devolver 200 al crear</b> en lugar de 201 con Location.</li><li><b>404 devuelto como 500</b>: la excepción no tiene @ResponseStatus ni un handler (se completa en la lección de errores).</li><li><b>Confiar en el id del cuerpo</b> en lugar del de la URL.</li></ul>`],
["Cómo sé que lo domino",`<ul><li>Implemento un CRUD completo con los códigos HTTP correctos.</li><li>Devuelvo 201 con Location al crear y 204 al eliminar.</li><li>Explico PUT vs PATCH e idempotencia de DELETE.</li><li>Sé por qué el id debe venir de la URL.</li></ul>`]
]},
"8-1":{e:"9. API REST completa (CRUD)",t:"DTOs y mapeo (MapStruct)",s:[
["Por qué usar DTOs",`<p>Un <b>DTO</b> (Data Transfer Object) es la clase que define lo que <b>entra y sale por la API</b>, separada de tu modelo interno (entidad). Exponer la entidad directamente es un error común con consecuencias reales:</p>
<ul><li><b>Seguridad</b>: se filtran campos internos (contraseñas, roles, banderas) o el cliente puede <b>enviarlos</b> y modificarlos (<i>mass assignment</i>: mandar <code>"rol":"ADMIN"</code> o <code>"id":1</code>).</li><li><b>Acoplamiento</b>: renombrar una columna o cambiar una relación rompe el contrato público.</li><li><b>Distintas formas</b>: al crear no hay id; al responder sí; en un listado quizás solo 3 campos.</li><li><b>Problemas técnicos</b>: relaciones bidireccionales que generan bucles infinitos al convertir a JSON y carga perezosa (JPA).</li></ul>
<pre><code>JSON entrante → ClienteRequest ─(mapper)→ Cliente (entidad) → servicio → repositorio
JSON saliente ← ClienteResponse ←(mapper)─ Cliente</code></pre>`],
["DTOs con records",`<p>Los <code>record</code> son perfectos como DTO: inmutables y sin código repetitivo. Conviene un DTO distinto por caso de uso:</p>
<pre><code>public record ClienteRequest(String nombre, String email, String ciudad) { }

public record ClienteResponse(Long id, String nombre, String email, String ciudad, LocalDateTime creadoEn) { }</code></pre>
<p>La entidad pasa a ser una <b>clase normal</b> (no record), porque en la Épica 10 será una entidad JPA, y JPA exige constructor vacío y campos modificables:</p>
<pre><code>public class Cliente {
    private Long id;
    private String nombre;
    private String email;
    private String ciudad;
    private LocalDateTime creadoEn;

    public Cliente() { }
    // getters y setters  (IntelliJ: Alt+Insert → Getter and Setter)
}</code></pre>
<p>Adapta el repositorio: <code>guardar</code> asigna el id con <code>setId(...)</code> y, al crear, <code>setCreadoEn(LocalDateTime.now())</code>.</p>
<p>Mapeo manual (válido en proyectos pequeños): <code>public static ClienteResponse desde(Cliente c) { return new ClienteResponse(c.getId(), ...); }</code>. Se vuelve tedioso y propenso a errores al crecer: ahí entra MapStruct.</p>`],
["MapStruct: configuración",`<p><b>MapStruct</b> genera el código de mapeo <b>en tiempo de compilación</b> (sin reflexión: rápido y verificable). Agrega al <code>pom.xml</code> (usa la última versión estable 1.6.x):</p>
<pre><code>&lt;properties&gt;
    &lt;mapstruct.version&gt;1.6.3&lt;/mapstruct.version&gt;
&lt;/properties&gt;

&lt;dependencies&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;org.mapstruct&lt;/groupId&gt;
        &lt;artifactId&gt;mapstruct&lt;/artifactId&gt;
        &lt;version&gt;\${mapstruct.version}&lt;/version&gt;
    &lt;/dependency&gt;
&lt;/dependencies&gt;

&lt;build&gt;
    &lt;plugins&gt;
        &lt;plugin&gt;
            &lt;groupId&gt;org.apache.maven.plugins&lt;/groupId&gt;
            &lt;artifactId&gt;maven-compiler-plugin&lt;/artifactId&gt;
            &lt;configuration&gt;
                &lt;annotationProcessorPaths&gt;
                    &lt;path&gt;
                        &lt;groupId&gt;org.mapstruct&lt;/groupId&gt;
                        &lt;artifactId&gt;mapstruct-processor&lt;/artifactId&gt;
                        &lt;version&gt;\${mapstruct.version}&lt;/version&gt;
                    &lt;/path&gt;
                &lt;/annotationProcessorPaths&gt;
            &lt;/configuration&gt;
        &lt;/plugin&gt;
    &lt;/plugins&gt;
&lt;/build&gt;</code></pre>
<p>Si usas <b>Lombok</b>, hay que declarar <code>lombok</code> y <code>lombok-mapstruct-binding</code> <b>antes</b> de mapstruct-processor dentro de <code>annotationProcessorPaths</code>. Tras editar, recarga Maven.</p>`],
["Definir el mapper",`<pre><code>@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.ERROR)
public interface ClienteMapper {

    ClienteResponse toResponse(Cliente cliente);

    List&lt;ClienteResponse&gt; toResponseList(List&lt;Cliente&gt; clientes);

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "creadoEn", ignore = true)
    Cliente toEntity(ClienteRequest request);

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "creadoEn", ignore = true)
    void actualizar(ClienteRequest request, @MappingTarget Cliente cliente);   // actualiza un objeto existente
}</code></pre>
<ul><li><code>componentModel = "spring"</code> genera una clase <code>@Component</code> que puedes inyectar.</li><li>Los campos con el <b>mismo nombre</b> se mapean solos; <code>@Mapping</code> cubre las excepciones: <code>@Mapping(source = "direccion.ciudad", target = "ciudad")</code> para anidados, <code>ignore = true</code> para omitir.</li><li><code>unmappedTargetPolicy = ERROR</code> hace fallar la compilación si olvidas mapear un campo destino: te protege cuando agregas columnas nuevas.</li><li>Para cálculos: un <code>default</code> method en la interfaz, <code>expression = "java(...)"</code> o <code>@Named</code> con <code>qualifiedByName</code>.</li><li>Mira el resultado generado en <code>target/generated-sources/annotations/.../ClienteMapperImpl.java</code>: es código Java normal.</li></ul>`],
["Usar el mapper en el controller",`<pre><code>@RestController
@RequestMapping("/api/v1/clientes")
public class ClienteController {
    private final ClienteService servicio;
    private final ClienteMapper mapper;

    public ClienteController(ClienteService servicio, ClienteMapper mapper) {
        this.servicio = servicio;
        this.mapper = mapper;
    }

    @GetMapping
    public List&lt;ClienteResponse&gt; listar() {
        return mapper.toResponseList(servicio.listar());
    }

    @PostMapping
    public ResponseEntity&lt;ClienteResponse&gt; crear(@RequestBody ClienteRequest request) {
        Cliente creado = servicio.crear(mapper.toEntity(request));
        URI ubicacion = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}").buildAndExpand(creado.getId()).toUri();
        return ResponseEntity.created(ubicacion).body(mapper.toResponse(creado));
    }

    @PutMapping("/{id}")
    public ClienteResponse reemplazar(@PathVariable long id, @RequestBody ClienteRequest request) {
        return mapper.toResponse(servicio.actualizar(id, mapper.toEntity(request)));
    }
}</code></pre>
<p>El <b>servicio trabaja con entidades</b> y no conoce los DTOs; el controller es la frontera que traduce JSON ↔ dominio. Así, aunque el cliente envíe <code>"id": 99</code> en el JSON, <code>ClienteRequest</code> no tiene ese campo y simplemente se ignora.</p>`],
["Práctica",`<ol><li>Convierte <code>Cliente</code> en clase y crea <code>ClienteRequest</code> y <code>ClienteResponse</code>.</li><li>Configura MapStruct, compila y abre <code>ClienteMapperImpl</code> para ver qué generó.</li><li>Cambia el controller para que use solo DTOs y verifica con Postman que el id enviado en un POST se ignora.</li><li>Agrega un campo <code>telefono</code> a la entidad sin tocar el mapper: ¿qué pasa con <code>unmappedTargetPolicy = ERROR</code>? Corrígelo.</li><li>Crea un <code>ClienteResumenResponse</code> (solo id y nombre) para el listado y un método extra en el mapper.</li><li>Haz lo mismo para <code>Producto</code>, incluyendo un campo calculado (por ejemplo <code>precioConIva</code>) con un <code>default</code> method.</li></ol>`],
["Errores comunes",`<ul><li><b>NullPointerException con el mapper</b>: no se generó la implementación; falta el annotation processor o hay que recompilar (Build → Rebuild Project).</li><li><b>Unmapped target properties</b>: te falta mapear u omitir un campo destino.</li><li><b>Orden de processors con Lombok</b>: el binding debe ir antes de mapstruct-processor.</li><li><b>Devolver la entidad en lugar del DTO</b> en algún endpoint "por rapidez".</li><li><b>Un único DTO para todo</b> (crear, actualizar, responder): termina con campos que no aplican y validaciones imposibles.</li><li><b>Mapear dentro del servicio y del controller a la vez</b>: elige una frontera.</li></ul>`],
["Cómo sé que lo domino",`<ul><li>Explico qué problemas evita un DTO (mass assignment, acoplamiento).</li><li>Diseño DTOs de entrada y salida distintos con records.</li><li>Configuro MapStruct y uso @Mapping, @MappingTarget e ignore.</li><li>Sé dónde vive cada responsabilidad (controller mapea, servicio usa entidades).</li></ul>`]
]},
"8-2":{e:"9. API REST completa (CRUD)",t:"Validaciones (@Valid, Bean Validation)",s:[
["Por qué validar",`<p>Nunca confíes en los datos que llegan por HTTP. Validar en el borde de tu aplicación evita guardar basura y protege contra errores y abusos. <b>Bean Validation</b> (especificación Jakarta; implementación Hibernate Validator) permite declarar las reglas con <b>anotaciones</b> sobre los DTOs, en lugar de llenar de <code>if</code> tu código. Necesitas el starter (en Initializr: <b>Validation</b>):</p>
<pre><code>&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-validation&lt;/artifactId&gt;
&lt;/dependency&gt;</code></pre>
<p>Los imports son de <code>jakarta.validation.constraints.*</code> (no <code>javax</code>).</p>`],
["Anotaciones de validación",`<ul><li><b>@NotNull</b>: no puede ser null. <b>@NotEmpty</b>: no null ni vacío (String, colección, array). <b>@NotBlank</b>: texto con al menos un carácter que no sea espacio (solo Strings).</li><li><b>@Size(min, max)</b>: longitud de texto o tamaño de colección.</li><li><b>@Min / @Max</b>: valores enteros. <b>@Positive / @PositiveOrZero / @Negative</b>. <b>@DecimalMin / @DecimalMax / @Digits</b> para BigDecimal.</li><li><b>@Email</b>: formato de correo. <b>@Pattern(regexp)</b>: expresión regular.</li><li><b>@Past / @PastOrPresent / @Future / @FutureOrPresent</b>: fechas. <b>@AssertTrue / @AssertFalse</b>.</li><li><b>@Valid</b>: indica que se valide también el objeto anidado o los elementos de una lista.</li></ul>
<p>Nota: casi todas consideran <code>null</code> como válido (excepto @NotNull/@NotEmpty/@NotBlank); por eso se combinan, por ejemplo <code>@NotBlank @Email</code>.</p>`],
["Validar un DTO",`<pre><code>public record ClienteRequest(
        @NotBlank(message = "El nombre es obligatorio")
        @Size(max = 100, message = "El nombre no puede superar 100 caracteres")
        String nombre,

        @NotBlank(message = "El email es obligatorio")
        @Email(message = "El email no tiene un formato válido")
        String email,

        @Size(max = 80, message = "La ciudad no puede superar 80 caracteres")
        String ciudad,

        @NotNull(message = "La fecha de nacimiento es obligatoria")
        @Past(message = "La fecha de nacimiento debe estar en el pasado")
        LocalDate fechaNacimiento
) { }

public record ProductoRequest(
        @NotBlank String nombre,
        @NotNull @DecimalMin(value = "0.01", message = "El precio debe ser mayor que 0") BigDecimal precio,
        @Min(value = 0, message = "El stock no puede ser negativo") Integer stock,
        @Pattern(regexp = "[A-Z]{3}-[0-9]{4}", message = "Código con formato ABC-1234") String codigo,
        @NotEmpty(message = "Debe tener al menos una categoría") List&lt;@NotBlank String&gt; categorias
) { }</code></pre>
<p>Para activar la validación en el controller agrega <b>@Valid</b> junto a <code>@RequestBody</code>:</p>
<pre><code>@PostMapping
public ResponseEntity&lt;ClienteResponse&gt; crear(@Valid @RequestBody ClienteRequest request) { ... }</code></pre>
<p>Si hay errores, Spring no ejecuta el método y lanza <code>MethodArgumentNotValidException</code> → responde <b>400</b>. En la próxima lección personalizas esa respuesta. Para validar objetos anidados, marca el campo con <code>@Valid</code>: <code>@Valid DireccionRequest direccion</code>, o <code>@Valid List&lt;ItemRequest&gt; items</code>.</p>`],
["Validar parámetros de ruta y query",`<pre><code>@GetMapping("/{id}")
public ClienteResponse obtener(@PathVariable @Positive Long id) { ... }

@GetMapping
public List&lt;ClienteResponse&gt; listar(@RequestParam(defaultValue = "20") @Min(1) @Max(100) int size) { ... }</code></pre>
<p>En versiones recientes de Spring (6.1 en adelante) basta con anotar los parámetros: si algo falla se lanza <code>HandlerMethodValidationException</code> (400). En versiones antiguas había que poner <code>@Validated</code> a nivel de clase y la excepción era <code>ConstraintViolationException</code>. Conviene manejar ambas en tu manejador global.</p>`],
["Validaciones propias",`<p>Cuando las anotaciones estándar no alcanzan, creas la tuya:</p>
<pre><code>@Target({ElementType.FIELD, ElementType.PARAMETER, ElementType.RECORD_COMPONENT})
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = TelefonoValidator.class)
public @interface Telefono {
    String message() default "Teléfono no válido (9 dígitos)";
    Class&lt;?&gt;[] groups() default {};
    Class&lt;? extends Payload&gt;[] payload() default {};
}

public class TelefonoValidator implements ConstraintValidator&lt;Telefono, String&gt; {
    @Override
    public boolean isValid(String valor, ConstraintValidatorContext contexto) {
        return valor == null || valor.matches("[0-9]{9}");     // null lo controla @NotNull si hace falta
    }
}

// Uso:
public record ClienteRequest(..., @Telefono String telefono) { }</code></pre>
<p>Para reglas que cruzan varios campos (fecha de fin posterior a la de inicio) se anota la clase o se usa un método <code>@AssertTrue</code>.</p>`],
["Dónde va cada validación",`<ul><li><b>Bean Validation en el DTO</b>: forma y formato de los datos (obligatorio, longitud, rango, formato).</li><li><b>Servicio</b>: reglas de negocio que dependen del estado (email ya registrado → 409, saldo suficiente).</li><li><b>Base de datos</b>: NOT NULL, UNIQUE, CHECK y FK como última defensa.</li></ul>
<p>Mensajes personalizables con <code>message = "..."</code> o, para internacionalizar, claves entre llaves (<code>message = "{cliente.nombre.obligatorio}"</code>) definidas en <code>ValidationMessages.properties</code>.</p>
<p><b>Probar validaciones sin levantar Spring:</b></p>
<pre><code>Validator validator = Validation.buildDefaultValidatorFactory().getValidator();
Set&lt;ConstraintViolation&lt;ClienteRequest&gt;&gt; errores =
        validator.validate(new ClienteRequest("", "no-es-email", null, null));
assertEquals(4, errores.size());</code></pre>`],
["Práctica",`<ol><li>Agrega el starter de validación y anota <code>ClienteRequest</code> y <code>ProductoRequest</code>.</li><li>Pon <code>@Valid</code> en los POST y PUT y prueba con Postman JSON inválidos: nombre vacío, email sin @, precio 0, código mal formado.</li><li>Observa la respuesta 400 por defecto y qué información trae.</li><li>Valida <code>@PathVariable</code> con <code>@Positive</code> y prueba <code>/clientes/-5</code>.</li><li>Crea la anotación propia <code>@Telefono</code> y úsala.</li><li>Escribe tests JUnit con <code>Validator</code> para cada regla del DTO (casos válidos e inválidos).</li><li>Agrega la regla de negocio "email único" en el servicio (lanza una excepción propia).</li></ol>`],
["Errores comunes",`<ul><li><b>No pasa nada al enviar datos inválidos</b>: falta <code>@Valid</code>, o falta el starter (desde Spring Boot 2.3 no viene incluido en web).</li><li><b>HV000030: No validator could be found for constraint NotBlank validating type Integer</b>: @NotBlank solo vale para Strings.</li><li><b>Objetos anidados sin validar</b>: falta @Valid en el campo.</li><li><b>Imports de javax.validation</b> en proyectos con Spring Boot 3 o superior: debe ser jakarta.</li><li><b>Mezclar @NotNull y @NotBlank</b> en Strings sin necesidad (@NotBlank ya implica no null).</li><li><b>Validar solo en el front-end</b>: el back-end siempre debe validar.</li></ul>`],
["Cómo sé que lo domino",`<ul><li>Elijo entre @NotNull, @NotEmpty y @NotBlank con criterio.</li><li>Valido DTOs anidados, listas y parámetros.</li><li>Creo una validación personalizada.</li><li>Distingo validación de formato, de negocio y de base de datos.</li></ul>`]
]},
"8-3":{e:"9. API REST completa (CRUD)",t:"Manejo global de errores (@ControllerAdvice)",s:[
["El problema",`<p>Por defecto, cuando algo falla Spring responde con un JSON genérico y, a menudo, con el código equivocado (un 500 donde correspondía 404 o 409). Una API profesional devuelve errores <b>consistentes, informativos y sin filtrar detalles internos</b>. En lugar de try/catch en cada controller, se centraliza con <code>@RestControllerAdvice</code>: una clase que intercepta las excepciones de todos los controllers y las traduce a respuestas HTTP.</p>`],
["Estructura de la respuesta de error",`<pre><code>public record ErrorResponse(
        LocalDateTime timestamp,
        int status,
        String error,
        String mensaje,
        String ruta,
        Map&lt;String, String&gt; errores          // detalle por campo (solo en validaciones)
) {
    public static ErrorResponse de(HttpStatus status, String mensaje, String ruta) {
        return new ErrorResponse(LocalDateTime.now(), status.value(), status.getReasonPhrase(), mensaje, ruta, null);
    }
}</code></pre>
<p>Y excepciones propias que expresan el problema de negocio:</p>
<pre><code>public class RecursoNoEncontradoException extends RuntimeException {
    public RecursoNoEncontradoException(String mensaje) { super(mensaje); }
}

public class ConflictoException extends RuntimeException {          // p. ej. email duplicado
    public ConflictoException(String mensaje) { super(mensaje); }
}</code></pre>
<p>Si usaste <code>@ResponseStatus</code> en la excepción, quítalo: ahora manda el manejador global.</p>`],
["El manejador global",`<pre><code>@RestControllerAdvice
public class GlobalExceptionHandler {

    private static final Logger log = LoggerFactory.getLogger(GlobalExceptionHandler.class);

    @ExceptionHandler(RecursoNoEncontradoException.class)
    public ResponseEntity&lt;ErrorResponse&gt; noEncontrado(RecursoNoEncontradoException ex, HttpServletRequest req) {
        return respuesta(HttpStatus.NOT_FOUND, ex.getMessage(), req);
    }

    @ExceptionHandler(ConflictoException.class)
    public ResponseEntity&lt;ErrorResponse&gt; conflicto(ConflictoException ex, HttpServletRequest req) {
        return respuesta(HttpStatus.CONFLICT, ex.getMessage(), req);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)          // falla @Valid en el cuerpo
    public ResponseEntity&lt;ErrorResponse&gt; validacion(MethodArgumentNotValidException ex, HttpServletRequest req) {
        Map&lt;String, String&gt; campos = new LinkedHashMap&lt;&gt;();
        ex.getBindingResult().getFieldErrors()
                .forEach(e -&gt; campos.put(e.getField(), e.getDefaultMessage()));
        ErrorResponse cuerpo = new ErrorResponse(LocalDateTime.now(), 400, "Bad Request",
                "Hay errores de validación", req.getRequestURI(), campos);
        return ResponseEntity.badRequest().body(cuerpo);
    }

    @ExceptionHandler(HttpMessageNotReadableException.class)          // JSON mal formado
    public ResponseEntity&lt;ErrorResponse&gt; jsonInvalido(HttpMessageNotReadableException ex, HttpServletRequest req) {
        return respuesta(HttpStatus.BAD_REQUEST, "El cuerpo de la petición no es un JSON válido", req);
    }

    @ExceptionHandler(MethodArgumentTypeMismatchException.class)      // /clientes/abc
    public ResponseEntity&lt;ErrorResponse&gt; tipoInvalido(MethodArgumentTypeMismatchException ex, HttpServletRequest req) {
        return respuesta(HttpStatus.BAD_REQUEST, "El parámetro '" + ex.getName() + "' tiene un valor inválido", req);
    }

    @ExceptionHandler(NoResourceFoundException.class)                 // ruta inexistente
    public ResponseEntity&lt;ErrorResponse&gt; rutaInexistente(NoResourceFoundException ex, HttpServletRequest req) {
        return respuesta(HttpStatus.NOT_FOUND, "La ruta no existe", req);
    }

    @ExceptionHandler(Exception.class)                                // red de seguridad: errores inesperados
    public ResponseEntity&lt;ErrorResponse&gt; inesperado(Exception ex, HttpServletRequest req) {
        log.error("Error inesperado en {}", req.getRequestURI(), ex);   // el detalle va al log, no al cliente
        return respuesta(HttpStatus.INTERNAL_SERVER_ERROR, "Error interno del servidor", req);
    }

    private ResponseEntity&lt;ErrorResponse&gt; respuesta(HttpStatus status, String mensaje, HttpServletRequest req) {
        return ResponseEntity.status(status).body(ErrorResponse.de(status, mensaje, req.getRequestURI()));
    }
}</code></pre>
<p>Imports: <code>jakarta.servlet.http.HttpServletRequest</code>, <code>org.springframework.web.servlet.resource.NoResourceFoundException</code> y las clases de <code>org.springframework.web.bind</code> / <code>org.springframework.http.converter</code>.</p>
<p>Spring elige el <b>manejador más específico</b> para cada excepción. Ojo: si defines <code>@ExceptionHandler(Exception.class)</code>, también atraparía errores propios de Spring (ruta inexistente, método no permitido…) y los convertiría en 500; por eso se manejan explícitamente o se extiende <code>ResponseEntityExceptionHandler</code>, que ya traduce todas las excepciones estándar de Spring MVC.</p>`],
["Respuesta resultante",`<pre><code>POST /api/v1/clientes   {"nombre":"", "email":"no-es-email"}

HTTP/1.1 400 Bad Request
{
  "timestamp": "2026-10-14T10:30:00",
  "status": 400,
  "error": "Bad Request",
  "mensaje": "Hay errores de validación",
  "ruta": "/api/v1/clientes",
  "errores": {
    "nombre": "El nombre es obligatorio",
    "email": "El email no tiene un formato válido"
  }
}</code></pre>
<p>El front-end puede mostrar cada error junto a su campo, y tú obtienes siempre el mismo formato.</p>`],
["Alternativa estándar: ProblemDetail",`<p>Spring 6 incorpora el formato estándar <b>RFC 9457 (Problem Details)</b> con la clase <code>ProblemDetail</code>:</p>
<pre><code>@ExceptionHandler(RecursoNoEncontradoException.class)
public ProblemDetail noEncontrado(RecursoNoEncontradoException ex) {
    ProblemDetail pd = ProblemDetail.forStatusAndDetail(HttpStatus.NOT_FOUND, ex.getMessage());
    pd.setTitle("Recurso no encontrado");
    return pd;                       // content-type: application/problem+json
}</code></pre>
<p>Con <code>spring.mvc.problemdetails.enabled=true</code> en la configuración, Spring responde con ese formato también a sus propios errores. Elige uno (tu <code>ErrorResponse</code> o ProblemDetail) y úsalo en <b>toda</b> la API.</p>`],
["Buenas prácticas",`<ul><li><b>Nunca</b> devuelvas stack traces, nombres de clases ni mensajes de SQL al cliente: ayudan a un atacante. Regístralos en el log (lección de Logging).</li><li>Códigos correctos: 400 datos inválidos, 404 no existe, 409 conflicto, 500 solo para bugs reales.</li><li>Lanza excepciones <b>con significado</b> desde el servicio; el controller no debe tener try/catch.</li><li>Un <b>identificador de correlación</b> en el error y en el log ayuda a rastrear problemas en producción.</li><li>Agrega con el tiempo: <code>DataIntegrityViolationException</code> (409, Épica 10), <code>AccessDeniedException</code> (403) y autenticación (401), Épica 11.</li><li>Para limitar el alcance: <code>@RestControllerAdvice(basePackages = "...")</code>; un <code>@ExceptionHandler</code> dentro de un controller solo afecta a ese controller.</li></ul>`],
["Práctica",`<ol><li>Crea <code>ErrorResponse</code>, las excepciones propias y el <code>GlobalExceptionHandler</code>.</li><li>Prueba con Postman cada caso y verifica el código y el cuerpo: cliente inexistente (404), JSON inválido (400), validación fallida (400 con campos), id no numérico <code>/clientes/abc</code> (400), ruta inexistente (404), método no permitido.</li><li>Lanza una <code>RuntimeException</code> en un endpoint temporal y confirma que el cliente recibe un 500 genérico mientras el detalle aparece en la consola.</li><li>Agrega la regla "email único" en el servicio con <code>ConflictoException</code> y verifica el 409.</li><li>Cambia a <code>ProblemDetail</code> en dos handlers y compara el JSON.</li><li>Escribe un test con <code>MockMvc</code> (Épica 12) o con Postman Tests que verifique los códigos.</li></ol>`],
["Errores comunes",`<ul><li><b>Todo sale como 500</b>: el handler genérico captura excepciones de Spring que no manejaste explícitamente.</li><li><b>El handler no se ejecuta</b>: la clase está fuera del paquete base o falta la anotación.</li><li><b>@ControllerAdvice sin @ResponseBody</b>: usa <code>@RestControllerAdvice</code> para devolver JSON.</li><li><b>Exponer ex.getMessage() de excepciones inesperadas</b>.</li><li><b>Dos handlers para la misma excepción</b>: ambigüedad al arrancar.</li><li><b>Capturar la excepción en el controller y volver a lanzarla</b>: ruido innecesario.</li></ul>`],
["Cómo sé que lo domino",`<ul><li>Explico qué hace @RestControllerAdvice y cómo elige el handler.</li><li>Devuelvo errores consistentes con el código HTTP correcto.</li><li>No filtro detalles internos y registro el error real en el log.</li><li>Sé manejar validaciones, JSON inválido y rutas inexistentes.</li></ul>`]
]},
"8-4":{e:"9. API REST completa (CRUD)",t:"Paginación, filtros y ordenamiento",s:[
["Por qué paginar",`<p>Un <code>GET /clientes</code> que devuelve 100.000 registros satura la base de datos, la red y el navegador. La <b>paginación</b> devuelve la información por partes; el <b>filtrado</b> y el <b>ordenamiento</b> permiten al cliente pedir solo lo que necesita. Convención de parámetros:</p>
<pre><code>GET /api/v1/clientes?page=0&amp;size=20&amp;sort=nombre,asc&amp;ciudad=Lima&amp;nombre=an

page   número de página (empieza en 0)
size   elementos por página
sort   campo,dirección  (asc o desc)
ciudad, nombre   filtros</code></pre>`],
["Implementación en memoria (para entender el mecanismo)",`<p>Primero una clase genérica que representa una página de resultados:</p>
<pre><code>public record Pagina&lt;T&gt;(
        List&lt;T&gt; contenido,
        int pagina,
        int tamano,
        long totalElementos,
        int totalPaginas,
        boolean ultima) {

    public &lt;R&gt; Pagina&lt;R&gt; map(Function&lt;T, R&gt; f) {           // convertir entidades a DTOs
        return new Pagina&lt;&gt;(contenido.stream().map(f).toList(), pagina, tamano, totalElementos, totalPaginas, ultima);
    }
}</code></pre>
<p>En el servicio: filtrar, ordenar y recortar la lista.</p>
<pre><code>public Pagina&lt;Cliente&gt; buscar(String nombre, String ciudad, int pagina, int tamano, String campo, boolean asc) {
    Comparator&lt;Cliente&gt; orden = switch (campo) {             // lista blanca de campos permitidos
        case "id" -&gt; Comparator.comparing(Cliente::getId);
        case "nombre" -&gt; Comparator.comparing(Cliente::getNombre, String.CASE_INSENSITIVE_ORDER);
        case "ciudad" -&gt; Comparator.comparing(Cliente::getCiudad, Comparator.nullsLast(String.CASE_INSENSITIVE_ORDER));
        default -&gt; throw new IllegalArgumentException("No se puede ordenar por: " + campo);
    };
    if (!asc) orden = orden.reversed();

    List&lt;Cliente&gt; filtrados = repo.buscarTodos().stream()
            .filter(c -&gt; nombre == null || c.getNombre().toLowerCase().contains(nombre.toLowerCase()))
            .filter(c -&gt; ciudad == null || ciudad.equalsIgnoreCase(c.getCiudad()))
            .sorted(orden)
            .toList();

    int total = filtrados.size();
    int desde = Math.min(pagina * tamano, total);
    int hasta = Math.min(desde + tamano, total);
    int paginas = (int) Math.ceil((double) total / tamano);
    return new Pagina&lt;&gt;(filtrados.subList(desde, hasta), pagina, tamano, total, paginas, pagina &gt;= paginas - 1);
}</code></pre>`],
["El controller",`<pre><code>@GetMapping
public Pagina&lt;ClienteResponse&gt; listar(
        @RequestParam(required = false) String nombre,
        @RequestParam(required = false) String ciudad,
        @RequestParam(defaultValue = "0") @Min(0) int page,
        @RequestParam(defaultValue = "20") @Min(1) @Max(100) int size,      // tope para evitar abusos
        @RequestParam(defaultValue = "id,asc") String sort) {

    String[] partes = sort.split(",");
    boolean asc = partes.length &lt; 2 || !partes[1].equalsIgnoreCase("desc");
    return servicio.buscar(nombre, ciudad, page, size, partes[0], asc).map(mapper::toResponse);
}</code></pre>
<pre><code>{
  "contenido": [ { "id": 3, "nombre": "Ana", ... }, { "id": 7, "nombre": "Andrés", ... } ],
  "pagina": 0,
  "tamano": 20,
  "totalElementos": 2,
  "totalPaginas": 1,
  "ultima": true
}</code></pre>
<p>Si piden una página más allá del final, devuelve <code>contenido: []</code> con 200 (no es un error). El <code>IllegalArgumentException</code> del campo inválido debe traducirse a 400 en tu manejador global.</p>`],
["Cómo lo hace Spring Data (Épica 10)",`<p>Con base de datos, el recorte lo hace SQL (<code>LIMIT/OFFSET</code>), no la memoria. Spring Data resuelve los parámetros por ti:</p>
<pre><code>@GetMapping
public Page&lt;ClienteResponse&gt; listar(@PageableDefault(size = 20, sort = "nombre") Pageable pageable) {
    return servicio.listar(pageable).map(mapper::toResponse);
}

// Repositorio: JpaRepository ya incluye   Page&lt;Cliente&gt; findAll(Pageable pageable);
// Petición:  /clientes?page=0&amp;size=20&amp;sort=nombre,asc

PageRequest.of(0, 20, Sort.by("nombre").ascending())      // construir un Pageable a mano</code></pre>
<p>Las versiones recientes de Spring Data avisan de que serializar un <code>PageImpl</code> tal cual no es estable; usa tu propio DTO de página (como <code>Pagina&lt;T&gt;</code>) o <code>PagedModel</code>. Spring Data también permite filtros dinámicos con <i>Specifications</i> o <i>Query by Example</i>.</p>`],
["Criterios de diseño",`<ul><li><b>Límite máximo</b> de <code>size</code> siempre (por ejemplo 100).</li><li><b>Orden estable</b>: ordena además por una clave única (id); si no, los registros con el mismo valor pueden repetirse o saltarse entre páginas.</li><li><b>Lista blanca</b> de campos ordenables y filtrables: nunca uses el texto del cliente como nombre de columna.</li><li><b>Filtros</b> opcionales por query: <code>?ciudad=Lima&amp;activo=true</code>; rangos con <code>desde</code>/<code>hasta</code>; búsqueda libre con <code>q</code>.</li><li><b>Totales</b>: contar es costoso en tablas enormes; algunas APIs omiten el total o lo envían en headers (<code>X-Total-Count</code>).</li><li><b>Paginación por cursor (keyset)</b>: para listados enormes o scroll infinito es más eficiente que offset (<code>?despues_de_id=500</code>), porque no recorre las filas anteriores.</li></ul>`],
["Práctica",`<ol><li>Carga 30 clientes de prueba (puedes hacerlo con un <code>@PostConstruct</code> o <code>CommandLineRunner</code>).</li><li>Implementa <code>Pagina&lt;T&gt;</code>, el método de búsqueda del servicio y el endpoint con los parámetros.</li><li>Prueba: primera página, última, página inexistente, <code>size=0</code> (debe dar 400), <code>size=1000</code> (400 o recortado), <code>sort=ciudad,desc</code>, <code>sort=password,asc</code> (400).</li><li>Combina filtros: <code>?ciudad=Lima&amp;nombre=an&amp;sort=nombre,asc&amp;size=5</code>.</li><li>Verifica que el orden es estable con valores repetidos (varios de la misma ciudad) agregando el id como criterio secundario.</li><li>Haz lo mismo para <code>Producto</code> con filtros por rango de precio (<code>precioMin</code>, <code>precioMax</code>).</li></ol>`],
["Errores comunes",`<ul><li><b>Esperar páginas que empiezan en 1</b>: en Spring empiezan en 0.</li><li><b>subList con índices fuera de rango</b>: usa <code>Math.min</code>.</li><li><b>Dividir enteros</b> al calcular totalPaginas sin convertir a double.</li><li><b>Permitir cualquier size</b>: un cliente puede pedir un millón.</li><li><b>Ordenar por un campo arbitrario</b> sin lista blanca.</li><li><b>Paginar en memoria con base de datos</b> (traer todo y recortar): derrota el propósito.</li></ul>`],
["Cómo sé que lo domino",`<ul><li>Diseño los parámetros page, size y sort de un endpoint de listado.</li><li>Implemento filtros, orden y página con totales.</li><li>Sé por qué hace falta un límite, una lista blanca y un orden estable.</li><li>Conozco cómo Spring Data hará lo mismo con Pageable.</li></ul>`]
]},
"8-5":{e:"9. API REST completa (CRUD)",t:"Documentación con Swagger/OpenAPI",s:[
["Qué es OpenAPI y Swagger",`<p><b>OpenAPI</b> es el estándar para describir una API REST en JSON/YAML: endpoints, parámetros, cuerpos, respuestas y errores. <b>Swagger UI</b> es la página web interactiva que se genera a partir de esa descripción y te permite <b>leer y probar</b> la API desde el navegador. En Spring Boot se usa la librería <b>springdoc-openapi</b>, que lee tus controllers y DTOs y genera todo automáticamente, sin escribir la especificación a mano.</p>`],
["Instalación",`<p>Agrega la dependencia (el artifactId es el mismo; <b>la versión depende de tu versión de Spring Boot</b>):</p>
<pre><code>&lt;dependency&gt;
    &lt;groupId&gt;org.springdoc&lt;/groupId&gt;
    &lt;artifactId&gt;springdoc-openapi-starter-webmvc-ui&lt;/artifactId&gt;
    &lt;version&gt;3.0.3&lt;/version&gt;      &lt;!-- Spring Boot 4.x: serie 3.0.x · Spring Boot 3.x: serie 2.8.x --&gt;
&lt;/dependency&gt;</code></pre>
<p>Usa la última versión de la serie que corresponda a tu Spring Boot (consulta Maven Central). No uses el antiguo <code>springdoc-openapi-ui</code> (es para Spring Boot 2). Arranca la aplicación y abre:</p>
<pre><code>http://localhost:8080/swagger-ui.html     interfaz interactiva
http://localhost:8080/v3/api-docs         especificación en JSON
http://localhost:8080/v3/api-docs.yaml    especificación en YAML</code></pre>
<p>Sin escribir una sola anotación ya verás todos tus endpoints, los DTOs con sus campos y las reglas de Bean Validation (campos obligatorios, longitudes, formato de email).</p>`],
["Usar Swagger UI",`<ol><li>Expande un endpoint, por ejemplo <b>POST /api/v1/clientes</b>.</li><li>Pulsa <b>Try it out</b>: se rellena un cuerpo de ejemplo que puedes editar.</li><li><b>Execute</b>: ves la petición equivalente en <code>curl</code>, el código de estado, los headers y el cuerpo de la respuesta.</li><li>Revisa abajo la sección <b>Schemas</b> con los DTOs.</li></ol>
<p>Si importas la URL <code>/v3/api-docs</code> en Postman (<b>Import → Link</b>) obtienes una colección completa con todos los endpoints.</p>`],
["Enriquecer la documentación",`<pre><code>@Configuration
public class OpenApiConfig {
    @Bean
    public OpenAPI apiInfo() {
        return new OpenAPI().info(new Info()
                .title("API Tienda")
                .version("1.0.0")
                .description("API REST de ejemplo para aprender Spring Boot")
                .contact(new Contact().name("Tu Nombre").email("tu@correo.com")));
    }
}

@Tag(name = "Clientes", description = "Gestión de clientes")
@RestController
@RequestMapping("/api/v1/clientes")
public class ClienteController {

    @Operation(summary = "Crear un cliente", description = "Registra un cliente nuevo y devuelve su ubicación")
    @ApiResponses({
        @ApiResponse(responseCode = "201", description = "Cliente creado"),
        @ApiResponse(responseCode = "400", description = "Datos inválidos",
                content = @Content(schema = @Schema(implementation = ErrorResponse.class))),
        @ApiResponse(responseCode = "409", description = "El email ya existe")
    })
    @PostMapping
    public ResponseEntity&lt;ClienteResponse&gt; crear(@Valid @RequestBody ClienteRequest request) { ... }

    @GetMapping("/{id}")
    public ClienteResponse obtener(@Parameter(description = "Identificador del cliente", example = "5")
                                   @PathVariable long id) { ... }
}

public record ClienteRequest(
        @Schema(description = "Nombre completo", example = "Ana Ruiz")
        @NotBlank String nombre,
        @Schema(description = "Correo electrónico único", example = "ana@correo.com")
        @Email String email
) { }</code></pre>
<p>Imports de <code>io.swagger.v3.oas.annotations.*</code> (Tag, Operation, Parameter, media.Schema, media.Content, responses.ApiResponse) y <code>io.swagger.v3.oas.models.*</code> (OpenAPI, info.Info, info.Contact). <code>@Schema(hidden = true)</code> oculta un campo o clase.</p>`],
["Configuración y producción",`<pre><code>springdoc:
  api-docs:
    path: /v3/api-docs
  swagger-ui:
    path: /swagger-ui.html
    operations-sorter: method
    tags-sorter: alpha
  packages-to-scan: com.miempresa.tienda.controller</code></pre>
<p>La documentación interactiva no siempre debe estar abierta al mundo. En <code>application-prod.yml</code> (lección de perfiles) puedes apagarla:</p>
<pre><code>springdoc:
  api-docs:
    enabled: false
  swagger-ui:
    enabled: false</code></pre>
<p>Para agrupar por versión o módulo usa beans <code>GroupedOpenApi</code>. Cuando agregues seguridad (Épica 11), declararás un <code>SecurityScheme</code> (JWT Bearer) para que el botón <b>Authorize</b> de Swagger UI permita probar endpoints protegidos.</p>`],
["Buenas prácticas",`<ul><li><b>Documenta para personas</b>: resumen corto y claro; ejemplos realistas; describe los errores posibles.</li><li>Los DTOs bien anotados con <code>@Schema</code> valen más que prosa extensa.</li><li>No dejes que las anotaciones ahoguen tu controller: si crece demasiado, mueve la documentación a una interfaz que el controller implemente.</li><li>La especificación es un <b>contrato</b>: compártela con el equipo de front-end y úsala para generar clientes (OpenAPI Generator) y para pruebas de contrato.</li><li>Revisa que la documentación refleja siempre la API real: al generarse del código, se mantiene sincronizada.</li></ul>`],
["Práctica",`<ol><li>Agrega springdoc a tu proyecto (versión según tu Spring Boot) y abre Swagger UI.</li><li>Prueba desde Swagger UI todo el CRUD de clientes (crear, listar, obtener, actualizar, eliminar) y mira los curl generados.</li><li>Crea <code>OpenApiConfig</code> con título, versión y contacto.</li><li>Agrega <code>@Tag</code>, <code>@Operation</code> y <code>@ApiResponses</code> a los endpoints de clientes, incluyendo el esquema de error.</li><li>Anota los DTOs con <code>@Schema</code> (descripción y ejemplo) y observa cómo cambia el cuerpo de ejemplo.</li><li>Descarga <code>/v3/api-docs</code>, impórtalo en Postman y compara con tu colección manual.</li><li>Desactiva Swagger en el perfil <code>prod</code> y verifica que <code>/swagger-ui.html</code> ya no responde.</li></ol>`],
["Errores comunes",`<ul><li><b>404 en /swagger-ui.html</b>: falta la dependencia, o la versión de springdoc no corresponde a tu Spring Boot (suele verse un <code>NoSuchMethodError</code> o <code>ClassNotFoundException</code> al arrancar).</li><li><b>Failed to load API definition</b>: hay un error generando la especificación; abre <code>/v3/api-docs</code> y mira el mensaje.</li><li><b>Usar springdoc-openapi-ui</b> (versión 1.x) en Spring Boot 3 o superior: debe ser el <code>starter-webmvc-ui</code>.</li><li><b>Swagger muestra la entidad en lugar del DTO</b>: el controller devuelve la entidad.</li><li><b>Endpoints bloqueados</b> por Spring Security: habrá que permitir las rutas de Swagger (Épica 11).</li><li><b>Dejar Swagger abierto en producción</b> sin querer.</li></ul>`],
["Cómo sé que lo domino",`<ul><li>Explico la diferencia entre OpenAPI y Swagger UI.</li><li>Instalo springdoc con la versión correcta y accedo a la UI y a /v3/api-docs.</li><li>Documento endpoints, errores y DTOs con las anotaciones.</li><li>Sé desactivarlo en producción con un perfil.</li></ul>`]
]}
};
