import React, { useEffect, useState } from 'react';
import getState from './flux.js';

// Aqui es donde inicializaremos nujestro contexto, por defectomeste sera nulo.

export const Context = React.createContext(null);

// Esta funcion inyecta el strore global para cualquier view/component donde tu desee usarlo. Nosotros inyectaremos el Contexto en Layout.js

const injectContext = PassedComponent => {
    const StoreWrapper = props => {
        //esto sera pasado como valor del contexto
        const [ state, setState ] = useState(
            getState({
                getStore: () => state.store,
                getActions: () => state.actions,
                setStore: () => updatedStore => setState({
                    store: Object.assign(state.store, updatedStore),
                    actions: { ...state.actions }
                })
            })
        );
        useEffect(()=>{
        //Edita esto ....
        /* Esta función es el equivalente a "window.onLoad", solo se ejecuta una vez durante toda la vida útil de la aplicación
        debe hacer sus solicitudes de ajax o buscar solicitudes de API aquí. No use setState() para guardar datos en el
        STORE, en lugar de usar 'ACTIONS', como esta: 

        state.actions.getMessage();
        
        */
        },[]);
        //El valor inicial del contexto ya no es nulo, sino el estado actual de este componente.
        //El Contexto ahora tendrá disponibles las funciones getStore, getActions y setStore, porque fueron declaradas sobre el estado de este componente.

        return (
            <Context.Provider value={state}>
                <PassedComponent { ...props } />
            </Context.Provider>
        );
    };
    return StoreWrapper;
};

export default injectContext;