# Investigación
### Punto 1
1. Tanto en JavaScript como en TypeScript, el extends La palabra clave se utiliza para crear una clase que es hija de otra clase. Esta clase secundaria hereda propiedades y métodos de la clase principal, lo que permite la reutilización de código y una estructura de clase jerárquica.
2. El implements La palabra clave es exclusiva de TypeScript. Se utiliza cuando una clase necesita adherirse a una interfaz específica, lo que garantiza que la clase implemente todos los métodos y propiedades definidos en la interfaz. Esto es particularmente útil para definir un contrato que pueden seguir varias clases. 

### Punto 2
- Mejora la legibilidad del codigo ya que al observar la firma de una función o la definición de una clase, se puede entender inmediatamente qué tipos de datos se esperan como entrada y qué tipo de dato se devuelve, lo que actúa como una forma natural de documentación.
- Permite definir estructuras de datos más expresivas y seguras, ya que se pueden especificar tipos exactos para atributos y métodos, lo que ayuda a mantener la coherencia del sistema.

### Punto 3
- Una clase abstracta es una clase que no puede ser instanciada directamente, lo que significa que no se pueden crear objetos a partir de ella.

### Punto 4
- Permite controlar el acceso a los atributos de una clase, manteniendo sus datos protegidos y accesibles solo a través de métodos definidos.

### Punto 5
Una función con parámetros obligatorios y opcionales.
``function imprimirDatos(nombre: string, edad?: number, peso: number = 50): void {
}  
``
Una función que devuelve un promise.
``async function somePromise(a: number, b: string): Promise<string> {
    return "resultado";
}   
``
