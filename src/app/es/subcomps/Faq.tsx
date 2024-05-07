"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

function Faq() {
  const Respuesta1 =
    "Lullax es una marca española creada en 2020 por la empresa Lullax SL. Esta empresa se dedica a comercializar mediante su web y marketplaces productos Home-Fitness de su propia marca, especialmente pesas libres ajustables de diferentes tipos y kilajes.";
  const Respuesta2 =
    "Las mancuernas ajustables son herramientas de entrenamiento de fuerza que permiten a los usuarios cambiar la cantidad de peso que levantan automáticamente. Generalmente, se pueden ajustar mediante un sistema selector girando del agarre cuando la mancuerna está en su base de almacenamiento o mediante diales situados a ambos lados de la mancuerna, lo que significa que puedes aumentar o disminuir el peso según tus necesidades de entrenamiento en segundos para no perder tiempo.";
  const Respuesta3 =
    "Las mancuernas ajustables son una excelente opción si no tienes mucho espacio en casa o en tu gimnasio para almacenar varias mancuernas de diferentes pesos. Además, son más asequibles que comprar un juego completo de mancuernas y te permiten ajustar el peso a medida que aumentas tu fuerza. Las mancuernas ajustables también son ideales si tienes un espacio limitado para entrenar o si quieres llevar tus pesas contigo cuando viajas. Elige Lullax para gozar de una correcta calidad, buena atención al cliente, servicio post venta y todas las garantías.";
  const Respuesta4 =
    "El proceso de ajuste varía según el modelo de mancuernas ajustables que elijas. Algunas mancuernas se ajustan girando el agarre cuando la mancuerna está en su base, mientras que otras se ajustan mediante diales laterales a los lados de la mancuerna. Asegúrate de leer las instrucciones del fabricante para saber cómo ajustar correctamente las mancuernas que compres.";
  const Respuesta5 =
    "El rango de peso de las mancuernas ajustables varía según el modelo que elijas. Algunas mancuernas ajustables tienen un rango de peso desde 4 kilogramos hasta más de 40.5 kilogramos. Es importante elegir un modelo que tenga el rango de peso adecuado para tus necesidades de entrenamiento.";
  const Respuesta6 =
    "Las mancuernas ajustables pueden ser más caras que las mancuernas tradicionales en el corto plazo, pero a largo plazo son más asequibles ya que no tienes que comprar un juego completo de mancuernas de diferentes pesos. Además, las mancuernas ajustables son más versátiles y te permiten ajustar el peso a medida que aumentas tu fuerza.";
  const Respuesta7 =
    "Las mancuernas ajustables pueden estar hechas de diferentes materiales, como plástico, metal o una combinación de ambos. En Lullax elegimos materiales de calidad basados en hierro fundido, acero inoxidable y PU, para asegurar una alta durabilidad y calidad.";
  const Respuesta8 =
    "Es importante cuidar tus mancuernas ajustables para asegurarte de que duren mucho tiempo. Asegúrate de limpiarlas regularmente para evitar la acumulación de sudor y suciedad. Además, no las dejes caer o las golpees contra superficies duras ya que esto puede dañarlas. Almacénalas en un lugar seco y seguro cuando no las estés usando. El mejor complemento para un correcto mantenimiento son sus estantes especiales, los cuales además de ayudarte a mantenerlas limpias al no tenerlas a ras de suelo, también te permitirá cogerlas y depositarlas a media altura para una mayor comodidad.";
  const Respuesta9 =
    "La política de garantía de Lullax y acuerdo con la garantía legal de España, permite devolver el producto sin compromisos hasta 14 días desde que recibió el producto, pero los gastos de envío correrían a cargo del cliente y 3 años de garantía si hubiera algún defecto de fabricación, en este caso arreglaremos el producto o sustituiremos por uno nuevo y los gastos de transporte correrán a cargo de Lullax SL. Todos los envíos de las compras realizadas en Lullax son gratuitos.";

  return (
    <>
      <section className="py-10 bg-neutral-50 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-[#2b9f76] sm:text-4xl lg:text-5xl">
              Preguntas Frecuentes
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
              Sobre nosotros y nuestras mancuernas ajustables
            </p>
          </div>

          <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
            <Accordion className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
              <AccordionItem
                key="1"
                aria-label="¿Que es Lullax?"
                title="¿Que es Lullax?"
              >
                {Respuesta1}
              </AccordionItem>
              <AccordionItem
                key="2"
                aria-label="¿Qué son las mancuernas ajustables?"
                title="¿Qué son las mancuernas ajustables?"
              >
                {Respuesta2}
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="¿Por qué debería considerar comprar mancuernas ajustables de Lullax?"
                title="¿Por qué debería considerar comprar mancuernas ajustables de Lullax?"
              >
                {Respuesta3}
              </AccordionItem>
              <AccordionItem
                key="4"
                aria-label="¿Cómo se ajustan las mancuernas ajustables?"
                title="¿Cómo se ajustan las mancuernas ajustables?"
              >
                {Respuesta4}
              </AccordionItem>
              <AccordionItem
                key="5"
                aria-label="¿Qué rango de peso pueden tener las mancuernas ajustables?"
                title="¿Qué rango de peso pueden tener las mancuernas ajustables?"
              >
                {Respuesta5}
              </AccordionItem>
              <AccordionItem
                key="6"
                aria-label="¿Son las mancuernas ajustables más caras que las mancuernas tradicionales?"
                title="¿Son las mancuernas ajustables más caras que las mancuernas tradicionales?"
              >
                {Respuesta6}
              </AccordionItem>
              <AccordionItem
                key="7"
                aria-label="¿Qué materiales se utilizan para fabricar mancuernas ajustables Lullax?"
                title="¿Qué materiales se utilizan para fabricar mancuernas ajustables Lullax?"
              >
                {Respuesta7}
              </AccordionItem>
              <AccordionItem
                key="8"
                aria-label="¿Cómo debo cuidar mis mancuernas ajustables?"
                title="¿Cómo debo cuidar mis mancuernas ajustables?"
              >
                {Respuesta8}
              </AccordionItem>
              <AccordionItem
                key="9"
                aria-label="¿Hay alguna garantía o política de devolución en las mancuernas ajustables?"
                title="¿Hay alguna garantía o política de devolución en las mancuernas ajustables?"
              >
                {Respuesta9}
              </AccordionItem>
            </Accordion>
          </div>

          <p className="text-center text-gray-600 textbase mt-9">
            No encontras la respuesta que buscas?{" "}
            <a
              href="#"
              title=""
              className="font-medium text-[#2b9f76] transition-all duration-200 hover:text-[#2b9f76c7] focus:text-[#2b9f76c7]"
            >
              Contactate con nosotros!
            </a>
          </p>
        </div>
      </section>
    </>
  );
}

export default Faq;
