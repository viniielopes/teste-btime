import { Board } from "@/components/Board";
import "react-toastify/dist/ReactToastify.min.css";

export default function Home() {
  return (
    <main className="mt-14 flex gap-6 px-14">
      <Board></Board>
      <Board></Board>
      <Board></Board>
    </main>
  );
}
