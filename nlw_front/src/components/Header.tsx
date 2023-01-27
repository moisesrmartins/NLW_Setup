import {Plus, X} from "phosphor-react"
import * as Dialog from "@radix-ui/react-dialog"
import logo from "../assets/logo.svg"
import { NewHabitForm } from "./NewHabitForm"

export function Header() {
    return (
        <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
            <img src={logo} alt="Habits"/>

            <Dialog.Root>
                <Dialog.Trigger type="button" className=" font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:border-blue-500">
                    <Plus size={20} className="text-blue-300"/>
                    Novo Hábito
                </Dialog.Trigger>

                <Dialog.Portal>
                    <Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0"/>

                    <Dialog.Content className="absolute p10 bg-zinc-900 rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <Dialog.Close className="absolute right-4 top-10 text-zinc-400">
                            <X size={34} aria-label="Fechar"/>
                        </Dialog.Close>
                        <Dialog.Title className="relative top-2 left-0 text-3xl leading-tight font-extrabold text-center">
                            Criar Hábito
                        </Dialog.Title>
                        <NewHabitForm/>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </div>
    )
}