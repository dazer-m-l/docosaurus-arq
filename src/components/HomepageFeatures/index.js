import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Patron Observer',
    imgSrc: '/img/Patron_Observer.png',
    description: (
      <>
        Permite que múltiples objetos <code>observadores</code> se suscriban a un objeto principal <code>sujeto</code> y sean notificados automáticamente cuando su estado cambie. Es útil para implementar sistemas de eventos o notificaciones
      </>
    ),
  },
  {
    title: 'Patron Strategy',
    imgSrc: '/img/Patron_Strategy.png',
    description: (
      <>
        Define una familia de algoritmos, encapsula cada uno y permite intercambiarlos dinámicamente. Ayuda a seleccionar el comportamiento de un objeto en tiempo de ejecución, sin alterar su estructura.
      </>
    ),
  },
  {
    title: 'Patron Command',
    imgSrc: '/img/Patron_Command.png',
    description: (
      <>
        Encapsula una solicitud como un objeto, permitiendo parametrizar acciones, realizar <code>deshacer/rehacer</code> y ejecutar comandos de manera diferida. Es ideal para implementar colas de tareas o sistemas de transacciones.
      </>
    ),
  },
  {
    title: 'Patron State',
    imgSrc: '/img/Patron_State.png',
    description: (
      <>
        Permite que un objeto cambie su comportamiento cuando su estado interno cambia. Es útil para manejar máquinas de estados y simplificar código complejo relacionado con múltiples condiciones.
      </>
    ),
  },
  {
    title: 'Patron Template Method',
    imgSrc: '/img/Patron_Template_Method.png',
    description: (
      <>
        Define el esqueleto de un algoritmo en una clase base y permite que las subclases redefinan pasos específicos sin alterar la estructura general. Es ideal para evitar duplicación de código y establecer flujos estandarizados.
      </>
    ),
  },
  {
    title: 'Patron Visitor',
    imgSrc: '/img/Patron_Visitor.png',
    description: (
      <>
        Separa operaciones de los objetos sobre los que actúan, permitiendo agregar nuevas operaciones sin modificar las clases originales. Es útil para aplicar múltiples operaciones en estructuras complejas, como árboles o colecciones de objetos.
      </>
    ),
  },
];

function Feature({Svg, imgSrc, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {Svg ? (
          <Svg className={styles.featureSvg} role="img" />
        ) : (
          <img src={imgSrc} alt={title} className={styles.featureImg} />
        )}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
