import { Check } from "phosphor-react";

export function NewHabitForm() {
    return (
        <form className="2-full flex flex-col mt-6">
            <label htmlFor="title" className="relative top-2 left-0 font-semibold leading-tight text-center">
                Qual seu compromentimento?
            </label>

            <input type="text" id="title" placeholder="ex.: Exercícios, dormir bem, etc..." className="p-4 rounded-lg mt-3 bg-zinc-900 text-white placeholder:text-zinc-400 text-center" autoFocus/>

            <label htmlFor="" className="relative top-2 left-0 font-semibold leading-tight text-center">
                Qual a recorrência?
            </label>
            
            <button type="submit" className="mt-6 rounded-lg p-4 flex items-center justify-center left-10 gap-3 font-semibold bg-blue-600">
                <Check size={20} weight="bold"/>
                Confirmar
                <Check size={20} weight="bold"/>
            </button>
        </form>
    )
}