import { render,screen } from "@testing-library/react";
import MenuBienvenida from "../components/MenuBienvenida";

test("Esperando nombre de usuario",async()=>{

    render(<MenuBienvenida/>)

    const mensaje =await screen.findByText("Bienvenido: Juan");
    const boton =await screen.findByText("Cerrar sesión")

    expect(mensaje).toBeInTheDocument();
    expect(boton).toBeInTheDocument()

})