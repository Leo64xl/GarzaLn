import React from 'react'
import '../Diseños_css/TermsAndCond.css'


const TermsAndCond = () => {
  return (
    <div className='termsAndCond'>        
        <div className='termsContent'>
          <h3 className='termsTitle'>
          Términos y condiciones.
          </h3>
          <p className='term term1'>
            Contrato y Registro: Al hacer clic en "registrarse", aceptas los términos y condiciones. Si no estás de acuerdo, no accedas. Los menores de 17 años no pueden usar los servicios. Los Miembros pueden acceder a más funciones que los Visitantes.
          </p>
          <p className='term term2'>
            Obligaciones de los Miembros: Debes tener al menos la "Edad mínima". Se requiere una cuenta a tu nombre real. Eres responsable de mantener la seguridad de tu cuenta y no compartir información de acceso. Los no afiliados a la institución no pueden acceder.
          </p>
          <p className='term term3'>
            Pago y Comunicación: Las transferencias están sujetas a comisiones y riesgos. Aceptas recibir avisos y mensajes a través de los datos de contacto proporcionados.
          </p>
          <p className='term term4'>
            Derechos y Limitaciones: Garazalance puede cambiar, suspender o retirar servicios. Se reservan derechos para limitar el uso o cerrar cuentas en caso de incumplimiento. Los derechos de propiedad intelectual están protegidos.
          </p>
          <p className='term term5'>
          Exención y Responsabilidad: No se garantiza la calidad o seguridad de los servicios. Garazalance no es responsable de pérdidas indirectas o accidentales.
          </p>
          <p className='term term6'>
          Terminación y Normas de Uso: Cualquiera de las partes puede terminar el contrato. Los usuarios deben cumplir con las leyes y no crear identidades falsas ni compartir información no autorizada.
          </p>
          <p className='term term7'>
          Políticas de Privacidad: Los datos proporcionados durante el registro y en el perfil se utilizan para ofrecer, personalizar y desarrollar servicios. La información compartida en perfiles y publicaciones es visible para otros usuarios según la configuración. Se proporciona atención al cliente y opciones de gestión de datos para los usuarios. Se implementan medidas de seguridad, y los usuarios deben utilizar las funcionalidades de seguridad disponibles.
          </p>  
        </div>
    </div>
  );
}

export default TermsAndCond;