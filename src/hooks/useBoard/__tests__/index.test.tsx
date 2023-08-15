import { act, renderHook } from "@testing-library/react";
import { useBoard } from "@/hooks/useBoard";
import { ChangeEvent } from "react";

describe("useBoard", () => {
  it("should return full cards mock when filter is empty ", () => {
    const { result } = renderHook(() => useBoard());

    const mockEvent = {
      target: {
        value: "",
      },
    };

    act(() => {
      result.current.filterCards(mockEvent as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cards?.length).toBe(6);
  });

  it("should filter card when passed value to filterCard", () => {
    const { result } = renderHook(() => useBoard());

    const mockEvent = {
      target: {
        value: "todo",
      },
    };

    act(() => {
      result.current.filterCards(mockEvent as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cards?.length).toBe(1);
  });
});
