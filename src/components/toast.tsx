import { useState } from "react";

export function Toast({ message, type }: { message: string; type: "info" | "success" }) {
  const [visible, setVisible] = useState(true);

  return visible ? (
    <div className={`fixed top-5 right-5 p-4 text-white ${type === "info" ? "bg-blue-500" : "bg-green-500"}`} onClick={() => setVisible(false)}>
      {message}
    </div>
  ) : null;
}
