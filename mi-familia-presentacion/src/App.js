import './App.css';
import CartaPresentacion from './componentes/CartaPresentacion';

function App() {

  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1 id="titulo">
          ¡Como se Compone Mi Familia!
        </h1>
        <CartaPresentacion
          imagen="abuela"
          nombre="Pilar Eusebia Transito"
          tipo="Ella"
          vinculo="Abuela"
          descripcion="Mi abuela, tiene 78 años y para su edad esta demasiado bien jajaja, ella es muy divertida y siempre se la ve con una sonrisa, nunca hace notar que esta mal o se siente mal, pero aveces hace mal, aveces es muy terca, pero la mayoria de las veces es la mejor compañia que podes pedir, te charla de como le fue en el dia por ejemplo, o trata de hacerte reir con sus chistes, siempre lo logra conmigo jajaja, la amo mucho y es la mejor abuela que uno pueda pedir." />
        <CartaPresentacion
          imagen="papa"
          nombre="Nelson Esteban Herrera"
          tipo="El"
          vinculo = "Papa"
          descripcion = "Mi papa, tiene 58 años, mi papa es muy trabajador, pero tambien le gusta estar todo el dia en la cama cuando puede, mi papa es divertido, familiero y muy buen amigo, nunca nos hizo faltar nada y cuando pudo nos dio con los gustos a todos, es muy fanatico y fiel a su river, el es uno de mis ejemplos a seguir en algunos aspectos, ya que el me enseña siempre a hacer las cosas bien y a nunca a rendirme, lo amo mucho y ojala nunca me falte" />

        <CartaPresentacion
          imagen="mama"
          nombre="Veronica del Valle Sajama"
          tipo="Ella"
          vinculo="Mamá"
          descripcion="Mi mama, tiene 52 años, como puedo describir a mi mama, ella es un motivo por la cual no me rindo y sigo para adelante, ella es muy compañera, muy buena amiga, ella bailarina de floklore, presidenta del barrio donde vivo, y trabaja en un negocio o kiosco que puso en mi casa y tambien me enseño que nunca debo rendirme que si quiero algo soy capaz de conseguirlo, mi motivo para no rendirme hasta que yo sea alguien, la amo mucho y ojala jamas me falte" />

        <CartaPresentacion
          imagen="cristian"
          nombre="Cristian Emanuel Herrera"
          tipo="El"
          vinculo="Hermano Mayor"
          descripcion="Cristian tiene 35 años y el trabaja como musico en la banda de la gendarmeria de cordoba, mi hermano vive en santa maria y cuando todos volvemos a jujuy a nuestra casa siempre nos hace reir, es muy divertido a su manera, nunca es nada serio con el siempre te quiere llevar la contra solo para cambiar  el ambiente y que terminos riendo, aparte de ser mi hermano, para mi es como un amigo mas, y tenemos nuestra forma de querernos pero nos queremos que es lo importante jajaja, como a todos ojala nunca me falte y ojala nunca ocurra una pelea entre nosotros que termine en nuestra hermandad" />

        

        <CartaPresentacion
          imagen="daniela"
          nombre="Daniela Ines Lucarelli"
          tipo="Ella"
          vinculo="Pareja "
          descripcion="Dani tiene 23 años, actualmente esta estudiando la carrera de Nutricion, va al gym, y se podria decir que trabaja en el hospital avellaneda, ella mi compañera me ayuda en todo, me apoya en la veces que me quiero rendir, ella es muy divertida a su manera y me hace sentir comodo en todos lados, ojala nunca me falte, porque siempre me hace sentir especial mas alla de todo, la amo mucho y ojala estemos siempre juntos " />
      </div>
    </div>
  );
}

export default App;
