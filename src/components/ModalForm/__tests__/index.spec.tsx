import { ModalForm } from "..";
import { fireEvent, render, screen } from "@/test-utils";

describe("ModalForm", () => {
  it("should show error messages on click save", async () => {
    render(<ModalForm></ModalForm>);
    const buttonSave = screen.getByTestId("btn-save");
    const title = screen.getByTestId("title-field");
    const description = screen.getByTestId("description-field");

    fireEvent.change(title, { target: { value: "" } });
    fireEvent.change(description, { target: { value: "" } });

    fireEvent.click(buttonSave);

    const errorsField = await screen.findAllByTestId("error");

    expect(errorsField.length).toBe(3);
  });
});
