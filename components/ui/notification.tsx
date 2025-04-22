import React, { useEffect, useState } from "react";
import clsx from "clsx";

interface NotificationProps {
  message: string;
  type?: "success" | "error" | "info";
  onClose: () => void;
}

export const Notification: React.FC<NotificationProps> = ({ message, type = "info", onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false); // Start fade-out
      setTimeout(onClose, 500); // Wait for fade-out to complete before closing
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={clsx(
        "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-6 py-4 rounded shadow-lg text-white text-center z-50 transition-opacity duration-500",
        {
          "opacity-100": true, // Always fully opaque
          "bg-darkred/80": type === "success",
          "bg-darkred/60": type === "error",
          "bg-darkred/40": type === "info",
        }
      )}
    >
      {message}
    </div>
  );
};