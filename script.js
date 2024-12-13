// Establece la imagen principal
const imagenPrincipal =
  'https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

// Cambiar fondo al pasar el mouse sobre "Eat"
document.getElementById('eat').addEventListener('mouseover', function () {
  document.getElementById('background').style.backgroundImage =
    "url('https://images.unsplash.com/photo-1447078806655-40579c2520d6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
});

// Cambiar fondo al pasar el mouse sobre "Drink"
document.getElementById('drink').addEventListener('mouseover', function () {
  document.getElementById('background').style.backgroundImage =
    "url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
});

// Cambiar fondo al pasar el mouse sobre "Contact"
document.getElementById('contact').addEventListener('mouseover', function () {
  document.getElementById('background').style.backgroundImage =
    "url('https://images.unsplash.com/photo-1499159058454-75067059248a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
});

// Restaurar fondo principal al salir del mouse de cualquiera de las opciones
const menuItems = document.querySelectorAll('#eat, #drink, #contact');
menuItems.forEach((item) => {
  item.addEventListener('mouseout', function () {
    document.getElementById('background').style.backgroundImage =
      `url('${imagenPrincipal}')`;
  });
});
