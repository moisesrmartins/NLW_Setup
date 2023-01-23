import {Plus} from "phosphor-react"
import logo from "../assets/logo.svg"

export function Header() {
    return (
        <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
            <img src={logo} alt="Habits"/>
            <button type="button"
            className=" font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:border-blue-500">
                <Plus size={20} className="text-blue-300"/>
                Novo Hábito
            </button>
        </div>
    )
}