import {createCotext} from 'react'
import runChat from '../config/gemini';

export const Context = createCotext();

const ContextProvider = () => {

    const onSent = async (prompt) => {
        await runChat(prompt)
    }

    onSent("What is react js")

    const contextValue = {

    }

    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;