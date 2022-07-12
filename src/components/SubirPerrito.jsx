import React from 'react'

export const SubirPerrito = () => {
    /* const subirPerrito = async () => {
        const form = $('form')
        const formData = new FormData(form)
      
        const rawData = await fetch(URL_UPLOAD, {
          method: 'post',
          headers: {
            'X-API-KEY': '7207963f-ba39-4fb6-9297-91c30bfa1c42'
          },
          body: formData
        })
        const data = await rawData.json()
      
        rawData.status !== 201
          ? mensajear('Something went wrong uploading the pic bro, sorry bro. ' + rawData.status)
          : mensajear('Foto subida correstamente')
      
        guardarFav(data.id)
      } */
    return (
        <div>
            <h3 >
                Subir un perrito ⏫
            </h3>
            {/* <form >
                <label htmlFor="file">Selecciona una foto, mano🤠</label>
                <input type="file" name="file" id="file" />
                <button type="button" onClick={subirPerrito}>Subir ⏫</button>
            </form> */}

        </div>
    )
}
