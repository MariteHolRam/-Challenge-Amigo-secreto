# Amigo Secreto App

Una aplicación web interactiva para realizar sorteos de amigos secretos de manera simple y divertida.
http://127.0.0.1:5500/challenge-amigo-secreto_esp-main/index.html
(https://github.com/tu-usuario/tu-repositorio.git)

## Características

- **Interfaz intuitiva**: Diseño limpio y fácil de usar
- **Gestión de participantes**: Añade y visualiza la lista de amigos
- **Sorteo aleatorio**: Selección imparcial de un ganador
- **Diseño responsive**: Adaptable a diferentes dispositivos

## Tecnologías utilizadas

- HTML5
- CSS3 (Variables CSS, Flexbox)
- JavaScript (ES6)

## Cómo usar

1. Clona el repositorio:
```bash
git clone https://github.com/tuusuario/amigo-secreto.git
```

2. Abre el archivo `index.html` en tu navegador

3. Usa la aplicación:
   - Escribe nombres en el campo de texto
   - Haz clic en "Añadir" para agregar participantes
   - Cuando tengas al menos 2 participantes, haz clic en "Sortear amigo"
   - ¡El ganador aparecerá en pantalla!

## Estructura del proyecto

```
amigo-secreto/
├── index.html         # Página principal de la aplicación
├── style.css          # Estilos CSS para la interfaz
├── app.js             # Lógica de la aplicación
├── assets/
│   └── amigo-secreto.png  # Imagen representativa
└── README.md          # Este archivo
```

## Personalización

Puedes modificar los colores principales editando las variables CSS en `style.css`:

```css
:root {
    --color-primary: #4B69FD;
    --color-secondary: #FFF9EB;
    --color-tertiary: #C4C4C4;
    --color-button: #fe652b;
    --color-button-hover: #e55720;
}
```

## Licencia

Este proyecto está bajo la licencia [MIT](LICENSE).

---

¡Diviértete sorteando tus amigos secretos! ✨
