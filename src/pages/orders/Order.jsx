import React from "react";
import { Link } from "react-router-dom";
import "./Order.scss";

const Orders = () => {
  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };

  return (
    <div className="orders">
      <div className="container">
        <div className="title">
          <h1>Pedidos</h1>
        </div>
        <table>
          <tr>
            <th>Imagen</th>
            <th>Nombre del servicio</th>
            <th>Precio</th>
            {<th>{currentUser.isSeller ? "Comprador" : "Vendedor"}</th>}
            <th>Contacto</th>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Impresionante arte conceptual</td>
            <td>59.<sup>99</sup></td>
            <td>Maria Gonzalez</td>
            <td>
              <img className="message" src="/img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Video de perritos</td>
            <td>79.<sup>99</sup></td>
            <td>Silvia Diaz</td>
            <td>
              <img className="message" src="/img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Carácter digital de alta calidad.</td>
            <td>110.<sup>99</sup></td>
            <td>José Lopez</td>
            <td>
              <img className="message" src="/img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Ilustración pintura hiperrealista.</td>
            <td>39.<sup>99</sup></td>
            <td>Valeria Aguirre</td>
            <td>
              <img className="message" src="/img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Diseño de pagina web de cocina</td>
            <td>119.<sup>99</sup></td>
            <td>Alicia Gimenez</td>
            <td>
              <img className="message" src="/img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Guion para una obra teatral</td>
            <td>49.<sup>99</sup></td>
            <td>Roberto Medina</td>
            <td>
              <img className="message" src="/img/message.png" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Orders;