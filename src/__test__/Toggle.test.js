import { render,screen, waitFor } from "@testing-library/react";
import Toggle from "../components/toggle";
import userEvent from "@testing-library/user-event";


test("Esperamos la ejecución del botón",async()=>{
    const falsoOnClick= jest.fn()
    render(<Toggle onBtnClick={falsoOnClick}/>)
    
    userEvent.click(screen.getByText("Click Aquí"))
    await waitFor(()=> expect(falsoOnClick).toHaveBeenCalled())
})
